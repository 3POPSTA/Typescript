// Interfaces describe the shape of objects.
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Ada",
  age: 36,
};

interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}
const employee: Employee = { name: "Grace", salary: 120_000 };

interface Add {
  (a: number, b: number): number;
}
const add: Add = (a,b) => a + b;

interface Animal{
  makeSound(): void;
}

class Dog implements Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

console.log(user, employee, add(2, 3));
new Dog().makeSound();