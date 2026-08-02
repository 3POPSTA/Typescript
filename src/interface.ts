//interface
//interface keyword is used to define the shape of an object.

interface User {
    name:string;
    age:number;
}

const user: User = {
    name: "ACLL",
    age:12345,
}

//Extending an interface
interface Person {
    name:string;
}

interface Employee extends Person{
    salary:number;
}
const emp:Employee = {
    name:"ACLL",
    salary:1234567890
}

//interface of functions
interface Add {
    (a:number,b:number) :number;
}
const add: Add = (a,b) => a + b;

//interface of class
interface Animal{
    makeSound():void;
}

class Dog implements Animal{
    makeSound(): void {
        console.log("woof!")
    }
}