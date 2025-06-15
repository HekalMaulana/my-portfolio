// /components/layout/BreadCrumbs.tsx

"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbItem className="">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-gray-500 text-xl"
        >
          <HiHome />
          Dashboard
        </Link>
      </BreadcrumbItem>

      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;
        const isActionPage = segment === "edit" || segment === "new";

        return (
          <BreadcrumbItem key={href}>
            {isLast || isActionPage ? (
              <span className="capitalize text-gray-500 text-xl">
                {segment}
              </span>
            ) : (
              <Link href={href} className="capitalize text-gray-500 text-xl">
                {segment}
              </Link>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
