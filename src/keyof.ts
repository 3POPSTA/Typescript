// `keyof` creates a union of an object's property keys.
interface User {
  name: string;
  age: number;
  email: string;
}
const alice: User = { name: "Alice", age: 12, email: "alice@example.com" };

type UserKeys = keyof User;

function getProperty<ObjectType, Key extends keyof ObjectType>(
  object: ObjectType,
  key: Key,
): ObjectType[Key] {
  return object[key];
}
console.log(getProperty(alice, "name"));

type StringMap = Record<string, unknown>;
function createStringPair(property: string, value: string): StringMap {
  return { [property]: value };
}

console.log(createStringPair("language", "TypeScript"));
