
import React from 'react'
import { useRouter } from 'next/router';
import { NFTList } from '@/data/NFT';

const Nftpage = () => {

  const router = useRouter();
  const {name} = router.query;
  
  const nftdata = NFTList.find((event) => event.link === name);
  
  return (
    <div className=' xl:pr-64 xl:pl-64 lg:pr-36 lg:pl-36 md:pr-10 sm:pr-20 sm:pl-20 pl-2 pr-2 md:pl-10 pb-10 pt-10 '>
      <div className='border-4  md:flex  md:gap-10 gap-10 bg-white shadow-lg md:p-5 p-5 font-Poppins'>
        <div className='md:w-1/2 md:block flex justify-center  '>
          <img src="./background.png" className="z-10 sm:w-96 sm:h-96 w-64 h-64" alt="Image" />
        </div>
        <div className='flex flex-col gap-4 md:w-1/2 '>
          <h1 className='text-3xl text-center font-Poppins font-bold'>nft name</h1>
          <p className='font-Poppins'>this is the nft</p>
          <div className='flex flex-col '>
            <h3 className='font-bold '>Price</h3>
            <p>Rs.100</p>
          </div>
          
         
          
          <div className='flex justify-end'>
            <button className="bg-black  text-white font-bold p-4 w-40 hover:bg-cyan-500 rounded-full hover:text-black ">
              Buy now
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Nftpage