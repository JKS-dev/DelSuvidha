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
import { onAuthStateChanged } from 'firebase/auth';

 

export default function Dashboard() {

  const router = useRouter();
 const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/Auth/signin');
    }
  });

  const [uid, setUid] = useState("");
  const [name , setName] = useState();
  const [role , setRole] = useState();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid)
    }
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const nameData = await getData("userDetails/name", `users/${uid}`);
        const roleData = await getData("userDetails/role", `users/${uid}`);
        setName(nameData);
        setRole(roleData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    if (uid) {
      fetchData();
    }
  }, [uid]);

return(
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <div className="bg-white items-center justify-center flex">
  
  <div className="bg-gradient-to-br from-blue-600 to-purple-500 text-gray-200 h-32 w-full lg:w-3/4 max-w-3xl rounded-lg px-2">
    
    
    
  
      
      <div className="flex flex-row h-full">
        
        <div className="  flex items-center justify-center w-1/4 ">
          <img src="https://picsum.photos/200/200" className="h-20 w-20 rounded-full align-middle" />
        </div>
        
        <div className="font-semibold flex flex-col  justify-center w-1/2 "> 
        <header className="font-bold text-2xl">
      Welcome !!
    </header>
          <div className=""> {name} </div>
          <div className="text-sm text-gray-400 font-light"> {role} </div>
        </div>
        
        <div className=" w-1/4 flex items-center justify-center">
          <button className="bg-gray-200 text-gray-900 font-bold text-md rounded-full py-1 px-4">
            Profile
          </button>
        </div>
        
      </div>
      
      

    
   
      
  </div>
  
</div>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl max-w-96">
  <div class="p-6">
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="black" class="bi bi-patch-question-fill" viewBox="0 0 16 16">
  <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627"/>
</svg>
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Doubt
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Because it's about motivating the doers. Because I'm here to follow my
      dreams and inspire others.
    </p>
  </div>
  <div class="p-6 pt-0">
    <a href="#" class="inline-block">
      <button
        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg>
      </button>
    </a>
  </div>
</div> 
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div class="p-6">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      class="w-12 h-12 mb-4 text-gray-900">
      <path fill-rule="evenodd"
        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clip-rule="evenodd"></path>
      <path
        d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
      </path>
    </svg>
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Because it's about motivating the doers. Because I'm here to follow my
      dreams and inspire others.
    </p>
  </div>
  <div class="p-6 pt-0">
    <a href="#" class="inline-block">
      <button
        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg>
      </button>
    </a>
  </div>
</div> 
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div class="p-6">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      class="w-12 h-12 mb-4 text-gray-900">
      <path fill-rule="evenodd"
        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clip-rule="evenodd"></path>
      <path
        d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
      </path>
    </svg>
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Because it's about motivating the doers. Because I'm here to follow my
      dreams and inspire others.
    </p>
  </div>
  <div class="p-6 pt-0">
    <a href="#" class="inline-block">
      <button
        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg>
      </button>
    </a>
  </div>
</div> 
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div class="p-6">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      class="w-12 h-12 mb-4 text-gray-900">
      <path fill-rule="evenodd"
        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clip-rule="evenodd"></path>
      <path
        d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
      </path>
    </svg>
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Because it's about motivating the doers. Because I'm here to follow my
      dreams and inspire others.
    </p>
  </div>
  <div class="p-6 pt-0">
    <a href="#" class="inline-block">
      <button
        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg>
      </button>
    </a>
  </div>
</div> 
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div class="p-6">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      class="w-12 h-12 mb-4 text-gray-900">
      <path fill-rule="evenodd"
        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clip-rule="evenodd"></path>
      <path
        d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
      </path>
    </svg>
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Because it's about motivating the doers. Because I'm here to follow my
      dreams and inspire others.
    </p>
  </div>
  <div class="p-6 pt-0">
    <a href="#" class="inline-block">
      <button
        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg>
      </button>
    </a>
  </div>
</div> 
      </div>
      
      
     
    </div>
  </div>
</section>
)
 
 
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