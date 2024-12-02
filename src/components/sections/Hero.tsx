import Image from "next/image";
import React from "react";
import hero from "@/assets/hero-removebg.png";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="container relative">
      <div className="h-[650px] w-full">
        <Image
          src={hero}
          alt="image"
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="absolute top-40 right-[2rem] sm:right-[5rem]">
        <p className=" text-5xl font-[400] tracking-widest leading-[1.4]">
          <span
            className="text-[#DF5829] 
"
          >
            لسنا الأسرع{" "}
          </span>
          فقط <br />
          بل افضل جودة وراحة{" "}
        </p>
        <Button className="mt-5 bg-[#DF5829] w-3/4"> اطلب تسعيره</Button>
      </div>
    </div>
  );
};

export default Hero;
