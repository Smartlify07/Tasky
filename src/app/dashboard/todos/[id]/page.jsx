import { fetchTodo } from "@/app/lib/data";
import Status from "@/app/ui/Statuses";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});
export default async function Todo({ params }) {
  const todo = await fetchTodo(params.id);
  console.log(params);
  console.log(todo.status);

  return (
    <main
      className={`${poppins.className} flex items-center justify-center md:w-11/12`}
    >
      <div className="flex bg-white rounded-lg shadow-lg px-3 py-8 md:w-6/12 lg:w-5/12 items-center flex-col gap-3">
        <h1 className="text-lg font-medium capitalize">{todo.title}</h1>
        <Status status={todo.status} />

        <Link
          href={`/dashboard/todos/${params.id}/edit`}
          className="py-2 mt-2 px-3 md:w-9/12 self-center text-center rounded-md bg-dark font-medium text-primary"
        >
          Edit your task
        </Link>
      </div>
    </main>
  );
}
