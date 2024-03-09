'use client'

import { useSession } from 'next-auth/react';
import { rtdb } from '@/app/firebase'
import { get, ref } from 'firebase/database'
import { useState, useEffect } from 'react';

export function useRTDB_Fetch() {

  const session = useSession();
  const userDataPath = session?.data?.user?.refPath;
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const usersRef = ref(rtdb, userDataPath);
    get(usersRef).then((snapshot) => {
      if (snapshot.exists()) {

        const usersArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data,
        }));
        setUsers(usersArray);
      }
      else {
        console.log(' No data Available');
      }
    }).catch((error) => {
      console.error(error);
    });

  }, [userDataPath]);

  return (
   users
  )
}

