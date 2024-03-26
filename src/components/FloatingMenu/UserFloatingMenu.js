
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { PlayCircleIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { getData , getUserData } from '../rtdbFetch/FetchData'
import {
  UserIcon,
  BellAlertIcon,
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'
import { signOut } from 'next-auth/react';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/firebase';

export function UserFloatingMenu(props) {

  const [uid , setUid] =  useState("");
  const [name , setName] = useState("");
  const [role , setRole] = useState("");

 onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid)
      console.log(uid)
    }
  });  

  useEffect(()=>{
    const fetchdata = async() =>{
      const name = await getData("userDetails/name", `users/${uid}`);
      const role = await getData("userDetails/role", `users/${uid}`);
      
      setName(name);
      setRole(role)
    }

    if(uid !== ""){
      fetchdata();
    }
    
  })
  const UserProfile = [
    { name: name, description: role, href: '#', icon: UserIcon }
  ]
  const Settings = [
    { name: 'Settings', href: '#', icon: Cog6ToothIcon }
  ]
  const LogoutAction = [
    {
      name: 'Logout', href: '#', icon: ArrowLeftStartOnRectangleIcon
    },

  ]

  return (



    <Popover>

      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <span><UserCircleIcon className="h-8 w-8 flex-none text-black" aria-hidden="false" /></span>

      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 z-10 mt-5 flex w-screen max-w-max  px-4">
          <div className=" max-w-md flex-auto overflow-hidden rounded-lg bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="px-2 pt-2 pb-1">
              {UserProfile.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-black" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900 ">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-2 pb-2 pt-1">
              {Settings.map((item) => (
                <div key={item.name} className="group relative items-center flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-black" aria-hidden="true" />
                  </div>
                  <div >
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-0 divide-x divide-gray-900/5 bg-red-600 hover:opacity-80">
              {LogoutAction.map((item) => (
                <a
                  key={item.name}
                  onClick={() => firebaseSignOut(auth).then(() => {
                    signOut();
                  }).catch((error) => {
                    console.log(error)
                  })}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white"
                >
                  <item.icon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>

    </Popover>
  );

}




