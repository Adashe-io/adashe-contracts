const hre = require("hardhat");
const { LP_TOKEN_ADDRESS } = require("../constants/constants");

async function main() {
  const contract = await hre.ethers.deployContract("LPFarming", [
    LP_TOKEN_ADDRESS,
  ]);
  console.log("Deploying contract....");
  await contract.waitForDeployment();

  console.log(`LPFarming contract deployed to: \nAddress: ${contract.target}`);
}
main();
