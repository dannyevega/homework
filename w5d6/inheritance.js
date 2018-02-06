// Inheritance
// creating new function constructors for Animal and Dog
function Animal () {};
function Dog () {};

const myAnimal = new Animal();
const myDog = new Dog();

// we want Dog.prototype to reference Animal.prototype -- you might be thinking we can do this:
Dog.prototype = Animal.prototype; // --> this is wrong! Can't do this because any new function added to Dog will also be added to Animal

// We want the __proto__ property to point to the correct prototype object:
Dog.prototype.__proto__ === Animal.prototype;
// This way, when an attribute is not found on Dog.prototype and the JS interpreter looks at whatever is set equal to Dog.ptototype.__proto__ and it will look at Animal.prototype
// Dog objects will then have access to methods defined on the Animal prototype





// Different ways to set up Inheritance in JS:
// 1. Using the __proto__ property itself
// Using __proto__ is bad practice however -- because of how JavaScript searches for and accesses properties in the prototype chain, anything that alters the prototype of an object will lead to very poor performance
// Not all browsers support this inheritance as well since it was only standardized with ES2015
Object.prototype.__proto__

Dog.prototype.__proto__ = Animal.prototype; // this line successfully sets up inheritance
// __proto__ can be used as an accessor for the prototype of the object it is called on
// Dog objects now have access to methods defined on the Animal prototype because Dog.prototype.__proto__ references the Animal prototype





// 2. Object.setPrototypeOf
// Object.setPrototypeOf takes two properties: the object whose prototype we want to link and the prototype we want to link it to
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
// Like __proto__, however, using Object.setPrototypeOf comes with a performance hit because it alters an object's prototype
// In order to efficiently manage inheritance in Javascript, it will be necessary to refrain from mutating the prototype at all





// 3. Object.create
// the workaround is to create an entirely new prototype object
Dog.prototype = Object.create(Animal.prototype);
// Object.create returns an entirely new object with its __proto__ set to whatever argument is passed to Object.create
// We then set the object returned by Object.create to be the prototype of the child constructor function

function Animal(name){
	this.name = name;
}

Animal.prototype.sayHello = function(){
	console.log(`Hello, my name is ${this.name}`);
}

function Dog(){}
Dog.prototype = Object.create(Animal.prototype); // Dog now inherits from Animal
Dog.prototype.constructor = Dog; // otherwise instances of Dog will have 'instance.constructor === Animal'

Dog.prototype.bark = function(){
	console.log("Bork!");
}

const torta = new Dog("Lionel");
torta.bark();
torta.sayHello(); // this will run but this.name will be undefined

// above code will work for the most part -- however, we still have the problem that Animal won't be called when creating a new instance of Dog
// check out minor tweak below to Dog constructor to make this work
// This pattern is especially useful if the superclass (Animal) has a lot of initialization code
// You could have copy-and-pasted the Animal constructor code into Dog's constructor, but calling the Animal constructor itself is obviously much DRYer
// Note that we write Animal.call and not new Animal -- Inside the Dog constructor, we don't want to construct a whole new Animal object
// We just want to run the Animal initialization logic on the current Dog instance -- That's why we use call to call the Animal constructor, setting this to the current Dog instance
function Dog(name, coatColor){
	// call super-constructor function on the current Dog instance
	Animal.call(this, name);
	// Dog specific initialization
	this.coatColor = coatColor;
}





// 4. the Old Surrogate trick
// Instead of using Object.create to make a new prototype object, this method uses a third class traditionally called the Surrogate
// Surrogate.prototype is set equal to Animal.prototype so all instances of Surrogate will have a __proto__ accessor that points to Animal.prototype.
// This surrogate instance becomes the new Dog.prototype
function Animal(name) {
	this.name = name;
};

Animal.prototype.sayHello = function () {
	console.log("Hello, my name is " + this.name);
};

function Dog (name, coatColor) {
	Animal.call(this, name);
	this.coatColor = coatColor;
}

// A surrogate will be used to construct `Dog.prototype`.
// A `Surrogate` instance should delegate to `Animal.prototype`.
function Surrogate () {};
Surrogate.prototype = Animal.prototype;

// Set `Dog.prototype` to a `Surrogate` instance.
Dog.prototype = new Surrogate();

// Make sure that instances of Dog have instance.constructor === Dog (rather than Animal)
Dog.prototype.constructor = Dog;

const liesel = new Dog("Liesel", "Black");
liesel.sayHello();





// Inheritance in 2015
// ES2015 greatly simplifies JavaScript inheritance. class Dog extends Animal is the syntactic-sugar equivalent of using Object.create
// One can access a parent class's overwritten functions using super
// Within a child class's constructor function, simply call super with the necessary parameters for the base class's constructor

// Note the use of extends and super below:
class Bicycle {
	constructor(color, model) {
		this.color = color;
		this.model = model;
	}

	action() {
		return "rolls along";
	}
}

class RaceBicycle extends Bicycle {
	constructor(color, model, gears) {
		super(color, model);
		this.gears = gears;
	}

	action() {
		const oldAction = super.action();
		return `${oldAction} at a blistering pace!`
	}
}
