const dataURI = 'YourIPFSCID';  // 上記で得られたIPFS CID

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

