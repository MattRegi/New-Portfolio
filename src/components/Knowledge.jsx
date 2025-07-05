import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Github from '../assets/github.png'

const Knowledge = () => {

        let icons = {
            HTML: {name: 'HTML', img: HTML, alt: 'html'},
            CSS: {name: 'CSS', img: CSS, alt: 'css'},
            JavaScript: {name: 'JavaScript', img: JavaScript, alt: 'javascript'},
            React: {name: 'React', img: ReactImg, alt: 'react'},
            Tailwind: {name: 'Tailwind', img: Tailwind, alt: 'tailwind'},
            Github: {name: 'Github', img: Github, alt: 'github'}
        }

  return (
    <div name='knowledge' className='text-gray-300 w-full h-screen'>
        {/* Knowledge container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold text-center'><span className='inline border-b-4 border-yellow-400'>Knowledge</span></p>
                <p className='py-4 text-center'>↓ Here I have listed some technologies that I have been working with recently to further hone my skills ↓</p>
            </div>


        {/* Tech Icons and Names */}
        {/* Index 4 starts at col 2 for centered look (change when adding more) */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {Object.values(icons).map((tech, index) => (
                    <div key={index} className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 ${index === 4 ? 'sm:col-start-2' : ''}`}>
                        <img className='w-20 mx-auto' src={tech.img} alt={tech.alt} />
                        <p className='my-4'>{tech.name}</p>    
                </div>
                ))}
        </div>
        </div>
    </div>
  )
}


export default Knowledge
