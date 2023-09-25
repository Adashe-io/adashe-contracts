const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("Adashe", []);
  console.log("Deploying contract....");
  await contract.waitForDeployment();

  console.log(`Adashe contract deployed to: \nAddress: ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
