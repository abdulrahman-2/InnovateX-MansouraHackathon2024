import { ModeToggle } from "@/components/layout/ModeToggle";
import lightLogo from "@/assets/lightLogo.svg";
import darkLogo from "@/assets/darkLogo.svg";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import NavLink from "./NavLink";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  return (
    <div className="shadow-lg h-20 dark:shadow-gray-100/10 px-5 relative z-50">
      <div className="container flex items-center justify-between">
        <div>
          <div className="dark:hidden flex items-center relative h-20 w-20">
            <Image src={lightLogo} alt="logo" fill></Image>
          </div>
          <div className="hidden dark:flex items-center relative h-20 w-20">
            <Image src={darkLogo} alt="logo" fill></Image>
          </div>
        </div>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.href} link={link} />
          ))}
          <Link href="/cart">
            <FaCartShopping size={21} className="cursor-pointer" />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
