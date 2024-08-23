"use client";
import { raleway } from "@/app/lib/hooks";

export default function CallToAction() {
  return (
    <section
      className={`${raleway.className} bg-yellow-1000 py-20 flex items-center flex-col`}
    >
      <h1 className="text-5xl text-black font-medium mb-5 text-center">
        Join Taskbud Now! 🚀
      </h1>
      <button className="bg-orange-600 transition-all  font-medium text-white text-lg py-3 mt-4 px-10 rounded-lg hover:bg-purple-600">
        Join now
      </button>
    </section>
  );
}
