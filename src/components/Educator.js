import useUserStore from "@/app/lib/userStore"
import { useRouter } from "next/navigation";
import Chart from "./Chart";

const data = [
    { id: 0, value: 10, label: 'Boys', color: '#228B22' },
    { id: 1, value: 15, label: 'Girls', color: '#FF4191' },
];
export default function Educator(){
    const {currentUser} = useUserStore();
    const router = useRouter();
    return(
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
    <Chart data={data}/>
    </>
    )
}