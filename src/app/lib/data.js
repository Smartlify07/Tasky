export async function fetchTodos() {
  const response = await fetch(`/api/todos`);
  const data = await response.json();

  return data;
}

export async function fetchTodo(id) {
  const response = await fetch(`/api/todos/${id}`);

  const data = await response.json();

  return data;
}
