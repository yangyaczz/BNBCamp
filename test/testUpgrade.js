const { ethers } = require("hardhat")
const  { expect } = require("chai") 
const {BigNumber} =require("ethers")
describe("testUpgrade", function () {

    let ut;
    let utv2


    it("deploy v1", async function () {

        const UT = await ethers.getContractFactory("UpgradeTest")

        ut = await upgrades.deployProxy(UT, [], { constructorArgs: ['5'] })
        await ut.deployed()

        expect(await ut.num()).to.equal(BigNumber.from('0'))
        expect(await ut.immutableNum()).to.equal(BigNumber.from('5'))
        expect(await ut.constantNum()).to.equal(BigNumber.from('2'))
    })

    it("deploy v2", async function () {

        const UTV2 = await ethers.getContractFactory("UpgradeTestV2")

        utv2 = await upgrades.upgradeProxy(ut.address, UTV2, { constructorArgs: ['6'] })
        await utv2.setNum(100)


        expect(await ut.num()).to.equal(BigNumber.from('100'))
        expect(await ut.immutableNum()).to.equal(BigNumber.from('6'))
        expect(await ut.constantNum()).to.equal(BigNumber.from('3'))
    })
})
