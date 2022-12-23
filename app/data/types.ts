export interface Projects {
  name: string;
  url: string;
  imgUrl: string;
  isRocket: boolean;
}

export interface Skills {
  skillUrl: string;
  imgUrl: string;
}

export enum Icons {
  github = "github",
  linkedin = "linkedin",
  telegram = "telegram",
  email = "email",
}

export interface Socials {
  url: string;
  //name: string;
  icon: Icons;
}
