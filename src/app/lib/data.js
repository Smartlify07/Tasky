export async function fetchTodos() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`);
  const data = await response.json();

  return data;
}

export async function fetchTodo(id) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`
  );

  const data = await response.json();

  return data;
}
