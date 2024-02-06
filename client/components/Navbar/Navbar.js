import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { BsSearch } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg";
import { CgMenuRight } from "react-icons/cg";
import Discover from './Discover';
import Helpcenter from './Helpcenter';
import Profilepage from './Profilepage';
import Notification from './Notification';
import Sidebar from './sidebar';
const Navbar = () => {
  const [sidebar, setsidebar] = useState(false);
  return (
    <div>
    <div className='flex justify-between p-5 pl-10 pr-10 '>
      <Image src="/logo.png"  height={20} width={30} />
      <form className='hidden lg:block'>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Nft" required />
        
    </div>
</form>

      <div className='lg:block hidden '><Discover /></div>
      <div className='lg:block hidden '><Helpcenter /></div>
      <Notification />
      <div className='lg:block hidden '><button type="button" className="text-white bg-blue-700 h-fit hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Create</button></div>
      <Profilepage />
      <div className='block lg:hidden'>
        <CgMenuLeft onClick={()=>setsidebar(!sidebar)} color='black' />
      </div>
    </div>
    {
      sidebar?<div className='h-full w-full'><Sidebar></Sidebar></div>:<div></div>
    }
    </div>
  )
}

export default Navbar