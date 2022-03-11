/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-contract-sizer");
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("@symblox/hardhat-abi-gen");

require("dotenv").config();

module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    collector: {
      default: 1,
    },
  },
  networks: {
    mainnet: {
      url: process.env.MAINNET_RPC,
      chainId: 1,
      accounts: { mnemonic: process.env.MNEMONIC },
      live: true,
      saveDeployments: true,
      tags: ["production"],
    },
    meta: {
      url: process.env.META_RPC,
      chainId: 17,
      accounts: { mnemonic: process.env.MNEMONIC },
      live: true,
      saveDeployments: true,
      tags: ["production"],
    },
    bsc: {
      url: process.env.BSC_RPC,
      chainId: 56,
      accounts: { mnemonic: process.env.MNEMONIC },
      live: true,
      saveDeployments: true,
      tags: ["production"],
    },
    "bsc-testnet": {
      url: process.env.BSC_TESTNET_RPC,
      chainId: 97,
      accounts: { mnemonic: process.env.MNEMONIC },
      live: true,
      saveDeployments: true,
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  etherscan: {
    apiKey: process.env.ETH_SCAN_API_KEY,
  },
  abiExporter: {
    path: "./abis",
    clear: true,
    flat: true,
    only: [":StakingRewards$"],
    spacing: 2,
    pretty: true,
  },
};
