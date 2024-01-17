const hre = require("hardhat");
const { bytecode } = require("../artifacts/contracts/Adashe.sol/Adashe.json");
const { encoder, create2Address } = require("../utils/utils.js");
const { ethers } = require("ethers");

async function main() {
  const factoryAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const ownerWallet = "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db";
  const saltHex = ethers.utils.id("ADASHE");

  const initCode = bytecode + encoder(["address"], [ownerWallet]);

  const create2Addr = create2Address(factoryAddr, saltHex, initCode);
  console.log("precomputed address:", create2Addr);

  const Factory = await hre.ethers.getContractFactory("DeployFactory");
  const factory = await Factory.attach(factoryAddr);

  const adasheDeploy = await factory.deploy(initCode, saltHex);
  const txReceipt = await adasheDeploy.wait();
  console.log("Deployed to:", txReceipt.events[0].args[0]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
