require('dotenv').config()

var HDWalletProvider = require('@truffle/hdwallet-provider')
// var HDWalletProvider = require('truffle-hdwallet-provider-privkey')
var PrivateKeyProvider = require("truffle-privatekey-provider");

var KlaytnHDWalletProvider = require('truffle-hdwallet-provider-klaytn')
var Caver = require('caver-js')

var goerliMnemonic = process.env.GOERLI_MNEMONIC || ''
var rinkebyMnemonic = process.env.RINKEBY_MNEMONIC || ''
var mumbaiMnemonic = process.env.MUMBAI_MNEMONIC || ''
var mainnetMnemonic = process.env.MAINNET_MNEMONIC || ''
var mainnetPrivateKey = process.env.MAINNET_PRIVATE_KEY || ''
var klaytnPrivateKey = process.env.KLAYTN_PRIVATE_KEY || ''
var baobabPrivateKey = process.env.BAOBAB_PRIVATE_KEY || ''
var mumbaiPrivateKey = process.env.MUMBAI_PRIVATE_KEY || ''
var polygonPrivateKey = process.env.POLYGON_PRIVATE_KEY || ''
var privkey = process.env.GOERLI_PRIVATE_KEY || ''
var infuraKey = process.env.INFURA_KEY || '';

var kasAccessKeyId = process.env.KAS_ACCESS_KEY_ID || ''
var kasSecretAccessKey = process.env.KAS_SECRET_KEY || ''


module.exports = {
  mocha: {
    enableTimeouts: false
  },
  networks: {
    mumbai: {
      provider: function () {
        return new HDWalletProvider(mumbaiPrivateKey, 'https://polygon-mumbai.g.alchemy.com/v2/2gnt0xb1p-kAqzm2166E-VdqPhN4aNe9')
      },
      from: '0xAC490EAfC01E240B1e5D7736A49975e846599490',
      network_id: 80001,
      timeoutBlocks: 200,
      confirmations: 2
    },
    polygon: {
      provider: function () {
        return new HDWalletProvider(polygonPrivateKey, 'https://polygon-mainnet.g.alchemy.com/v2/zIUO_LNZv7HRM_MUoBL4Hh0hfkjUYxth')
      },
      network_id: 137,
      timeoutBlocks: 200,
      gasPrice: 470000000000,
      confirmations: 2
    },
    mainnet: {
      provider: function () {
        return new HDWalletProvider(mainnetPrivateKey, 'https://eth-mainnet.g.alchemy.com/v2/RdIuXQd2JtwF3cbemAIbjsEVmy3OuTkc')
      },
//      from: '0xAC490EAfC01E240B1e5D7736A49975e846599490',
      port: 8545,
      network_id: '1',
      confirmations: 2
    },
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '5777',
      gas: 6700000
    },
    coverage: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    goerli: {
      provider: function () {
        return new HDWalletProvider(goerliMnemonic, 'https://eth-goerli.g.alchemy.com/v2/'+infuraKey)
      },
      port: 8545,
      network_id: '5',
      networkCheckTimeout: 100000,
      gas: '4465030',
      gasLimit: '7000000',
      gasPrice: 10000000000,
      confirmations: 2
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(rinkebyMnemonic, 'https://rinkeby.infura.io/v3/'+infuraKey)
      },
      from: '',
      port: 8545,
      network_id: '4',
      networkCheckTimeout: 100000,
      gas: '7000000',
      gasLimit: '7000000',
      gasPrice: 4310000000,
      confirmations: 2
    },
    baobab: {
      provider: () => {
        const options = {
          headers: [
            { name: 'Authorization', value: 'Basic ' + Buffer.from(kasAccessKeyId + ':' + kasSecretAccessKey).toString('base64') },
            { name: 'x-chain-id', value: '1001' }
          ],
          keepAlive: false,
        }
//        return new KlaytnHDWalletProvider(baobabPrivateKey, "https://api.baobab.klaytn.net:8651")
        return new KlaytnHDWalletProvider(baobabPrivateKey, new Caver.providers.HttpProvider("https://api.baobab.klaytn.net:8651", options))
      },
      from: '0xF9E4497F40Af11952ea0b7947b9b42a1A9959c30',
      network_id: '1001',
      networkCheckTimeout: 10000,
      gas: '8500000',
      gasPrice:'750000000000'
    },
    klaytn1: {
      provider: () => {
        const options = {
          headers: [
            { name: 'Authorization', value: 'Basic ' + Buffer.from(kasAccessKeyId + ':' + kasSecretAccessKey).toString('base64') },
            { name: 'x-chain-id', value: '8217' }
          ],
          keepAlive: false,
        }
        // return new KlaytnHDWalletProvider(klaytnPrivateKey, new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", options))
        return new KlaytnHDWalletProvider(klaytnPrivateKey, new Caver.providers.HttpProvider("https://public-en-cypress.klaytn.net", options))

      },
      from: '0x88B0b03634BbB91fFc735Cf4D5e866fFa3DF45D6',
      // from: '0x7f776808F6324B3F5146d82558053bEC90B8c159',
      network_id: '8217',
      networkCheckTimeout: 10000,
      gas: '8500000',
      gasPrice:'25000000000'
    },
    klaytn: {
      provider: () => {
        const options = {
          headers: [
            { name: 'Authorization', value: 'Basic ' + Buffer.from(kasAccessKeyId + ':' + kasSecretAccessKey).toString('base64') },
            { name: 'x-chain-id', value: 8217 }
          ],
          keepAlive: false,
        };
        return new KlaytnHDWalletProvider(klaytnPrivateKey, new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", options));
      },
      from: '0x88B0b03634BbB91fFc735Cf4D5e866fFa3DF45D6',
      network_id: '8217',
      //networkCheckTimeout: 10000,
      gas: '8500000',
      // gasPrice:'25000000000'
//      gasPrice:'750000000000'
    },
    morphing: {
      provider: () => {
        const options = {
          headers: [
            { name: 'Authorization', value: 'Basic ' + Buffer.from(kasAccessKeyId + ':' + kasSecretAccessKey).toString('base64') },
            { name: 'x-chain-id', value: 8217 }
          ],
          keepAlive: false,
        };
        //return new KlaytnHDWalletProvider(klaytnPrivateKey, new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", options));
        return new KlaytnHDWalletProvider(klaytnPrivateKey, "https://public-en-cypress.klaytn.net");
      },
      from: '0x88B0b03634BbB91fFc735Cf4D5e866fFa3DF45D6',
      network_id: '8217',
      //networkCheckTimeout: 10000,
      gas: null,
      // gasPrice:'25000000000'
//      gasPrice:'750000000000'
    }
  },
  plugins: [ "truffle-contract-size" ],
  compilers: {
    solc: {
      version: "0.4.23",
      settings: {
        optimizer: {
          enabled: true,
          runs: 750
        }
      }
    }
  }
}
