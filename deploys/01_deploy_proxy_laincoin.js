const { upgrades } = require("hardhat");

async function deployProxyContract() {
    const Contract = await ethers.getContractFactory("LainCoin");
    const contract = await upgrades.deployProxy(Contract, {
      initializer: "initialize",
    });
    await contract.deployed();
    console.log("Contract deployed to:", contract.address);
  }

  deployProxyContract()
