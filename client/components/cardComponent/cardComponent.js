import { NFTList } from '@/data/NFT';
import Link from 'next/link';
import React from 'react'
import { AiFillLike } from "react-icons/ai";

const CardComponent = (id) => {
    return (
        <Link href={`/collection/${id}`}>

        <div className="w-64 lg:w-72 h-fit p-2 m-auto flex flex-col text-black">
        
            <div className="card-image w-full h-72 relative overflow-hidden border-4 border-cyan-500">
                <img
                    src="/background.png"
                    className="absolute object-cover object-center h-full w-full rounded-t-md z-10"
                    alt="Image"
                />
            </div>
            <div className='flex-col h-fit bg-nav-bg  items-center text-3xl text-white font-bold border-4 border-cyan-500 border-t-0 justify-between'>
                <div className='flex justify-between'>

                    <div className="text-black ">
                        <h12 className="text-xl">NFT NAME</h12>
                    </div>
                    <div className='text-xl text-black flex' >
                        <AiFillLike size={20} color='black' />96
                    </div>
                    </div>
                <div>
                    <div className='text-black text-xl'>
                        <h2>Time left:40:10:1</h2>
                    </div>
                    <div className='text-black text-xl'>
                        Current Price:1000
                    </div>
                </div>
            </div>

        </div>
        </Link> 

    )
}

export default CardComponent;