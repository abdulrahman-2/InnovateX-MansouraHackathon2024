import { h1 } from "framer-motion/client";
import Image from "next/image";
import React from "react";
import productImage from "@/assets/productTest.png";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <h1 className="bg-[#DF5829] py-8 text-center font-[300] text-5xl text-white">
        تفاصيل المنتج
      </h1>
      <div className="container flex  items-start justify-between w-full mt-20 gap-5">
        <div className="w-1/2 flex  flex-col space-y-5  ">
          <div className='text-3xl text-[#DF5829] font-bold relative before:content-[""] before:absolute before:-bottom-2 before:w-[70px] before:bg-black before:h-[2px]'>
            باكين
          </div>
          <h4 className=" text-5xl">ورنيش مط 1001</h4>
          <p className="text-3xl text-gray-400">كهرباء</p>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <h1 className="text-5xl text-[#DF5829]">3500 جنية</h1>
          <Button className="bg-[#DF5829] py-6 w-3/4">أضف الى السلة </Button>
        </div>
        <div className="w-1/2 relative h-80">
          <Image src={productImage} alt="image" fill />
        </div>
      </div>
    </>
  );
};

export default page;
