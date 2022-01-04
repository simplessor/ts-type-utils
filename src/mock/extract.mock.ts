/**
 * Defination
 */
type ExtractMock<T, Key> = Key extends T ? Key : never;

/**
 * Test
 */
type A = 'name' | 'age' | (() => string);

type OptionalA = ExtractMock<A, 'name' | (() => any)>
// type OptionalA = "name" | (() => any)
