const hre = require("hardhat");

async function main() {

    [alice] = await hre.ethers.getSigners()

    const UT = await hre.ethers.getContractFactory('UpgradeTest')
    const ut = await upgrades.deployProxy(UT, [], { constructorArgs: ['5'] })
    await ut.deployed()
    console.log(ut.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


