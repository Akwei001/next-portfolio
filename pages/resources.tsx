import React from 'react';

const resources = [
  {
    name: 'Pixabay',
    description: 'An image bank website',
    link: 'https://pixabay.com/',
  },
  {
    name: 'Tailwind',
    description: '',
    link: '',
  },
  {
    name: 'NextJS',
    description: '',
    link: '',
  },
  {
    name: 'FreeCodeCamp',
    description: '',
    link: '',
  },
  {
    name: 'The Coder Career',
    description: '',
    link: '',
  },
  {
    name: 'CSS Tricks',
    description: '',
    link: '',
  },
];

const Resources = () => {
  return (
    <>
      {resources.map((resource, index) => (
        <div className='text-black' key={index}>
          {resource.name}
        </div>
      ))}
    </>
  );
};

export default Resources;
