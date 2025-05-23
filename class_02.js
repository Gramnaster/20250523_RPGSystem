class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.isAlive = true;
  }
    
  attack(target) {
    if (this.isAlive && target.isAlive) {
      console.log(`${this.name} attacks ${target.name} for ${this.strength} damage.`);
      target.health -= this.strength;
    }
/*     for (let i = 20; i === this.isAlive || i === target.isAlive; i++) {
      hero.attack(target);
      target.status();
      console.log(`This part is running`);
    } */
  }

  status() {
    if (target.health <= 0) {
      target.isAlive = false;
      console.log(`${target.name} is unconscious.`);
      return target.isAlive = false;
    } else {
      console.log(`${target.name}'s health is now ${target.health}/20.`);
    }
  }
}


// Create two characters
const hero = new Character("Knight", 30, 10, true);
const target = new Character("Orc", 20, 5, true);

// Sample usage
/* for (let i = 0; i < 6; i++) {
  hero.attack(target);
  target.status();
  console.log(`This part is running`);
} */

hero.attack(target);
target.status(); 