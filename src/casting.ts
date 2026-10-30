// Type assertions describe a type to the compiler; they do not convert values.

const firstValue: unknown = "mark";
if (typeof firstValue === "string") {
  console.log(firstValue.length);
}

// The `as` syntax is the preferred assertion style in TypeScript.
const secondValue: unknown = "zuck";
console.log((secondValue as string).length);
