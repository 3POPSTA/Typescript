/* 
    TypeScript Index Signatures allow you to define the type of object properties 
    when you don't know the property names beforehand.
*/
//Basic syntax
interface Person {
    [key:string]: string;
}

const love:Person = {
    name: "Ac-lumor Love",
    email: "aclumor@gmail.com"
}
console.log(love.name);


//Mixed Fixed + Dynamic Properties

interface User{
    id:number;
    name:string;
    
    [key:string] : string | number;
}
const u1 : User = {
    id: 1,
    name: "mark"
}
console.log(u1.name)

//Number Index Signature
interface List {
    [key:number]: string;
}
const fruits:List = [
    "Apple",
    "Banana",
    "Orange"
]
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])


//Readyonly Index Signature
interface ReadOnlyScores {
  readonly [subject: string]: number;
}

const scores: ReadOnlyScores = {
  math: 90,
  english: 80
};
