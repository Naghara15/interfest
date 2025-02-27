import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlineProject} from 'react-icons/ai'

const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer'/>
            {nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#profile" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineUser size={20} />
                            <span className='pl-4'>Profile</span>
                        </a>
                        <a href="#skills" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject size={20} />
                            <span className='pl-4'>Skills</span>
                        </a>
                    </div>
                )
                : (
                    ''
                )}
                <div className='md:block hidden fixed top-[25%] z-10'>
                    <div className='flex flex-col'>
                        <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineHome size={20}/>
                        </a>
                        <a href='#profile' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineUser size={20}/>
                        </a>
                        <a href='#skills' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineProject size={20}/>
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default Sidenav