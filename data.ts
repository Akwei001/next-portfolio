import { IProject, Skill } from './types';
import { BsCircleFill } from 'react-icons/bs';
import Image from 'next/image';

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'HTML',
    level: '100',
  },
  {
    Icon: BsCircleFill,
    name: 'CSS',
    level: '100',
  },
  {
    Icon: BsCircleFill,
    name: 'JavaScript',
    level: '100',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '100',
  },
  {
    Icon: BsCircleFill,
    name: 'NodeJS',
    level: '100',
  },
  {
    Icon: BsCircleFill,
    name: 'SQL',
    level: '100',
  },
  {
    Icon: BsCircleFill,
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
    description: 'Catch up without the fuss',
    image_path: '/images/radunologo.jpg',
    deployed_url: 'https://raduno-plans.netlify.app/',
    github_url: 'https://github.com/Akwei001/final-project-front-end-hexcode',

    key_techs: ['React', 'Postgresql', 'CSS'],
  },

  {
    id: 2,
    name: 'PinIt',
    description: 'save your links',
    image_path: '/images/pinitsearch.png',
    deployed_url: 'https://pinitapp.netlify.app/',
    github_url:
      'https://github.com/SchoolOfCode/national-project-week-professional-artists',

    key_techs: ['React', 'Postgresql', 'CSS'],
  },

  // {
  //   id: 3,
  //   name: 'Online Music player',
  //   description: 'Play your tracks online',
  //   image_path: '/images/playerscreen.png',
  //   deployed_url: '',
  //   github_url: '',

  //   key_techs: ['', '', ''],
  // },

  {
    id: 4,
    name: 'HiraKana Game',
    description: 'Test your Katakana & Hiragana knowledge',
    image_path: '/images/Jgameboard.png',
    deployed_url: 'https://meek-cocada-df7f5d.netlify.app/',
    github_url: 'https://github.com/Akwei001/Japanese-Game.git',

    key_techs: ['React', 'Tailwind'],
  },
];
