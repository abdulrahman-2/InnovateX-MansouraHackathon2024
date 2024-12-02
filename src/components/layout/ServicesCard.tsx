import { ServiceType } from "@/lib/types";
import Image from "next/image";
import React from "react";

const ServicesCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className="bg-[#f5f5f5] rounded-lg p-5 text-center flex flex-col gap-5 items-center justify-center hover:-translate-y-7 hover:bg-[#DF582938] duration-300">
      <Image src={service.image} alt="service image" width={50} height={50} />
      <h2>{service.name}</h2>
      <p className="text-center text-gray-400">{service.description}</p>
    </div>
  );
};

export default ServicesCard;
