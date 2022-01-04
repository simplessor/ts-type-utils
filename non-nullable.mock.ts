/**
 * Defination
 */
type NonNullableMock<T> = T extends (null | undefined) ? never : T;

/**
 * Test
 */
type Types = 'string' | 'number' | undefined;
type T = NonNullableMock<Types>;