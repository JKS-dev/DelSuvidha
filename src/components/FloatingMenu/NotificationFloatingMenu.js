import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/20/solid'
import {BellAlertIcon} from '@heroicons/react/24/outline'

const NotificationAction = [
    { name: 'New Notification', description: 'Annual Exam TimeTable', href: '#', icon: BellAlertIcon }
]

const NotificationFloatingMenu = () => {
    return (
        <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                <span><BellIcon className="h-6 w-6 flex-none text-black" aria-hidden="true" /></span>

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
                        <div className="p-2">
                            {NotificationAction.map((item) => (
                                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <a href={item.href} className="font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
export default NotificationFloatingMenu