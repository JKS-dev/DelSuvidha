'use client';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { redirect, useRouter } from 'next/navigation';
import  React, { useState } from 'react';
import { auth , rtdb } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { signIn, useSession,signOut} from 'next-auth/react';
import { child, push, ref, set } from 'firebase/database';
import { userInfo } from 'os';



async function addDataToRTDB(name, email){
  
 
}

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const signup = async (e) => {

    const userCreated = await createUserWithEmailAndPassword(auth, email, password).then(function() {
      var userdata = auth.currentUser
      try{
        let refPath = "users/"+userdata.uid;
        const usersRef = ref(rtdb, refPath)
        const newDataRef = child(usersRef, "userDetails");
        set(newDataRef, {
          name: name.toUpperCase(),
          email: email.toUpperCase(),
          password: password,
          last_login: Date.now()
        })
        return true
      } catch (error) {
        console.log("Error adding data to RTDB" , error);
        alert(error);
        return false
      }
    })
    signIn('credentials', {email, password, redirect: false, callbackUrl: '/Auth/signin'})
    if(userCreated === true){
      setName("");
      setEmail("");
      setPassword("");
      setPasswordAgain("");
      alert("user created sucessfully now Login");
      signOut( {redirect:true, callbackUrl:'/Auth/signin'});
      
    }else{
      alert("Technical error Please try again later");
      signOut( {redirect:false, callbackUrl:'/Auth/signin'});
    }

  };
  
  return (
    <main className='h-screen w-screen flex items-center justify-center bg-orange-400'>
      <div className="bg-white bg-opacity-95 flex sm:max-h-max sm:max-w-lg sm:rounded-xl sm:shadow-2xl shadow-orange-300 flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Sign up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
          <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-black">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                 className="block w-full rounded-md border-0  py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                 className="block w-full rounded-md border-0  py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                 className="block w-full rounded-md border-0  py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                  Password Again
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="passwordAgain"
                  name="passwordAgain"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPasswordAgain(e.target.value)}
                  required
                 className="block w-full rounded-md border-0  py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                disabled={(!name || !email || !password || !passwordAgain ) || (password !== passwordAgain)}
                onClick={() => signup()}
                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
