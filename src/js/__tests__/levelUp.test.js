/* eslint-disable no-undef */
import Zombie from '../Zombie';
import Undead from '../Undead';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Bowerman from '../Bowerman';

test('levelUp error', () => {
  expect(() => {
    const result = new Zombie('Tom', 'Zombie');
    result.health = -10;
    result.levelUp();
  }).toThrow(Error);
});

test.each([
  [new Undead('Alex', 'Undead'), {
    name: 'Alex',
    type: 'Undead',
    level: 2,
    health: 100,
    attack: 30,
    defence: 30,
  }],
  [new Zombie('Tom', 'Zombie'), {
    name: 'Tom',
    type: 'Zombie',
    level: 2,
    health: 100,
    attack: 48,
    defence: 12,
  }],
  [new Swordsman('Paul', 'Swordsman'), {
    name: 'Paul',
    type: 'Swordsman',
    level: 2,
    health: 100,
    attack: 48,
    defence: 12,
  }],
  [new Magician('Karl', 'Magician'), {
    name: 'Karl',
    type: 'Magician',
    level: 2,
    health: 100,
    attack: 12,
    defence: 48,
  }],
  [new Daemon('Loke', 'Daemon'), {
    name: 'Loke',
    type: 'Daemon',
    level: 2,
    health: 100,
    attack: 48,
    defence: 12,
  }],
  [new Bowerman('Tor', 'Bowerman'), {
    name: 'Tor',
    type: 'Bowerman',
    level: 2,
    health: 100,
    attack: 30,
    defence: 30,
  }],
])('testing levelUp function', (clas, expected) => {
  const result = clas;
  result.levelUp();
  expect(result).toEqual(expected);
});
