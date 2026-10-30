// Primitive types include boolean, number, and string.
const isActive = true;
const hasMarried: boolean = false;

const decimal = 6;
const hex = 0xff00d;
const binary = 0b10101;
const octal = 0o744;
const float = 3.15;

const color = "blue";
const fullName = "John Doe";

// Prefer unknown when a value's type is not known yet; narrow before use.
const input: unknown = "test";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}

console.log(isActive, hasMarried, decimal, hex, binary, octal, float, color, fullName);