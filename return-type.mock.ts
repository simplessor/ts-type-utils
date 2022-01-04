/**
 * Defination
 */
type ReturnTypeMock<T extends Function> = T extends (...obj: any[]) => infer P ? P : never;

/**
 * Test
 */
type Stringify = () => string;
type ReturnTypes = ReturnTypeMock<Stringify>;
// type ReturnTypes = string
