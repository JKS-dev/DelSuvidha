import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/app/firebase";
// import { encryptData } from '@/components/encryption'
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"
import CryptoJS from 'crypto-js';

export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/Auth/signin',
    error: '/Auth/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, credentials.email || '', credentials.password || '');
          if (userCredential.user) {
            return userCredential.user;
          }
          return null;
        } catch (error) {
          // Handle Firebase authentication error
          const errorCode = error.code;
          const errorMessage = errorCode.split("/")[1]
          console.log(errorMessage);
          // isClientError(error)
          // throw new errorMessage[1]
          throw new Error(errorMessage);
          // return(errorCode);
        }
      }
    })
  ],
  jwt: {
    encryption: true, // Enable encryption for JWT
    secret: process.env.NEXTAUTH_SECRET, // Secret used to encrypt JWT
  },
  // callbacks: {
  //   async session({ session, token, user }) {
  //     const refpath = "users/" + auth.currentUser.uid;
  //     console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
  //     console.log(refpath);
  //     session.user.refPath = refpath;

  //     return session;
  //   },
  // }
}
export default NextAuth(authOptions)
