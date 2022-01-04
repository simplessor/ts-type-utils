/**
 * Defination
 */
export type PartialMock<T> = { [key in keyof T]?: T[key] }

/**
 * Test
 */
interface A {
  a: string;
  b: number;
  c: boolean;
}

type PartialA = PartialMock<A>;

const value: PartialA = {
  a: '123'
}