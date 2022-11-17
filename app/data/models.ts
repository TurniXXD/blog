import type { Projects, Skills } from "./types";

export const projects: Projects[] = [
  {
    name: "Steepens",
    url: "https://www.steepensband.eu/",
    imgUrl: "img/projects/steepens.png",
    isRocket: false,
  },
  {
    name: "Mezi Kozy",
    url: "https://www.mezikozyband.cz/",
    imgUrl: "img/projects/mezikozy.png",
    isRocket: false,
  },
  {
    name: "Ondrášek",
    url: "https://www.ondrasek.cz/",
    imgUrl: "img/projects/ondrasek.png",
    isRocket: true,
  },
];

export const skills: Skills[] = [
  {
    skillUrl: "https://nextjs.org/",
    imgUrl: "img/skills/nextjs.svg",
  },
  {
    skillUrl: "https://remix.run/",
    imgUrl: "img/skills/remix.svg",
  },
  {
    skillUrl: "https://www.typescriptlang.org/",
    imgUrl: "img/skills/typescript.svg",
  },
  {
    skillUrl: "https://go.dev/",
    imgUrl: "img/skills/golang.svg",
  },
  {
    skillUrl: "https://www.postgresql.org/",
    imgUrl: "img/skills/postgresql.svg",
  },
  {
    skillUrl: "https://archlinux.org/",
    imgUrl: "img/skills/linux.svg",
  },
];
