FROM node:16.17.0

RUN apt-get update
RUN wget https://github.com/ethereum/solidity/releases/download/v0.8.10/solc-static-linux -O /bin/solc && chmod +x /bin/solc
RUN apt-get install nano

RUN mkdir -p /compound-protocol
WORKDIR /compound-protocol

# First add deps
ADD ./package.json /compound-protocol
ADD ./yarn.lock /compound-protocol

RUN yarn install --lock-file

# Then rest of code and build
ADD . /compound-protocol

RUN cd node_modules/solidity-parser-antlr && npm i && npm run build:node && npm run build:browser && npm run copy-files && cd /compound-protocol
RUN cd scenario && npm i && cd node_modules/solidity-parser-antlr && npm i && npm run build:node && npm run copy-files && cd /compound-protocol

# Rough fix for missing support for eth_accounts requests in Neon
RUN cp fix/xml-http-request.js node_modules/xhr2-cookies/dist/xml-http-request.js && cp fix/xml-http-request.js scenario/node_modules/xhr2-cookies/dist/xml-http-request.js
RUN cp fix/saddle.js node_modules/eth-saddle/dist/saddle.js

ENV SADDLE_SHELL=/bin/sh
ENV SADDLE_CONTRACTS="contracts/*.sol contracts/**/*.sol tests/Contracts/*.sol"
RUN npx saddle compile

# RUN apt-get del build-dependencies
RUN yarn cache clean

CMD ["/bin/bash", "./start.sh"]
