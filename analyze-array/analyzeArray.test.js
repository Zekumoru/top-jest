import analyzeArray from './analyzeArray';

const array = [1, 8, 3, 4, 2, 6];
const analyzed = analyzeArray(array);
const analyzedEmptyArray = analyzeArray([]);

test('average of [1, 8, 3, 4, 2, 6] is 4', () => {
  expect(analyzed.average).toBe(4);
});

test('min in [1, 8, 3, 4, 2, 6] is 1', () => {
  expect(analyzed.min).toBe(1);
});

test('max in [1, 8, 3, 4, 2, 6] is 8', () => {
  expect(analyzed.max).toBe(8);
});

test('length of [1, 8, 3, 4, 2, 6] is 6', () => {
  expect(analyzed.length).toBe(6);
});

test('average of [] is undefined', () => {
  expect(analyzedEmptyArray.average).toBeUndefined();
});

test('min in [] is Infinity', () => {
  expect(analyzedEmptyArray.min).toBe(Infinity);
});

test('max in [] is -Infinity', () => {
  expect(analyzedEmptyArray.max).toBe(-Infinity);
});

test('length of [] is 0', () => {
  expect(analyzedEmptyArray.length).toBe(0);
});

test('average of [2, 3, 5] is 3.33', () => {
  expect(analyzeArray([2, 3, 5]).average).toBeCloseTo(3.33);
});
