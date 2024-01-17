require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

require("dotenv").config();
const { task } = require("hardhat/config");
const { checkNonce, checkTestnetNonce } = require("./utils/checkNonce");
const {
  API_URL_GOERLI,
  API_URL_MUMBAI,
  API_URL_SEPOLIA,
  API_URL_ETHMAINNET_KEY,
  API_URL_POLYGON_KEY,
  PRIVATE_KEY,
  MAINNET_PRIVATE_KEY,
  ETHERSCAN_API_URL,
  POLYGONSCAN_API_URL,
} = process.env;

task(
  "account",
  "returns nonce and balance for specified address on multiple networks"
)
  .addParam("address")
  .setAction(async (address) => checkNonce(address));

// /** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    hardhat: {},
    ethmainnet: {
      url: API_URL_ETHMAINNET_KEY,
      accounts: [`0x${MAINNET_PRIVATE_KEY}`],
    },
    polygon: {
      url: API_URL_POLYGON_KEY,
      accounts: [`0x${MAINNET_PRIVATE_KEY}`],
    },
    goerli: {
      url: API_URL_GOERLI,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    sepolia: {
      url: API_URL_SEPOLIA,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    mumbai: {
      url: API_URL_MUMBAI,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_API_URL,
      polygon: POLYGONSCAN_API_URL,
      goerli: ETHERSCAN_API_URL,
      sepolia: ETHERSCAN_API_URL,
      mainnet: ETHERSCAN_API_URL,
    },
  },
  sourcify: {
    enabled: true,
  },
};
