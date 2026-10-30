// Generic functions preserve the relationship between input and output types.
function createPair<First, Second>(first: First, second: Second): [First, Second] {
  return [first, second];
}
console.log(createPair("hello", 23));

function identity<Value>(value: Value): Value {
  return value;
}
console.log(identity("hello"));

class NameValue<Value> {
  private value: Value | undefined;

  constructor(private readonly name: string) {}

  setValue(value: Value): void {
    this.value = value;
  }

  getValue(): Value | undefined {
    return this.value;
  }

  toString(): string {
    return `${this.name}: ${this.value ?? "unset"}`;
  }
}
const namedValue = new NameValue("myNumber");
namedValue.setValue(10);
console.log(namedValue.toString());

function getFirstElement<ElementType>(array: readonly ElementType[]): ElementType | undefined {
  return array[0];
}
const numbers = [1,2,3];
const firstNum = getFirstElement(numbers);
const strings = ["name","age"];
const firstStr = getFirstElement(strings);
console.log(firstNum, firstStr);

type Wrapped<Value> = { value: Value };
const wrappedNumber: Wrapped<number> = { value: 10 };
const wrappedString: Wrapped<string> = { value: "1234567890" };
console.log(wrappedNumber, wrappedString);

class Variable<Value> {
  constructor(public value: Value) {}

  displayValue(): void {
    console.log(this.value);
  }
}
new Variable("hi").displayValue();