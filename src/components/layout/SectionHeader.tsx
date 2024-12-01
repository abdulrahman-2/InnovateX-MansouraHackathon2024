import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="relative my-20 w-fit mx-auto before:content-[''] before:absolute before:bottom-0 before:h-[3px] before:rounded-lg before:w-full before:bg-[#DF5829]">
      <h2 className="text-3xl font-bold w-fit">{title}</h2>
    </div>
  );
};

export default SectionHeader;
