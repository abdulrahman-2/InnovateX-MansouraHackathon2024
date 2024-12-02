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

export interface CartType {
  id: number;
  name: string;
  price: number;
  image: string;
  brandName: string;
  quantity: number;
}

export type ProductType = {
  id: number;
  name: string;
  category: string;
  price: string;
  brandName: string;
  image: string | StaticImageData;
};
