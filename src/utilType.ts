// Utility types derive new types from existing ones.
type User = {
  id: number;
  name: string;
  age: number;
};
type UserFormFields = Pick<User, "name" | "age">;
const userForm: UserFormFields = { name: "Ada", age: 36 };

interface Person {
  name: string;
  age: number;
  location?: string;
}
const personName: Pick<Person, "name"> = { name: "Grace" };
console.log(userForm, personName);

interface Human {
  name: string;
  age: number;
  location?: string;
}
const human: Omit<Human, "age" | "location"> = { name: "Mark" };
console.log(human);

// Exclude removes members from a union; Extract retains selected members.
type Primitive = string | number | boolean;
const nonString: Exclude<Primitive, string> = true;
type Numeric = Extract<Primitive, number>;

type Colors = 'red' | 'green' | 'blue' | 'yellow' | 'orange';
type RedishColors = Exclude<Colors, "blue" | "orange">;
const warmColor: RedishColors = "red";
const numericValue: Numeric = 42;
console.log(nonString, warmColor, numericValue);

// Partial makes properties optional.
interface Point {
  x: number;
  y: number;
}
const partialPoint: Partial<Point> = { x: 10 };

type Individual = {
  id: number;
  name: string;
};
const partialIndividual: Partial<Individual> = { id: 1223 };
console.log(partialPoint, partialIndividual);

// Required makes optional properties mandatory.
interface Car {
  make: string;
  model: string;
  mileage?: number;
}
const completeCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 1234,
};

// Record describes an object with a fixed key and value type.
type UserRole = "admin" | "user" | "guest";
type Permissions = Record<UserRole, string[]>;
const permissions: Permissions = {
  admin: ["read", "write"],
  user: ["read"],
  guest: [],
};
const nameAgeMap: Record<string, number> = { Alice: 21, Bob: 25 };

// ReturnType and Parameters extract function signature types.
type PointFactory = () => Point;
const point: ReturnType<PointFactory> = { x: 10, y: 20 };

type PointPrinter = (point: Point) => void;
const printedPoint: Parameters<PointPrinter>[0] = { x: 10, y: 20 };

// Readonly prevents property changes through this reference.
interface Person {
  name: string;
  age: number;
}
const readonlyPerson: Readonly<Person> = {
  name: "Dylan",
  age: 35,
};

console.log(completeCar, permissions, nameAgeMap, point, printedPoint, readonlyPerson);