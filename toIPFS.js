//当面IPFS不使用のため使用せず
/*const IPFS = require('ipfs-core');
const fs = require('fs');

async function uploadToIPFS(data) {
    const ipfs = await IPFS.create();
    const file = await ipfs.add({ path: 'data.txt', content: Buffer.from(data) });
    console.log(file.cid.toString());  // IPFSのCID（Content Identifier）
}

let encryptedData = encrypt(text, password);  // 前述のencrypt関数を使用
uploadToIPFS(encryptedData);
*/

