/**
 * Defination
 */
type ParameterMock<T extends Function> = T extends (...arg: infer P) => any ? P : never; 

/**
 * Test
 */
type FN = (name: string, age: number) => string;
type Args = ParameterMock<FN>;