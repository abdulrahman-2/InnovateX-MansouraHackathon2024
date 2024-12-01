import { ModeToggle } from "@/components/layout/ModeToggle";
import lightLogo from "@/assets/lightLogo.svg";
import darkLogo from "@/assets/darkLogo.svg";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import NavLink from "./NavLink";
import Image from "next/image";

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
    <div className="flex h-20 items-center justify-between shadow-lg dark:shadow-gray-100/10 px-5">
      <div className="dark:hidden flex items-center relative h-60 w-60">
        <Image src={lightLogo} alt="logo" fill></Image>
      </div>
      <div className="hidden dark:flex items-center relative h-52 w-52">
        <Image src={darkLogo} alt="logo" fill></Image>
      </div>
      <div className="flex items-center gap-8">
        {links.map((link) => (
          <NavLink key={link.href} link={link} />
        ))}
        <FaCartShopping />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
