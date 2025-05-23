class Character{
  constructor(name, hitPoints, combatSkill1, combatSkill2, weapon, shield, armour){
    this.name = name;
    this.hitPoints = hitPoints;
    this.combatSkill1 = combatSkill1;
    this.combatSkill2 = combatSkill2;
    this.weapon = weapon;
    this.shield = shield;

    this.locHP = {
      Head: hitPoints, 
      LArm: hitPoints -1,
      RArm: hitPoints -1,
      Chest: hitPoints +2,
      Abs: hitPoints +1,
      LLeg: hitPoints,
      RLeg: hitPoints,
    };

    this.locArmour = {
      Head: armour,
      LArm: armour -1,
      RArm: armour -1,
      Chest: armour +1,
      Abs: armour +1,
      LLeg: armour,
      RLeg: armour,
    };
  } 

  // Rolls the d100 dice
  percentDice(){
    let diceRoll = Math.ceil(Math.random() * 100);
    // console.log(`You rolled ${diceRoll}`);
    return diceRoll;
  }

  attack(target){
    if (Count.isAlive() && Peasant.isAlive()) {
      // console.log(`Both are alive`);
      
      // Stores the rolled dice to help with tracking
      const attackRoll = this.percentDice();
      const defenseRoll = this.percentDice();
      console.log(`${this.name}'s attack roll is ${attackRoll}. ${target.name}'s defense roll is ${defenseRoll}.`);

      // Gets the Ones value of a roll for the Hit Location
      const hitLocRoll = attackRoll % 10;
      let hitLoc;

      // Allocates Hit Location based on the Ones Value
      if ([9,0].includes(hitLocRoll)){
        hitLoc = "Head";
      } else if (hitLocRoll === 8) {
        hitLoc = "LArm";
      } else if (hitLocRoll === 7) {
        hitLoc = "RArm";
      } else if ([5,6].includes(hitLocRoll)) {
        hitLoc = "Chest";
      } else if ([3,4].includes(hitLocRoll)) {
        hitLoc = "Abs";
      } else if (hitLocRoll === 2) {
        hitLoc = "LLeg";
      } else if (hitLocRoll === 1) {
        hitLoc = "RLeg";
      } else {
        console.log(`Error. Invalid Hit Location.`);
      }

      // if ([9,0].includes(hitLocRoll)){
      //   hitLoc = this.locHP["Head"];
      // } else if (hitLocRoll === 8) {
      //   hitLoc = this.locHP["LArm"];
      // } else if (hitLocRoll === 7) {
      //   hitLoc = this.locHP["RArm"];
      // } else if ([5,6].includes(hitLocRoll)) {
      //   hitLoc = this.locHP["Chest"];
      // } else if ([3,4].includes(hitLocRoll)) {
      //   hitLoc = this.locHP["Abs"];
      // } else if (hitLocRoll === 2) {
      //   hitLoc = this.locHP["LLeg"];
      // } else if (hitLocRoll === 1) {
      //   hitLoc = this.locHP["RLeg"];
      // } else {
      //   console.log(`Error. Invalid Hit Location.`);
      // }

      // Determines if an attack hits
      // If the attacker is successful and defender fails, damage is resolved
      if (attackRoll <= this.combatSkill1 && defenseRoll > target.combatSkill2){

        // If the attacker rolls a Tens value, it crits and deals double damage.
        if (attackRoll % 10 === 0){
          console.log(`Attack crits against the ${target.name}'s ${hitLoc}. Parry fails.`);
          target.locHP[hitLoc] -= (2 * this.weapon) - target.locArmour[hitLoc];
        } 

        // Otherwise, it deals normal damage.
        else {
          console.log(`Attack succeeds against the ${target.name}'s ${hitLoc}. Parry fails.`);
          target.locHP[hitLoc] -= this.weapon - target.locArmour[hitLoc];
        }

        // Tells you how much HP is left per Hit Location.
        console.log(`${target.name}'s ${hitLoc} receives ${this.weapon} damage and has only ${target.locHP[hitLoc]}HP left.`);

        // If a Hit Location is <= 0, it will display that Hit Location as destroyed and force the function to end.
        if (target.locHP[hitLoc] <= 0) { 
         console.log(`${hitLoc} is destroyed!`);
         return;
        }
      } else if(attackRoll > this.combatSkill1 && defenseRoll <= target.combatSkill2){
        console.log(`Attack fails. Parry succeeds.`);
      } else if(attackRoll <= this.combatSkill1 && defenseRoll <= target.combatSkill2){
        console.log(`Attack succeeds. Parry succeeds.`);
      } else {
        console.log(`Both actions fail.`);
      }
    } else {
      // console.log(`Combat has ended`);
      return;
    }
  }

  isAlive(){
    // Checks through every key:value and determines if a value is 0
    for (let hp in this.locHP) {
      if (this.locHP[hp] <= 0) { // If any value in the key: value is <= 0, this triggers and isAlive() returns false
        // console.log(`${hp} is destroyed!`);
        return false;
      } 
    }
    return true; //Keeps returning isAlive() if a hit location is not destroyed;
  }
}

const Count = new Character("Count El Cid", 6, 58, 65, 6, undefined, 3);
const Peasant = new Character("Farmer", 6, 48, 53, 6, undefined, 2);

let roundCount = 1;

while (Count.isAlive() && Peasant.isAlive()){
  console.log(`-- Round ${roundCount} --`);
  Count.attack(Peasant);
  Peasant.attack(Count);
  roundCount++;
}

console.log(`Combat has ended`);