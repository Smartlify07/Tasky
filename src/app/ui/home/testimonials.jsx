"use client";
import { testimonials } from "@/app/lib/constants";
import { raleway } from "@/app/lib/hooks";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Testimonials() {
  return (
    <section
      className={`${raleway.className} bg-cyan-1000   relative py-24 flex flex-col items-center`}
    >
      <header>
        <h1 className=" text-4xl mb-5 text-center md:text-5xl text-black font-medium capitalize">
          What people say about taskbud
        </h1>
      </header>

      <TestimonialsGrid />
    </section>
  );
}

function TestimonialsGrid() {
  return (
    <Marquee
      pauseOnHover
      speed={40}
      className="grid mt-8 gap-5   grid-cols-3 overflow-hidden"
    >
      {testimonials.map((item) => (
        <div
          key={item.id}
          className="w-[400px] to-cyan-1000 from-neutral-950 bg-gradient-to-tr mr-10 bg-opacity-90 rounded-lg py-6 px-4 flex flex-col justify-between"
        >
          <p className="text-white">{item.description}</p>
          <div className="flex justify-end items-center w-full">
            <div className="flex items-center gap-3">
              <h4 className="text-white">{item.name}</h4>
              <Image
                src={item.img}
                className="w-10 h-10 rounded-full object-cover"
                alt={item.name}
                width={40}
                height={40}
                priority={false}
                quality={100}
                unoptimized
              />
            </div>
          </div>
        </div>
      ))}
    </Marquee>
  );
}
