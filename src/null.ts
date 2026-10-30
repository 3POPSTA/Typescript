// Union types can represent values that may be absent.
let value: string | null | undefined = null;
value = "Hello";
console.log(value);
value = undefined;
console.log(value)

interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}

function printYardSize(house: House): void {
  const yardSize = house.yard?.sqft;
  if (yardSize === undefined) {
    console.log("No yard");
  } else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}

const home: House = { sqft: 500 };
printYardSize(home);