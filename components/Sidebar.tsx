import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Akwei from '../public/images/Akwei.jpg';

import React from 'react';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <Image
        src={Akwei}
        alt='avatar'
        className='mx-auto border rounded-xl'
        height='128px'
        width='200px'
        layout='intrinsic'
        quality='100'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider text-black font-Oswald dark:text-white'>
        <span className='text-green-400'>Akwei </span>
        Acquaye
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full shadow-custom-neushadow dark:bg-black dark:shadow-custom-neushadow-dark'>
        Software Developer
      </p>
      <a
        className='py-2 mt-4 text-white rounded-full cursor-pointer shadow-custom-neubutton px-14 bg-gradient-to-r from-green-400 to-blue-400 dark:bg-dark-200 dark:shadow-custom-neubutton-dark'
        href='/cv/NAAcquayeCV.pdf'
        download='NAAcquayeCV.pdf'
      >
        Download CV
      </a>
      {/* social icons */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full '>
        <a href='https://github.com/Akwei001'>
          <AiFillGithub className='w-8 h-8 p-1 rounded-full cursor-pointer shadow-custom-neubutton dark:shadow-custom-neubutton-dark' />
        </a>
        <a href='https://linkedin.com/in/akweiacquaye'>
          <AiFillLinkedin className='w-8 h-8 p-1 cursor-pointer shadow-custom-neubutton dark:shadow-custom-neubutton-dark' />
        </a>
      </div>
      {/* address */}
      <div
        className='py-4 my-5 bg-gray-200 rounded-lg shadow-custom-neushadow dark:shadow-custom-neushadow-dark dark:bg-black'
        style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}
      >
        <div className='flex items-center justify-center space-x-2'>
          <div className='text-green-500'>
            <GoLocation />
          </div>

          <span>Birmingham, UK</span>
        </div>
        <p className='my-2'>akwei1@gmail.com</p>
        {/* <p className='my-2 text-black'>phone number ?</p> */}
      </div>
      {/* e-mail button */}
      <button
        className='w-8/12 py-2 my-2 text-white rounded-full outline-none shadow-custom-neubutton bg-gradient-to-r from-green-400 to-blue-400 dark:shadow-custom-neubutton-dark'
        onClick={() => window.open('mailto:akwei1@gmail.com')}
      >
        email me
      </button>
      <button
        onClick={changeTheme}
        className='w-8/12 py-2 my-2 text-white rounded-full shadow-custom-neubutton bg-gradient-to-r from-green-400 to-blue-400 dark:shadow-custom-neubutton-dark'
      >
        Change theme
      </button>
    </>
  );
};

export default Sidebar;
