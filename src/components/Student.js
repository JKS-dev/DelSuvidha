'use client'

import useUserStore from '@/app/lib/userStore';
// import '@/app/styles/dashboard.css'
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
                    < button type="button" onClick={() => router.push('/profile')} className='rounded-full bg-accent w-fit mt-2 py-2 px-4'>Profile</button>
                </div>
                <img src='welcome.svg' height={128} width={128}></img>
            </div>
            <div className="userCard mt-5  duration-500 w-full flex justify-center">
                <ul className=' flex flex-row gap-5 2xl:w-fit w-full transition duration-300 ease-in-out'>
                    <li className='flex flex-col w-fit rounded-xl transition duration-300 ease-in-out'><ProfileCard /></li>
                    <li className='flex  flex-row w-full rounded-xl bg-black transition duration-300 ease-in-out'><AttendanceCalendar presentDates={currentUser.presentDates || presentDates} absentDates={currentUser.absentDates || absentDates} /></li>
                </ul>
            </div>
            <div className="echo w-full mt-5">
                <ul className='w-full flex flex-row gap-5'>
                    <li className='flex flex-col w-full '><h1 className='text-lg ml-2'> Messages</h1><div className='mt-1  bg-primary rounded-xl h-full w-full flex justify-center items-center'><button type="button" className='h-12 w-12 bg-accent rounded-xl flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus text-xl" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg></button></div></li>
                    <li className='flex flex-col w-2/5 '><h1 className='text-lg ml-2'>Doubt</h1>
                        <div className='mt-1 doubt justify-center items-center p-4 gap-4 rounded-xl flex flex-wrap'>
                            {["Hindi", "English", "Maths", "Science", "Maths", "Science", "Maths", "Science"].map((subject, index) => (
                                <span key={index} className='doubt-button'>
                                    {subject}
                                </span>
                            ))}
                        </div>
                    </li>
                </ul>
            </div>

        </>
    )
}