/**
 * Defination
 */
type OmitMock<T, Keys extends keyof T> = {
  [k in keyof T as k extends Keys ? never : k]: T[k]
}

/**
 * Test
 */

interface A {
  name: string;
  age: number;
}

type B = OmitMock<A, 'age'>;

