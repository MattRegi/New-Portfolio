import React from 'react'
import Card from './Card'

const Experience = () => {
  return (
    <div name='experience' className='w-full md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-center'><span className='inline border-b-4 border-yellow-400'>Experience</span></p>
                <p className='py-6 text-center'>Take a look at some of my recent work!</p>
            </div>
            {/* Animated cards to showcase experience */}
                <Card/>
            </div>
        </div>
  )
}

export default Experience
