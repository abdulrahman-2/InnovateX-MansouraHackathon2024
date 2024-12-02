"use client";

import { useState } from "react";
import Image from "next/image";
import productsPanner from "@/assets/productsPannar.png";
import { products } from "@/data/data";
import Card from "@/components/layout/Card";
import { ProductType } from "@/lib/types";

// Defining a TypeScript interface for the product data structure
interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  [key: string]: any; // This will allow flexibility for other properties
}

const AllProducts = () => {
  // States for filters
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Set default selected categories (only 'كل الأقسام' selected by default)
  const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({
    "كل الأقسام": true,  // Default 'select all' category is selected
    دهانات: false,
    كهرباء: false,
    سباكة: false,
    أسمنت: false,
    أدوات: false,
  });

  // Set default selected brands (only 'كل العلامات التجارية' selected by default)
  const [selectedBrands, setSelectedBrands] = useState<Record<string, boolean>>({
    "كل العلامات التجارية": true,  // Default 'select all' brands is selected
    باكين: false,
    "جي ال سي": false,
    كابسي: false,
    "اوستر اي بي": false,
    "بي ار": false,
    "مصطفى محمود": false,
    ديروافيت: false,
    كيسيل: false,
    "شنايدر الكترونيك": false,
    فينوس: false,
  });

  // Handle search change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle category checkbox change
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  // Handle brand checkbox change
  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prevState) => ({
      ...prevState,
      [brand]: !prevState[brand],
    }));
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter((product: ProductType) => {
    const matchesCategory =
      selectedCategories[product.category] || selectedCategories["كل الأقسام"];
    const matchesBrand =
      selectedBrands[product.brandName] || selectedBrands["كل العلامات التجارية"];
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesBrand && matchesSearch;
  });

  return (
    <div>
      <div className="relative rounded-lg overflow-hidden w-full h-[240px] mt-10">
        <Image
          src={productsPanner}
          alt="productsPanner"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mt-10">
        <div className="grid grid-cols-1 items-start md:grid-cols-5 gap-5">
          <div className="col-span-1 md:sticky md:top-10 p-3 border border-border rounded-md">
            <div>
              <h3 className="font-semibold text-[#DF5829] mb-3">البحث</h3>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-2 border border-border rounded-lg"
                placeholder="ابحث عن منتج"
              />
            </div>
            <div className="my-5">
              <h3 className="font-semibold text-[#DF5829] mb-3">اقسام</h3>
              <div className="flex flex-col gap-3">
                {Object.keys(selectedCategories).map((category) => (
                  <div
                    key={category}
                    className="flex items-center justify-between gap-3"
                  >
                    <label htmlFor={category} className="font-medium">
                      {category}
                    </label>
                    <input
                      type="checkbox"
                      id={category}
                      checked={selectedCategories[category]}
                      onChange={() => handleCategoryChange(category)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div className="mt-5">
              <h3 className="font-semibold text-[#DF5829] mb-3">
                العلامات التجارية
              </h3>
              <div className="flex flex-col gap-3">
                {Object.keys(selectedBrands).map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center justify-between gap-3"
                  >
                    <label htmlFor={brand} className="font-medium">
                      {brand}
                    </label>
                    <input
                      type="checkbox"
                      id={brand}
                      checked={selectedBrands[brand]}
                      onChange={() => handleBrandChange(brand)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <h1 className="font-semibold text-center text-[#DF5829] text-2xl mb-5">
              المنتجات
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((product: ProductType) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
