/**
 * Defination
 */
type RequiredMock<T> = {
  [key in keyof T]-?: T[key]
}

/**
 * Test
 */
 interface A {
  a?: string;
  b?: number;
  c?: boolean;
}

type RequiredA = RequiredMock<A>;

const value: RequiredA = {
  a: '123',
  b: 123,
  c: true
}