class Character {
  constructor(name, hitPoints, combatSkill) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.combatSkill = combatSkill;
    this.status = true;
  }

  skillCheck() {
    console.log(`Combat Skill: ${this.combatSkill}%`);
  }

  status() {
    console.log(`Your current HP is ${this.hitPoints}.`);
    return this.hitPoints > 0;
  }

  attack(enemy) {
    if (!enemy.status()){
      console.log('Enemy is alive');
    }
  }


}

// Create two characters
const player = new Character("Knight", 25, 45);
const enemy = new Character("Orc", 20, 50);

player.skillCheck();
player.status();
player.attack();