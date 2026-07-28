//Arrays
const nums: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(nums[0]![1])

let names: string[] = [];
names.push("Dax");
console.log(names);


//Readonly
//The readonly keyword can prevent arrays from being changed.

const texts: readonly string[] = ["mark"];
//texts.push("Jack"); //can't write texts


//Type inference

const numbers = [1,2,3];
// numbers.push("2")