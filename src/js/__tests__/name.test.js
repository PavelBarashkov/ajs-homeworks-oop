/* eslint-disable no-new */
/* eslint-disable no-undef */
import Character from '../Character ';

test('name.length <= 2', () => {
  expect(() => {
    new Character('tm');
  }).toThrow(Error);
});

test('name.length => 10', () => {
  expect(() => {
    new Character('tmtmtmtmtmtm');
  }).toThrow(Error);
});

test('name == number', () => {
  expect(() => {
    new Character(7);
  }).toThrow(Error);
});
