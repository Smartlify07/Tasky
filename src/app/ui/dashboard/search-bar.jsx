import { Lato } from "next/font/google";
import { FaSearch } from "react-icons/fa";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

export default function SearchBar() {
  return (
    <div className="relative md:w-6/12">
      <input
        type="search"
        className={`${lato.className} bg-transparent  border rounded-full py-2 px-4 w-full `}
        placeholder="Search todos"
      />
    </div>
  );
}
