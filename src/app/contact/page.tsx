import { Input } from "@/components/ui/input";
import Image from "next/image";
import contactImage from "@/assets/contact.png";

const page = () => {
  return (
    <>
      <h1 className="bg-[#DF5829] py-8 text-center font-[300] text-5xl text-white">
        تواصل معنا
      </h1>
      <div className="container mt-20">
        <div className="flex items-center justify-between gap-10">
          <div className="flex flex-col gap-5 p-5 border border-[#DF5829] rounded-lg flex-1">
            <div className="flex flex-col lg:flex-row w-full items-center gap-10">
              <div className="flex w-1/2 flex-col gap-1">
                <label className="text-[#DF5829]" htmlFor="">
                  الاسم الاول
                </label>
                <Input className="w-full" />
              </div>
              <div className="flex w-1/2 flex-col gap-1">
                <label className="text-[#DF5829]" htmlFor="">
                  الاسم الثاني
                </label>
                <Input className="" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full items-center gap-10">
              <div className="flex w-1/2 flex-col gap-1">
                <label className="text-[#DF5829]" htmlFor="">
                  رقم تلفونك{" "}
                </label>
                <Input className="" />
              </div>
              <div className="flex w-1/2 flex-col gap-1">
                <label className="text-[#DF5829]" htmlFor="">
                  البريد الالكتروني{" "}
                </label>
                <Input className="" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#DF5829]" htmlFor="">
                راسلنا
              </label>
              <textarea className="w-full h-[200px] resize-none border border-border rounded-lg" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-5 mb-3">
              <h1 className="p-3 bg-white rounded-lg text-center font-semibold border border-border">
                quickmart@gmail.com
              </h1>
              <h1 className="p-3 bg-white rounded-lg text-center font-semibold border border-border">
                +20156482165
              </h1>
              <h1 className="p-3 bg-white rounded-lg text-center font-semibold border border-border">
                مصر - المنصورة
              </h1>
            </div>
            <div className="w-full h-[250px] relative">
              <Image src={contactImage} alt="contact" fill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
