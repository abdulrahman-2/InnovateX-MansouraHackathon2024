import { ProductType } from "@/lib/types";
import Image from "next/image";
import React from "react";

const ServicesCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="bg-[#f5f5f5] rounded-lg p-5 text-center flex flex-col gap-5 items-center justify-center hover:-translate-y-7 hover:bg-[#DF582938] duration-300">
      <Image src={product.image} alt="service image" width={50} height={50} />
      <span>{product.brandName}</span>
      <h2 className="text-center text-gray-400">{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default ServicesCard;
