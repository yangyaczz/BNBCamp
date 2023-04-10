require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
const { setGlobalDispatcher, ProxyAgent } = require("undici")
const proxyAgent = new ProxyAgent("http://127.0.0.1:7890")
setGlobalDispatcher(proxyAgent)
require('dotenv').config();

const bsctesturl = process.env.bsctesturl
const apiKey = process.env.bsctestapiley

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    bsctest: {
      url: "https://bsc-testnet.public.blastapi.io",
      accounts: [bsctesturl]
    }
  },
  etherscan: {
    apiKey: apiKey
  }
};
