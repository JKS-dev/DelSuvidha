'use client'

import useUserStore from '@/app/lib/userStore';
import '@/app/styles/dashboard.css'
import './Student.css'
import AttendanceCalendar from '@/components/AttendanceCalendar';
import ProfileCard from '@/components/ProfileCard';
import { useRouter } from 'next/navigation';
import ProfileImg from './ProfileImg';

const presentDates = []; // Example present dates
const absentDates = []; // Example absent dates

export default function Student() {
    const { currentUser } = useUserStore();
    const router = useRouter();
    return (
        <>
            <div className="welcomeMsg mt-2 w-full h-fit rounded-xl bg-primary flex p-3">
                <div className='w-full grow-1 flex flex-col p-4'>
                    <h1 className='text-2xl '>
                        Welcome Back, <span className='uppercase text-accent font-bold'>
                            {currentUser.username}
                        </span>
                    </h1>
                    <p className='text-sm mt-2 opacity-95'>Your profile is <span className='text-base text-red-400 font-bold'>{currentUser.status || '25'}%</span> complete. Please update your profile <br />to ensure your information is up-to-date on your school portal.</p>
                    <button type="button" onClick={() => router.push('/profile')} className='rounded-full bg-accent w-fit mt-2 py-2 px-4'>Profile</button>
                </div>
                <img src='welcome.svg' height={128} width={128}></img>
            </div>
           <div className="userCard mt-5 p-2 duration-500 w-full flex justify-center">
            <ul className=' flex flex-row gap-5 w-fit transition duration-300 ease-in-out'>
                <li className='flex flex-col w-full rounded-xl transition duration-300 ease-in-out'><ProfileCard /></li>
                <li className='flex flex-col w-full rounded-xl transition duration-300 ease-in-out'><AttendanceCalendar presentDates={currentUser.presentDates || presentDates} absentDates={currentUser.absentDates || absentDates} /></li>
            </ul>
           </div>

        </>
    )
}