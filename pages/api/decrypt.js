// // pages/api/decrypt.js

// import CryptoJS from 'crypto-js';

// export default function handler(req, res) {
//   const { encryptedData } = req.body;
//   const key = process.env.NEXTAUTH_SECRET; // Get your encryption key from environment variables

//   try {
//     const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);
//     res.status(200).json({ decryptedData });
//   } catch (error) {
//     console.error('Decryption failed:', error);
//     res.status(500).json({ error: 'Decryption failed' });
//   }
// }
