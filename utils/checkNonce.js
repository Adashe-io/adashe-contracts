const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const {
  API_URL_GOERLI,
  API_URL_MUMBAI,
  API_URL_SEPOLIA,
  API_URL_ETHMAINNET_KEY,
  API_URL_POLYGON_KEY,
  PRIVATE_KEY,
} = process.env;

async function checkNonce(address) {
  // const web3Goerli = createAlchemyWeb3(API_URL_GOERLI);
  // const web3Mumbai = createAlchemyWeb3(API_URL_MUMBAI);
  // const web3Sepolia = createAlchemyWeb3(API_URL_SEPOLIA);
  // const networkIDArr = [
  //   "Ethereum Mainnet:",
  //   "Polygon Mumbai:",
  //   "Ethereum Sepolia:",
  // ];
  // const providerArr = [web3Goerli, web3Mumbai, web3Sepolia];

  const web3MAINNET = createAlchemyWeb3(API_URL_ETHMAINNET_KEY);
  const web3Polygon = createAlchemyWeb3(API_URL_POLYGON_KEY);

  const networkIDArr = ["Ethereum Mainnet:", "Polygon Mainnet:"];
  const providerArr = [web3MAINNET, web3Polygon];
  const resultArr = [];

  for (let i = 0; i < providerArr.length; i++) {
    const nonce = await providerArr[i].eth.getTransactionCount(
      address.address,
      "latest"
    );
    const balance = await providerArr[i].eth.getBalance(address.address);
    resultArr.push([
      networkIDArr[i],
      nonce,
      parseFloat(providerArr[i].utils.fromWei(balance, "ether")).toFixed(2) +
        "ETH",
    ]);
  }
  resultArr.unshift(["  |NETWORK|   |NONCE|   |BALANCE|  "]);
  console.log(resultArr);
}

async function checkTestnetNonce(address) {
  const web3Goerli = createAlchemyWeb3(API_URL_GOERLI);
  const web3Mumbai = createAlchemyWeb3(API_URL_MUMBAI);
  const web3Sepolia = createAlchemyWeb3(API_URL_SEPOLIA);
  const networkIDArr = [
    "Ethereum Mainnet:",
    "Polygon Mumbai:",
    "Ethereum Sepolia:",
  ];
  const providerArr = [web3Goerli, web3Mumbai, web3Sepolia];

  // const web3MAINNET = createAlchemyWeb3(API_URL_ETHMAINNET_KEY);
  // const web3Polygon = createAlchemyWeb3(API_URL_POLYGON_KEY);

  // const networkIDArr = ["Ethereum Mainnet:", "Polygon Mainnet:"];
  // const providerArr = [web3MAINNET, web3Polygon];
  const resultArr = [];

  for (let i = 0; i < providerArr.length; i++) {
    const nonce = await providerArr[i].eth.getTransactionCount(
      address.address,
      "latest"
    );
    const balance = await providerArr[i].eth.getBalance(address.address);
    resultArr.push([
      networkIDArr[i],
      nonce,
      parseFloat(providerArr[i].utils.fromWei(balance, "ether")).toFixed(2) +
        "ETH",
    ]);
  }
  resultArr.unshift(["  |NETWORK|   |NONCE|   |BALANCE|  "]);
  console.log(resultArr);
}

module.exports = { checkNonce, checkTestnetNonce };
