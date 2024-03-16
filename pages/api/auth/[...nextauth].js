import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/app/firebase";
import { encryptData } from '@/components/encryption'


export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/Auth/signin'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        return await signInWithEmailAndPassword(auth, credentials.email || '', credentials.password || '')
          .then(userCredential => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch(error => (console.log(error)))
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
          });
      }
    })
  ],
  jwt: {
    encryption: true, // Enable encryption for JWT
    secret: process.env.DECRYPTION_KEY, // Secret used to encrypt JWT
  },
  callbacks: {
       async session({ session, token, user }) {
       const refpath = "users/" + auth.currentUser.uid;
       try {
        const encryptedData = await encryptData(refpath);
        console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
        console.log('Encrypted data:', encryptedData);
        
        session.user.refPath = encryptedData;
      } catch (error) {
        console.error('Encryption failed:', error);
      }
      return session;
    },
  }
}
export default NextAuth(authOptions)