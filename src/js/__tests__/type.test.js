/* eslint-disable no-new */
/* eslint-disable no-undef */
import Character from '../Character ';

test('type === Swordsman', () => {
  const result = new Character('Tom', 'Swordsman');
  const result2 = {
    name: 'Tom',
    type: 'Swordsman',
    level: 1,
    health: 100,
  };
  expect(result).toEqual(result2);
});

test('!type error', () => {
  expect(() => {
    new Character('Tom', 'Alex');
  }).toThrow(Error);
});
