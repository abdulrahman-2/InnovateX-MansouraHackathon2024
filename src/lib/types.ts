import { StaticImageData } from "next/image";

export interface NavLinkType {
  title: string;
  href: string;
}

export type ServiceType = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export type ProductType = {
  id: number;
  name: string;
  category: string;
  price: number;
  brandName: string;
  image: StaticImageData;
};
