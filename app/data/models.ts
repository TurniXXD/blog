import type { Projects, Skills, Socials } from "./types";
import { Icons } from "./types";

export const projects: Projects[] = [
  {
    name: "Steepens",
    url: "https://www.steepensband.eu/",
    imgUrl: "img/projects/steepens.png",
    isRocket: false,
  },
];

export const skills: Skills[] = [
  {
    skillUrl: "https://nextjs.org/",
    imgUrl: "img/skills/nextjs.svg",
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
  {
    skillUrl: "https://www.figma.com/",
    imgUrl: "img/skills/figma.svg",
  },
];

export const socials: Socials[] = [
  {
    url: "https://github.com/TurniXXD",
    icon: Icons.github,
  },
  {
    url: "https://www.linkedin.com/in/jakub-vantuch-552514197/",
    icon: Icons.linkedin,
  },
  {
    url: "https://t.me/turnix",
    icon: Icons.telegram,
  },
  {
    url: "mailto:contact@vantuch.dev",
    icon: Icons.email,
  },
];
