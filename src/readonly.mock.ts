/**
 * Defination
 */
 type ReadonlyMock<T> = {
  readonly [key in keyof T]: T[key]
}

/**
 * Test
 */
 interface A {
  a: string;
  b: number;
  c: boolean;
}

type ReadonlyA = ReadonlyMock<A>;

const value: ReadonlyA = {
  a: '123',
  b: 123,
  c: true
}

// value.a = '123'
// 无法分配到 "a" ，因为它是只读属性