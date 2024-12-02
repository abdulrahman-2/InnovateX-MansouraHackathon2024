import React from "react";
import SectionHeader from "../layout/SectionHeader";
import { products } from "@/data/data";
import ServicesCard from "../layout/ServicesCard";

const BestSaler = () => {
  return (
    <div>
      <SectionHeader title="الاكثر مبيعا" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ServicesCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSaler;
