'use client'
import Link from "next/link";
import {RoundedBtn, SimpleBtn} from "@/components/Btn/Btn"
import { useRouter } from 'next/navigation'
import {get , ref, onValue} from 'firebase/database'
import {useState, useEffect} from 'react'
import {rtdb} from './firebase'

export default function Home() {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(()=>{
     const usersRef = ref(rtdb, "/");
     get(usersRef).then((snapshot) => {
      if(snapshot.exists()){
        const usersArray = Object.entries(snapshot.val()).map(([id, data])=>({
          id,
          ...data,
        }));
        setUsers(usersArray);
      }else{
        console.log("NO data available");
      }
     }).catch((error)=>{
      console.log(error)
     })
  },);
  return (
   <>
    <div className="absolute overflow-x-auto shadow-md sm:rounded-lg mt-20 w-full flex justify-center px-4">
    <table className="w-full text-sm text-left">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
       
          <th scope="col" className="px-6 py-3">
            Class
          </th>
          <th scope="col" className="px-6 py-3">
            Section
          </th>
          <th scope="col" className="px-6 py-3">
            Password
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
      {
  users.map((user) =>(
    <tr key={user.id} className="bg-white border-b">
        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
        
              <div class="ps-3">
                  <div class="text-base font-semibold">{user.schoolName}</div>
                  <div class="font-normal text-gray-500">{user.schoolCategory}</div>
              </div>
          </th>
         
          <td className="px-6 py-4">
          {user.vilageName}
          </td>
          <td className="px-6 py-4">
          {user.location}
          </td>
          <td className="px-6 py-4">
          {user.schoolType}
          </td>
          
          <td className=" px-6 ">
            <Link href="#" className="font-medium text-blue-600 hover:underline">Edit</Link>
            <Link href="#" className="font-medium text-red-600 ms-3 hover:underline">Remove</Link>
          </td>
        </tr>
  ))
}
       
      </tbody>
    </table>
  </div>
   </>
  ); 
}


//    <main className="pt-20 px-4">
//      <div className="grid grid-row gap-1">
// {
//   users.map((user) =>(
//     <div key={user.id} className='bg-gray-100 p-2 rounded-lg grid grid-cols-11'>
//       {/* <h2 className='text-xs'>{user.column1}</h2>
//       <h2 className='text-xs col-span-2'>{user.column2}</h2>
//       <h2 className='text-xs'>{user.column3}</h2>
//       <h2 className='text-xs col-span-2'>{user.column4}</h2>
//       <h2 className='text-xs'>{user.column5}</h2>
//       <h2 className='text-xs'>{user.column6}</h2>
//       <h2 className='text-xs'>{user.column7}</h2>
//       <h2 className='text-xs'>{user.column8}</h2>
//       <h2 className='text-xs'>{user.column9}</h2> */}
//     </div>
//   ))
// }

//      </div>
//     </main>



// 'use client'
// import Link from "next/link";
// import {RoundedBtn, SimpleBtn} from "@/components/Btn/Btn"
// import { useRouter } from 'next/navigation'

// export default function Home() {
//   const router = useRouter();
//   return (
//     <main className="pt-20 px-4">
//       <h1>Dashboard</h1>
//       <RoundedBtn  text="Go To Dashboard"  onClick={() => router.push("/Dashboard") } />
    
//     </main>
//   ); 
// }