import React from 'react'
import {FaInstagram, FaLinkedin, FaEnvelope} from 'react-icons/fa'

const Main = () => {
    return(
        <div id='main'>
            <img className='w-full h-screen object-cover' src='/image/2.jpg' alt='/'/>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/60'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Saya Leo</h1>
                    <h2 className='sm:text-3xl text-2xl pt-4 text-gray-800'>Backend Developer</h2>
                    <div className='flex justify-between pt-6 max-w-[100px] w-full'>
                        <a href='https://www.instagram.com/naghara15/' target='_blank' rel='noopener noreferrer'>
                        <FaInstagram className='cursor-pointer' size={20}/>
                        </a>
                        <a href='https://www.linkedin.com/in/mohammad-leo-434774221/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin className='cursor-pointer' size={20}/>
                        </a>
                        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=naghara15@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <FaEnvelope className='cursor-pointer' size={20}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main