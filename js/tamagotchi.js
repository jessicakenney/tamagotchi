export class Tamagotchi {
  constructor(name, rest, food, love) {
    this.name = name;
    this.rest = rest;
    this.food = food;
    this.love = love;
  }


  setFood() {
    setInterval(() => {
      this.food--;
    }, 1000);
  }
  // setRest() {
  //   setInterval(() => {
  //     this.rest--;
  //   }, 1000);
  // }
  // setLove() {
  //   setInterval(() => {
  //     this.love--;
  //   }, 1000);
  // }
  //
  // giveRest() {
  //   this.rest += 10;
  // }
  //
  // giveLove() {
  //   this.love += 2.5;
  // }
  getFoodValues(type) {
    const menuMap = {};
    menuMap["blueberries"] = 2;
    menuMap["pb&j"] = 4;
    menuMap["lasagna"] = 6;
    return menuMap[type];
  }

  giveFood(type) {
    this.food += this.getFoodValues(type);
    return `Yum, mighty tasty ${type}! ${this.name} is pleased; current food level: ${this.food}`;
  }

  isDead() {
    let dead;
    if(this.food <= 0 || this.rest <= 0 || this.love <= 0){
      dead = true;
    } else {
      dead = false;
    }
    return dead;
  }

}
