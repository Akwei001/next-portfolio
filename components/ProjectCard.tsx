import React, { FunctionComponent, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { IProject } from '../types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../animation';
const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },

  showDetail,
  setShowDetail,
}) => {
  return (
    <div className='flex flex-col'>
      <div>
        <Image
          src={image_path}
          alt={name}
          className='cursor-pointer'
          onClick={() => setShowDetail(id)}
          layout='responsive'
          width='250'
          height='150'
        />
      </div>

      {/* <img
        src={image_path}
        alt={name}
        className='cursor-pointer'
        onClick={() => setShowDetail(true)}
      /> */}
      <p className='my-2 font-bold text-center'>{name}</p>
      {showDetail === id && (
        <motion.div
          className='absolute top-0 left-0 z-10 grid w-full h-auto p-10 text-black rounded-lg shadow-black/70 shadow-2xl  border-[1px] border-solid border-white border-opacity-30 backdrop-blur-lg bg-gradient-to-b from-green-400/60 to-blue-400/30 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100'
          variants={stagger}
          initial='initial'
          animate='animate'
        >
          <div>
            {/* <img src={image_path} alt={name} /> */}
            <motion.div
              variants={fadeInUp}
              className='border-4 border-gray-100 rounded-lg'
            >
              <Image
                src={image_path}
                alt={name}
                layout='responsive'
                height={150}
                width={300}
              />
            </motion.div>

            <motion.div
              className='flex justify-center my-4 space-x-3'
              variants={fadeInUp}
            >
              <a
                href={github_url}
                className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 rounded-lg dark:bg-dark-200'
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 rounded-lg dark:bg-dark-200'
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </div>

          <motion.div variants={stagger} initial='initial' animate='animate'>
            <motion.h2
              variants={fadeInUp}
              className='mb-3 text-xl font-medium md:text-2xl'
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className='mb-3 font-medium'>
              {description}
            </motion.h3>

            <motion.div className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className='px-2 py-1 my-1 bg-gray-200 rounded-lg dark:bg-dark-200'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200'
          >
            <MdClose size={30} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
