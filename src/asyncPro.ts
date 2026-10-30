// Async functions always return promises.
async function getGreeting(): Promise<string> {
  return "Hello TypeScript";
}

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
};

function isUser(value: unknown): value is User {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const user = value as Record<string, unknown>;
  return (
    typeof user.id === "number" &&
    typeof user.firstName === "string" &&
    typeof user.lastName === "string" &&
    typeof user.age === "number" &&
    typeof user.email === "string"
  );
}

async function fetchUsers(): Promise<User> {
  const response = await fetch("https://dummyjson.com/users/3");
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: unknown = await response.json();
  if (!isUser(data)) {
    throw new TypeError("The response did not contain a valid user");
  }

  return data;
}

async function run(): Promise<void> {
  console.log(await getGreeting());

  try {
    const user = await fetchUsers();
    console.log(user.id);
  } catch (error: unknown) {
    console.error("Unable to fetch user:", error);
  }
}

void run();