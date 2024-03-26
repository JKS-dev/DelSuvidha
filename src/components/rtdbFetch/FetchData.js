import { rtdb } from '@/app/firebase';
import { ref, onValue, child, get } from 'firebase/database';

export function getData(path, sessionData) {
  const dbRef = ref(rtdb, sessionData);

  return new Promise((resolve, reject) => {
    onValue(child(dbRef, path), snapshot => {
      const data = snapshot.val();
      console.log(data);
      resolve(data); // Resolve the promise with the fetched data
    }, errorObject => {
      console.log('The read failed: ' + errorObject.name);
      reject(errorObject); // Reject the promise with the error object
    });
  });
}


export function getUserData(path, sessionData) {
  const dbRef = ref(rtdb, sessionData);

  return new Promise((resolve, reject) => {
    get(child(dbRef, path))
      .then(snapshot => {
        const data = snapshot.val();
        console.log(data);
        resolve(data); // Resolve the promise with the fetched data
      })
      .catch(error => {
        console.log('Error reading data: ', error);
        reject(error); // Reject the promise with the error object
      });
  });
}

