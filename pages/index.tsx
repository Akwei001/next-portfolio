import React from 'react';
import Bar from '../components/Bar';
import { languages } from '../data';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animation';

const index = () => {
  return (
    <motion.div
      className='flex flex-col px-6 pt-1 mb-2'
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
        I am a web developer who has a lifelong passion and interest in the tech
        industry. I am a developer because I genuinely love learning and the
        scope of what can be done with programming is truly exciting. I have a
        strong problem solving mindset. My time at the School of Code has
        prepared me well for working in collaborative software development
        environment.
      </motion.h5>
      {/*Languages & Tools */}
      <div className='p-2 bg-gray-200 rounded-lg dark:bg-dark-200'>
        <div>
          <h5 className='flex justify-center my-1 text-2xl font-bold '>
            Languages & Frameworks
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
