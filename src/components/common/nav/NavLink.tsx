"use client";

import { NavLinkType } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }: { link: NavLinkType }) => {
  const pathName = usePathname();
  const isActive = pathName === link.href;
  return (
    <Link href={link.href} className={`${isActive && "text-[#DF5829]"}`}>
      {link.title}
    </Link>
  );
};

export default NavLink;
