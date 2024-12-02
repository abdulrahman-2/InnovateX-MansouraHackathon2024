import Image from "next/image";
import React from "react";
import logo from "@/assets/footerLoge.svg";
import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

// const footerLinks = [
//   {
//     title: "وسائل التواصل :  ",
//     content: ["quickmart@gmail.com", "جمهورية مصر العربية"],
//   },
//   {
//     title: " ارقام التواصل :",
//     content: ["+201012389465", "+201012389465"],
//   },
//   {
//     title: "الروابط ",
//     content: ["الرئيسية", "من نحن", " المنتجات "],
//   },
// ];

const Footer = () => {
  return (
    <div className=" mt-20 bg-black">
      <div className=" container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
        {/* Logo and description section */}
        <div className="flex flex-col col-span-1 items-start">
          <Image
            src={logo}
            alt="logo"
            className="object-contain"
            width={240}
            height={240}
          />
          <hr className="w-2/3  border-[#DF5829]" />
          <p className="text-white text-[12px] mt-4 leading-4">
            هي وجهتك الذكية لشراء مواد البناء والمواد الخام، حيث نوفر منصة شاملة
            تربط الموردين بالمقاولين والشركات. نسعى لتقديم تجربة شراء سهلة
            وسريعة مع ضمان أعلى معايير الجودة والأسعار التنافسية. رؤيتنا هي
            تبسيط العمليات وتحسين كفاءة المشاريع عبر حلول مبتكرة وخدمات موثوقة.
          </p>
        </div>

        <div>
            <h1 className="font-bold text-xl text-white p-4 py-6">وسائل التواصل : </h1>
          <hr className="w-2/3 border-[#DF5829] " />
          <div className="flex items-center mt-4 gap-1">
            <MdOutlineMailOutline size={24} className="text-[#DF5829]  " />
            <p className="text-white text-xl ">quickmart@gmail.com</p>
          </div>
          <div className="flex items-center mt-4 gap-1">
            <IoLocationOutline size={24}  className="text-[#DF5829]  " />
            <p className="text-white text-xl ">جمهورية مصر العربية</p>
          </div>
            
        </div>
        <div>
            <h1 className="font-bold text-xl text-white p-4 py-6"> ارقام التواصل :</h1>
          <hr className="w-2/3 border-[#DF5829] " />
          <div className="flex items-center mt-4 gap-1">
            <FaPhone  size={20} className="text-[#DF5829]  " />
            <p className="text-white text-xl ">+201012389465</p>
          </div>
          <div className="flex items-center mt-4 gap-1">
            <FaPhone  size={20}  className="text-[#DF5829]  " />
            <p className="text-white text-xl "> +201012389465 </p>
          </div>
            
        </div>
        <div>
            <h1 className="font-bold text-xl text-white p-4 py-6"> الروابط : </h1>
          <hr className="w-2/3 border-[#DF5829] " />
         
       <div className="flex flex-col space-y-2 mt-4">
       <Link href="/" className="text-white text-xl hover:text-[#DF5829] ">الرئيسية</Link>
        <Link href="/about" className="text-white text-xl hover:text-[#DF5829] ">من نحن</Link>
        <Link href="/products" className="text-white text-xl hover:text-[#DF5829] "> المنتجات </Link>  
            
       </div>
        </div>
      </div>
      <div className='bg-[#DF5829] p-6 '>
        <p className='text-center text-white text-xl '>جميع حقوق محفوظة &copy; InnovateX 2025
        </p>
      </div>
    </div>
  );
};

export default Footer;
