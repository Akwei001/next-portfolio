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
    description: '',
    image_path: '',
    deployed_url: 'https://raduno-plans.netlify.app/',
    github_url: '',
    category: [],
    key_techs: ['', '', ''],
  },

  {
    name: 'PinIt',
    description: '',
    image_path: '',
    deployed_url: '',
    github_url: '',
    category: [],
    key_techs: ['', '', ''],
  },

  {
    name: 'Online Music player',
    description: '',
    image_path: '',
    deployed_url: '',
    github_url: '',
    category: [],
    key_techs: ['', '', ''],
  },

  {
    name: '',
    description: '',
    image_path: '',
    deployed_url: '',
    github_url: '',
    category: [],
    key_techs: ['', '', ''],
  },
];
