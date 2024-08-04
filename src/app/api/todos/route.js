import { NextResponse } from "next/server";

const todos = [];

export function GET() {
  return NextResponse.json(todos, { status: 200 });
}

export function POST(request) {
  try {
    const { body } = request.json();
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
