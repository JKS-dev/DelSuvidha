// 'use client';

// import { useState } from 'react';
// import './login.css';
// import { toast } from 'react-toastify';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '@/app/lib/firebase';
// import { doc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
// import upload from '@/app/lib/upload';
// import { useRouter } from 'next/navigation';
// import useUserStore from '@/app/lib/userStore';
// import Notification from '@/components/Notification';

// export default function Login() {
//   const router = useRouter();

//   const [avatar, setAvatar] = useState({
//     file: null,
//     url: '',
//   });

//   const [loading, setLoading] = useState(false);

//   const handleAvatar = (e) => {
//     if (e.target.files[0]) {
//       setAvatar({
//         file: e.target.files[0],
//         url: URL.createObjectURL(e.target.files[0]),
//       });
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const formData = new FormData(e.target);

//     const { username, email, password } = Object.fromEntries(formData);

//     // VALIDATE INPUTS
//     if (!username || !email || !password)
//       return toast.warn('Please enter inputs!');
//     if (!avatar.file) return toast.warn('Please upload an avatar!');

//     // VALIDATE UNIQUE USERNAME
//     const usersRef = collection(db, 'users');
//     const q = query(usersRef, where('username', '==', username));
//     const querySnapshot = await getDocs(q);
//     if (!querySnapshot.empty) {
//       return toast.warn('Select another username');
//     }

//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);

//       const imgUrl = await upload(avatar.file);

//       await setDoc(doc(db, 'users', res.user.uid), {
//         username,
//         email,
//         avatar: imgUrl,
//         id: res.user.uid,
//         blocked: [],
//         windowId: null,
//       });

//       await setDoc(doc(db, 'userchats', res.user.uid), {
//         chats: [],
//       });

//       toast.success('Account created! You can login now!');
//     } catch (err) {
//       console.error('Error:', JSON.stringify(err));

//       // Extract and customize the error message
//       let error = err.code;
//       let customError = error.replace('auth/', '').replaceAll('-', ' ');

//       // Capitalize the first letter of each word 
//       customError = customError.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

//       toast.error(customError);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);
//     const { email, password } = Object.fromEntries(formData);

//     try {
//       await signInWithEmailAndPassword(auth, email, password).then(() => {
//         router.push('/dashboard');
//       });
//     } catch (err) {
//       console.error('Error:', JSON.stringify(err));

//       // Extract and customize the error message
//       let error = err.code;
//       let customError = error.replace('auth/', '').replaceAll('-', ' ');

//       // Capitalize the first letter of each word 
//       customError = customError.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

//       toast.error(customError);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <>
//       <div className="w-screen max-w-64">
//       <form onSubmit={handleLogin} className='flex flex-col gap-1 w-full'>
//         <h1 className='welcomeH1 p-1 font-extrabold text-3xl'>Welcome</h1>
//         <input type="text" placeholder="Email" name="email" className='bg-white p-2 rounded-t-lg text-black w-full'/>
//         <input type="password" placeholder="Password" name="password"className='bg-white p-2 rounded-b-lg text-black w-full' />
//         <button className='w-full bg-accent p-2 rounded-lg mt-1' disabled={loading}>{loading ? 'Authenticating' : 'Login'}</button>
//       </form>
//       </div>
//       <Notification />
//     </>
//   )
// };

'use client';

import { useState } from 'react';
import './login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/lib/firebase';
import { useRouter } from 'next/navigation';
import Notification from '@/components/Notification';
import { toast } from 'react-toastify';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formError, setFormError] = useState('');
  const [attemptedSubmit, setAttemptedSubmit] = useState(false); // New state

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Only validate if the user has attempted to submit before
    if (attemptedSubmit && value && !validateEmail(value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError('');
    setAttemptedSubmit(true); // Mark that a submission attempt was made

    if (!email || !password) {
      setFormError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      setLoading(false);
      return;
    }


    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        router.push('/dashboard');
      });
    } catch (err) {
      console.error('Error:', JSON.stringify(err));

      let error = err.code;
      let customError = error.replace('auth/', '').replaceAll('-', ' ');
      customError = customError.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

      toast.error(customError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-screen max-w-64">
        <form onSubmit={handleLogin} className='flex flex-col gap-1 w-full'>
          <h1 className='welcomeH1 p-1 font-extrabold text-3xl'>Welcome</h1>
          <div className='bg-white p-1 rounded-t-lg text-black w-full flex flex-col relative min-h-12 justify-center'>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className='bg-white text-black p-1 w-full h-full outline-none'
            />
            {emailError && <p className="text-red-500 p-1 text-xs h-1/4">{emailError}</p>}
          </div>
          <div className='bg-white p-1 rounded-b-lg text-black w-full flex flex-col relative min-h-12 justify-center'>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-white text-black p-1 w-full h-full outline-none'
            />
            {formError && <p className="text-red-500 p-1 text-xs h-1/4">{formError}</p>}
          </div>



          <button
            className='w-full bg-accent p-2 rounded-lg mt-1 disabled:opacity-80'
            disabled={loading}
          >
            {loading ? 'Authenticating' : 'Login'}
          </button>
        </form>
      </div>
      <Notification />
    </>
  );
}
