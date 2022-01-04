/**
 * Defination
 */
type Keys<T> = keyof T;

/**
 * Test
 */
interface User {
  name: string;
  age: number;
}

type UserKeys = Keys<User>;