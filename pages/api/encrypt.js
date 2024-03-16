// pages/api/encrypt.js

import CryptoJS from 'crypto-js';

export default function handler(req, res) {
  const { data } = req.body;
  const key = process.env.DECRYPTION_KEY; // Get your encryption key from environment variables

  const encryptedData = CryptoJS.AES.encrypt(data, key).toString();

  res.status(200).json({ encryptedData });
}
