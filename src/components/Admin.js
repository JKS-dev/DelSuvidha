"use client"

import TotalPresent from '@/components/TotalPresent';
import RecentlyAdded from '@/components/RecentlyAdded';
import Chart from './Chart';


const data = [
    { id: 0, value: 10, label: 'Boys', color: '#228B22' },
    { id: 1, value: 15, label: 'Girls', color: '#FF4191' },
];





export default function Admin() {


    return (



        <>
            <div className="mt-5 p-2">
                <ul className=' flex flex-row gap-2 '>
                    <TotalPresent title='Students' present='856' total='1050' />
                    <TotalPresent title='Educators' present='35' total='64' />
                </ul>
            </div>
            <div className="mt-5 p-2">
                <ul className='flex flex-row gap-2'>
                    <li className='flex flex-col rounded-lg w-3/5'><h1 className='text-lg font-medium'>Total No. Of Students</h1>
                        <div className="mt-2 bg-primary w-full h-full p-5 rounded-lg">
                            <Chart data={data} />
                        </div></li>
                    <li className='flex flex-col rounded-lg w-2/5'>
                        <h1 className='text-lg font-medium'>Messages</h1>
                        <div className="mt-2 bg-primary w-full h-full p-5 rounded-lg flex justify-center items-center">
                            <button className='flex justify-center items-center h-12 w-12 bg-accent rounded-lg '><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-7 w-7" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg></button></div></li>
                </ul>

            </div>

            <div className="flex flex-col gap-2 p-2">
                <h1 className='flex justify-between text-lg font-medium items-center'>Recently Added</h1>
                <RecentlyAdded />
            </div>
        </>



    )
}