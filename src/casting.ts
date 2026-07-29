//casting

//casting with as
let x: unknown = "mark";
console.log((x as string).length);


//casting with <>
let y: unknown = "zuck";
console.log((<string>y).length);
