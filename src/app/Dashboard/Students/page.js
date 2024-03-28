'use client'
import { useEffect, useState } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen/LoadingScreen';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { SimpleBtn } from '@/components/Btn/Btn';
import { getData } from '@/components/rtdbFetch/FetchData';
import { decryptData } from '@/components/encryption';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import CreateSchool from '../../components/CreateSchool';
import Console from '../../components/Console';

 

export default function Dashboard() {

  const router = useRouter();
 const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/Auth/signin');
    }
  });
  const [uid , setUid] =  useState("");
  const [diseCode , setDiseCode] = useState();


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
    }
    
  })
    

  

console.log(`users/${uid}`);

if(session.status === "loading"){
  return(<LoadingScreen />)
}


if(session.status === "authenticated"){
  return(
    <>
        {!diseCode ? <CreateSchool uid = {uid}/>:<Console />}
    </>
  )
}
 
 
}

Dashboard.requireAuth = true;

