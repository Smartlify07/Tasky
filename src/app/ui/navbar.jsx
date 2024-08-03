import { Lato, Poppins, Roboto } from "next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav className="mx-auto w-full fixed top-0 z-[1000] py-4 px-10 ">
      <h1
        className={`${lato.className} text-dark font-[700] text-xl md:text-4xl`}
      >
        Tasky
      </h1>
    </nav>
  );
}
