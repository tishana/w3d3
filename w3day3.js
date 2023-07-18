// // Use an array inside an object

// const player = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"]
// }

// // Accessing the array
// console.log(player.belongings) // output: [ 'sword', 'potion', 'Tums' ]
// console.log(player.belongings[0]) // output: sword


// // Iterating over the array within the object
// for (let i=0; i < player.belongings.length; i++) {
// 	console.log(player.belongings[i])
// } // output sword potion Tums (separated by return)

// // Objects within objects... Say whuuuuut?
// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
//         companion: {
//             name: "Tim",
//             type: "Parasite",
//             belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
//         }
// 	}
// }

// console.log(adventurer.companion) // output: {name: "Velma", type: "Bat"}

// // But... I just want the companion's name, or type
// console.log(adventurer.companion.name) // output: Velma
// console.log(adventurer.companion.type) // output: Bat

// // To get Tim's type...
// console.log(adventurer.companion.companion.type) // output: Parasite
// // Or their name:
// console.log(adventurer.companion.companion.name) // output: Tim

// // Tim's Health insurance...
// console.log(adventurer.companion.companion.belongings[2])


// // Arrays can also have objects... 
// // These are nameless...
// const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ]

// // Access them with their index with the array
// console.log(movies[0].title) // output Paul Blart: Mall Cop

// // Since they are in an array, you can loop over them...
// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title)
// } // this will output all titles separated by return

// // An object that contains an array
// const foo = {
//     someArray:[1,2,3]
// }
// console.log(foo.someArray[0]) // output: 1

// // Object that contains an object:
// const bar = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// };
// console.log(bar.someObject.someProperty) // output: oh hai!
// // Object with a method (a function in an object)
// const another = {
//     someMethod:()=>{
//         console.log('oh hai, Mark!');
//     }
// };

// console.log(another.someMethod())//output: 'oh hai, Mark!'

// // array with an object in it
// const foor = [{someProperty:'weee'}, 2, 3]

// console.log(foor[0].someProperty)// output: weee

// // Storing arrays in an array
// const arry = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];

// arry[1][2]; //1,2

// // Storing functions in an array.. But why?
// const goo = [
//     1,
//     "hi",
//     ()=>{
//         console.log('fun')
//     }
// ]

// goo[2]()

// More about classes
// Why do we need them? To make many objects with thesame properties/attributes. Instead of creating them one by one, whether with variable creation, or even functions, we can use a class to create many of the same.

class MainPlayer {

}
const one = new MainPlayer()
const two = new MainPlayer()
console.log(one) // output: MainPlayer {}
console.log(two) // // output: MainPlayer {}
console.log(typeof one) // output: object
console.log(typeof two) // output: object

class Mario { // ALWAYS capitalize the first letter in a class. Its an industry standard
    greet () { // this is a method, or a function for an instantiation of this class
      console.log('Oh,hi, Mark!')
    }
    method2 () {
        console.log('other method')
      }
  }
  
  const me = new Mario() // ALWAYS use new when instantiating!
  const you = new Mario()
  
  me.greet() // output: Oh,hi, Mark!
  you.greet()  // output: Oh,hi, Mark!
  me.method2() // output: other method

  class Gamer { // ALWAYS capitalize the first letter in a class! Its an industry standard!
    constructor(name){
        this.name = name // "this" refers to the object instatiated from the class
        this.legs = 2
        this.arms = 2
        this.eyes = "yellow"
        this.hair = "white"
    }
    greet (otherPerson) { // greet is a method, or a function for an instantiation of this class
      console.log(`Hi, ${otherPerson}!`) // these are backticks, the key above the tab key
    }
    smite () {
        console.log('I smite thee you vile person');
      }
  }
  const link = new Gamer("Link")
  const zelda = new Gamer("Zelda")
  console.log(link) // output: Gamer { name: 'Link', legs: 2, arms: 2, eyes: 'yellow', hair: 'white' }
  console.log(zelda) // Gamer { name: 'Zelda', legs: 2, arms: 2, eyes: 'yellow', hair: 'white' }
  link.greet(zelda.name) // output: Hi, Zelda!
  zelda.greet(link.name) // output: Hi, Link!

  // modifying properties, what if we want link to have brown eyes?
  link.eyes = "brown"

  // Javascript is messy in that it allows us to do this... but try to do it programatically by allowing a user to add eye color in the instantiation of the object... Like..

  class Character {
    constructor (name, age, eyes, hair) {
      this.legs = 2 // this is a default value
      this.arms = 2 // also a default value
      this.name = name // the user will give us this value
      this.age = age // the user will give us this value
      this.eyes = eyes // the user will give us this value
      this.hair = hair // the user will give us this value
    }
    greet (otherCharacter) {
      console.log('hi ' + otherCharacter + '!')
      // you can also use template literals: console.log(`hi ${otherCharacter}!`)
    }
    smite () {
      console.log('I smite thee you vile person')
    }
  }
  
  const jigglypuff = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown')
  console.log(jigglypuff) 
  // output: Character {
//   legs: 2,
//   arms: 2,
//   name: 'Cathy the Miraculous',
//   age: 29,
//   eyes: 'brown',
//   hair: 'locs of dark brown'
// }

// Default values for objects


class Streamer {
    constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
      this.legs = 2 // this is a default value
      this.arms = 2
      this.name = name
      this.age = age
      this.eyes = eyes
      this.hair = hair
      this.lovesCats = lovesCats // this default value will be false if a user doesn't input anything but BEWARE! A user can input ANYTHING and it will be the value of this property
      this.lovesDogs = lovesDogs || false // this default value can be different if the user inputs true, but still requires user input
    }
    greet (otherCharacter) {
      console.log('hi ' + otherCharacter + '!')
    }
    smite () {
      console.log('I smite thee you vile person')
    }
  }
  const first = new Streamer('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true)
  const second = new Streamer('Arthur the Wavy', 32, 'brown', 'his waves be spinnin keep of the g for greatness')
  console.log(first)
  console.log(second)

// Defining methods for our objects
// You CAN change the value of a property...
first.hair = 'supernova red';
console.log(first) 
//  output: Streamer {
//     legs: 2,
//     arms: 2,
//     name: 'Arthur the Wavy',
//     age: 32,
//     eyes: 'brown',
//     hair: 'his waves be spinnin keep of the g for greatness',
//     lovesCats: false,
//     lovesDogs: false
//   }

// But it is much CLEANER and better to do it programmatically:
class Yolo { // The Blueprint
    constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
        // The Properties
      this.legs = 2
      this.arms = 2
      this.name = name
      this.age = age
      this.eyes = eyes
      this.hair = hair
      this.lovesCats = lovesCats
      this.lovesDogs = lovesDogs || true
    }

    // The methods
    greet (otherCharacter) {
      console.log('hi ' + otherCharacter + '!')
    }
    setHair (hairColor) {
      this.hair = hairColor
    }
    smite () {
      console.log('I smite thee you vile person')
    }
  }
  
  const third = new Yolo('Arthur', 32, 'brown', 'his waves be spinnin keep of the g for greatness')
  console.log(third)
//   output:
//   Yolo {
//     legs: 2,
//     arms: 2,
//     name: 'Arthur',
//     age: 32,
//     eyes: 'brown',
//     hair: 'his waves be spinnin keep of the g for greatness',
//     lovesCats: true,
//     lovesDogs: true
//   }
  third.setHair('red')
  console.log(third)
//   output:
//   Yolo {
//     legs: 2,
//     arms: 2,
//     name: 'Arthur',
//     age: 32,
//     eyes: 'brown',
//     hair: 'red',
//     lovesCats: true,
//     lovesDogs: true
//   }

// Classes and Inheritance: Classes can inherit attributes (properties, methods...) from a parent class. A parent class may have the basics, and each class derived from that class will inherit those attributes (child classes). The following class is derived from the above Character class:

class Hobbit extends Character { // the keyword "extends" tells us that this class is derived from Character and inherits all of its attributes
    constructor (name, age, eyes, hair) {
        super(name, age, eyes, hair) // keeping
        this.skills = ["theivery", "speed", "willpower"] // a new attribute that is exclusive to this class and any classes derived from it
    }
    steal() {
        console.log('lets get away')
    }
    greet (otherCharacter) {
        console.log(`Hello ${otherCharacter}`)
      } // overwriting greet from Character
    smite () {
        super.smite() // super keyword, uses this method from parent class
        this.steal()
    }

}
const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
console.log(frodo) // outputs entire object
frodo.smite() // performs overwritten smite function
frodo.steal() // performs steal function
//third.steal() // will not work because its not of class Hobbit (BE SURE TO COMMENT THIS LINE OUT OR YOUR CODE WILL BREAK!!!)
frodo.greet(third) // output: Hello Arthur
third.greet(frodo) // output: hi Frodo! 

// JavaScript OOP Factories: (aka singleton)a way to create multiple objects from a class in an instant... 

// This is a basic class:
class Car {
    constructor (maker, serialNumber) {
      this.maker = maker
      this.serialNumber = serialNumber
    }
    drive () {
      console.log('Vroom Vroom')
    }
  }
  
  const newCar = new Car('Mazda', 12345) // makes an instance of Car
  console.log(newCar) // output: Car { maker: 'Mazda', serialNumber: 12345 }
  newCar.drive() // output: Vroom Vroom

// This is a factory:
class Factory {
    // attributes
    constructor (company) {
      this.company = company
      this.cars = []
    }
    // method(s)
    generateCar () {
      const newCar = new Car(this.company, this.cars.length)
      this.cars.push(newCar)
    }
    findCar (index) {
      return this.cars[index]
    }
  }

  // now let's make a factory
  const rivian = new Factory('Rivian')
  rivian.generateCar()
  rivian.generateCar()
  rivian.generateCar()
  rivian.generateCar()
  console.log(rivian)
  // output: 
//   Factory {
//     company: 'Rivian',
//     cars: [
//       Car { maker: 'Rivian', serialNumber: 0 },
//       Car { maker: 'Rivian', serialNumber: 1 },
//       Car { maker: 'Rivian', serialNumber: 2 },
//       Car { maker: 'Rivian', serialNumber: 3 }
//     ]
  console.log(rivian.findCar(0)) // output: Car { maker: 'Rivian', serialNumber: 0 } (REMEMBER: this is an array of objects)

  // Static classes - used when we need to create specific attributes (properties or methods) for a class, but not the instance. This is limiting for users because it cannot be instantiated. In Drake terms, No New Objects, no no no.. 

  class Person {
    static eyeColors () { // static attributes
      return ['blue', 'green', 'brown']
    }
    static exist (){ // a static method
        console.log( `I am ${this.name} and I exist, I guess...`)
    }
  }
  // more code...
  console.log(Person.eyeColors()) // output: ['blue', 'green', 'brown']