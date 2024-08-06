"use client";
import { useIcons } from "@/app/lib/hooks";
import { useState } from "react";
import { CompletedRadio, InProgressRadio, PendingRadio } from "../radios";
import { addTodo } from "@/app/lib/actions";

export default function CreateForm() {
  const { Send } = useIcons();
  const [title, setTitle] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addTodo(title, "");
    console.log("Submit");
    setTitle("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white md:w-11/12 lg:w-6/12 py-4 rounded-lg mt-4 px-3 "
    >
      <div className="border rounded-lg  relative">
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Add task for today"
          className="w-full transition-all rounded-lg text-tertiary py-2 focus:outline-none text-sm px-3 focus:ring-2 focus:ring-primary"
        />

        <button>
          <Send className="size-5 absolute top-2 text-tertiary right-2" />
        </button>
      </div>
    </form>
  );
}
