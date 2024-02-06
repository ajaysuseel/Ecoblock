import React from 'react'
import Discover from './Discover'
import Helpcenter from './Helpcenter'

const Sidebar = () => {
    return (
        <div className='h-full w-60 text-left fixed '>
            <ul className="flex text-black flex-col justify-center content-center py-2 text-sm  " aria-labelledby="dropdownDefaultButton">
                <li>
                    <Discover />
                    
                </li>
                <li>
                    <Helpcenter />
                </li>
                <li className='flex'>
                    <div  ><button type="button" className="text-white bg-blue-700 h-fit hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Create</button></div>
                    <div ><button type="button" className="text-white bg-blue-700 h-fit hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Connect to Wallet</button></div>
                </li>

            </ul>
             </div>
    )
}

export default Sidebar