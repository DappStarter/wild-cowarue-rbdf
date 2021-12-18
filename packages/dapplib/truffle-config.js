require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil food dad roof magic exchange gown light army gesture'; 
let testAccounts = [
"0xc06db43b24f51a78253bae6a14d325209eaa6c90fefc87b95d55c3e2ed034862",
"0x9052098eea54413da2852609a499aadd24bb3cdf73afbd357be94fadbd8ef4e6",
"0x5b6a8d8559df315205ecea5337e11fb9101a0fbf3982f3a0581bcf8b4c47d026",
"0x3f1c5f8912a05d2a56e312756adba3c9c5960a0d72357bbb32f4b1934b6ff3f2",
"0x0367741be54288b30c602331de57ee25a691fb938265a2f5ca4e132f24122f8c",
"0xba1c5494628652b627c661dd932179973f69abd1aa6bf4e22fa8fdd756f3a0de",
"0x3f16da0c1f599b4d8925dd5186e821dcdc93db7d41a0fa2400093d982b6c91ec",
"0xf71b1b1dc6ebba1a06d7b00db0c46dec9e8fe74da60b601ec574a5ecae5a35fd",
"0x2fcb5265ba9297b9ee66ed0268d6f2f28de0121b44e20e7e3ffdf43740f8d0a5",
"0xb2514f6b61e3ea9a4d4e326e3b8de352388dcf7b0165e611d61acde9e5f12198"
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

