import { FunctionComponent } from 'react';
import Image from 'next/image';
import { Skill } from '../types';
import { motion } from 'framer-motion';

const Bar: FunctionComponent<{ value: Skill }> = ({
  //icon deleted from value
  value: { level, name, Icon },
}) => {
  // const bar_width = `${level}%`;

  // const variants = {
  //   initial: {
  //     width: 0,
  //   },
  //   animate: {
  //     width: bar_width,
  //     transition: {
  //       duration: 0.4,
  //       type: 'spring',
  //       damping: 10,
  //       stiffness: 100,
  //     },
  //   },
  // };

  return (
    <div className='mx-2 my-2 drop-shadow-lg dark:bg-dark-300 dark:bg-black-500'>
      <motion.div
        className='px-4 py-5 bg-gray-200 rounded-lg dark:bg-dark-200 dark:shadow-custom-neushadow-dark'
        // style={{
        //   width: bar_width,
        // }}
        // variants={variants}
        initial='initial'
        animate='animate'
      >
        <div className='flex'>
          <Image src={Icon} alt={name} width={50} height={50} />
          <div className='m-4'>{name}</div>
        </div>
      </motion.div>
    </div>
  );
};
export default Bar;
