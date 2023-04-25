//scripts/deploy_contract.js
const { ethers, upgrades } = require("hardhat");

async function main() {
   const CalculatorV1 = await ethers.getContractFactory("CalculatorV1");
    console.log("Deploying Calculator...");
    const calculator = await upgrades.deployProxy(CalculatorV1, [25], {
        initializer: "initialize",
    });
    await calculator.deployed();
    console.log("Calculator deployed to:", calculator.address);
}

main();