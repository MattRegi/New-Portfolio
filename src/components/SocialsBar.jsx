import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialsBar = () => {
  return (
    <div className='hidden lg:flex fixed flex-col bottom-[10%] right-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center transform translate-x-[100px] hover:translate-x-[10px] transition-transform duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/registermatthew' target='_blank'>
                <FaLinkedin size={30}/> LinkedIn </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center transform translate-x-[100px] hover:translate-x-[10px] transition-transform duration-300 bg-gray-900'>
                <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/MattRegi' target='_blank'>
                <FaGithub size={30}/> Github </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center transform translate-x-[100px] hover:translate-x-[10px] transition-transform duration-300 bg-yellow-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/assets/MattResume2025.pdf' target='_blank'>
                <BsFillPersonLinesFill size={30}/> Resume </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialsBar
