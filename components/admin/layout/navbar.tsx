// /components/admin/layout/navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  {
    href: "/admin/dashboard",
    label: "Dashboard",
  },
  {
    href: "/admin/projects",
    label: "Projects",
  },
  {
    href: "/admin/ulasan",
    label: "Ulasan",
  },
  {
    href: "/admin/Settings",
    label: "Settings",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 w-full fixed z-20">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-6">
        <a
          href="/admin/dashboard"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={"/letter-h.png"} width={45} height={45} alt="logo" />
          <span className="self-center text-2xl ms-3 font-semibold whitespace-nowrap dark:text-white">
            Admin Panel
          </span>
        </a>

        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          type="button"
          className="w-10 h-10 text-gray-500 rounded-lg ring-3 ring-gray-700"
          aria-controls="navbar"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open navbar</span>
          {isOpen ? (
            <IoCloseOutline className="w-10 h-10 font-bold" />
          ) : (
            <IoMenuOutline className="w-10 h-10 font-bold" />
          )}
        </button>

        {/* Content */}
        <div className={`w-full ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col mt-4 gap-1">
            {navItems.map((item) => {
              const isActive = pathName.startsWith(item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`block py-2 px-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      isActive ? "bg-indigo-600 text-white" : "text-gray-400"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
