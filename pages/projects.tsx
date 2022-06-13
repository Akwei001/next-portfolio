/* eslint-disable react/jsx-key */
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';
import { motion } from 'framer-motion';
import { stagger, fadeInUp, routeAnimation } from '../animation';

const Projects = () => {
  return (
    <motion.div
      className='px-5 py-2 overflow-y-scroll'
      style={{ height: '65vh' }}
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <motion.div
        className='relative grid grid-cols-12 gap-4 my-3'
        variants={stagger}
        initial='initial'
        animate='animate'
      >
        {projects.map((project) => (
          <motion.div
            className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200'
            variants={fadeInUp}
          >
            <ProjectCard project={project} key={project.name} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
