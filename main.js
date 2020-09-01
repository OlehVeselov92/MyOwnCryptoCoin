const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('58d5f498b157afc8ae49a1d5f6fba7abe799d70964dd1e234e60da63b2af03cf');

const myWalletAddress = myKey.getPublic('hex');

let savjeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 30);

tx1.signTransaction(myKey);
savjeCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
savjeCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of xavier is', savjeCoin.getBalanceOfAddress(myWalletAddress));
console.log('Is chain valid?', savjeCoin.isChainValid());






























