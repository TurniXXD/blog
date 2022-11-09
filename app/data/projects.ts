import { Projects, Skills } from './types';

export const projects: Projects[] = [
  {
    name: 'Steepens',
    url: 'https://www.steepensband.eu/',
    imgUrl: 'img/projects/steepens.png', 
    isRocket: false
  },
  {
    name: 'Mezi Kozy',
    url: 'https://www.mezikozyband.cz/',
    imgUrl: 'img/projects/mezikozy.png',
    isRocket: false
  },
  {
    name: 'Ondrášek',
    url: 'https://www.ondrasek.cz/',
    imgUrl: 'img/projects/ondrasek.png',
    isRocket: true
  },
]

export const skills: Skills[] = [
  {
    name: 'Next.js',
    imgUrl: 'img/skills/nextjs.png',
  },
  {
    name: 'React.js',
    imgUrl: 'img/skills/reactjs.png',
  },
  {
    name: 'Typescript',
    imgUrl: 'img/skills/typescript.png',
  },
  {
    name: 'Go',
    imgUrl: 'img/skills/go.png',
  },
  {
    name: 'PostgreSQL',
    imgUrl: 'img/skills/postgresql.png',
  },
  {
    name: 'Linux',
    imgUrl: 'img/skills/linux.png',
  },
]