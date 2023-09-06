/* global artifacts: false */

const MerkleProof = artifacts.require('./MerkleProof.sol')
const WyvernToken = artifacts.require('./WyvernToken.sol')
const WyvernDAO = artifacts.require('./WyvernDAO.sol')

const { setConfig } = require('./config.js')
// const { utxoMerkleRoot, utxoAmount } = require('../test/aux.js')

module.exports = (deployer, network) => {
console.log(network);
  if (network === 'main' || network === 'rinkeby' || network === 'goerli-fork' || network === 'goerli' ) return
}
