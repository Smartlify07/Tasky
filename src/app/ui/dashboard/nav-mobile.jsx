"use client";
import { useIcons } from "@/app/lib/hooks";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMobile() {
  const { TaskAlt, Home, Calendar } = useIcons();
  const pathname = usePathname();
  return (
    <nav className="bg-white transition-all fixed self-center bottom-5 w-11/12 py-4 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border  px-4 flex items-center gap-4 shadow-sm md:hidden">
      <ul className="flex items-center  w-full justify-center gap-7">
        <Link href={"/dashboard/todos"}>
          <TaskAlt
            className={`${clsx(
              "size-7 text-secondary",
              pathname === "/dashboard/todos" ? "text-[#333]" : ""
            )}`}
          />
        </Link>
        <Link href={"/dashboard"}>
          <Home
            className={`${clsx(
              "size-7 text-secondary",
              pathname === "/dashboard" ? "text-[#333]" : ""
            )}`}
          />
        </Link>

        <Link href={"/dashboard/schedule"}>
          <Calendar
            className={`${clsx(
              "size-7 text-secondary",
              pathname === "/dashboard/schedule" ? "text-[#333]" : ""
            )}`}
          />
        </Link>
      </ul>
    </nav>
  );
}
