const crypto = require('crypto');

function encrypt(text, password){
    let cipher = crypto.createCipher('aes-256-cbc', password);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

let text = 'WEB3 personal medical data on 1 June 2023 ID:9876543';
let password = 'user-defined-password';  // HTMLから設定したパスワード

let encryptedData = encrypt(text, password);
console.log(encryptedData);
