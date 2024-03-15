import axios from 'axios';

export const encryptData = (data) => {
  return axios.post('/api/encrypt', { data })
    .then(response => response.data.encryptedData)
    .catch(error => {
      console.error('Encryption failed:', error);
      throw error;
    });
};

export const decryptData = (encryptedData) => {
  return axios.post('/api/decrypt', { encryptedData })
    .then(response => response.data.decryptedData)
    .catch(error => {
      console.error('Decryption failed:', error);
      throw error;
    });
};
