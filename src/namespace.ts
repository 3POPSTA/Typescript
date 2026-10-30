// Namespaces group related values in a shared scope.
namespace MyNamespace {
  export const name = "TypeScript";

  export function greet(): string {
    return `Hello ${name}`;
  }
}
console.log(MyNamespace.greet());

namespace Company {
  export namespace HR {
    export function hire(): string {
      return "New employee hired";
    }
  }

  export namespace Engineering {
    export function build(): string {
      return "Product built";
    }
  }
}

console.log(Company.HR.hire());
console.log(Company.Engineering.build());

namespace Shapes {
  export class Circle {
    constructor(public readonly radius: number) {
      if (radius < 0) {
        throw new RangeError("Radius cannot be negative");
      }
    }

    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
}

console.log(new Shapes.Circle(5).area());