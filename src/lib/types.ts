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

export interface ProductType {
  id: number;
  title: string;
  category: string;
  price: number;
  brandName: string;
  image: string | StaticImageData;
  description?: string;
  quantity?: number;
}
