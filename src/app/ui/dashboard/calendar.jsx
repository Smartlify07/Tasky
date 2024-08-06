import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});
export default function Calendar() {
  return (
    <section className="bg-white rounded-xl py-2 px-2 md:w-5/12 mt-5  ">
      <div className="bg-[#fafafa] rounded-lg py-10 px-5 flex flex-col gap-2 justify-center">
        <h1 className={`text-2xl font-medium text-dark`}>Calendar</h1>
      </div>
    </section>
  );
}
