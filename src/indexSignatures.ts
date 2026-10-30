// Index signatures describe object properties with keys known only at runtime.
interface Person {
  [key: string]: string;
}

const person: Person = {
  name: "Ada Lovelace",
  email: "ada@example.com",
};
console.log(person.name);

interface User {
  id: number;
  name: string;
  [key: string]: string | number;
}
const user: User = { id: 1, name: "Mark" };
console.log(user.name);

// Numeric index signatures can describe array-like values.
interface List {
  [key: number]: string;
}
const fruits: List = ["Apple", "Banana", "Orange"];
console.log(fruits[0], fruits[1], fruits[2]);

// Readonly index signatures prohibit writes through the typed reference.
interface ReadOnlyScores {
  readonly [subject: string]: number;
}

const scores: ReadOnlyScores = {
  math: 90,
  english: 80,
};
