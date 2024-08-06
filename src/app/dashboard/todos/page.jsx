import { fetchTodos } from "@/app/lib/data";
import TodoItem from "@/app/ui/dashboard/todos/todo-item";

export default async function Todos() {
  const todos = await fetchTodos();

  return (
    <main className="flex w-7/12 flex-col min-h-screen items-center justify-center  md:w-11/12">
      <h1 className="text-xl mb-4 md:text-2xl text-dark">Your tasks</h1>
      <div className=" self-center grid gap-3 w-full md:w-9/12   md:grid-cols-2 lg:grid-cols-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </main>
  );
}
