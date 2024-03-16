

export const encryptData = (data) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + 'api/encrypt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => data.encryptedData)
  .catch(error => {
    console.error('Encryption failed:', error);
    throw error;
  });
};

export const decryptData = (encryptedData) => {
  return fetch('/api/decrypt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ encryptedData })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => data.decryptedData)
  .catch(error => {
    console.error('Decryption failed:', error);
    throw error;
  });
};
