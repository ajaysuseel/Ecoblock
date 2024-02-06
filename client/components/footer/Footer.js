import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='md:flex pr-20 pl-20 gap-5 bg-slate-600 block'>
            <div className='flex flex-col '>
                <Image src="/logo.png" height={50} width={60} />
                <p className='break-all'>jdbvidbu vsbvids vdsbv sduvbsd vusdvbdsv sdbvsd vubdsv sdvusdv ds</p>
            </div>
            <div className='flex flex-col'>
                <ul>
                    <li>
                        <h2 className='font-bold'>Discover</h2>

                    </li>
                    <li>Collection</li>
                    <li>search</li>
                    <li>author profile</li>
                    <li>nft detail</li>
                    <li>Upload Nft</li>
                    <li>Account settings</li>
                    <li>Connect wallet</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <ul>
                    <li>
                        <h2 className='font-bold'>Help Center</h2>

                    </li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Sign Up</li>
                    <li>sign in</li>
                    <li>Subsciption</li>
                    
                </ul>
            </div>
            <div className='flex flex-col'>
            </div>

        </div>
    )
}

export default Footer