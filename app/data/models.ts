import type { Projects, Skills } from "./types";
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

export interface Socials {
	url: string;
	icon: SocialsIcons;
}

enum SocialsIcons {
  github = "github",
	linkedin = "linkedin",
	telegram = "telegram",
	email = "email",
}

export const socials: Socials[] = [
  {
    url: "https://github.com/TurniXXD",
    icon: SocialsIcons.github,
  },
  {
    url: "https://www.linkedin.com/in/jakub-vantuch-552514197/",
    icon: SocialsIcons.linkedin,
  },
  {
    url: "https://t.me/turnix",
    icon: SocialsIcons.telegram,
  },
  {
    url: "mailto:contact@vantuch.dev",
    icon: SocialsIcons.email,
  },
];
