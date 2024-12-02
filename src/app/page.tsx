import MotionDiv from "@/components/layout/MotionDiv";
import BestSale from "@/components/sections/BestSale";
import Hero from "@/components/sections/Hero";

import Services from "@/components/sections/Services";
import React from "react";

const Home = () => {
  return (
    <div>
      <MotionDiv>
        <Hero />
      </MotionDiv>
      <MotionDiv>
        <Services />
      </MotionDiv>
      <MotionDiv>
        <BestSale />
      </MotionDiv>
    </div>
  );
};

export default Home;
