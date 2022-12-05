import reverseString from './reverseString';

test('reverse of palindrome is emordnilap', () => {
  expect(reverseString('palindrome')).toMatch('emordnilap');
});
