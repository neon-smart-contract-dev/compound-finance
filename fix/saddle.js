"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSaddle = void 0;
const config_1 = require("./config");
const contract_1 = require("./contract");
const utils_1 = require("./utils");
const trace_1 = require("./trace");
const verify_1 = require("./verify");
const match_1 = require("./match");
function allowUndefinedArgs(args, sendOptions) {
    if (!Array.isArray(args)) {
        if (sendOptions !== undefined) {
            throw new Error(`Args expected to be an array, got ${args}`);
        }
        return [[], args];
    }
    else {
        return [args, sendOptions];
    }
}
async function getSaddle(network, trace = false, quiet = false) {
    const saddle_config = await config_1.loadConfig(undefined, trace);
    const network_config = await config_1.instantiateConfig(saddle_config, network);
    if (!quiet) {
        console.log(`Using network ${network} ${utils_1.describeProvider(network_config.web3.currentProvider)}`);
    }
    async function getContractInt(contractName, sendOptions) {
        let options = {
            ...network_config.defaultOptions,
            ...sendOptions
        };
        return await contract_1.getContract(network_config.web3, contractName, network_config, options);
    }
    async function getContractAtInt(contractName, address) {
        return await contract_1.getContractAt(network_config.web3, contractName, network_config, address, network_config.defaultOptions);
    }
    async function listContractsInt(all = false) {
        if (all) {
            return await contract_1.readNetworkFile(network_config);
        }
        else {
            return await contract_1.listContracts(network_config);
        }
    }
    async function deploy(contractName, args = [], sendOptions) {
        [args, sendOptions] = allowUndefinedArgs(args, sendOptions);
        let options = {
            ...network_config.defaultOptions,
            ...sendOptions
        };
        let { contract: contract } = await contract_1.deployContract(network_config.web3, network_config.network, contractName, args, network_config, network_config.defaultOptions, options);
        return contract;
    }
    async function deployFull(contractName, args = [], sendOptions, web3) {
        [args, sendOptions] = allowUndefinedArgs(args, sendOptions);
        let options = {
            ...network_config.defaultOptions,
            ...sendOptions
        };
        return await contract_1.deployContract(web3 || network_config.web3, network_config.network, contractName, args, network_config, network_config.defaultOptions, options);
    }
    async function verify(apiKey, address, contractName, contractArgs, verbose = 0) {
        return await verify_1.etherscanVerify(saddle_config, network, apiKey, address, contractName, contractArgs, verbose);
    }
    async function matchInt(address, contractName, contractArgs, verbose = 0) {
        return await match_1.match(network_config, network_config.default_account, network_config.web3, address, contractName, contractArgs, false, 0);
    }
    async function call(contract, method, args = [], callOptions, blockNumber) {
        [args, callOptions] = allowUndefinedArgs(args, callOptions);
        let options = {
            ...network_config.defaultOptions,
            ...callOptions
        };
        return contract.methods[method](...args).call(options, blockNumber || null);
    }
    async function send(contract, method, args = [], sendOptions) {
        [args, sendOptions] = allowUndefinedArgs(args, sendOptions);
        let options = {
            ...network_config.defaultOptions,
            ...sendOptions
        };
        return contract.methods[method](...args).send(options);
    }
    async function abi(contract) {
        return await contract_1.getContractABI(contract, network_config);
    }
    return {
        account: network_config.default_account,
        accounts: network_config.wallet_accounts,
        wallet_accounts: network_config.wallet_accounts,
        saddle_config: saddle_config,
        network_config: network_config,
        deploy: deploy,
        verify: verify,
        match: matchInt,
        deployFull: deployFull,
        abi: abi,
        web3: network_config.web3,
        send: send,
        call: call,
        getContract: getContractInt,
        getContractAt: getContractAtInt,
        listContracts: listContractsInt,
        trace: await trace_1.buildTracer(network_config)
    };
}
exports.getSaddle = getSaddle;
//# sourceMappingURL=saddle.js.map
