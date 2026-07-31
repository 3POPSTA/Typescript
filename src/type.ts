//type keyword
//The type keyword in TypeScript is used to create a type alias—a custom name for a type.
//Basic sytax
type User = {
    name: string;
    age: number;
}

const user: User = {
    name:"Love",
    age:123
}

//It can alias primitive types
type ID = string;
let userId: ID = "123456D";

//It can create union types
type Status = "pending" | "success" | "failed";
let orderStatus: Status = "failed";


//combine types
type Person = {
    name:string;
}
type Employee = Person & {
    salary:number;
}
const emp: Employee =  {
    name: "Mark",
    salary:1234
}


//It can describe function types
type Add = (a:number,b:number) => number;
const add: Add = (a,b) => a + b

