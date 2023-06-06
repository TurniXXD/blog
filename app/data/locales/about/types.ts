import type { Icons } from "~/data/types";

interface CustomerField {
	title: string;
	icon: Icons;
	text: string;
}

export default interface IAbout {
  title: string;
  desc: string;
  customers: Array<CustomerField>
}