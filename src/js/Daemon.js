import Character from './Character ';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
