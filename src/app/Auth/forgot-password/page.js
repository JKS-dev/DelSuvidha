'use client';
import { useState } from 'react';
import { auth } from '../../firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const router = useRouter();

async function resetEmail(){
    try{
      await sendPasswordResetEmail(auth, email).then(() => {
        toast.success('Email Sent');
        router.push("/Auth/signin")
      })
    }catch(error) {
          const errorCode = error.code;
          const errorMessage = errorCode.split("/")[1];
          console.log(errorMessage);
          toast.error(errorMessage)
    }
  };

  return (
    <main className=' h-screen w-screen flex items-center justify-center bg-orange-400 overflow-y-hidden'>
      <div className="bg-white h-screen bg-opacity-95 flex sm:h-max sm:max-w-lg sm:rounded-xl sm:shadow-2xl shadow-orange-300 flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Forgot Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
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
              <button
                onClick={() => resetEmail()}
                disabled={!email}
                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Send Forgot Password Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
