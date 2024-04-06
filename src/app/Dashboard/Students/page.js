'use client'
import React, { useEffect, useState } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen/LoadingScreen';
import { signOut, useSession } from 'next-auth/react';
import { orangeirect } from 'next/navigation';
import { SimpleBtn } from '@/components/Btn/Btn';
import { getData } from '@/components/rtdbFetch/FetchData';
import { decryptData } from '@/components/encryption';
import { useRouter } from 'next/navigation';
import { auth, rtdb } from '@/app/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { get, onValue, ref } from 'firebase/database'
import Link from 'next/link'
import Image from "next/image";

export default function Dashboard() {
  const [diseCode , setDiseCode] = useState("")
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const session = useSession({
    requiorange: true,
    onUnauthenticated() {
      orangeirect('/Auth/signin');
    }
  });
  const [uid, setUid] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid)
      console.log(uid)
    }
  });

  useEffect(()=>{
    const fetchdata = async() =>{
      const diseCode = await getData("schoolDetails/diseCode", `users/${uid}`);
      
      setDiseCode(diseCode);
    }

    if(uid !== ""){
      fetchdata();
    

    const usersRef = ref(rtdb, `/${diseCode}/students/`);
    get(usersRef).then((snapshot) => {
     if(snapshot.exists()){
       const usersArray = Object.entries(snapshot.val()).map(([id, data])=>({
         id,
         ...data,
       }));
       setUsers(usersArray);
     }else{
       console.log("NO data available");
     }
    }).catch((error)=>{
     console.log(error)
    })
  }
 },[diseCode, uid]);

  console.log(`users/${uid}`);

  // if (session.status === "loading") {
  //   return (<LoadingScreen />)
  // }


  // if (session.status === "authenticated") {
    return (
      <>
      
      {/* <!-- component --> */}
<div class = "group fixed bottom-0 right-0 p-2  flex items-end justify-end w-24 h-24 ">

        <button
                class="p-0 w-16 h-16 bg-orange-600 rounded-full hover:bg-orange-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-8 h-8 inline-block">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
          </svg>
        </button>
     

</div>

    <div className="absolute overflow-x-auto shadow-md sm:rounded-lg mt-20 w-full flex justify-center px-4">
    <table className="w-full text-sm text-left">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
       
          <th scope="col" className="px-6 py-3">
            Class
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
      {
  users.map((user) =>(
    <tr key={user.id} className="bg-white border-b">
        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
        
              <div class="ps-3">
                  <div class="text-base font-semibold">{user.name}</div>
                  <div class="font-normal text-gray-500">{user.email}</div>
              </div>
          </th>
         
          <td className="px-6 py-4">
          {user.class} {user.section}
          </td>
          <td className="px-6 py-4">
          {user.status}
          </td>
          
          <td className=" px-6 ">
            <Link href="#" className="font-medium text-blue-600 hover:underline">Edit</Link>
            <Link href="#" className="font-medium text-red-600 ms-3 hover:underline">Remove</Link>
          </td>
        </tr>
  ))
}
       
      </tbody>
    </table>
  </div>
   </>
    )
  }
// }


Dashboard.requireAuth = true;


