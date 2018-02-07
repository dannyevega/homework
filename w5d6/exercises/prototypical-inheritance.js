// Using Surrogate trick
Function.prototype.inherits = function(baseClass){
	function Surrogate(){}
	Surrogate.prototype = baseClass.prototype;
	this.prototype = new Surrogate();
	this.prototype.constructor = this;
}

function MovingObject(name, type){
	this.name = name;
	this.type = type;
}

function Ship(name, type, captain){
	MovingObject.call(this, name, type);
	this.captain = captain;
}

function Asteroid(name, type, rock){
	MovingObject.call(this, name, type);
	this.rock = rock;
}

Ship.inherits(MovingObject);
Asteroid.inherits(MovingObject); // Ask Kelly if order matters when setting up inheritance because functions on classes wont work if I move the inherits function below the methods defined on classses -- I think you need to set up inheritance before defining methods on classes

MovingObject.prototype.moves = function(){
	console.log(`${this.name} just flew into thin air!`);
}

Ship.prototype.flies = function(){
	console.log(`${this.name} just flew 1000 meters!`);
}

Asteroid.prototype.hit = function(){
	console.log(`${this.name} just destroyed a planet!`);
}

const shippy = new Ship("Shippy", "Spaceship", "Capt. Reynaldo");
const asterus = new Asteroid("Asterus", "Asteroid", "Sedimentary");

shippy.moves();
shippy.flies();
asterus.moves();
asterus.hit();
// shippy.hit(); // shouldnt work
// asterus.flies(); // shouldnt work




// Using Object.create
Function.prototype.inherits = function(baseClass){
	this.prototype = Object.create(baseClass.prototype);
	this.prototype.constructor = this;
}
