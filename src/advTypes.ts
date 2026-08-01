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