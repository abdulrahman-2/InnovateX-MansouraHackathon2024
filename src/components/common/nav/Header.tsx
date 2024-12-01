import { ModeToggle } from "@/components/layout/ModeToggle";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto">
    <div className="">
      7mani
    </div>
    <h1>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
    <div className="flex items-center gap-4">
      <Link href='/'>
      Home
      </Link>
      <Link href='/about'>
      Abuot
      </Link>
      <FaCartShopping />
    
    <ModeToggle />
    </div>
  </div>
  )
};

export default Header;
