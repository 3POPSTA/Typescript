// Arrays can be nested and have their element types inferred.
const nums: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(nums[0]?.[1]);

const names: string[] = [];
names.push("Dax");
console.log(names);

// Readonly arrays prevent mutation through this reference.
const texts: readonly string[] = ["mark"];

// The element type is inferred as number.
const numbers = [1,2,3];
console.log(texts, numbers);
