/**
 * Defination
 */
type ConstructorParametersMock<T> = T extends { new (...args: infer P): any } ? P : never;

/**
 * Test
 */
interface A {
  new (name: string, age: number);
}
type Params = ConstructorParametersMock<A>;
// type Params = [name: string, age: number]
