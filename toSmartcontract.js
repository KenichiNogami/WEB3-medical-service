const Web3 = require('web3');
const web3 = new Web3('https://rpc-mainnet.matic.network');  // Polygon MainnetのRPC

// Contract ABI
const contractABI = [ /* Your contract ABI here */ ];

// Contract Address
const contractAddress = '0xYourContractAddress';  // Your contract address

// Create Contract Instance
const medicalDataNFT = new web3.eth.Contract(contractABI, contractAddress);


const account = '0xYourAccount';  // Your account
const privateKey = '0xYourPrivateKey';  // Your private key

const dataURI = 'YourEncryptedData';  // 暗号化されたデータ

const createMedicalDataNFT = async () => {
    const nonce = await web3.eth.getTransactionCount(account);

    const gasPrice = await web3.eth.getGasPrice();
    const gasPriceHex = web3.utils.toHex(gasPrice);
    const gasLimitHex = web3.utils.toHex(3000000);

    const functionData = medicalDataNFT.methods.createMedicalDataNFT(dataURI).encodeABI();

    const transaction = {
        'nonce': nonce,
        'gasPrice': gasPriceHex,
        'gasLimit': gasLimitHex,
        'to': contractAddress,
        'data': functionData,
    };

    const signedTx = await web3.eth.accounts.signTransaction(transaction, privateKey);

    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        .on('receipt', console.log);
}

createMedicalDataNFT();
