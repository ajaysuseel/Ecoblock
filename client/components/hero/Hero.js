import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

const Hero = () => {
  return (
    <div className="hero relative">
      <img src="/background.png" layout="fill" className="object-cover" />
      <div className="absolute inset-0 flex items-center p-10">
        <div className="text-white flex flex-col text-left">

          <h1 className='break-words md:w-4/5 text-6xl'>Discover,collect and sell Nfts</h1>
          <p>discover the most outstanding nfts around the world</p>
          <button type="button" className="text-white bg-blue-700 h-fit w-40 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Create</button>
        </div>
      </div>
    </div>
  );
}

export default Hero
    ;
