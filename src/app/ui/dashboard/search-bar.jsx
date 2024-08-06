import { useIcons } from "@/app/lib/hooks";
import { Lato } from "next/font/google";
import { FaSearch } from "react-icons/fa";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

export default function SearchBar() {
  const { Search } = useIcons();
  return (
    <div className="relative md:w-6/12">
      <input
        type="search"
        className={`${lato.className} bg-transparent  border rounded-full py-2 px-4 w-full transition-all focus:outline-none focus:ring-1 focus:ring-primary `}
        placeholder="Search todos"
      />

      <Search className="absolute right-2 top-2 text-tertiary size-6" />
    </div>
  );
}
