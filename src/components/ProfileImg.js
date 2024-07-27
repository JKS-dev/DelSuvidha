import useUserStore from "@/app/lib/userStore";
import { CircularProgress } from "@nextui-org/react";

export default function ProfileImg(){
    const {currentUser} = useUserStore();
    return(
        <CircularProgress
                    classNames={{
                        svg: "w-36 h-36 drop-shadow-md",
                        indicator: "stroke-yellow-400",
                        track: "stroke-white/20",
                        value: "text-3xl font-semibold text-white",
                    }}
                    value={currentUser.status||'25'}
                    strokeWidth={1}
                    valueLabel={currentUser.avatar ?
                        <img src={currentUser.avatar} className='profileImg bg-Primary-700 object-cover' alt="Profile" />
                        : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gray" className="bi person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>}
                    showValueLabel={true}
                />
    )
}