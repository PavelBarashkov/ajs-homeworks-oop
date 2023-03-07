/* eslint-disable no-undef */
import Zombie from '../Zombie';
import Undead from '../Undead';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Bowerman from '../Bowerman';

test('damage error', () => {
  expect(() => {
    const result = new Undead('Alex', 'Undead');
    result.health = -20;
    result.damage(10);
  }).toThrow(Error);
});

test.each([
  [new Undead('Alex', 'Undead'), 10, {
    name: 'Alex',
    type: 'Undead',
    level: 1,
    health: 92.5,
    attack: 25,
    defence: 25,
  }],
  [new Zombie('Tom', 'Zombie'), 15, {
    name: 'Tom',
    type: 'Zombie',
    level: 1,
    health: 86.5,
    attack: 40,
    defence: 10,
  }],
  [new Swordsman('Paul', 'Swordsman'), 20, {
    name: 'Paul',
    type: 'Swordsman',
    level: 1,
    health: 82,
    attack: 40,
    defence: 10,
  }],
  [new Magician('Karl', 'Magician'), 14, {
    name: 'Karl',
    type: 'Magician',
    level: 1,
    health: 91.6,
    attack: 10,
    defence: 40,
  }],
  [new Daemon('Loke', 'Daemon'), 15, {
    name: 'Loke',
    type: 'Daemon',
    level: 1,
    health: 86.5,
    attack: 40,
    defence: 10,
  }],
  [new Bowerman('Tor', 'Bowerman'), 10, {
    name: 'Tor',
    type: 'Bowerman',
    level: 1,
    health: 92.5,
    attack: 25,
    defence: 25,
  }],
])('testing damage function with %i damg', (clas, damg, expected) => {
  const result = clas;
  result.damage(damg);
  expect(result).toEqual(expected);
});
