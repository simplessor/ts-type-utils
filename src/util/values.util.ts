/**
 * Defination
 */
type Values<T> = T extends {
  [key in keyof T]: infer P
} ? P : never;

/**
 * Test
 */
 interface User {
  name: string;
  age: number;
}

type UserValues = Values<User>;
// type UserValues = string | number