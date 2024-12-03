"use client";

import { addToCart } from "@/lib/store/slices/cartSlice";
import { ProductType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";

const Card = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="relative bg-card border border-border rounded-lg p-5 text-center flex flex-col gap-5 hover:-translate-y-7 hover:bg-[#DF582938] duration-300">
      <div
        onClick={handleAddToCart}
        className="flex items-center z-10 justify-center gap-1 cursor-pointer text-sm bg-gray-200 p-2 rounded-lg absolute top-2 right-2 dark:text-black"
      >
        <IoMdAddCircle size={18} />
        <span>اضف للعربه</span>
      </div>
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-[200px] rounded-md overflow-hidden">
          <Image
            src={product.image}
            alt="service image"
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <span className=" first-letter:text-[#DF5829] font-semibold text-lg">
        {product.brandName}
      </span>
      <h2 className="text-center text-gray-400">{product.title}</h2>
      <p className="text-[#DF5829] text-2xl font-bold">{product.price} جنية</p>
    </div>
  );
};

export default Card;
