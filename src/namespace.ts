//Namespace
//Basic syntax

namespace MyNmaespace {
    export const name: string = "Typescript";

    export function greet(){
        return `Hello ${name}`;
    }
}
console.log(MyNmaespace.name)



//Nested Namespace
namespace Company {
  export namespace HR {
    export function hire() { /* ... */ }
  }
  
  export namespace Engineering {
    export function build() { /* ... */ }
  }
}

Company.HR.hire();
Company.Engineering.build();


//Multi-file Namespaces

//--------------------------file1------------------------------------------
namespace Shapes {
    export class Circle{
        constructor(public raduis:number){}
        area():number{
            return Math.PI*this.raduis
        }
    }
}
//--------------------------file2------------------------------------------
// <reference path="file1.ts" />
const circle = new Shapes.Circle(5);