import type { Projects, Skills } from "./types";

export const projects: Projects[] = [
  {
    name: "Steepens",
    url: "https://www.steepensband.eu/",
    imgUrl: "img/projects/steepens.png",
    isRocket: false,
  },
];

export enum EnumSkills {
  NextJs = "nextjs",
  Typescript = "typescript",
  Golang = "golang",
  PostgreSql = "postgresql",
  Linux = "linux",
  NodeJs = "nodejs",
  Figma = "figma",
}

export const skills: Skills[] = [
  {
    skillUrl: "https://nextjs.org/",
    skillSvg: EnumSkills.NextJs,
  },
  {
    skillUrl: "https://www.typescriptlang.org/",
    skillSvg: EnumSkills.Typescript,
  },
  {
    skillUrl: "https://nodejs.org/",
    skillSvg: EnumSkills.NodeJs,
  },
  {
    skillUrl: "https://go.dev/",
    skillSvg: EnumSkills.Golang,
  },
  {
    skillUrl: "https://www.postgresql.org/",
    skillSvg: EnumSkills.PostgreSql,
  },
  {
    skillUrl: "https://archlinux.org/",
    skillSvg: EnumSkills.Linux,
  },
  {
    skillUrl: "https://www.figma.com/",
    skillSvg: EnumSkills.Figma,
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
