const hre = require("hardhat");

async function main() {
  const owner = "0xf81f51A89C9d2a8a25D184dB2046b680eDF0286f";
  const contract = await hre.ethers.deployContract("Adashe", [owner]);
  console.log("Deploying contract....");
  await contract.waitForDeployment();

  console.log(`Adashe contract deployed to: \nAddress: ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
