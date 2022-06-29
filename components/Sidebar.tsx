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
        className='mx-auto border rounded-full '
        height='128px'
        width='128px'
        layout='intrinsic'
        quality='100'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider text-black font-Oswald dark:text-white'>
        <span className='text-green-400'>Akwei </span>
        Acquaye
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>
        Web Developer
      </p>
      <a
        className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500'
        href={'/cv/AkweiSOC2.pdf'}
        download='AkweiSOC2.pdf'
      >
        Download CV
      </a>
      {/* social icons */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'>
        <a href=''>
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
        <a href=''>
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
      </div>
      {/* address */}
      <div
        className='py-4 my-5 bg-gray-200 rounded-lg dark:bg-dark-200 dark:bg-black-500'
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className='flex items-center justify-center space-x-2 dark:bg-dark-200 dark:bg-black-500'>
          <GoLocation />
          <span>Birmingham, UK</span>
        </div>
        <p className='my-2 dark:bg-dark-200 dark:bg-black-500 '>
          akwei1@gmail.com
        </p>
        {/* <p className='my-2 text-black'>phone number ?</p> */}
      </div>
      {/* e-mail button */}
      <button
        className='w-8/12 py-2 my-2 text-white rounded-full outline-none bg-gradient-to-r from-green-400 to-blue-400 focus:'
        onClick={() => window.open('mailto:akwei1@gmail.com')}
      >
        email me
      </button>
      <button
        onClick={changeTheme}
        className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 '
      >
        Change theme
      </button>
    </>
  );
};

export default Sidebar;
