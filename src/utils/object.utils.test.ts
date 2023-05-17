import * as ObjectUtils from './object.utils';

test('isEmpty([])', () => {
  expect(ObjectUtils.isEmpty([])).toBe(true);
});

test("isEmpty('')", () => {
  expect(ObjectUtils.isEmpty('')).toBe(true);
});

test('isEmpty({})', () => {
  expect(ObjectUtils.isEmpty({})).toBe(true);
});

test('isEmpty(null)', () => {
  expect(ObjectUtils.isEmpty(null)).toBe(true);
});

test('isEmpty(undefined)', () => {
  expect(ObjectUtils.isEmpty(undefined)).toBe(true);
});

test('getVal(undefined)', () => {
  expect(ObjectUtils.getVal(undefined, '', 'hello')).toBe('');
});

test("getVal({a: {a: 'a'}})", () => {
  expect(ObjectUtils.getVal({ a: { a: 'a' } }, '', 'a', 'a')).toBe('a');
});
