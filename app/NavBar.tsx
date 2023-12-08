"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./assets/newLogo.png";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issues" },
  ];
  return (
    <nav className="flex items-center space-x-6 border-b mb-5 px-5 h-14">
      <Link href="">
        <Image width={100} src={logo} alt="logo"></Image>
      </Link>
      <ul className="flex space-x-6 font-bold">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
                "text-zinc-500": link.href !== currentPath,
                "text-zinc-900": link.href === currentPath,
                "hover:text-zinc-800 transition-colors": true

            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
