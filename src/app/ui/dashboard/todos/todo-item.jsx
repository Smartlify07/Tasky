"use client";
import { Poppins } from "next/font/google";
import Status from "../../Statuses";
import Link from "next/link";
import { FaEye, FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { deleteTodo } from "@/app/lib/actions";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function TodoItem({ title, status, id }) {
  async function handleDelete() {
    await deleteTodo(id);
  }
  return (
    <>
      <div
        className={`bg-white row-span-2 py-3 px-5 rounded-md shadow-sm ${poppins.className}`}
      >
        <h1 className="text-lg mb-3">{title}</h1>

        <div className="flex items-center justify-between w-full">
          <Status status={status} />
          <div className="flex items-center ">
            <Link
              href={`/dashboard/todos/${id}`}
              className=" font-normal text-dark py-1 px-3"
            >
              <FaRegEye className="text-lg" />
            </Link>

            <button onClick={() => handleDelete()}>
              <FaRegTrashAlt className="text-red-700 font-medium" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
