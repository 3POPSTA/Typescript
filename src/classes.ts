//Classes

// class Person {
//     private name: string;

//     public constructor(name:string){
//         this.name = name;
//     }
//     public getName() : string {
//         return this.name;
//     }
// }

// const person = new Person("Jane");
// console.log(person.getName());

//Parameter Properties
// class Persons{
//     private name: string;

//     public constructor(name: string){
//         this.name = name;
//     }

//     public getName(): string{
//         return this.name;
//     }

// }
// const persons = new Person("Jane");
// console.log(person.getName());

class Person{
    private readonly name: string;

    public constructor(name: string){
        this.name = name;
    }
    public getName(): string{
        return this.name;
    }
}
const person = new Person("Jane");
console.log(person.getName());


//Inheritance: Implements

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
