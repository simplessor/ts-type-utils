/**
 * Defination
 */
 type WritableMock<T> = {
  -readonly [key in keyof T]: T[key]
}

/**
 * Test
 */
 interface A {
  readonly a: string;
  readonly b: number;
  c: boolean;
}

type WritableA = WritableMock<A>;

const value: WritableA = {
  a: '123',
  b: 123,
  c: true
}

value.a = '456'