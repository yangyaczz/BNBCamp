const hre = require("hardhat");

async function main() {

    [alice] = await hre.ethers.getSigners()

    const UTV2 = await hre.ethers.getContractFactory('UpgradeTestV2')   //0xf4d57Be705B1843E8D70E4a12b901f4eaEB0c4ee

    const utv2 = await upgrades.upgradeProxy('0xf4d57Be705B1843E8D70E4a12b901f4eaEB0c4ee', UTV2, { constructorArgs: ['6'] })
    await utv2.deployed()
    console.log(utv2.address)

    await utv2.setNum(100)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

