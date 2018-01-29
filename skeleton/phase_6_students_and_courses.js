function Student(first, last){
	this.firstName = first;
	this.lastName = last;
	this.courses = [];
}

function Course(name, department, credits, block, meetingDays){
	this.courseName = name;
	this.department = department;
	this.credits = credits;
	this.timeBlock = block;
	this.meetingDays = meetingDays;
	this.students = [];
}

Student.prototype.name = function(){
	return `${this.firstName} ${this.lastName}`;
}

Student.prototype.enroll = function(course){
	if(!this.courses.includes(course)){
		if(this.hasConflict(course)){
			throw new Error(`${this.firstName} ${this.lastName} has a class scheduled during this time block.`);
		} else {
			this.courses.push(course);
			course.students.push(this);
		}
	} else {
		throw new Error(`${this.firstName} ${this.lastName} is already enrolled in ${course.courseName}`);
	}
}

Student.prototype.hasConflict = function(course){
	for(let i = 0; i < this.courses.length; i++){
		let current = this.courses[i];
		if(current.conflictsWith(course)){
			return true;
		} else {
			return false;
		}
	}
}

Student.prototype.courseLoad = function(){
	let courseLoad = {};
	for(let i = 0; i < this.courses.length; i++){
		let current = this.courses[i];
		if(courseLoad[current.department]){
			courseLoad[current.department] += current.credits;
		} else {
			courseLoad[current.department] = current.credits;
		}
	}
	return courseLoad;
}

Course.prototype.addStudent = function(student){
	if(!this.students.includes(student)){
		this.students.push(student);
		student.courses.push(this);
	} else {
		throw new Error(`${student.firstName} ${student.lastName} is already enrolled in ${this.courseName}`);
	}
}

Course.prototype.conflictsWith = function(course){
	if(this.timeBlock === course.timeBlock){
		return true;
	}
	return false;
}

let danny = new Student("Danny", "Vega");
let kelly = new Student("Kelly", "Chung");
let ricky = new Student("Ricky", "Vega");
let jane = new Student("Jane", "Doe");

// console.log(danny.name());
// console.log(kelly.name());
// console.log(ricky.name());
// console.log(jane.name());

let calcus = new Course("Calulus", "STEM", 4, 1, ["Mon", "Wed", "Fri"]);
let biology = new Course("Biology", "STEM", 4, 2, ["Tues", "Thurs"]);
let chem = new Course("Chemistry", "STEM", 4, 1, ["Mon", "Wed", "Fri"]);
let lit = new Course("Literature", "English", 4, 2, ["Mon", "Wed", "Fri"]);

// danny.enroll(calcus);
// danny.enroll(biology);
// danny.enroll(chem);
// danny.enroll(lit);
// console.log(danny);
// danny.enroll(chem);
// console.log(danny.courseLoad());

// console.log(calcus);
// calcus.addStudent(danny);
// console.log(calcus);
// calcus.addStudent(kelly);
// console.log(calcus);
// console.log(kelly);

// console.log(calcus.conflictsWith(chem));
// console.log(calcus.conflictsWith(lit));

// console.log(calcus.students)
// console.log(biology.students)
// console.log(chem.students)
// console.log(lit.students)
