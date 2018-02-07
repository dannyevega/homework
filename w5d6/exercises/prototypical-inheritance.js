// inheritance using Surrogate
Function.prototype.inherits = function(BaseClass){
	function Surrogate(){}
	Surrogate.prototype = BaseClass.prototype;
	this.prototype = new Surrogate();
	// I changed the values of 'this' to BaseClass and it works the same -- would this be acceptable/same thing?
	this.prototype.constructor = this;
}

function Dog(name){
	this.name = name;
}

Dog.prototype.bark = function(){
	console.log(`${this.name} barks!`);
}

function Corgi(name){
	Dog.call(this, name);
}

Corgi.inherits(Dog);

Corgi.prototype.waddle = function(){
	console.log(`${this.name} waddles side to side!`);
}

const twinkie = new Corgi("Twinkie");
// twinkie.waddle();
// twinkie.bark();

const reggie = new Dog("Reggie");
// reggie.bark();
// reggie.waddle(); // should not work


Function.prototype.inherits = function(Class){
	function Surrogate(){}
	Surrogate.prototype = Class.prototype;
	this.prototype = new Surrogate();
	this.prototype.constructor = this;
}

function MovingObject(name){
	this.name = name;
}

MovingObject.prototype.moves = function(){
	console.log(`${this.name} moved 200ft!`);
}

function Ship(name){
	MovingObject.call(this, name);
}

Ship.inherits(MovingObject);

Ship.prototype.flying = function(){
	console.log(`${this.name} is flying at maximum speed!`);
}

function Asteroid(name){
	MovingObject.call(this, name);
}

Asteroid.inherits(MovingObject);

Asteroid.prototype.hit = function(){
	console.log(`${this.name} just blew some shit up!`);
}

const ast = new Asteroid("Asterus");
const shippy = new Ship("Shippy");
// ast.moves();
// shippy.moves();
// ast.flying(); // should not work
// ast.hit();
// shippy.flying();
// shippy.hit(); // should not work

console.log(ast.__proto__.__proto__);
console.log(shippy.__proto__.__proto__);

















