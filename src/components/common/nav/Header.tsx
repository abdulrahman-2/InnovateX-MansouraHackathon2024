import { ModeToggle } from "@/components/layout/ModeToggle";
import lightLogo from "@/assets/light.png";
import darkLogo from "@/assets/dark.png";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import NavLink from "./NavLink";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "الرئيسية",
    href: "/",
  },
  {
    title: "من نحن",
    href: "/about",
  },
  {
    title: "تواصل معنا",
    href: "/contact",
  },
  {
    title: "خدماتنا",
    href: "/services",
  },
];

const Header = () => {
  return (
    <div className="shadow-lg h-20 dark:shadow-gray-100/10 px-5 relative z-50 flex items-center justify-between">
      <div className="container flex items-center justify-between">
        <div>
          <div className="dark:hidden flex items-center relative h-10 w-44">
            <Image src={lightLogo} alt="logo" fill></Image>
          </div>
          <div className="hidden dark:flex items-center relative h-10 w-44">
            <Image src={darkLogo} alt="logo" fill></Image>
          </div>
        </div>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.href} link={link} />
          ))}
          <Link href="/cart">
            <FaCartShopping
              size={21}
              className="cursor-pointer hover:text-[#332b28] duration-200"
            />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
