/**
 * Defination
 */
type PickMock<T, Keys extends keyof T> = {
  [Key in Keys]: T[Key]
}


/**
 * Test
 */

interface A {
  a: string;
  b: number;
  c: boolean;
}

type PickA = PickMock<A, 'a' | 'c'>

// const value: PickA = {
//   a: '123',
//   c: true,
//   b: 123
// }
// 不能将类型“{ a: string; c: true; b: number; }”分配给类型“PickA”。
// 对象文字可以只指定已知属性，并且“b”不在类型“PickA”中。