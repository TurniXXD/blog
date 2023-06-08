import type { EnumSkills } from "./models";

export interface Projects {
	name: string;
	url: string;
	imgUrl: string;
	isRocket: boolean;
}

export interface Skills {
	skillUrl: string;
	skillSvg: EnumSkills;
}

export enum Icons {
	Github = "github",
	LinkedIn = "linkedin",
	Telegram = "telegram",
	Email = "email",
	Cabin = "cabin",
	Coffee = "coffee",
  Tea = "tea",
	Restaurant = "restaurant",
  Hammer = "hammer",
  Lock = "lock",
  Cart = "cart",
  Blog = "blog",
  Plane = "plane",
  Scissors = "scissors",
  Guitar = "guitar",
  Lightbulb = "lightbulb",
  Other = "other",
}
