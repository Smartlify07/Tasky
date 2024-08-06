import { NextResponse } from "next/server";
import { todos } from "../route";

export function GET(request, { params }) {
  const url = new URL(request.url);
  const todoId = url.pathname.split("/").pop();
  console.log(todoId);
  const todo = todos.find((todo) => todo.id === Number(todoId));

  console.log("params", params);
  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }
  return NextResponse.json(todo, { status: 200 });
}

export async function PATCH(request, { params }) {
  const body = await request.json();
  const { title, status } = body;

  const todo = todos.find((todo) => todo.id === Number(params.id));

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" });
  }

  (todo.title = title), (todo.status = status);

  return NextResponse.json(todo, { status: 200 });
}
