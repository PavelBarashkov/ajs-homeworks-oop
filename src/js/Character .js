export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.level = 1;
    this.health = 100;
    this.attack = attack;
    this.defence = defence;

    if (name.length <= 2 || name.length >= 10 || typeof name !== 'string') {
      throw new Error('Некорректный тип');
    }

    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (types.includes(type) === false) {
      throw new Error('Некорректный тип');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('health < 0');
    }
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('health < 0');
    }
    if (this.health !== 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
