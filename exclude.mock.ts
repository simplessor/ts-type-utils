/**
 * Defination
 */
 type ExcludeMock<T, Keys> = T extends Keys ? never : T;

 /**
  * Test
  */

type N = ExcludeMock<'a' | 'b' | 'c', 'b'>
// type N = "a" | "c"