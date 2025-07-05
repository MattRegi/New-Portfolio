import React from 'react'

const Contact = () => {
  return (

    // set up action with getform.io
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/anlxpjja' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8  text-gray-300 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>Contact</p>
                <p className='py-4'>To contact me, please fill out and submit the form below, or email me at <span className='text-2xl'>Matt.Register.Dev@gmail.com</span></p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type='text' placeholder='Your Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Your Email' name='email'  />
            <textarea className='my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Your Message' name='message' cols='30' rows='10' />
            <button className='text-4xl font-bold text-black border-1 bg-yellow-500 my-4 p-5 mx-auto' type='submit'>Send Message</button>       
        </form>
      
    </div>
  )
}

export default Contact
