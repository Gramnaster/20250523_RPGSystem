class Animal {
  constructor(name, species, quantity){
    this.name = name;
    this.species = species;
    this.quantity = quantity;
  }

  // this.name refers to the object's property 'name'
  speak(target){
    if (this.name === 'Dog'){
      console.log(`The ${this.name} barks at the ${target.name}!`);
    } else {
      console.log(`The ${this.name} meows at the ${target.name}!`);
    }
  }

  attack(target){
    if (Dog.isAlive() && Cat.isAlive()){
      console.log(`The ${this.name} attacks the ${target.name}!`);
      target.quantity--;
      console.log(`There are ${target.quantity} ${target.name}s left!`);
    } else {
      console.log(`There are no more ${target.name}s left!`);
    }
  }

  isAlive(){
    return this.quantity > 0; // Keeps returning isAlive as True if their quantities are above 0
  }
  
}

const Dog = new Animal('Dog', 'Dog', 5);
const Cat = new Animal('Cat', 'Cat', 10);

Dog.speak(Cat);
Cat.speak(Dog);

console.log(`There are ${Cat.quantity} left`);

/* for (let i=Cat.quantity; i > 0; i--){
  Dog.attack(Cat);
} */

// Keeps attacking while both creatures are alive
while (Dog.isAlive() && Cat.isAlive()){
  Dog.attack(Cat);
  Cat.attack(Dog);
}