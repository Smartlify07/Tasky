import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
export default function Greeting({ todos }) {
  return (
    <section className="bg-white  w-full rounded-lg py-2 px-2 md:w-11/12 lg:w-6/12 mt-5">
      <div className="bg-[#fafafa] rounded-lg py-7 px-5 flex flex-col gap-2 justify-center md:py-10">
        <h1 className={`text-3xl ${poppins.className} text-dark font-semibold`}>
          Good Morning John,
        </h1>
        <p className={`text-sm ${poppins.className}`}>
          You have {todos.length} tasks for today
        </p>
      </div>
    </section>
  );
}
