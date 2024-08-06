import { fetchTodos } from "@/app/lib/data";
import { useIcons } from "@/app/lib/hooks";
import { Lato, Poppins } from "next/font/google";
import { FaCaretRight } from "react-icons/fa";
import Status from "../Statuses";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function TaskList() {
  const todos = await fetchTodos();
  console.log(todos);
  return (
    <section className={`py-2  mt-5 ${lato.className}   md:w-11/12 lg:w-6/12`}>
      <h1 className="text-2xl font-semibold text-dark">Your tasks</h1>

      <div className="flex bg-white rounded-t-xl flex-col mt-7  ">
        {todos.map((todo) => (
          <Task key={todo.id} {...todo} />
        ))}
      </div>
    </section>
  );
}

function Task({ title, status, id }) {
  const { CaretRightOutline } = useIcons();
  return (
    <div
      className={` border-b pb-3 pt-4 px-6 ${poppins.className}     transition-all flex justify-between items-center  w-full`}
    >
      <div className="flex flex-col">
        <h1
          className={`text-base font-medium ${poppins.className} text-base text-tertiary `}
        >
          {title}
        </h1>
        <Status status={status} />
      </div>

      <Link href={`/dashboard/todos/${id}`}>
        <CaretRightOutline className=" text-tertiary size-6 cursor-pointer" />
      </Link>
    </div>
  );
}
