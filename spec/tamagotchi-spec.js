import { Tamagotchi } from './../js/tamagotchi.js';

describe ('Tamagotchi' , function() {
  let testPet = new Tamagotchi("testPet", 20, 8, 5);

  beforeEach(function() {
    jasmine.clock().install();
    testPet.rest = 20;
    testPet.food = 8;
    testPet.love = 5;
    // testPet.setRest();
    testPet.setFood();
    // testPet.setLove();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  // it('should have a name and a rest level of 20 when it is created', function() {
  //   expect(pet.name).toEqual("testPet");
  //   expect(pet.rest).toEqual(20);
  // });

  it('should have a food level of 8 when it is created', function() {
    expect(testPet.food).toEqual(8);
  });

  // it('should have a love level of 5 when it is created', function() {
  //   expect(pet.love).toEqual(5);
  // });
  //
  // it('should have a rest level of 17 after 3001 milliseconds', function() {
  //   jasmine.clock().tick(3001);
  //   expect(pet.rest).toEqual(17);
  // });

  it('should have a food level of 5 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(testPet.food).toEqual(5);
  });

  it('should increase food after giveFood', function() {
    expect(testPet.giveFood("blueberries")).toEqual('Yum, mighty tasty blueberries! testPet is pleased; current food level: 10');
  });

  it('should kill tamagotchi when food <= 0', function() {
    jasmine.clock().tick(8001);
    expect(testPet.isDead()).toEqual(true);
  });


  // it('should have a love level of 2 after 3001 milliseconds', function() {
  //   jasmine.clock().tick(3001);
  //   expect(pet.love).toEqual(2);
  // });

});
