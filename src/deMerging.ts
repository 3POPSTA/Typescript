//TypeScript Declaration Merging

// First declaration
interface Person {
  name: string;
  age: number;
}

// Second declaration with the same name
interface Person {
  address: string;
  email: string;
}

// TypeScript merges them into:
// interface Person {
// name: string;
// age: number;
// address: string;
// email: string;
// }

const person: Person = {
  name: "John",
  age: 30,
  address: "123 Main St",
  email: "john@example.com"
};

console.log(person);

// Function overloads provide type-specific call signatures.
function processValue(value: string): string;
function processValue(value: number): number;
function processValue(value: boolean): boolean;

// Implementation that handles all overloads
function processValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    return !value;
  }
}

// Using the function with different types
console.log(processValue("hello")); // "HELLO"
console.log(processValue(10)); // 20
console.log(processValue(true)); // false


//Namespace Merging
namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }
}

namespace Validation {
  export interface NumberValidator {
    isValid(n: number): boolean;
  }

  export class ZipCodeValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.length === 5 && /^\d+$/.test(s);
    }
  }
}

// After merging:
// namespace Validation {
// export interface StringValidator { isValid(s: string): boolean; }
// export interface NumberValidator { isValid(n: number): boolean; }
// export class ZipCodeValidator implements StringValidator { ... }
// }

// Using the merged namespace
const zipValidator = new Validation.ZipCodeValidator();

console.log(zipValidator.isValid("12345")); // true
console.log(zipValidator.isValid("1234")); // false
console.log(zipValidator.isValid("abcde")); // false



// Class and interface declarations can merge.
// Interface declaration
interface Cart {
  calculateTotal(): number;
}

// Class declaration with same name
class Cart {
  items: { name: string; price: number }[] = [];

  addItem(name: string, price: number): void {
    this.items.push({ name, price });
  }

   // Must implement the interface method
   calculateTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

// Using the merged class and interface
const cart = new Cart();
cart.addItem("Book", 15.99);
cart.addItem("Coffee Mug", 8.99);

console.log(`Total: $${cart.calculateTotal().toFixed(2)}`);


// Enum declarations can merge.
// First part of the enum
enum Direction {
  North,
  South
}

// Second part of the enum
enum Direction {
  East = 2,
  West = 3
}

// After merging:
// enum Direction {
// North = 0,
// South = 1,
// East = 2,
// West = 3
// }

console.log(Direction.North); // 0
console.log(Direction.South); // 1
console.log(Direction.East); // 2
console.log(Direction.West); // 3

// Can also access by value
console.log(Direction[0]); // "North"
console.log(Direction[2]); // "East"


// Namespace declarations merge, while these implementations provide runtime values.
namespace LibraryModule {
  export interface User {
    id: number;
    name: string;
  }

  export function getUser(id: number): User {
    return { id, name: "Ada" };
  }
}

// A later declaration augments the namespace's types and runtime behavior.
namespace LibraryModule {
  export interface UserPreferences {
    theme: string;
    notifications: boolean;
  }

  export interface User {
    preferences?: UserPreferences;
  }

  export function getUserPreferences(_userId: number): UserPreferences {
    return { theme: "light", notifications: true };
  }
}

const user = LibraryModule.getUser(123);
console.log(user.name, user.preferences?.theme ?? "No preferences set");

const prefs = LibraryModule.getUserPreferences(123);
console.log(prefs.notifications);