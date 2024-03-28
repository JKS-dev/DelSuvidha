'use client';
import { signIn, useSession } from 'next-auth/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { LoadingScreen } from '@/components/LoadingScreen/LoadingScreen';
import { useSearchParams } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '@/app/firebase';


export default function Signin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { data: session, status, update } = useSession()

  useEffect(() => {
    const error = searchParams.get("error");
    error !== null && toast.error(error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (status === "authenticated") {
    redirect('/Dashboard');
  }
  if (status === "loading") {
    return (
      <LoadingScreen />
    )
  } if (status === "unauthenticated") {
    return (
      <div className="flex flex-col gap-2 items-center justify-center h-screen w-screen" >
        <h1 className='text-center text-black font-extrabold text-3xl mb-3' >Sign In</h1>

        <div className="relative w-full  px-2 md:w-1/2 sm:w-3/4 max-w-lg md:max-w-lg">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" "
          />
          <label
            for="email"
            className="absolute text-sm  text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
            Email
          </label>
        </div>
        <div className="relative w-full  px-2 md:w-1/2 sm:w-3/4 max-w-lg md:max-w-lg">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" "
          />

          <label
            for="password"
            className="absolute text-sm  text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/3 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
            Password
          </label>
          <div className="text-sm text-right ">
            <div onClick={() => router.push('/Auth/forgot-password')} className="cursor-pointer font-semibold text-orange-500 hover:text-orange-400">
              Forgot password?
            </div>
          </div>
        </div>

        <div className="relative w-full  px-2 md:w-1/2 sm:w-3/4 max-w-lg md:max-w-lg">

          <button

            onClick={() => signIn('credentials', { email, password, redirect: true, callbackUrl: '/Dashboard' }).then(() => {
              signInWithEmailAndPassword(auth, email, password)})}
            //   .then(() => {

            //     signInWithEmailAndPassword(auth, email, password).then(() => {
            //       const refpath = auth.currentUser.uid;
            //       console.log(refpath);
            //       router.push({
            //         pathname: '/search',
            //         query: { keyword: 'this way' },
            //       })

            //     })
            //   })
            // }}


            disabled={!email || !password}
            className="disabled:cursor-not-allowed disabled:opacity-40  flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Sign in
          </button>


          <p className="mt-4 text-center text-sm text-gray-400">
            Not a member?{' '}
            <button onClick={() => router.push('/Auth/signup')} className="font-semibold leading-6 text-orange-500 hover:text-orange-400">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    )
  }



}

//  <main className='h-screen w-screen flex items-center justify-center bg-orange-400'>
//       <div className="bg-white h-screen bg-opacity-95 flex sm:h-max sm:max-w-lg sm:rounded-xl sm:shadow-2xl shadow-orange-300 flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
//       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           {/* <img
//             className="mx-auto h-10 w-auto"
//             src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=500"
//             alt="Your Company"
//           /> */}
//           <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-black">
//             Sign In
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <div className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-black" >
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   placeholder='UserName@example.com'
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className=" px-2 block w-full rounded-md border-0  py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <div onClick={() => router.push('/Auth/forgot-password')} className="cursor-pointer font-semibold text-orange-500 hover:text-orange-400">
//                     Forgot password?
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   placeholder='password'
//                   autoComplete="current-password"
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className=" px-2 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 onClick={() => signIn('credentials', {email, password, redirect: true, callbackUrl: '/Dashboard'})}
//                 disabled={!email || !password}
//                 className="disabled:cursor-not-allowed disabled:opacity-40  flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
//               >
//                 Sign in
//               </button>
//             </div>
//           </div>

//           <p className="mt-4 text-center text-sm text-gray-400">
//             Not a member?{' '}
//             <button onClick={() => router.push('/Auth/signup')} className="font-semibold leading-6 text-orange-500 hover:text-orange-400">
//               Sign Up
//             </button>
//           </p>
//         </div>
//       </div>
//       </main>