"use client";
import { updateTodo } from "@/app/lib/actions";
import { fetchTodo } from "@/app/lib/data";
import { CompletedRadio, InProgressRadio, PendingRadio } from "@/app/ui/radios";
import { Poppins } from "next/font/google";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Edit() {
  const params = useParams();
  const { id } = params;
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleStatusChange(e) {
    const { value, name } = e.target;
    setStatus(() => ({ [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await updateTodo(title, status.status, id);
    router.push(`/dashboard/todos/${id}`);
  }

  useEffect(() => {
    async function fetchData() {
      const todo = await fetchTodo(id);
      console.log(todo);
      setTitle(todo?.title);
      setStatus(todo?.status);
    }

    fetchData();
  }, []);

  return (
    <main
      className={` ${poppins.className} h-screen flex items-center justify-center md:w-11/12`}
    >
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col rounded-lg gap-4 py-7 px-5 bg-white md:w-6/12 lg:w-5/12"
      >
        <div className="group">
          <label className={`text-base mb-1 text-dark ${poppins.className}`}>
            Title
          </label>
          <input
            type="text"
            className={`border ${poppins.className} rounded-sm px-3 w-full py-2 transition-all focus:outline-0 focus:ring-4 focus:ring-primary`}
            onChange={handleTitleChange}
            value={title}
          />
        </div>

        <div className="group">
          <label className={`text-base mb-1 text-dark ${poppins.className}`}>
            Status
          </label>{" "}
          <div className="flex  flex-wrap items-center justify-center gap-3">
            <PendingRadio onChange={(e) => handleStatusChange(e)} />
            <InProgressRadio onChange={(e) => handleStatusChange(e)} />
            <CompletedRadio onChange={(e) => handleStatusChange(e)} />
          </div>
        </div>

        <button
          className={`${poppins.className} py-3 rounded-lg mt-3 bg-dark text-white font-medium`}
        >
          Save Task
        </button>
      </form>
    </main>
  );
}
