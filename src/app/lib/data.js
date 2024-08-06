import { checkEnvironment } from "../utils/checkEnv";
import { API_ROUTE } from "./constants";

export async function fetchTodos() {
  const response = await fetch(API_ROUTE);
  const data = await response.json();

  return data;
}

export async function fetchTodo(id) {
  const response = await fetch(`${API_ROUTE}/${id}`);

  const data = await response.json();

  return data;
}
