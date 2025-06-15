// components/layout/Sidebar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoGridOutline,
  IoCodeSlashOutline,
  IoChatbubbleEllipsesOutline,
  IoSettingsOutline,
} from "react-icons/io5";

// Definisikan tipe untuk setiap item navigasi
interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: IoGridOutline,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: IoCodeSlashOutline,
  },
  {
    href: "/reviews",
    label: "Ulasan",
    icon: IoChatbubbleEllipsesOutline,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: IoSettingsOutline,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside id="sidebar" className="w-64 h-full bg-gray-800">
      <div className="px-3 py-4">
        <div className="flex items-center ps-2 mb-5  h-14">
          <span className="self-center text-white text-xl font-semibold whitespace-nowrap">
            Admin Panel
          </span>
        </div>

        <ul className="space-y-2 font-medium">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.label} className="group">
                <Link
                  href={item.href}
                  className={`flex items-center p-2 rounded-lg transition-colors duration-200 group ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 transition duration-75 ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  />
                  <span className="ms-3">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
