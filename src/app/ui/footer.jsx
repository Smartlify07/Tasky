"use client";
import { raleway } from "@/app/lib/hooks";
import Image from "next/image";

export default function Footer() {
  return (
    <section
      className={`${raleway.className} z-[1000] bg-neutral-900 py-20 px-6 flex  relative flex-col items-center justify-center w-full   `}
    >
      <div className="grid grid-cols-2  w-11/12  ">
        <div className="flex flex-col items-center gap-2 col-span-2">
          <div className="flex items-center  ">
            <h1 className="text-white font-semibold text-3xl">Taskbud </h1>
            <Image
              priority={false}
              quality={100}
              className="w-[100px]"
              src="/assets/images/panda.png"
              width={100}
              height={1000}
              unoptimized
              alt="panda"
            />
          </div>

          <div className="flex flex-wrap items-center mt-3 gap-4">
            <button className="bg-orange-600 rounded-md text-white font-semibold py-3 px-8 transition-all hover:bg-purple-600">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Oval */}
      <div className="bg-orange-600 -left-5 absolute rounded-[200%] w-[100px] h-[50px] top-10 rotate-45  md:block"></div>

      {/* Square */}
      <div className="bg-purple-500 rotate-45 w-[150px] h-[150px] md:w-[200px] md:h-[200px] absolute -bottom-3 -right-12 "></div>
    </section>
  );
}
