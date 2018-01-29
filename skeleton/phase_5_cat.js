function Cat(name, owner){
	this.name = name;
	this.owner = owner;
}

Cat.prototype.cuteStatement = function(){
	return `${this.owner} loves ${this.name}`;
}

let ziggy = new Cat("Ziggy", "Yon");
let otis = new Cat("Otis", "Andy");
let lady = new Cat("Lady", "Yon");
// console.log(ziggy.cuteStatement());
// console.log(otis.cuteStatement());
// console.log(lady.cuteStatement());

Cat.prototype.cuteStatement = function(){
	return `Everyone loves ${this.name}`;
}

// console.log(ziggy.cuteStatement());
// console.log(otis.cuteStatement());
// console.log(lady.cuteStatement());

Cat.prototype.meow = function(){
	return `meooOOOWWWWW!!`;
}

// console.log(ziggy.meow());
// console.log(otis.meow());
// console.log(lady.meow());

ziggy.meow = function(){
	return `${this.name} says who's mans is this instead of meow`;
}

// console.log(ziggy.meow());
// console.log(otis.meow());
// console.log(lady.meow());