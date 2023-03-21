const hre = require("hardhat");

async function main() {

    [alice] = await hre.ethers.getSigners()

    const bct = await (await hre.ethers.getContractFactory("BCT")).deploy()
    await bct.deployed()
    console.log("bct address:", bct.address)


    const stakingrewards = await (await hre.ethers.getContractFactory("StakingRewards")).deploy(alice.address, alice.address, bct.address, bct.address)
    await stakingrewards.deployed()
    console.log("sr address:", stakingrewards.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
