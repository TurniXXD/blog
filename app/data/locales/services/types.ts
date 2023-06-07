import type { Icons } from "~/data/types";

interface CustomerFieldDesc {
  title: string
  text: string
}

interface CustomerField {
	title: string;
	icon: Icons;
	desc: Array<CustomerFieldDesc>
}

export default interface IServices {
  title: string;
  desc: string;
  customers: Array<CustomerField>
}