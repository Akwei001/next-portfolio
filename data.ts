import { IProject, Skill } from './types';
import { BsCircleFill } from 'react-icons/bs';

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'HTML',
    level: '100%',
  },
  {
    Icon: BsCircleFill,
    name: 'CSS',
    level: '100%',
  },
  {
    Icon: BsCircleFill,
    name: 'JavaScript',
    level: '100%',
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
    name: 'Bootstrap',
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
    name: 'Raduno',
    description: 'Catch up without the fuss',
    image_path: '',
    deployed_url: 'https://raduno-plans.netlify.app/',
    github_url: 'https://github.com/Akwei001/final-project-front-end-hexcode',
    category: [],
    key_techs: ['React', 'Postgresql', 'CSS'],
  },

  {
    name: 'PinIt',
    description: 'save your links',
    image_path: '',
    deployed_url: 'https://pinitapp.netlify.app/',
    github_url:
      'https://github.com/SchoolOfCode/national-project-week-professional-artists',
    category: [],
    key_techs: ['React', 'Postgresql', 'CSS'],
  },

  {
    name: 'Online Music player',
    description: 'Play your tracks online',
    image_path: '',
    deployed_url: '',
    github_url: '',
    category: [],
    key_techs: ['', '', ''],
  },

  {
    name: 'HiraKana Game',
    description: 'Test your Katakana & Hiragana knowledge',
    image_path: '',
    deployed_url: 'https://meek-cocada-df7f5d.netlify.app/',
    github_url: 'https://github.com/Akwei001/Japanese-Game.git',
    category: [],
    key_techs: ['React', 'Tailwind', ''],
  },
];
