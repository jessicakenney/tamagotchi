export let pet {
  food: 8,
  setFood: function() {
    const foodInterval = setInterval(() =>{
      this.food--;
      if (this.isDead() == true) {
        clearInterval(foodInterval);
        return "Your tamagotchi is dead!";
      }
    }, 1000);
  },
  isDead: function() {
    if (this.food > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.food += amount;
      return that.name + `ate the ${food} you gave it! It's food level is now ${that.food}`;
    }
  }
};
pet.eatSmall = pet.feed(2);


//
//   constructor(name, rest, food, love) {
//     this.name = name;
//     this.rest = rest;
//     this.food = food;
//     this.love = love;
//   }
//
//   setRest() {
//     setInterval(() => {
//       this.rest--;
//     }, 1000);
//   }
//
//   setFood() {
//     setInterval(() => {
//       this.food--;
//     }, 1000);
//   }
//
//   setLove() {
//     setInterval(() => {
//       this.love--;
//     }, 1000);
//   }
//
//   giveRest() {
//     this.rest += 10;
//   }
//
//   giveLove() {
//     this.love += 2.5;
//   }
//
//   giveFood() {
//     this.food += 4;
//   }
//
// }


// export class Tamagotchi {
//
//   constructor(name, rest, food, love) {
//     this.name = name;
//     this.rest = rest;
//     this.food = food;
//     this.love = love;
//   }
//
//   setRest() {
//     setInterval(() => {
//       this.rest--;
//     }, 1000);
//   }
//
//   setFood() {
//     setInterval(() => {
//       this.food--;
//     }, 1000);
//   }
//
//   setLove() {
//     setInterval(() => {
//       this.love--;
//     }, 1000);
//   }
//
//   giveRest() {
//     this.rest += 10;
//   }
//
//   giveLove() {
//     this.love += 2.5;
//   }
//
//   giveFood() {
//     this.food += 4;
//   }
//
// }
