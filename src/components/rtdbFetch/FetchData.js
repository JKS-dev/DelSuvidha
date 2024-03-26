import { rtdb } from '@/app/firebase'; // Assuming rtdb is the Realtime Database instance
import { ref, onValue, child } from 'firebase/database'; // Import specific functions from firebase/database
import { decryptData } from '@/components/encryption';

export function getData(path, sessionData) {

    const dbRef = ref(rtdb, sessionData);

    return new Promise((resolve, reject) => {
      onValue(child(dbRef, path), snapshot => {
        const data = snapshot.val();
        console.log(data);
        resolve(data);
      }, errorObject => {
        console.log('The read failed: ' + errorObject.name);
        reject(errorObject); // Reject with error object
      });
    });
  }


//  console.log(sessionData?.user?.refPath )
//     const decryptedPath = await decryptData(sessionData?.user?.refPath);
//     console.log(decryptedPath)
//     const dbRef = ref(rtdb, decryptedPath);

//     let data;
//     onValue(child(dbRef, path), snapshot => {
//       data = snapshot.val();
//       console.log(data)
//     }, errorObject => {
//       console.log('The read failed: ' + errorObject.name);
//       throw errorObject; // Throw error object
//     });

//     return data;