import React from "react";
import SectionHeader from "../layout/SectionHeader";
import { products } from "@/data/data";
import Card from "../layout/Card";
import { Button } from "../ui/button";
import Link from "next/link";

const BestSale = () => {
  return (
    <div className="container">
      <SectionHeader title="الاكثر مبيعا" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.slice(0, 4).map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Link href="/products" className="mt-5 mx-auto block w-fit">
        <Button className="bg-[#DF5829] px-20">لمزيد من المنتجات</Button>
      </Link>
    </div>
  );
};

export default BestSale;
