// The `type` keyword creates aliases for object, primitive, and union types.
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Ada",
  age: 36,
};

type ID = string;
const userId: ID = "user-123";

type Status = "pending" | "success" | "failed";
const orderStatus: Status = "failed";

type Person = {
  name: string;
};
type Employee = Person & {
  salary: number;
};
const employee: Employee = { name: "Grace", salary: 1234 };

type Add = (a:number,b:number) => number;
const add: Add = (a, b) => a + b;

console.log(user, userId, orderStatus, employee, add(2, 3));
