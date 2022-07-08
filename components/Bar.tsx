import { FunctionComponent } from 'react';

import { Skill } from '../types';
import { motion } from 'framer-motion';

const Bar: FunctionComponent<{ value: Skill }> = ({
  //icon deleted from value
  value: { level, name },
}) => {
  const bar_width = `${level}%`;

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className='mx-2 my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500'>
      <motion.div
        className='flex items-center px-4 py-5 bg-green-400 rounded-lg'
        style={{
          width: bar_width,
        }}
        variants={variants}
        initial='initial'
        animate='animate'
      >
        {/* <Icon className='mr-3' /> {name} */}
        {name}
      </motion.div>
    </div>
  );
};
export default Bar;
