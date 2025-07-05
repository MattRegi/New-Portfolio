import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => !setNav(!nav);
 
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
        <div>
            <img src={Logo} alt='Matt Register Logo' style={{height: '70px'}}/>
        </div>

        {/* Navbar Menu */}
            <ul className='hidden md:flex'>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="knowledge" smooth={true} duration={500}>Knowledge</Link></li>
                <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>

        {/* Hamburger Menu */}
        <div onClick= {handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*Mobile Menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="knowledge" smooth={true} duration={500}>Knowledge</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="experience" smooth={true} duration={500}>Experience</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
             
        </ul>
    </div>     
  );
};

export default Navbar
