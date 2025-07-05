import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';
import Matt from '../assets/Matt.png';

function Home() {
  return (
    <div name='home' className='w-full h-screen'>


      
    {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-center items-center h-full' >
          <div className='md:col-span-12 flex flex-col justify-center h-full'>
            <p className='text-yellow-400'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-white'>Matthew Register</h1>
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-400'>Jounior Web Developer</h2>
            
            <p className='text-gray-300 py-4 max-w-[700px]'>I am an aspiring web developer with an emphasis on constantly learning and improving my craft.</p>  
            <div>
            <Link to="experience" smooth={true} duration={500}className='text-white group border-2 px-6 py-3 my-2 inline-flex items-center hover:bg-yellow-400 hover:text-black '>
                View Work 
                <span className='group-hover:rotate-90 duration-1000'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
            </Link>
            </div>
        </div>
        <div>
          <img src={Matt} className='hidden md:flex opacity-80 max-w-[500px] border-2 shadow-md shadow-amber-300 rounded-full'/>
        </div>
        </div>
    </div>
  )
}

export default Home
