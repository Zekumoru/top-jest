import capitalize from './capitalize';

test('capitalize arCaNUm to Arcanum', () => {
  expect(capitalize('arCaNUm')).toMatch('Arcanum');
});
