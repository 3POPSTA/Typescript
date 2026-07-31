//Utility Types

//Pick || Pick<Obj, keys>
//Pick removes all but the specified keys from an object type.
type User = {
    id: number;
    name: string;
    age: number;
}
type UserFormFields = Pick<User, "name" | "age">

interface Person {
    name:string;
    age:number;
    location?:string;
}
const bob: Pick<Person, "name" | "age"> = {
    name:"Bob",
    age: 12,
}
console.log(bob)
console.log(bob.name)
console.log(bob.age)

//Omit || Omit<Obj, Keys>
//Omit removes keys from an object type.

interface Human{
    name:string;
    age:number;
    location?: string;    
}
const man: Omit<Human,"age" | "location"> = {
    name: "mark"
}


//Exclude
//Exclude<Union, Members>
//Exclude removes types from a union.
type Primitive = string | number | boolean;
const value:Exclude<Primitive,string> = true;
console.log(value)

type Colors = 'red' | 'green' | 'blue' | 'yellow' | 'orange';
type RedishColors = Exclude<Colors, "blue" | "orange">;


//Partial
//Partial changes all the properties in an object to be optional.

interface Point{
    x:number;
    y:number;
}
let pointPart: Partial<Point> = {};
pointPart.x = 10;

type individual = {
    id:number;
    name:string;
}

let p: Partial<individual> = {
    id:1223,
    name:"string"
}
console.log(p.id)
console.log(p.name)



//Required
//Required changes all the properties in an object to be required.

interface Car {
    make:string;
    model:string;
    mileage?: number;
}
let myCar: Required<Car> = {
    make: "Ford",
    model: "Focus",
    mileage: 1234
}


//Record
//Record is a shortcut to defining an object type with a specific key type and value type.
const nameAgeMap: Record<string,number> = {
    "Alice" : 21,
    "Bob" : 25
}
type UserRole = 'admin' | 'user' | 'guest'
type Permissions = Record<UserRole, string[]>