import Image from "next/image";
import productsPanner from "@/assets/productsPannar.png";
import { products } from "@/data/data";
import Card from "@/components/layout/Card";

const Products = () => {
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
                className="w-full p-2 border border-border rounded-lg"
              />
            </div>
            <div className="my-5">
              <h3 className="font-semibold text-[#DF5829] mb-3">اقسام</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    كل الأقسام{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" checked />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    دهانات{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    كهرباء{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    سباكة{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    أسمنت{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    أدوات{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
              </div>
            </div>
            <hr />

            <div className="mt-5">
              <h3 className="font-semibold text-[#DF5829] mb-3">
                العلامات التجارية
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    كل العلامات التجارية{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" checked />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    باكين{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    جي ال سي{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    كابسي{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    اوستر اي بي{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    بي ار{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    مصطفى محمود{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    ديروافيت{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    كيسيل{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    شنايدر الكترونيك{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="filter" className="font-medium">
                    فينوس{" "}
                  </label>
                  <input type="checkbox" name="filter" id="filter" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <h1 className="font-semibold text-center text-[#DF5829] text-2xl mb-5">
              المنتجات
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
