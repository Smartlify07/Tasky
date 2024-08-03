import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-5">
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

      <button className="bg-[#222] px-7 py-3 text-primary font-medium text-lg rounded-md transition-colors hover:bg-[#111]">
        Get Started Now
      </button>

      <div className="md:w-9/12 mt-5 flex items-center flex-col mx-auto border">
        <Image
          width={500}
          height={500}
          src={"/assets/images/hero/hero.png"}
          alt="app-demo"
        />
      </div>
    </section>
  );
}
