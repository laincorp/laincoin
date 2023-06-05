const { ethers, upgrades } = require("hardhat");

async function upgradeContract() {
  // Get the address of the deployed proxy contract
  const proxyAddress = "0x94966d80B9749544174A44BDbb17d439c79b43d2";

  // Get the contract factory of the upgraded contract
  const LainCoin = await ethers.getContractFactory("LainCoinV2");

  console.log("Upgrading LainCoin contract...");
  const upgradedContract = await upgrades.upgradeProxy(proxyAddress, LainCoin);
  console.log("LainCoin contract upgraded at:", upgradedContract.address);
}

upgradeContract();
