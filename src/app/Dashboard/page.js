'use client'
import { useEffect, useState } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen/LoadingScreen';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { SimpleBtn } from '@/components/Btn/Btn';
import { getData } from '@/components/rtdbFetch/FetchData';

export default function Dashboard() {

 const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/Auth/signin');
    }
  });

  useEffect(() => {
    if (session.status === "authenticated") {
     console.log(getData("userDetails/name" , session.data));
    }
    
  },[session, session.status])

  if (session.status === "loading") {
    return <LoadingScreen />;
  }

  if (session.status === "authenticated") {
    return (
      <div className="pt-20 px-4">
        <SimpleBtn text="Logout" onClick={() => signOut()} />
      </div>
    );
  }

 
}

Dashboard.requireAuth = true;

  
  // const session = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect('/Auth/signin');
  //   }
  // });
//  const [userName , setUserName] = useState();
//   useEffect(() => {
//     if (session.status === "authenticated") {
//       // Call getData only when session is authenticated
//       setUserName(getData("userDetails/name", handleData));
      
//     }
//   }, [session.status]);
//   // Define a callback function to handle the fetched data
//   function handleData(data) {
//     if (data) {
//       console.log("Fetched data:", data);
//       return(data);
//       // Use the fetched data here
//     } else {
//       console.error("Failed to fetch data");
//       // Handle failure to fetch data
//     }
//   }

//   if (session.status === "loading") {
//     return <LoadingScreen />;
//   }

//   if (session.status === "authenticated") {
//     return (
//       <div className="pt-20 px-4">
//         {userName}
//         <SimpleBtn text="Logout" onClick={() => signOut()} />
//       </div>
//     );
//   }

//   return null; // Return null if session status is not authenticated