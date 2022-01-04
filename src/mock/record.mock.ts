/**
 * Defination
 */
type RecordMockKey = string | number | symbol;
type RecordMock<Keys extends RecordMockKey,V> = {
  [k in Keys]: V
}

/**
 * Test
 */
type TestKeys = 'A' | 'B' | 'C'

type Test = RecordMock<TestKeys, string>;

const value: Test = {
  A: 'asd',
  B: 'asds',
  C: 'qwewq'
}