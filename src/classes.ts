// Classes can contain fields, constructors, and methods.
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, I'm ${this.name}`;
  }
}
console.log(new Person("John", 30).greet());

// Public is the default accessibility.
class User {
  constructor(public name: string) {}
}

// Private fields are only accessible within their declaring class.
class BankAccount {
  #balance = 0;

  constructor(amount: number) {
    if (amount < 0) {
      throw new RangeError("Initial balance cannot be negative");
    }
    this.#balance = amount;
  }

  getBalance(): number {
    return this.#balance;
  }
}
console.log(new BankAccount(122).getBalance());

// Protected fields are accessible in subclasses.
class Animal {
  constructor(protected species: string) {
    this.species = species;
  }
}

class Dog extends Animal {
  bark(): string {
    return `I'm a ${this.species}`;
  }
}
console.log(new Dog("dog").bark());

// Readonly properties can be initialized in their declaration or constructor.
class Config {
  readonly apiUrl: string;

  constructor(url = "https://api.example.com") {
    this.apiUrl = url;
  }
}
console.log(new Config().apiUrl);

// Parameter properties declare and initialize fields in the constructor.
class Employee {
  constructor(
    public name: string,
    private id: number,
    protected department: string,
    readonly hireDate: Date,
  ) {}

  getId(): number {
    return this.id;
  }
}
console.log(new Employee("Mark", 123, "Nursing", new Date()).getId());

// Subclasses can override methods and call the base implementation.
class Vehicle {
  constructor(public brand: string) {}

  start(): void {
    console.log("Vehicle starting...");
  }
}

class Car extends Vehicle {
  constructor(brand: string, public model: string) {
    super(brand);
  }

  override start(): void {
    super.start();
    console.log(`Car ${this.brand} ${this.model} started`);
  }

  honk(): void {
    console.log("Beep beep!");
  }
}

// Abstract classes can define required methods for subclasses.
abstract class Shape {
  abstract getArea(): number;

  getDescription(): string {
    return `Area: ${this.getArea()}`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  override getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

console.log(new Circle(2).getDescription());