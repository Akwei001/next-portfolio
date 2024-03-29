import React from 'react';
import Bar from '../components/Bar';
import { languages } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animation';
import Projects from './projects';

const index = () => {
  return (
    <motion.div
      className='flex flex-col px-6 pt-1 mb-6'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <motion.h5
        variants={fadeInUp}
        initial='initial'
        animate='animate'
        className='my-3 font-medium'
      >
        I am a Software developer who has a lifelong passion and interest in the
        tech industry. I am a developer because I genuinely love learning and
        the scope of what can be done with software is truly exciting. I have a
        strong problem solving mindset. My time at the School of Code has
        prepared me well for working in collaborative software development
        environment.
      </motion.h5>
      {/*Languages & Tools */}
      <div className='p-2 bg-white rounded-lg shadow-custom-neushadow dark:bg-dark-200 dark:shadow-custom-neushadow-dark'>
        <div>
          <h5 className='flex pl-2 my-1 mb-2 text-xl font-bold '>
            <span className='border-b-2 border-green'>
              Languages, Tools & Frameworks
            </span>
          </h5>
          <div className='grid gap-3 md:grid-cols-2'>
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
