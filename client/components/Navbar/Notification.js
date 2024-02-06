import Image from 'next/image';
import React, { useState } from 'react';
import { IoMdNotifications } from "react-icons/io";
const Notification = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
      <IoMdNotifications color='black'/>
      </button>

      <div
        id="dropdown"
        className={`z-10 ${isDropdownOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 p-2 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
      <h2>Notification</h2>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
          <div className='flex gap-5 '>
            <Image src={""} className='rounded-s-full'  height={20} width={30} ></Image>
            <div className='flex flex-col'>
              <p>username</p>
              <p>12321414124</p>
            </div>
    
          </div>
        </li>
        
        </ul>
      </div>
    </div>
  );
};

export default Notification;
