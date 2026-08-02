//Generics

//Generic Functions

function createPair<S,N>(v1:S,v2:N): [S,N] {
    return [v1,v2];
}
console.log(createPair<string,number>("hello",23));

function arr<S>(str:S):S {
    return str
}
arr<string>("hello")

//Generic Classes
class NameValue<T>{
    private _value: T | undefined;

    constructor(private name: string){}

    public setValue(value:T){
        this._value = value;
    }

    public getValue(): T | undefined{
        return this._value;
    }
    public toSting(): string{
        return `${this.name}: ${this._value}`;
    }
}
let value = new NameValue<number>("myNumber");
value.setValue(10);
console.log(value.toString());


//simple Generics
function getFirstElement<ElementType>(array: ElementType[]){
    return array[0];
}
const numbers = [1,2,3];
const firstNum = getFirstElement<number>(numbers)

const strings = ["name","age"];
const firstStr = getFirstElement<string>(strings);


//type Aliases
type Wrapped<Type> = {value:Type};
const wrappedValue: Wrapped<number> = {value:10};
const wrappedValue2 : Wrapped<string> = {value:"1234567890"};
 console.log(wrappedValue);
 console.log(wrappedValue2);