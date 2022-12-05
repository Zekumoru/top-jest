import caesarCipher from './caesarCipher';

test('wrap z to a', () => {
  expect(caesarCipher(1, 'zzz')).toMatch('aaa');
});

test('punctuations/numbers remain the same', () => {
  expect(caesarCipher(7, '!#2-345')).toMatch('!#2-345');
});

test('encrypt \'Defend the East Wall of the Castle\' with key 1', () => {
  expect(caesarCipher(1, 'Defend the East Wall of the Castle')).toMatch('Efgfoe uif Fbtu Xbmm pg uif Dbtumf');
});

test('encrypt \'Attack at dawn!\' with key 5', () => {
  expect(caesarCipher(5, 'Attack at Dawn!')).toMatch('Fyyfhp fy Ifbs!');
});

test('encrypt \'Attack at dawn!\' with key 135', () => {
  expect(caesarCipher(135, 'Attack at Dawn!')).toMatch('Fyyfhp fy Ifbs!');
});

test('encrypt \'Charge!!\' with key -2', () => {
  expect(caesarCipher(-2, 'Charge!!')).toMatch('Afypec!!');
});

test('encrypt \'Charge!!\' with key -28', () => {
  expect(caesarCipher(-28, 'Charge!!')).toMatch('Afypec!!');
});
