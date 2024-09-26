"use client";
import { raleway } from "@/app/lib/hooks";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className={`${raleway.className} bg-yellow-1000 z-[1000] px-5 min-h-screen flex  relative flex-col items-center justify-center w-full  `}
    >
      <Image
        className="top-[0%] md:top-[20%]  absolute w-[200px] right-[10%]"
        src="/assets/images/panda.png"
        alt="panda"
        width={200}
        height={200}
      />

      <header className="flex flex-col  gap-3 items-center justify-center text-center md:w-7/12 ">
        <h1 className="text-5xl md:text-6xl text-neutral-900  leading-[1.3] font-bold capitalize">
          Manage your personal life with Taskbud
        </h1>
        <h3 className="text-xl text-neutral-900">
          Let Taskbud take care of your tasks,
          <span className="py-2 px-2 mt-2 block transform skew-y-2 text-white bg-blue-600 bg-opacity-90">
            so you can take care of what matters.
          </span>
        </h3>
      </header>

      <Link
        href={"/signup"}
        className="py-3 px-8 rounded-md bg-orange-600 mt-5 text-white font-medium"
      >
        Get Started
      </Link>

      {/* Oval */}
      <div className="bg-orange-600 w-[10px] h-[10px] absolute rounded-full top-4 left-4 "></div>
      <div className="bg-orange-600 w-[10px] h-[10px] absolute rounded-full top-4 right-4 "></div>
      <div className="bg-orange-600 w-[10px] h-[10px] absolute rounded-full bottom-10 right-4 "></div>
      <div className="bg-orange-600 w-[10px] h-[10px] absolute rounded-full bottom-24 left-10 "></div>
      {/* Square */}
      <div className="bg-purple-500 animate-rotate rotate-45 w-[50px] h-[50px] md:w-[50px] md:h-[50px] absolute -bottom-3 -right-12 "></div>
    </section>
  );
}
