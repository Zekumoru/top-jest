import Calculator from './Calculator';

test('add 3 + 4 is 7', () => {
  expect(Calculator.add(3, 4)).toBe(7);
});

test('subtract 3 - 4 is -1', () => {
  expect(Calculator.subtract(3, 4)).toBe(-1);
});

test('multiply 3 * 4 is 12', () => {
  expect(Calculator.multiply(3, 4)).toBe(12);
});

test('divide 3 / 4 is 0.75', () => {
  expect(Calculator.divide(3, 4)).toBeCloseTo(0.75);
});

test('divide 1 / 0 is NaN', () => {
  expect(Calculator.divide(1, 0)).toBe(Infinity);
});
