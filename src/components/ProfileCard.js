import { CircularProgress } from "@nextui-org/react";
import '@/app/globals.css'
import useUserStore from "@/lib/userStore";
import { useRouter } from "next/navigation";
import ProfileImg from "./ProfileImg";

export default function ProfileCard() {
    const { currentUser } = useUserStore();
    const router = useRouter();
    return (
        <div className="h-full w-full rounded-xl flex flex-col bg-primary">
            <div className="w-full h-full mt-3 flex flex-col items-center ">
                <ProfileImg />
                <h1 className="flex flex-col text-base font-bold items-center mt-2 w-full text-white">{currentUser.username}<span className="font-normal text-xs opacity-75">XII B</span></h1>
            </div>
            <div   className=" group px-4 relative h-full duration-500 bg-Primary-700 m-2 rounded-lg" style={{ border: 'solid 1px rgba(255, 255, 255, 0.2)' }}>
                <ul className="flex flex-col">
                    <li className="text-nowrap flex flex-row py-1 text-base text-white">
                        <span className="tracking-wider opacity-75 font-medium flex-grow-1 w-1/2">Id</span> : {currentUser.sid ? <span className="flex-grow-4 w-full ml-1 max-w-48 truncate">{currentUser.sid}</span> : <span className="flex-grow-4 w-full ml-1 max-w-48 truncate text-red-500">Action Required</span>}
                    </li>
                    <li className="text-nowrap flex flex-row py-1 text-base text-white">
                        <span className="tracking-wider opacity-75 font-medium flex-grow-1 w-1/2">Email</span> : {currentUser.email ? <span className="flex-grow-4 w-full ml-1 max-w-48 truncate">{currentUser.email}</span> : <span className="flex-grow-4 w-full ml-1 max-w-48 truncate text-red-500">Action Required</span>}
                    </li>
                    <li className="text-nowrap flex flex-row py-1 text-base text-white">
                        <span className="tracking-wider opacity-75 font-medium flex-grow-1 w-1/2">Phone no.</span> : {currentUser.phone ? <span className="flex-grow-4 w-full ml-1 max-w-48 truncate">{currentUser.phone}</span> : <span className="flex-grow-4 w-full ml-1 max-w-48 truncate text-red-500">Action Required</span>}
                    </li>
                    <li className="text-nowrap flex flex-row py-1 text-base text-white">
                        <span className="tracking-wider opacity-75 font-medium flex-grow-1 w-1/2">Address</span> : {currentUser.addr ? <span className="flex-grow-4 w-full ml-1 max-w-48 truncate">{currentUser.addr}</span> : <span className="flex-grow-4 w-full ml-1 max-w-48 truncate text-red-500">Action Required</span>}
                    </li>
                </ul>
                <span onClick={()=> router.push('/profile')} className="   absolute h-8 w-8 bg-accent  -top-2 -right-1 rounded-full flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg></span>
            </div>

        </div>
    );
}
