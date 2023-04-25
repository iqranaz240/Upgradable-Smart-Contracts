const { ethers, upgrades } = require("hardhat");
//the address of the deployed proxy
const PROXY = "0x2c8AFC069FdBAfa41cD78b4cF9eC48c6e53C4b5F";

async function main() {
    const CalculatorV2 = await ethers.getContractFactory("CalculatorV2");
    console.log("Upgrading Calculator...");
    await upgrades.upgradeProxy(PROXY, CalculatorV2);
    console.log("Calculator upgraded");
}

main();