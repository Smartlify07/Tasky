import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section
      className={`${lato.className} flex flex-col items-center gap-5 py-10`}
    >
      <h1 className="text-5xl md:text-7xl text-center font-medium text-dark">
        TaskBud
      </h1>
      <h2 className="text-2xl text-center md:w-7/12 md:text-2xl text-tertiary">
        Track tasks, <span className="text-dark font-medium">collaborate</span>,
        and boost your{" "}
        <span className="text-dark font-medium">productivity </span>
        with a touch of{" "}
        <span role="keyword" className="text-dark font-medium">
          fun
        </span>
        .
      </h2>

      <Link
        href={"/dashboard/"}
        className="bg-[#222] px-7 py-3 mt-3 text-primary font-medium text-lg rounded-md transition-colors hover:bg-[#111]"
      >
        Get Started Now
      </Link>

      <div className="md:w-9/12 mt-5 flex items-center flex-col mx-auto">
        <Image
          width={700}
          height={600}
          src={"/assets/images/hero/hero.png"}
          alt="app-demo"
          className="border drop-shadow-sm"
        />
      </div>
    </section>
  );
}
