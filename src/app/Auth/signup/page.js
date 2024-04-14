"use client";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { auth, rtdb } from "@/app/firebase";
import { collection, addDoc } from "firebase/firestore";
import { signIn, useSession, signOut } from "next-auth/react";
import { child, push, ref, set } from "firebase/database";
import { userInfo } from "os";
import { signOut as firebaseSignOut } from "firebase/auth";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  async function signup() {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(() => {
        try {
          signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/Auth/signin",
          });
          let refPath = "users/" + auth.currentUser.uid;
          const usersRef = ref(rtdb, refPath);
          const newDataRef = child(usersRef, "userDetails");
          set(newDataRef, {
            name: name.toUpperCase(),
            email: email.toUpperCase(),
            last_login: Date.now(),
          });
          setName("");
          setEmail("");
          setPassword("");
          setPasswordAgain("");
          firebaseSignOut(auth).then(() =>
            signOut({ redirect: true, callbackUrl: "/Auth/signin" })
          );
          toast.success("User Created Successfully. Please Sign In");
          return true;
        } catch (error) {
          console.log("Error adding data to RTDB", error);
          alert(error);
          return false;
        }
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = errorCode.split("/")[1];
      console.log(errorMessage);
      toast.error(errorMessage);
    }
  }

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen w-screen">
      <h1 className="text-center text-black font-extrabold text-3xl mb-3">
        Sign Up
      </h1>
      <div className="relative w-full  px-2 md:w-1/2 sm:w-3/4 max-w-lg md:max-w-lg ">
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          onChange={(e) => setName(e.target.value)}
          required
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
          placeholder=" "
        />
        <label
          for="name"
          className="absolute text-sm mr-2 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Name
        </label>
      </div>
      <div className="relative w-full  px-2 md:w-1/2 sm:w-3/4 max-w-lg md:max-w-lg">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-orange-600 peer"
          placeholder=" "
        />
        <label
          for="email"
          className="absolute text-sm mr-2 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
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
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-orange-600 peer"
          placeholder=" "
        />
        <label
          for="password"
          className="absolute text-sm mr-2 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Password
        </label>
      </div>
      <div className="relative w-full  px-2 md:w-1/2 sm:w-3/4 max-w-lg md:max-w-lg">
        <input
          id="passwordAgain"
          name="passwordAgain"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPasswordAgain(e.target.value)}
          required
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-orange-600 peer"
          placeholder=" "
        />
        <label
          for="passwordAgain"
          className="absolute text-sm mr-2 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Password Again
        </label>
      </div>
      <div className="relative w-full  px-2 md:w-1/2 sm:w-3/4 max-w-lg md:max-w-lg">
        <button
          disabled={
            !name ||
            !email ||
            !password ||
            !passwordAgain ||
            password !== passwordAgain
          }
          onClick={() => signup()}
          className="disabled:opacity-40 flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-sm text-gray-400">
          Already Have Account?{" "}
          <button
            onClick={() => router.push("/Auth/signin")}
            className="font-semibold leading-6 text-orange-500 hover:text-orange-400"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
