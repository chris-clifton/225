// Search tag: psuedo-ex

// Implement following diagram using pseudo-classical approach

// Subclasses should inherit everything from the superclass and not just the methods
// Reuse the constructors of the superclass when implementing a subclass

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

Person.prototype.communicate = function() {
  console.log('Communicating');
}

Person.prototype.eat = function() {
  console.log('Eating');
}

Person.prototype.sleep = function() {
  console.log('Sleeping');
}

// Use Person.call like `super` in Ruby and pass the context (`this`) so we are
// working on the new Doctor object)
function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = new Person;
Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}
Doctor.prototype.constructor = Doctor;

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = new Person;
Professor.prototype.teach = function() {
  console.log('Teaching');
}
Professor.prototype.constructor = Professor;

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = new Person;
Student.prototype.study = function() {
  console.log('Studying');
}
Student.prototype.constructor = Student;

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = new Student;
GraduateStudent.prototype.research = function() {
  console.log('Researching');
}
GraduateStudent.prototype.constructor = GraduateStudent;

// Code to test solution:
console.log('Person:');
var person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

console.log('\n')
console.log('Doctor:');
var doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

console.log('\n')
console.log('Professor:');
var professor = new Professor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);     // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                         // logs 'Teaching'

console.log('\n')
console.log('Student:');
var student = new Student('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(student instanceof Person);     // logs true
console.log(student instanceof Student);     // logs true
student.eat();                              // logs 'Eating'
student.communicate();                      // logs 'Communicating'
student.sleep();                            // logs 'Sleeping'
console.log(student.fullName());            // logs 'foo bar'
student.study();                         // logs 'studying'

console.log('\n');
console.log('Graduate Student');
var graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student); 
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
console.log(graduateStudent.graduateDegree);