require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food bleak rescue night evil grunt light army gas'; 
let testAccounts = [
"0x714cc480fd7020bba25b9cb95b9ec1ee00b9c363f5bb375ebd52dc8c8cd3c6fd",
"0xbe702239fde652894bba3008d5b5255f58b1d2efd116f1e3cac74f34bbf3a76d",
"0xb61eb879654dc82b41a6fe5e6034f5267839a51d741424e961957c5e728ca093",
"0x4827baf43266c0ceb09abb58ff1e96ab8b451b7dedef50e059644070757709fa",
"0x112c82bdca3245d708aa8aa6d6906fae36e5fe7361e84f459cdf47356ce6bee0",
"0xe4c06dd5fe8b0c34f68e6c6610586d9d1cc27d73980eaf71aa7fd60ed530f6c4",
"0xc560aa70fc394dfa7d7edd7bb0b3bc31d36fccb11440ef9f4309a1ee5a79f07f",
"0x7133f0c065325948fe6acbeea4dfa8b9af544e4e56414c95f7daf1864909f700",
"0x691435ec78b2d46f91543e98393431fed513ace41b4bdde36348a67d10273688",
"0xaad20616b31c22c628d15f75be9592ab8e3b66290691edc363d332aa43d349db"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

