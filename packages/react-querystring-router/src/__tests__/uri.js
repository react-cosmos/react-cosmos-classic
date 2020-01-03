import { parseLocation, stringifyParams } from '../uri';

test('returns empty object when querystring is missing', () => {
  const uriLocation = 'mypage.com';
  const params = parseLocation(uriLocation);

  expect(Object.keys(params)).toHaveLength(0);
});

test('returns empty object when querystring is empty', () => {
  const uriLocation = 'mypage.com?';
  const params = parseLocation(uriLocation);

  expect(Object.keys(params)).toHaveLength(0);
});

test('parses stringified and encoded params from location', () => {
  const uriLocation = 'mypage.com?name=Jack&info=%7B%22age%22%3A25%7D';
  const params = parseLocation(uriLocation);

  expect(params).toEqual({
    name: 'Jack',
    info: {
      age: 25
    }
  });
});

test('generates location with query string from params', () => {
  const params = {
    name: 'Jack',
    info: {
      age: 25
    }
  };

  expect(stringifyParams(params)).toBe('?name=Jack&info=%7B%22age%22%3A25%7D');
});

test('parses stringified and form encoded params from location', () => {
  const uriLocation =
    'mypage.com?formValue=first+middle+last&encodedValue=first%20middle%20last&plusValue=first%2Bmiddle%2Blast';
  const params = parseLocation(uriLocation);

  expect(params).toEqual({
    formValue: 'first middle last',
    encodedValue: 'first middle last',
    plusValue: 'first+middle+last'
  });
});
