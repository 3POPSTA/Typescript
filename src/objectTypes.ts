// Object types describe required and optional properties.
const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};
console.log(car.model);

const person: { name: string; age: number; location: string } = {
  name: "Ada",
  age: 23,
  location: "Ghana",
};
console.log(person.name);

const truck: { type: string; mileage?: number } = { type: "Toyota" };
truck.mileage = 34;

// Index signatures describe dynamic property names.
const nameAgeMap: Record<string, number> = {};
nameAgeMap.Jack = 25;
console.log(nameAgeMap.Jack)