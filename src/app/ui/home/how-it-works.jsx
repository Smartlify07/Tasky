"use client";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const steps = [
  {
    id: "step1",
    title: "Sign Up",
    description:
      "Create an account and start your journey to fun productivity.",
  },
  {
    id: "step2",
    title: "Add Tasks",
    description: "Organize your tasks with ease.",
  },
  {
    id: "step3",
    title: "Collaborate",
    description: "Invite friends or colleagues to collaborate on tasks.",
  },
  {
    id: "step4",
    title: "Stay Motivated",
    description: "Complete challenges, earn rewards, and track your progress.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className={`${lato.className} py-10 flex flex-col items-center md:py-20`}
    >
      <header>
        <h1 className="text-5xl md:text-5xl text-center font-medium text-dark">
          How It Works
        </h1>
      </header>

      <div className="grid grid-cols-4 mt-10 gap-4">
        <Step1 />
      </div>
    </section>
  );
}

function Step1() {
  return (
    <>
      <div className=" group col-span-2 border rounded-sm py-10 flex flex-col gap-1 px-5 md:px-10 relative transition-all duration-300">
        <h3 className="text-2xl font-medium text-dark transition-opacity duration-300 opacity-100 ">
          {steps[0].title}
        </h3>
        <p className="text-base font-normal text-tertiary transition-opacity duration-300 opacity-100">
          {steps[0].description}
        </p>

        <div className="h-0.5 absolute -right-[20%] bg-dark w-[120px]"></div>
      </div>
    </>
  );
}
