import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/app/firebase";



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
        return await signInWithEmailAndPassword(auth, credentials .email || '', credentials .password || '')
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
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = auth.currentUser?.uid;
      session.user.refPath = "users/"+auth.currentUser?.uid;
      return session // The return type will match the one returned in `useSession()`
    },

  }
}
export default NextAuth(authOptions)