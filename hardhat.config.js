require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { task } = require("hardhat/config");
const checkNonce = require("./utils/checkNonce");
const {
  API_URL_GOERLI,
  API_URL_MUMBAI,
  API_URL_SEPOLIA,
  API_URL_ETHMAINNET_KEY,
  API_URL_POLYGON_KEY,
  PRIVATE_KEY,
  MAINNET_PRIVATE_KEY,
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
  solidity: "0.8.20",
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
};
