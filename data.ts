import { IProject, Skill } from './types';
// import { BsCircleFill } from 'react-icons/bs';

export const languages: Skill[] = [
  {
    // Icon: BsCircleFill,
    name: 'HTML',
    level: '100',
  },
  {
    // Icon: BsCircleFill,
    name: 'CSS',
    level: '100',
  },
  {
    // Icon: BsCircleFill,
    name: 'JavaScript',
    level: '100',
  },
  {
    // Icon: BsCircleFill,
    name: 'React',
    level: '100',
  },
  {
    // Icon: BsCircleFill,
    name: 'NodeJS',
    level: '100',
  },
  {
    // Icon: BsCircleFill,
    name: 'SQL',
    level: '100',
  },
  {
    // Icon: BsCircleFill,
    name: 'Git/GitHub',
    level: '100',
  },
];

// export const tools: Skill[] = [
//   {
//     Icon: BsCircleFill,
//     name: 'Figma',
//     level: '85',
//   },
//   {
//     Icon: BsCircleFill,
//     name: 'Photoshop',
//     level: '45',
//   },
//   {
//     Icon: BsCircleFill,
//     name: 'Illustrator',
//     level: '60',
//   },
//   {
//     Icon: BsCircleFill,
//     name: 'Framer',
//     level: '45',
//   },
// ];

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Raduno',
    description:
      'Catch up without the fuss. Our app allows a group of people (friends, family, colleagues etc) to plan social events by making it easy to set up polls and vote on on the event location, event dates etc. It is solving the problems around organising activities for a group of people, and the friction that is usually involved in getting group decisions quickly and democratically.',
    image_path: '/images/radunologo.jpg',
    deployed_url: 'https://raduno-plans.netlify.app/',
    github_url: 'https://github.com/Akwei001/final-project-front-end-hexcode',

    key_techs: ['React', 'Postgresql', 'CSS'],
  },

  {
    id: 2,
    name: 'PinIt',
    description:
      'Save your links. We were give a task to improve the lives of fellow Bootcampers. Our idea was an app that would allow bootcampers to save links to articles and videos. ',
    image_path: '/images/pinitsearch.png',
    deployed_url: 'https://pinitapp.netlify.app/',
    github_url:
      'https://github.com/SchoolOfCode/national-project-week-professional-artists',

    key_techs: ['React', 'Postgresql', 'CSS'],
  },

  {
    id: 3,
    name: 'Sanity e-commerce',
    description: 'https://github.com/Akwei001/e-commerce',
    image_path: '/public/images/ecommerce front.png',
    deployed_url: 'https://akwei-ecommerce-sanity-stripe.vercel.app/',
    github_url: 'https://github.com/Akwei001/e-commerce',

    key_techs: ['NextJS', 'Sanity', 'Stripe'],
  },

  {
    id: 4,
    name: 'HiraKana Game',
    description:
      'A game to test your Hiragana and Katakana knowlegde. How many can you get correct in a row?',
    image_path: '/images/gamehome.png',
    deployed_url: 'https://extraordinary-pony-659a22.netlify.app',
    github_url: 'https://github.com/Akwei001/Japanese-Game.git',

    key_techs: ['React', 'Tailwind'],
  },
  {
    id: 5,
    name: 'Exchange rate app',
    description:
      'This exchange rate app is built using JavaScript, HTML and CSS. This project demonstrates using the fetch API to make an HTTP request to a 3rd party API to get exchange rate data.',
    image_path: '/public/images/Exchangerateapp.JPG',
    deployed_url: 'https://dazzling-jones-c87598.netlify.app/',
    github_url: 'https://github.com/Akwei001/Exchange-Rate-App',

    key_techs: ['HTML', 'CSS', 'JavaScript'],
  },
  // {
  //   id: 5,
  //   name: '',
  //   description: '',
  //   image_path: '/public/images/',
  //   deployed_url: '',
  //   github_url: '',

  //   key_techs: ['', '', ''],
  // },
  // {
  //   id: 5,
  //   name: '',
  //   description: '',
  //   image_path: '/public/images/',
  //   deployed_url: '',
  //   github_url: '',

  //   key_techs: ['', '', ''],
  // },
];
