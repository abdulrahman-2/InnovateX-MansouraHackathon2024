import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="relative my-20 w-fit mx-auto before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2  before:h-[3px] before:rounded-lg before:w-[calc(100%+2rem)] before:bg-[#DF5829]">
      <h2 className="text-3xl font-bold w-fit">{title}</h2>
    </div>
  );
};

export default SectionHeader;
