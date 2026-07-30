//Classes
//Basic class syntax
class Person{
  //properties
  name: string;
  age: number;

  //constructor
  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }

  //method
  greet(): string {
    return `Hello, I'm ${this.name}`
  }
}
const p1 = new Person("John",30)
p1.greet()


//Access Modifiers
//public (default)
class User {
  public name: string; // Accessible everywhere

  constructor(name:string){
    this.name = name;
  }
}

//private
class BankAccount {
  private balance : number = 0;  // Only accessible within class

  constructor(amount:number){
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
const account = new BankAccount(122);


//protected
class Animal {
  protected species: string; // Accessible in class and subclasses

  constructor(species:string){
    this.species = species;
  }
}

class Dog extends Animal{
  bark(): string {
    return `Im a ${this.species}`

  }
}

//readonly
class Config {
  readonly API_URL: string = "https://api.example.com";

  constructor(url?: string){
    if (url) this.API_URL = url;
  }
}
const config = new Config();


//Parameter Properties (Shorthand)
class Employee {
  constructor(
    public name:string,
    private id: number,
    protected department: string,
    readonly hireDate: Date
  ){}
}
const emp = new Employee("Mark",123,"Nursing",new Date());


//inheritance (extends)
class Vehicle{
  constructor(public brand:string){};

  start(): void{
     console.log("Vehicle starting...");
  }
}

class Car extends Vehicle{
  constructor(brand:string,public model:string){
    super(brand);
  }

  start(): void {
    super.start();
    console.log(`Car ${this.brand} ${this.model} started`);
  }
  honk():void{
     console.log("Beep beep!");
  }
}


//Abstract Classes
abstract class Shape {
  abstract getArea(): number;

  getDescription(): string {
    return `Area: ${this.getArea()}`;
  }
}

class Circle extends Shape{
  constructor(private radius: number){
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}