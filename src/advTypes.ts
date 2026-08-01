// Convert all properties to boolean
type Flags<T> = {
  [K in keyof T]: boolean;
};

interface User {
  id: number;
  name: string;
  email: string;
}

type UserFlags = Flags<User>;
// Equivalent to:
// {
//   id: boolean;
//   name: boolean;
//   email: boolean;
// }



// Make all properties optional
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type OptionalTodo = {
  [K in keyof Todo]?: Todo[K];
};

// Remove 'readonly' and '?' modifiers
type Concrete<T> = {
  -readonly [K in keyof T]-?: T[K];
};

// Add 'readonly' and 'required' to all properties
type ReadonlyRequired<T> = {
  +readonly [K in keyof T]-?: T[K];
};



// Add prefix to all property names
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<User>;
// {
//   getId: () => number;
//   getName: () => string;
//   getEmail: () => string;
// }

// Filter out properties
type MethodsOnly<T> = {
  [K in keyof T as T[K] extends Function ? K : never]: T[K];
};

type IsString<T> = T extends string ? true : false;

type A = IsString<string>;    // true
type B = IsString<number>;    // false
type C = IsString<'hello'>;    // true
type D = IsString<string | number>; // boolean

// Extract array element type
type ArrayElement<T> = T extends (infer U)[] ? U : never;
type Numbers = ArrayElement<number[]>; // number