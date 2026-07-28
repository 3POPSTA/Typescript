//Typescript Primitives

//Boolean
let isActive: boolean = true;
let hasMarried = true;
let hasNotMarried: boolean = false;


//Number
let decimal: number = 6;
let hex: number = 0xff00d;
let binary: number = 0b10101;
let octal: number = 0o744;
let float: number = 3.15;


//Strings
let color: string = "blue";
let fullName: string = "John Doe";


//any

// When to use any:

// When migrating JavaScript code to TypeScript
// When working with dynamic content where the type is unknown
// When you need to opt out of type checking for a specific case

let input: any;
input = "test";