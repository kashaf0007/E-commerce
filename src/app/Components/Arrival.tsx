import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Arrival = () => {
  return (
    <div className=' mt-[50px] mb-[50px]'>
      <div className='text-center mb-10 mt-10'>
        <h1 className='text-black scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl'>
            OUR Arrivals
        </h1>
            <div className='flex mt-2 justify-center'> 
<div className='w-16 h-1 rounded-full bg-red-600 inline-flex'>
    </div>
     </div>
       </div>

       <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 '>
        {/* catgory */}
        <div className=' lg:ml-6 mb-5 lg:mb-0 overflow-hidden z-10 mx-auto  group relative'>
            <Link href='/tops' >
            <Image
            src='/watch.jpeg'
            alt='watches'
            width={400} 
            height={450}
            className='rounded-xl  duration-200 hover:scale-105'/>
            </Link>
        </div>
        {/* 2 */}
        <div className=' mb-5 lg:mb-0 overflow-hidden z-10 mx-auto'>
            <Link href='/shoes' >
            <Image src='/watch1.jpeg' alt='watches' width={400} height={450}
            className='rounded-xl  duration-300 hover:scale-125'/>
            </Link>
        </div>
        {/* 3 */}
        <div className=' mb-5 lg:mb-0 overflow-hidden z-10 mx-auto'>
            <Link href='/watches' >
            <Image src='/watch2.jpeg' alt='watches' width={400} height={450}
            className='rounded-xl  duration-300 hover:scale-125'/>
            </Link>
        </div>
        {/* 4 */}
        <div className=' mb-5 lg:mb-0 overflow-hidden z-10 mx-auto'>
            <Link href='/bags' >
            <Image src='/watch3.jpeg' alt='watches' width={400} height={550}
            className='rounded-xl  duration-300 hover:scale-125'/>
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out'>
            <h1>Jewelry</h1>
            </div>
          
            </Link>
        </div>
    
       </div>
    </div>

  )
}

export default Arrival
