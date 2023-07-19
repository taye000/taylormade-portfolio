"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const navItems: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="md:py-5 md:block">
            <h2 className="text-2xl font-bold">Taylor Gitari</h2>
          </div>
        </div>
        <div className="md:flex md:space-x-6">
          {navItems.map((item, index) => {
            return <a key={index}>{item.label}</a>;
          })}
          {currentTheme === "dark" ? (
            <button onClick={()=>setTheme("light")} className="bg-state-100 p2 rounded-xl">
              <RiSunLine size={25} />
            </button>
          ) : (
            <button onClick={()=>setTheme("dark")} className="bg-state-100 p2 rounded-xl">
              <RiMoonFill size={25}/>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
