// Promises represent values that may become available asynchronously.
const greeting = Promise.resolve("Hello");
void greeting.then(console.log);

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function isTodo(value: unknown): value is Todo {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const todo = value as Record<string, unknown>;
  return (
    typeof todo.userId === "number" &&
    typeof todo.id === "number" &&
    typeof todo.title === "string" &&
    typeof todo.completed === "boolean"
  );
}

function fetchTodo(): Promise<Todo> {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: unknown = await response.json();
      if (!isTodo(data)) {
        throw new TypeError("The response did not contain a valid todo");
      }
      return data;
    });
}

void fetchTodo()
  .then((todo: Todo) => {
    console.log('Todo:', todo);
    console.log('Title:', todo.title);
    console.log('Completed:', todo.completed);
  })
  .catch((error: unknown) => {
    console.error(
      'Error fetching todo:',
      error instanceof Error ? error.message : String(error),
    );
  });