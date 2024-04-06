import { useState } from "react"
import { auth, rtdb } from '@/app/firebase';
import { child, push, ref, set, update } from 'firebase/database';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';;


export default function CreateSchool(props) {

    const [clicked, setClicked] = useState(false);
    const [schoolName , setSchoolName]= useState("");
    const [diseCode, setDiseCode] = useState("");
    const [schoolAddress, setSchoolAddress] = useState("");
    const router = useRouter()

    async function Submit() {
        try {
            
                         const schoolDetails = {
                                        schoolName: schoolName,
                                        schoolAddress: schoolAddress,
                                        diseCode: diseCode,
                                    }
                                    
                        const DiseCode ={
                                schoolName: schoolName,
                                schoolAddress: schoolAddress,
                                diseCode: diseCode,
                            }
              const usersRef = ref(rtdb, "/")
              const newDataRef = child(usersRef, "/");

              const updates = {};
              updates[`/users/${props.uid}/schoolDetails/`] = schoolDetails;
              updates[`schools/${diseCode}/`] = DiseCode;

              update(newDataRef, updates).then(()=>{
                setSchoolName("");
              setSchoolAddress("");
              setDiseCode("");
              setClicked(!clicked);
              toast.success('School Connected Successfully');
              router.refresh();
              return true
              })
              
            } catch (error) {
              console.log("Error adding data to RTDB", error);
              alert(error);
              return false
            }
          
      
      };

    return (


        <>

            <div class="flex justify-center items-center h-screen bg-gray-100">
                <button onClick={(e) => setClicked(!clicked)} class="bg-white rounded-lg p-4 shadow-md hover:shadow-lg focus:outline-none flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                    <h1 class="text-lg font-bold text-gray-800">Connect Your School</h1>
                </button>
            </div>



            {clicked &&
                <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex align-middle justify-center ">
                    <div class="relative p-4 w-full max-w-md max-h-full">

                        <div class="relative bg-white rounded-lg shadow">

                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                <h3 class="text-xl font-semibold text-gray-900">
                                    Connect Your School
                                </h3>
                                <button onClick={(e) => setClicked(!clicked)} type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div class="p-4 md:p-5">
                                <form class="space-y-4" action="#">
                                    <div className="relative w-full">
                                        <input
                                            id="schoolName"
                                            name="schoolName"
                                            type="text"
                                            autoComplete="schoolName"
                                            onChange={(e) => setSchoolName(e.target.value)}
                                            required
                                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" "
                                        />
                                        <label
                                            for="name"
                                            className="absolute text-sm mr-2 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                            School Name
                                        </label>
                                    </div>
                                    <div className="relative w-full">
                                        <input
                                            id="diseCode"
                                            name="diseCode"
                                            type="text"
                                            autoComplete="diseCode"
                                            minLength="11"
                                            maxLength="11"
                                            pattern="[0-9]{11}"
                                            onKeyPress={(e) => {
                                                const onlyNumbers = /^[0-9\b]+$/;
                                                if (!onlyNumbers.test(e.key)) {
                                                    e.preventDefault();
                                                }
                                            }}
                                            onChange={(e) => setDiseCode(e.target.value)}
                                            required
                                            class="block w-full px-2.5 pt-4 pb-2.5 text-sm text-gray-900 placeholder-gray-400 bg-transparent border-1 border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-orange-600 peer appearance-none"
                                            placeholder=" "
                                        />
                                        <label
                                            for="diseCode"
                                            className="absolute text-sm mr-2 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                            Dise Code
                                        </label>
                                    </div>
                                    <div className="relative w-full">
                                        <input
                                            id="schoolAddress"
                                            name="schoolAddress"
                                            type="text"
                                            autoComplete="schoolAddress"
                                            onChange={(e) => setSchoolAddress(e.target.value)}
                                            required
                                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" "
                                        />
                                        <label
                                            for="schoolAddress"
                                            className="absolute text-sm mr-2 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                            School Address
                                        </label>
                                    </div>


                                    <button
                disabled={(!schoolName || !schoolAddress || !diseCode )||(diseCode.length < 11) }
                onClick={() => Submit()}
                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Submit
              </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }



        </>
    )
}

