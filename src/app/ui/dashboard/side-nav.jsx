import { Lato } from "next/font/google";
import NavLinks from "./nav-links";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function SideNav() {
  return (
    <aside className="px-6 py-10 hidden min-h-screen w-full md:block md:w-5/12 lg:w-3/12 ">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-medium self-center  w-full  text-dark">
          TaskBud
        </h1>

        <NavLinks />
      </div>
    </aside>
  );
}
