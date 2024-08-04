"use client";
import { Lato } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaCalendarAlt,
  FaHome,
  FaList,
  FaRegCalendarAlt,
  FaRegListAlt,
} from "react-icons/fa";

const lato = Lato({
  weight: ["400"],
  subsets: ["latin"],
});

export default function NavLinks() {
  const pathname = usePathname();

  console.log();
  return (
    <ul
      className={`flex flex-col gap-5 py-5 px-5 rounded-xl bg-white ${lato.className}`}
    >
      <Link
        className={`text-base flex items-center gap-3 ${
          pathname === "/dashboard" ? "font-bold" : ""
        }`}
        href={"/dashboard"}
      >
        <FaHome className={`text-dark `} /> Dashboard
      </Link>
      <Link
        className={`text-base flex items-center gap-3 ${
          pathname === "/todos" ? "font-bold" : ""
        }`}
        href={"/todos"}
      >
        <FaRegListAlt className={`text-dark `} /> Todos
      </Link>
      <Link
        className={`text-base flex items-center gap-3 ${
          pathname === "/calendar" ? "font-bold" : ""
        }`}
        href={"/calendar"}
      >
        <FaRegCalendarAlt className={`text-dark `} /> Calendar
      </Link>
    </ul>
  );
}
