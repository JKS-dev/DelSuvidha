'use client';
import { LoadingScreen } from '@/components/LoadingScreen/LoadingScreen';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { UserData } from '@/components/rtdbFetch/userData'



export default function Dashboard() {


  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/Auth/signin');
    }
  })



  if (session.status === "loading") {
    return (
      <LoadingScreen />
    )
  }

  return (

    <div className="pt-20 px-4">
      <UserData data = "last_login" />
      <button className='text-black' onClick={() => signOut()}>Logout</button>
    </div>
  )
}




Dashboard.requireAuth = true