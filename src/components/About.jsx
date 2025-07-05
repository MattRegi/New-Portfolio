import React from 'react'
import MattRegister from '../assets/MattRegister.png'


const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-center pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>About Me</p>
            </div>
            <div>
            </div>
        </div>
        <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4'>
            <span>
                    <p className='pb-8'>Hi there! I'm Matthew Register, a junior web developer with a passion for building and a drive to keep learning. My journey into tech started out of curiosity for how video games were made, and that spark eventually led me to pursue a certificate in Software Development, where I learned the fundamentals of Python, Java, C++, and the software development lifecycle (SDLC).</p>
                    <p className='pb-8'>Since then, I've been diving deep into HTML, CSS, and JavaScript through The Complete Full-Stack Web Development Bootcamp by Angela Yu. I love the problem-solving nature of coding, and I'm especially motivated by how much there is to learn and explore in the world of web development.</p>
                    <p className='pb-8'>Before making the leap into tech, I spent nearly a decade managing an ecommerce warehouse. This role sharpened my leadership, organization, and problem-solving skills. I also spent time professionally wrapping vehicles, combining hands-on work with attention to detail.</p>
                    <p className='pb-8'>When I'm not coding, you can probably find me traveling with my wife, playing with the dogs, or at a car show, rally race, or drifting event. My wife and I both have a passion for cars(expecially JDM ones), and much enjoy the adventures and friendships we've made through them.</p>
                    <p className='pb-8'>I'm actively seeking my first role as a junior web developer where I can grow, contribute, and keep learning every day.</p>
            </span>
            <div className='justify-center items-center flex'>
                <img src={MattRegister} alt="Matt Register" className='hidden md:flex rounded-xl h-[90%]' />
            </div>
        </div> 
        <div>
        </div>
      </div>
    </div>
  )
}

export default About
