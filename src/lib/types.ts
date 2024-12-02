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
  name: string;
  price: number;
  image: string;
  brandName: string;
  quantity: number;
}
