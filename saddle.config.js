
module.exports = {
  // solc: "solc",                                          // Solc command to run
  solc_args: [                                              // Extra solc args
    '--allow-paths','contracts,tests/Contracts',
    '--evm-version', 'istanbul'
  ],
  solc_shell_args: {                                        // Args passed to `exec`, see:
    maxBuffer: 1024 * 500000,                               // https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options
    shell: process.env['SADDLE_SHELL'] || '/bin/bash'
  },
  // build_dir: ".build",                                  // Directory to place built contracts
  extra_build_files: [process.env['EXTRA_BUILD_FILES'] || 'remote/*.json', 'tests/LegacyBuilds/*.json'], // Additional build files to deep merge
  // coverage_dir: "coverage",                              // Directory to place coverage files
  // coverage_ignore: [],                                   // List of files to ignore for coverage
  contracts: process.env['SADDLE_CONTRACTS'] || "{contracts,contracts/**,tests/Contracts}/*.sol",
                                                            // Glob to match contract files
  trace: false,                                             // Compile with debug artifacts
  // TODO: Separate contracts for test?
  tests: ['**/tests/{,**/}*Test.js'],                       // Glob to match test files
  networks: {                                               // Define configuration for each network
    development: {
      providers: [
      {env: "PROVIDER"},
        {ganache: {
          gasLimit: 20000000,
          gasPrice: 20000,
          defaultBalanceEther: 1000000000,
          allowUnlimitedContractSize: true,
          hardfork: 'istanbul'
        }}
      ],
      web3: {                                               // Web3 options for immediate confirmation in development mode
        gas: [
          {env: "GAS"},
          {default: "6700000"}
        ],
        gas_price: [
          {env: "GAS_PRICE"},
          {default: "20000"}
        ],
        options: {
          transactionConfirmationBlocks: 1,
          transactionBlockTimeout: 5
        }
      },
      accounts: [                                           // How to load default account for transactions
        {env: "ACCOUNT"},                                   // Load from `ACCOUNT` env variable (e.g. env ACCOUNT=0x...)
        {unlocked: 0}                                       // Else, try to grab first "unlocked" account from provider
      ]
    },
    // test_ganache
    test_ganache: {
      providers: [
        {
          ganache: {
            gasLimit: 200000000,
            gasPrice: 20000,
            defaultBalanceEther: 1000000000,
            allowUnlimitedContractSize: true,
            hardfork: 'istanbul'
          }
        }
      ],
      web3: {
        gas: [
          {env: "GAS"},
          {default: "20000000"}
        ],
        gas_price: [
          {env: "GAS_PRICE"},
          {default: "12000000002"}
        ],
        options: {
          transactionConfirmationBlocks: 1,
          transactionBlockTimeout: 5
        }
      },
      accounts: [
        {env: "ACCOUNT"},
        {unlocked: 0}
      ]
    },
    goerli: {
      providers: [
        {env: "PROVIDER"},
        {file: "~/.ethereum/goerli-url"},                    // Load from given file with contents as the URL (e.g. https://infura.io/api-key)
        {http: "https://goerli-eth.compound.finance"}
      ],
      web3: {
        gas: [
          {env: "GAS"},
          {default: "6700000"}
        ],
        gas_price: [
          {env: "GAS_PRICE"},
          {default: "139159812000"}
        ],
        options: {
          transactionConfirmationBlocks: 1,
          transactionBlockTimeout: 5
        }
      },
      accounts: [
        {env: "ACCOUNT"},
        {file: "~/.ethereum/goerli"},                         // Load from given file with contents as the private key (e.g. 0x...)
        {unlocked: 0}
      ]
    },
    ropsten: {
      providers: [
        {env: "PROVIDER"},
        {file: "~/.ethereum/ropsten-url"},                    // Load from given file with contents as the URL (e.g. https://infura.io/api-key)
        {http: "https://ropsten-eth.compound.finance"}
      ],
      web3: {
        gas: [
          {env: "GAS"},
          {default: "6700000"}
        ],
        gas_price: [
          {env: "GAS_PRICE"},
          {default: "12000000000"}
        ],
        options: {
          transactionConfirmationBlocks: 1,
          transactionBlockTimeout: 5
        }
      },
      accounts: [
        {env: "ACCOUNT"},
        {file: "~/.ethereum/ropsten"}                         // Load from given file with contents as the private key (e.g. 0x...)
      ]
    },
    rinkeby: {
      providers: [
        {env: "PROVIDER"},
        {file: "~/.ethereum/rinkeby-url"},                    // Load from given file with contents as the URL (e.g. https://infura.io/api-key)
        {http: "https://rinkeby-eth.compound.finance"}
      ],
      web3: {
        gas: [
          {env: "GAS"},
          {default: "5600000"}
        ],
        gas_price: [
          {env: "GAS_PRICE"},
          {default: "12000000000"}
        ],
        options: {
          transactionConfirmationBlocks: 1,
          transactionBlockTimeout: 5
        }
      },
      accounts: [
        {env: "ACCOUNT"},
        {file: "~/.ethereum/rinkeby"},                        // Load from given file with contents as the private key (e.g. 0x...)
        {unlocked: 0}
      ]
    },
    kovan: {
      providers: [
        {env: "PROVIDER"},
        {file: "~/.ethereum/kovan-url"},                    // Load from given file with contents as the URL (e.g. https://infura.io/api-key)
        {http: "https://kovan-eth.compound.finance"}
      ],
      web3: {
        gas: [
          {env: "GAS"},
          {default: "6000000"}
        ],
        gas_price: [
          {env: "GAS_PRICE"},
          {default: "12000000000"}
        ],
        options: {
          transactionConfirmationBlocks: 1,
          transactionBlockTimeout: 5
        }
      },
      accounts: [
        {env: "ACCOUNT"},
        {file: "~/.ethereum/kovan"},                        // Load from given file with contents as the private key (e.g. 0x...)
        {unlocked: 0}
      ]
    },
    mainnet: {
      providers: [
        {env: "PROVIDER"},
        {file: "~/.ethereum/mainnet-url"},                    // Load from given file with contents as the URL (e.g. https://infura.io/api-key)
        {http: "https://mainnet-eth.compound.finance"}
      ],
      web3: {
        gas: [
          {env: "GAS"},
          {default: "6000000"}
        ],
        gas_price: [
          {env: "GAS_PRICE"},
          {default: "45000000000"}
        ],
        options: {
          transactionConfirmationBlocks: 1,
          transactionBlockTimeout: 5
        }
      },
      accounts: [
        {env: "ACCOUNT"},
        {file: `~/.ethereum/mainnet-${process.env['KEY']}`},
        {file: "~/.ethereum/mainnet"}                        // Load from given file with contents as the private key (e.g. 0x...)
      ]
    },
    neon: {
      providers: [
        {env: "PROVIDER"},
        {http: "https://proxy.devnet.neonlabs.org/solana"}
      ],
      // 66f4c78fc576855313d105b987f399bb7f1f329aaa73db0b2cd0f41271df95f5
      // from: "0xEc32c2Ca328E6611AF73A316Ee96c309f9A757BF", // Specify public key corresponding to private key defined above
      web3: {
        gas: [
          {env: "GAS"},
          {default: "2000000000"}
        ],
        gas_price: [
          {env: "GAS_PRICE"},
          {default: "150159812000"}
        ],
        options: {
          transactionConfirmationBlocks: 1,
          transactionBlockTimeout: 5
        }
      },
      accounts: [
        {env: "ACCOUNT"},
        {file: "~/.neon/neon"}, // Load from given file with contents as the private key (e.g. 0x...)
        // {default: "66f4c78fc576855313d105b987f399bb7f1f329aaa73db0b2cd0f41271df95f5"},                         // Load from given file with contents as the private key (e.g. 0x...)
        {unlocked: 0}
      ]
    },
    // neon_local
    test: {
      providers: [
        {env: "PROVIDER"},
        {http: "http://localhost:9090/solana"}
      ],
      // 66f4c78fc576855313d105b987f399bb7f1f329aaa73db0b2cd0f41271df95f5
      // from: "0xEc32c2Ca328E6611AF73A316Ee96c309f9A757BF", // Specify public key corresponding to private key defined above
      web3: {
        gas: [
          {env: "GAS"},
          {default: "300904320"}
        ],
        gas_price: [
          {env: "GAS_PRICE"},
          {default: "443065000000"}
        ],
        options: {
          transactionConfirmationBlocks: 1,
          transactionBlockTimeout: 5
        }
      },
      accounts: [
        {env: "ACCOUNT"},
        {file: "neon_test_keys"}, // Load from given file with contents as the private key (e.g. 0x...)
        // {default: "66f4c78fc576855313d105b987f399bb7f1f329aaa73db0b2cd0f41271df95f5"},                         // Load from given file with contents as the private key (e.g. 0x...)
        {unlocked: 0}
      ]
    },
  },
  get_network_file: (network) => {
    return null;
  },
  read_network_file: (network) => {
    const fs = require('fs');
    const path = require('path');
    const util = require('util');

    const networkFile = path.join(process.cwd(), 'networks', `${network}.json`);
    return util.promisify(fs.readFile)(networkFile).then((json) => {
      return JSON.parse(json)['Contracts'] || {};
    });
  },
  write_network_file: (network, value) => {
    const fs = require('fs');
    const path = require('path');
    const util = require('util');

    const networkFile = path.join(process.cwd(), 'networks', `${network}.json`);
    return util.promisify(fs.readFile)(networkFile).then((json) => {
      return util.promisify(fs.writeFile)(networkFile,
      JSON.stringify({
        ...JSON.parse(json),
        'Contracts': value
      }, null, 4));
    });
  },
  scripts: {
    'token:deploy': "script/saddle/deployToken.js",
    'token:verify': "script/saddle/verifyToken.js",
    'token:match': "script/saddle/matchToken.js",
    'flywheel:init': "script/saddle/flywheelInit.js"
  }
}
