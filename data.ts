import { IProject, Skill } from './types';
// import { BsCircleFill } from 'react-icons/bs';

export const languages: Skill[] = [
  {
    Icon: '/images/html-5.png',
    name: 'HTML',
    level: '100',
  },
  {
    Icon: '/images/css3.png',
    name: 'CSS',
    level: '100',
  },
  {
    Icon: '/images/javascript.png',
    name: 'JavaScript',
    level: '100',
  },
  {
    Icon: '/images/icons8-react.png',
    name: 'React',
    level: '100',
  },
  {
    Icon: '/images/node-js.png',
    name: 'NodeJS',
    level: '100',
  },
  {
    Icon: '/images/icons8-postgresql-96.png',
    name: 'PostgreSQL',
    level: '100',
  },
  {
    Icon: '/images/github.png',
    name: 'Git/GitHub',
    level: '100',
  },
  {
    Icon: '/images/icons8-nextjs.png',
    name: 'NextJS',
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
    description:
      'A fully responsive e-commerce application with payment functionality. It is built using NextJS featuring serverside rendering and static generation, as well as React context for state management. Sanity was used for content management, allowing clients to change the home page and product details. Stripe is fully integrated with all advanced cart functionalities to allow payments to be taken.  ',
    image_path: '/images/ecommerce front.png',
    deployed_url: 'https://akwei-ecommerce-sanity-stripe.vercel.app/',
    github_url: 'https://github.com/Akwei001/e-commerce',

    key_techs: ['NextJS', 'Sanity', 'Stripe'],
  },

  {
    id: 4,
    name: 'HiraKana Game',
    description:
      'A personal project to practice coding and to help with studying for the Japanese Language Proficiency test level 5. The app consist of a Hiragana/Katakana quiz, a memory game and vocabulary list',
    image_path: '/images/gamehome.png',
    deployed_url: 'https://extraordinary-pony-659a22.netlify.app',
    github_url: 'https://github.com/Akwei001/Jgame',

    key_techs: ['React', 'React Router', 'Tailwind', 'Cypress'],
  },
  {
    id: 5,
    name: 'Exchange rate app',
    description:
      'This exchange rate app is built using JavaScript, HTML and CSS. This project demonstrates using the fetch API to make an HTTP request to a 3rd party API to get exchange rate data.',
    image_path: '/images/Exchangerateapp.JPG',
    deployed_url: 'https://dazzling-jones-c87598.netlify.app/',
    github_url: 'https://github.com/Akwei001/Exchange-Rate-App',

    key_techs: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 6,
    name: 'Amplify Player',
    description:
      'A full-stack music player app created using AWS amplify. Users can create a login, and upload their own files to the database.The app uses a React front end connected to a Dynamo Db database via Graph Ql.',
    image_path: '/images/Amplify player.png',
    deployed_url: 'https://master.drp46atynvtc.amplifyapp.com/',
    github_url: 'https://github.com/Akwei001/amplify-player',

    key_techs: ['JavaScript', 'React', 'AWS', 'Graph Ql', 'DynamoDb'],
  },
  // {
  //   id: 7,
  //   name: '',
  //   description: '',
  //   image_path: '/public/images/',
  //   deployed_url: '',
  //   github_url: '',

  //   key_techs: ['', '', ''],
  // },
];
