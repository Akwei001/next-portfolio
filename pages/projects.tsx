/* eslint-disable react/jsx-key */
import React from 'react';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';
import { motion } from 'framer-motion';
import { stagger, fadeInUp, routeAnimation } from '../animation';

const Projects = () => {
  const [showDetail, setShowDetail] = useState<number | null>(null);

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
          <div className='col-span-12 p-4 bg-gray-100 rounded-lg sm:col-span-6 lg:col-span-4 shadow-custom-neushadow dark:bg-dark-200 dark:shadow-custom-neushadow-dark'>
            <motion.div variants={fadeInUp} className=''>
              <ProjectCard
                project={project}
                key={project.name}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
