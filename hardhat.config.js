require('hardhat-deploy');
require('@nomiclabs/hardhat-ethers')
require("@openzeppelin/hardhat-upgrades");
require("@openzeppelin/hardhat-defender");
const { hardhatConfig } = require('arb-shared-dependencies')
require('dotenv').config()

module.exports = {
  paths: {
    artifacts: './artifacts',
  },
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:8545",
      chainId: 5777,
      accounts: {
        mnemonic: "myth like bonus scare over problem client lizard pioneer submit female collect",
      },
    },
  },

  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },


  
  },

  
  
};
