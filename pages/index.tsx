import React from 'react';
import Bar from '../components/Bar';
import { languages } from '../data';

const index = () => {
  return (
    <div className='flex flex-col px-6 pt-1'>
      <h5 className='my-3 font-medium'>
        I am a web developer who has a lifelong passion and interest in the tech
        industry. I am a developer because I genuinely love learning and the
        scope of what can be done with programming is truly exciting. I have a
        strong problem solving mindset. My time at the School of Code has
        prepared me well for working in collaborative software development
        environment.
      </h5>
      {/*Languages & Tools */}
      <div className='grid gap-9 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
          <div className='my-2'>
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
