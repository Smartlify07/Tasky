import { NextResponse } from "next/server";

export let todos = [];

export async function GET() {
  return NextResponse.json(todos, { status: 200 });
}

export async function POST(request) {
  try {
    const body = await request.json();

    const newTodo = {
      id: todos.length + 1,
      ...body,
    };
    console.log(newTodo);
    todos.push(newTodo);
    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    console.error(error);
  }
}

export async function DELETE(request) {
  const { id } = await request.json();
  console.log(id);
  try {
    const index = todos.findIndex((todo) => todo.id === id);
    const deletedTodo = todos[index];
    if (!deletedTodo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }
    todos.splice(index, 1);
    return NextResponse.json(deletedTodo);
  } catch (error) {
    console.error(error);
    NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
