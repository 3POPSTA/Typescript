// Functions can specify parameter and return types.
function getTime(): number {
  return Date.now();
}

function printHello(): void {
  console.log("Hello");
}
printHello();

function multiply(a: number, b: number): number {
  return a * b;
}

function add(a: number, b: number, c = 0): number {
  return a + b + c;
}

function pow(value: number, exponent = 10): number {
  return value ** exponent;
}

function plus(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((total, current) => total + current, 0);
}

console.log(getTime(), multiply(1, 2), add(1, 2), pow(2), plus(1, 2, 3, 4));
