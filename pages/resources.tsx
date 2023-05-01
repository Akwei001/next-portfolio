import React from 'react';
import Link from 'next/link';

const resources = [
  {
    name: 'Pixabay',
    description: 'An image bank website',
    link: 'https://pixabay.com/',
  },
  {
    name: 'Tailwind',
    description: 'A utility-first CSS framework',
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'NextJS',
    description: 'The React framework for production',
    link: 'https://nextjs.org/',
  },
  {
    name: 'FreeCodeCamp',
    description:
      'FreeCodeCamp is a non-profit organization that offers free online coding education to anyone who wants to learn.',
    link: 'https://www.freecodecamp.org/',
  },
  {
    name: 'The Coder Career',
    description:
      'The Coder Career Podcast is a show that helps aspiring software developers navigate the journey to a fulfilling and successful career in tech.',
    link: 'https://www.youtube.com/@TheCoderCareer/featured',
  },
  {
    name: 'CSS Tricks',
    description:
      'CSS-Tricks provides tutorials, articles, and resources for web designers and developers who use CSS in their work. ',
    link: 'https://css-tricks.com/',
  },
];

const Resources = () => {
  return (
    <div className='p-2 rounded-lg white dark:bg-dark-200 dark:shadow-custom-neushadow-dark'>
      {resources.map((resource, index) => (
        <div
          className='p-2 m-4 bg-gray-200 rounded-lg shadow-custom-neushadow dark:bg-dark-200 dark:shadow-custom-neushadow-dark'
          key={index}
        >
          <h2 className='text-2xl '>{resource.name}</h2>
          <p>{resource.description}</p>
          <div>
            <Link href={resource.link}>
              <a className='text-blue-500'>Visit Website</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resources;
