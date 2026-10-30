// Mapped types transform the properties of an existing type.
type Flags<T> = {
  [K in keyof T]: boolean;
};

interface User {
  name: string;
  age: number;
  email: string;
}

type UserFlags = Flags<User>;

const userFlags: UserFlags = {
  name: true,
  age: true,
  email: true,
};

function getFlag<K extends keyof User>(flags: UserFlags, key: K): boolean {
  return flags[key];
}

console.log(getFlag(userFlags, "age"));
