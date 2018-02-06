function Animal(name){
	this.name = name;
}

Animal.prototype.eat = function(){
	console.log('out here eating...');
}

function Dog(name){
	// this.name = name;
	Animal.call(this, name); // what does this line do?
}

// Dog.prototype = Animal.prototype; // Why does the video make the use of a surrogate case when you can just do this? You can't use this because if you do, any new function added to Dog will also be added to Animal and we dont want that
const Surrogate = function(){};
Surrogate.prototype = Animal.prototype;
Dog.prototype = new Surrogate();
Dog.prototype.constructor = Dog; // I'm not sure what the point of this line is? So instances of dog's know they are Dogs

Dog.prototype.woof = function(){
	console.log(`Woof! I'm ${this.name}`);
}

const dog = new Dog("Fideo");

console.log(dog.name);
dog.woof();
dog.eat();



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