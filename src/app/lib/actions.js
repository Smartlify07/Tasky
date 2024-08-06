"use server";
import { revalidatePath } from "next/cache";

export async function addTodo(title) {
  try {
    const response = await fetch(`/api/todos`, {
      method: "POST",
      body: JSON.stringify({
        title,
        status: "pending",
      }),
    });

    const data = await response.json();
    console.log(data);
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/todoss");
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateTodo(title, status, id) {
  try {
    const response = await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title,
        status,
      }),
    });

    const data = await response.json();
    revalidatePath(`/dashboard`);
    revalidatePath(`/dashboard/todos/${id}`);
    console.log("Patched:", data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteTodo(id) {
  try {
    const response = await fetch(`/api/todos/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });

    if (!response.ok) {
      console.error("Failed to delete todo:", response.statusText);
    }

    const data = await response.json();
    console.log(data);
    revalidatePath(`/dashboard/todos/`);
    revalidatePath("/dashboard");
    return data;
  } catch (error) {
    console.error(error);
  }
}
