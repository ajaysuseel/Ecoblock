import CardComponent from '@/components/cardComponent/cardComponent';
import { NFTList } from '@/data/NFT';
import React from 'react'

const Collection = () => {
    const cards = NFTList.map(item => (
        <CardComponent />
    ));
  return (
    
    <div className='flex-col mt-16 mb-16'>
      <div className='flex flex-col items-center'>
        <h1 className="font-Poppins font-extrabold text-4xl text-center" style={{ color: "#00ADB5" }}>Collections</h1>
      </div>
      <div className='mt-12 md:mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mb-10 grid-cols-1 justify-center items-center gap-12 sm:gap-8 md:gap-8 lg:gap-8'>
        {cards}
      </div>
    </div>
  );
}

export default Collection