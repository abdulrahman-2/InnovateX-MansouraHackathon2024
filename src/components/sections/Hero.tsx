import Image from "next/image";
import React from "react";
import hero from "@/assets/hero.png";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div>
      <div className="h-[650px]  w-full relative ">
        <Image src={hero} alt="image" fill className="object-contain" />
      </div>
      <div className="absolute top-40 right-[2rem] sm:right-[5rem]">
        <p className=" text-5xl font-[400]">
          <span
            className="text-[#DF5829] 
"
          >
            لسنا الأسرع{" "}
          </span>
          فقط <br />
          بل افضل جودة وراحة{" "}
        </p>
        <Button className="mt-5 bg-[#DF5829] w-3/4" > اطلب تسعيره</Button>
      </div>
    </div>
  );
};

export default Hero;
