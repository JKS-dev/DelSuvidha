'use client';

import { useState } from 'react';
import './login.css';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/app/lib/firebase';
import { doc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import upload from '@/app/lib/upload';
import { useRouter } from 'next/navigation';
import useUserStore from '@/app/lib/userStore';
import Notification from '@/components/Notification';

export default function Login() {
  const router = useRouter();

  const [avatar, setAvatar] = useState({
    file: null,
    url: '',
  });

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    // VALIDATE INPUTS
    if (!username || !email || !password)
      return toast.warn('Please enter inputs!');
    if (!avatar.file) return toast.warn('Please upload an avatar!');

    // VALIDATE UNIQUE USERNAME
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return toast.warn('Select another username');
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, 'users', res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
        windowId: null,
      });

      await setDoc(doc(db, 'userchats', res.user.uid), {
        chats: [],
      });

      toast.success('Account created! You can login now!');
    } catch (err) {
      console.error('Error:', JSON.stringify(err));

      // Extract and customize the error message
      let error = err.code;
      let customError = error.replace('auth/', '').replaceAll('-', ' ');

      // Capitalize the first letter of each word 
      customError = customError.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

      toast.error(customError);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        router.push('/dashboard');
      });
    } catch (err) {
      console.error('Error:', JSON.stringify(err));

      // Extract and customize the error message
      let error = err.code;
      let customError = error.replace('auth/', '').replaceAll('-', ' ');

      // Capitalize the first letter of each word 
      customError = customError.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

      toast.error(customError);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-screen max-w-64">
      <form onSubmit={handleLogin} className='flex flex-col gap-1  w-full'>
        <h1 className='p-1 font-medium text-2xl'>Welcome</h1>
        <input type="text" placeholder="Email" name="email" className='bg-white p-2 rounded-t-lg text-black w-full'/>
        <input type="password" placeholder="Password" name="password"className='bg-white p-2 rounded-b-lg text-black w-full' />
        <button className='w-full bg-accent p-2 rounded-lg mt-1' disabled={loading}>{loading ? 'Authenticating' : 'Login'}</button>
      </form>
      </div>
      <Notification />
    </>
  )
};

// return (
//   <>
//     <div className="h-full w-full ">
//       <div className="item flex flex-col gap-[2px] p-2 bg-primary rounded-xl">
//         <h2 className='font-medium text-lg bg-primary w-full text-center py-4 rounded-t-xl rounded-b-rounded-sm'>Welcome back,</h2>
//         <form onSubmit={handleLogin} className='flex flex-col gap-[2px]'>
//           <input type="text" placeholder="Email" name="email" className='bg-white text-black py-2 rounded-sm' />
//           <input type="password" placeholder="Password" name="password" className='bg-white text-black py-2 rounded-sm'/>
//           <button className='bg-accent text-white py-2 rounded-b-xl rounded-t-sm' disabled={loading}>{loading ? 'Loading' : 'Sign In'}</button>
//         </form>
//       </div>
//       <div className="separator"></div>
//       {/* <div className="item">
//         <h2>Create an Account</h2>
//         <form onSubmit={handleRegister}>
//           <label htmlFor="file">
//             <img src={avatar.url || './avatar.png'} alt="" />
//             Upload an image
//           </label>
//           <input
//             type="file"
//             id="file"
//             style={{ display: 'none' }}
//             onChange={handleAvatar}
//           />
//           <input type="text" placeholder="Username" name="username" />
//           <input type="text" placeholder="Email" name="email" />
//           <input type="password" placeholder="Password" name="password" />
//           <button disabled={loading}>{loading ? 'Loading' : 'Sign Up'}</button>
//         </form>
//       </div> */}
//     </div>
//     <Notification />
//   </>
// );