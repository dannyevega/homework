// WEEK 5 DAY 4 NOTES


// 1
	function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j){
            return function () {
                return uniqueID + j;
            } ()
        } (i);
    }
    return theCelebrities;
}

// Ask Kelly how to make this work -- GOT IT! Make sure to clarify about using keyword let for newID -- this is why it retains the value of i because it is block scoped within curly brackets

// CLARIFY: only when you use functions within a loop is when the local variables from the closure do not behave as expected i.e. 103 being printed 3 times -- because i did increment to 3 but it never entered the for loop so the print value still holds "item2"
const celebrityIDCreator = (arr) => {
    let uniqueID = 100;
    for(let i = 0; i < arr.length; i++){
        let newID = uniqueID + i;
        arr[i].id = () => {
            return newID;
        }
    }
    return arr;
}
let actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
let createIdForActionCelebs = celebrityIDCreator(actionCelebs);
let stalloneID = createIdForActionCelebs[0];
let cruiseID = createIdForActionCelebs[1];





// 2
const sayHello = (name) => {
    let intro = `Hello ${name}`;
    const say = () => {
        console.log(intro);
    }
    say();
}
const sayHello2 = (name) => {
    let intro = `Hello ${name}`;
    const say = () => {
        console.log(intro);
    }
    return say;
}
let person = sayHello2("Ron");
const sayNum = () => {
    let num = 44;
    const say = () => {
        console.logt(num);
    }
    num++;
    return say;
}





// 3
// explain to Kelly just to make sure you fully understand it
let gLogNumber, gIncrementNumber, gSetNumber;
const setupGlobals = () => {
    let num = 42;
    gLogNumber = () => { console.log(num); }
    gIncrementNumber = () => { num++; }
    gSetNumber = (x) => { num = x; }
}
setupGlobals();
gIncrementNumber(); // 43
gLogNumber() // 43
gSetNumber(5);
gLogNumber() // 5
let oldLog = gLogNumber;
setupGlobals();
gLogNumber(); // 42
oldLog(); // 5





// 4
// below example, clarify with Kelly WHY using let and const allows us to keep the current value of i, make sure you understand this becuase it doesnt work with using var and a function
// also how this logs logs "item2 undefined" 3 times instead of item3 since it incremented to 3 then exited the for loop because it didnt meet the condition. Use example above about celrbity IDs
function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var item = 'item' + i;
        result.push( function() {console.log(item + ' ' + list[i])} );
    }
    return result;
}
function testList() {
    var fnlist = buildList([1,2,3]);
    // Using j only to help prevent confusion -- could use i.
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}
testList();

// using below functions keeps the current value of i
const buildList = (list) => {
    let result = [];
    for(let i = 0; i < list.length; i++){
        let item = `item ${i}`;
        result.push(
            () => {
                console.log(`${item} is ${list[i]}`);
            }
        )
    }
    return result;
}
const testList = () => {
    let fnList = buildList([1,2,3]);
    for(let j = 0; j < fnList.length; j++){
        fnList[j]();
    }
}
testList();





// 5
const sayAlice = () => {
    const say = () => {
        console.log(name);
    }
    let name = "Hello Alice";
    return say;
}
sayAlice()(); // logs Hello Alice

// using IIFE -- since using IIFE, need to have name defined first otherwise it will not be defined
const sayAlice = () => {
    let name = "Hello Alice";
    return (() => {
        console.log(name);
    })();
}
sayAlice(); // logs Hello Alice

// clarify that name variable needs to be defined before our return statement otherwise it wont know what name is
const sayAlice = () => {
    let name = "Hello Alice";
    return () => {
        console.log(name);
    }
}





// 6
// demonstrating all calls to a function creates its own separate closure -- theres a closure for each call to a function
const newClosure = (someNum, someObj) => {
    let num = someNum;
    let obj = someObj;
    let arr = [1,2,3];
    return (add) => {
        num += add;
        arr.push(num);
        console.log(`num = ${num} || arr = ${arr} || obj.ref = ${obj.ref}`);
    }
}
let obj = { ref: 4 };
let fn1 = newClosure(4, obj);
let fn2 = newClosure(5, obj);
fn1(1) // num = 5 || arr = 1,2,3,5 || obj.ref = 4
fn2(2) // num = 6 || arr = 1,2,3,6 || obj.ref = 4
obj.ref++;
fn1(2) // num = 7 || arr = 1,2,3,5,7 || obj.ref = 5
fn2(2) // num = 8 || arr = 1,2,3,6,8 || obj.ref = 5





// 7
function times(num, fun) {
    for (let i = 0; i < num; i++) {
        fun(); // call is made "function-style"
    }
}
const cat = {
    age: 5,
    ageOneYear: function () {
        this.age += 1;
    }
};
cat.ageOneYear(); // works

times(10, cat.ageOneYear); // this wont work, it will return undefined. It will try to change the age on the window object -- this is because it calls cat.ageOneYear in function style stand alone, not part of the method call on the cat object

// do this instead -- usees anonymous closure to capture the cat object
// the times function will call the function in the fucntion style but the anonymous closure doesnt care -- bc inside of it, the anon closure calls the ageOneYear method on the cat object
times(10, () => {
    cat.ageOneYear();
});

// easier way to write above code:
times(10, cat.ageOneYear.bind(cat));





// 8
// ask Kelly why I cant create constructor function using const -- tried and it throws an error when I try running addNubers method on an object sum
function SumCalculator() {
    this.sum = 0;
}

let sum = new SumCalculator();

// this works
SumCalculator.prototype.addNumbers = function(numbers){
    for(let i = 0; i < numbers.length; i++){
        this.sum += numbers[i];
    }
    return this.sum;
}

// this also works
// creating variable self works because its a normal local variable that holds the old reference to the SumCalculator object that addNumbers was called on
// self variable is a normal variable captured according to typical rules, while 'this' is a special variable which is never captured and is reset on every function call
SumCalculator.prototype.addNumbers = function(numbers){
    let self = this;
    numbers.forEach((number) => {
        self.sum += number;
    });
    return this.sum;
}

// this wont work
SumCalculator.prototype.addNumbers = function (numbers) {
    numbers.forEach(function(number) {
        this.sum += number;
    });
    return this.sum;
};

// but this will?
SumCalculator.prototype.addNumbers = function(numbers){
    numbers.forEach((number) => {
        this.sum += number;
    });
    return this.sum;
}





// 9
// Fat Arrow functions do not create a new scope -- from my understadning, it looks like using a fat arrow DOES create a new scope
// the below code will print undefined for this.name because there is no name property on the forEach function
function Cat(name) {
    this.name = name;
    this.toys = ['string', 'ball', 'balloon'];
};

Cat.prototype.play = function meow() {
    this.toys.forEach(function(toy) {
        console.log(`${this.name} plays with ${toy}`);
    });
};

let garfield = new Cat('garfield');
garfield.play();

// output
undefined plays with string
undefined plays with ball
undefined plays with balloon

// Rewriting like this tells JS that the this keyword is refering to the instance that is currently using the protoypical method
Cat.prototype.play = function(){
    this.toys.forEach(toy => {
        console.log(`${this.name} plays with ${toy}`);
    });
};
// MAKE SURE TO ASK KELLY TO CLARIFY THIS!!! - WHY DOES 'this' KEEP THE SCOPE USING FAT ARROW FUNCTION






// 10
// using this expression evaluates on its own? - So in this case, halfMyAge is a function with myAge as an argument?
let halfMyAge = myAge => myAge / 2;
halfMyAge(30) === 15 // true

// above wont work using a block
let halfMyAge = myAge => {
    let age = myAge;
    age / 2;
}

// you need to explicitly return within a block or it will return undefined
let halfMyAge = myAge => {
    let age = myAge;
    return age / 2;
}





// 11
// Fat arrows don't scope like normal functions, so you can't reassign this, which is always what it was at the time the fat arrow was declared.
let returnName = () => this.name;
returnName.call({name: 'Dale Cooper'}) // undefined;






//12
// fat arrows cant be used as constructors
const FatCat = (name) => this.name = name;
let g = new FatCat("garfield"); // TypeError: FatCat is not a constructor






// 13
// Because they don't change scope, fat arrows don't have their own arguments object.
