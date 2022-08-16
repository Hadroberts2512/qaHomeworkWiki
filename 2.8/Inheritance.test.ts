class Animal {
    name: string;
    sound: string;
    food: string;
    constructor(name: string, sound: string, food: string) {
      this.name = name;
      this.sound = sound;
      this.food = food;
    }
    soundOff(): string {
      return `The ${this.name} makes the sound "${this.sound}".`;
    }
  }
  
  /**
   * Fish extends Animal, but takes different properties, has a different soundOff() method, and a new method, habitat().
   * @param {string} name - as expected
   * @param {string} food - as expected
   * @param {string} saltwater - true if the fish is a saltwater fish
   */
  class Fish extends Animal {
    saltwater: boolean;
    // As required, has the name, food, and saltwater parameters
    constructor(name: string, food: string, saltwater: boolean) {
      // Passes the parent (Animal) constructor its three parameters, where
      // `sound` is `null`, as the Fish class doesn't use that property.
      super(name, null, food);
      this.saltwater = saltwater;
    }
    // Here we have the right format for the new soundOff
    soundOff(): string {
      return `The ${this.name} is a fish and does not make sounds.`;
    }
    // Here is the new habitat method, returning a string based on the `saltwater`
    // property
    habitat(): string {
      return `The ${this.name} is a ${
        this.saltwater ? "saltwater" : "freshwater"
      } fish.`;
    }
  }
  
  /**
   * Bird extends Animal, but takes an additional property, and has an additional method, fly().
   * @param {string} name - as expected
   * @param {string} sound - as expected
   * @param {string} food - as expected
   * @param {number} flightSpeed - the flight speed of the bird, in meters/second. This should be 0 for flightless birds.
   */
  class Bird extends Animal {
    flightSpeed: number;
    // this constructor takes one more parameter than Animal, flightSpeed
    constructor(name: string, sound: string, food: string, flightSpeed: number) {
      // we use Animal's constructor for 3 of our 4 parameters
      super(name, sound, food);
      this.flightSpeed = flightSpeed;
    }
    // we only need to define the ONE new method; fly, that returns the correct
    // string for flying or flightless birds
    fly(): string {
      if (this.flightSpeed > 0)
        return `The ${this.name} flies at speeds of up to ${this.flightSpeed} meters per second!`;
      else return `The ${this.name} is a flightless bird.`;
    }
  }
  
  describe("Testing animals", () => {
    test("a basic animal works as expected", () => {
      let dog = new Animal("dog", "bark", "kibble");
      // lion is an animal
      expect(dog instanceof Animal).toBeTruthy();
      // lion.soundOff() has the expected output
      expect(dog.soundOff()).toBe('The dog makes the sound "bark".');
    });
    describe("Fish", () => {
      // Fish should only have the three parameters listed.
      let betta = new Fish("betta", "dry flakes", false);
      let clownfish = new Fish("clownfish", "shrimp", true);
      it("are animals", () => {
        // Fish *must* extend Animal
        expect(betta instanceof Animal).toBeTruthy();
      });
      it("doesn't make sound", () => {
        // Fish should give the expected soundOff, it's own version
        expect(betta.soundOff()).toBe(
          "The betta is a fish and does not make sounds."
        );
      });
      it("can be saltwater or freshwater", () => {
        // Fish gives the right habitat string based on the `saltwater` property
        expect(betta.habitat()).toBe("The betta is a freshwater fish.");
        expect(clownfish.habitat()).toBe("The clownfish is a saltwater fish.");
      });
    });
    describe("Birds", () => {
      // Bird should actually take four arguments
      let bluebird = new Bird("bluebird", "whistle", "seeds", 11);
      let ostrich = new Bird("ostrich", "gurgle", "bugs", 0);
      it("are animals", () => {
        // Bird *must* extend Animal
        expect(bluebird instanceof Animal).toBeTruthy();
      });
      it("make sounds", () => {
        // Bird uses the standard soundOff
        expect(bluebird.soundOff()).toBe(
          'The bluebird makes the sound "whistle".'
        );
      });
      it("might be able to fly", () => {
        // Bird have a new method using the fly speed to give us these strings
        expect(bluebird.fly()).toBe(
          "The bluebird flies at speeds of up to 5 meters per second!"
        );
        expect(ostrich.fly()).toBe("The ostrich is a flightless bird.");
      });
    });
  });