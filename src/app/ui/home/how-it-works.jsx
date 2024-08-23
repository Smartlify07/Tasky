"use client";
import { raleway } from "@/app/lib/hooks";
import { steps } from "@/app/lib/constants";

export default function HowItWorks() {
  return (
    <>
      <section
        className={`${raleway.className} z-[10000] bg-violet-600 px-6 bg-opacity-70 py-24 flex flex-col items-center`}
      >
        <header>
          <h1 className="text-5xl text-white text-center capitalize font-medium">
            How does taskbud work? ⚡
          </h1>
        </header>

        <div className="grid md:grid-cols-2 mt-10 md:w-9/12 gap-20">
          {steps.map((step, index) => (
            <Step key={step.id} index={index} {...step} />
          ))}
        </div>
      </section>
    </>
  );
}

function Step({ title, description, index }) {
  return (
    <div className="flex relative flex-col md:flex-row md:items-center justify-around w-full border py-4">
      <div className="flex flex-col items-center gap-1 ">
        <h1 className="text-2xl font-medium text-white text-center md:text-2xl">
          {title}
        </h1>
        <p className="text-base text-white text-center">{description}</p>
      </div>

      {index % 2 === 0 && (
        <div className="hidden md:block md:absolute h-0.5 w-[100px] bg-orange-800 top-10 -right-20"></div>
      )}
    </div>
  );
}
