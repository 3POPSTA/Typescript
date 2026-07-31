//keyof
//keyof is a keyword in TypeScript which is used to extract the key type from an object type.

interface Person {
    name:string;
    age:number;
}
function printPersonProperty(person:Person,property:keyof Person){
    console.log(`Printing person property ${property}: "${person[property]}"`)
}
let person = {
    name: "Max",
    age:23
}
printPersonProperty(person, "name");


//keyof with index signatures
type StringMap = {[key:string]: unknown};
function  createStringPair(property:keyof StringMap,value:string):StringMap{
    return {[property]:value}
}