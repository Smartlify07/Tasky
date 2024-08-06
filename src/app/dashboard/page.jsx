import { fetchTodos } from "../lib/data";
import CreateForm from "../ui/dashboard/create-form";
import Greeting from "../ui/dashboard/greeting";

import TaskList from "../ui/dashboard/task-list";
import TopNav from "../ui/dashboard/top-nav";

export default async function DashboardPage() {
  const todos = await fetchTodos();

  return (
    <main className="flex flex-col px-3 md:w-11/12 md:px-0 min-h-screen py-10">
      <TopNav />
      <div className="flex flex-col gap-4 w-full md:flex-row">
        <Greeting todos={todos} />
      </div>
      <CreateForm />
      <TaskList />
    </main>
  );
}
