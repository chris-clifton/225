// Search tag: mixin

// Classical Object Creation with Mixin

// Make an `extend` function and use it to add a mixin to the previous exercise
// The mixin adds an `invoice` and `paytax` methods

// Code from previous exercise

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




// New code for mixin
function delegate(callingObject, methodOwner, methodName) {
  var args = Array.from(arguments).slice(2);

  return function() {
    return methodOwner[methodName].apply(callingObject, args);
  }
}

function extend(object, mixin) {
  var methodNames = Object.keys(mixin);

  methodNames.forEach(function(name) {
    object[name] = delegate(object, mixin, name);
  });

  return object;
}

var professional = {
  invoice: function() {
    console.log(this.fullName() + ' is Billing customer');
  },
  payTax: function() {
    console.log(this.fullName() + ' is paying taxes');
  }
}

// Code to test solution:
var doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'S
doctor.diagnose();                         // logs 'Diagnosing'

var professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'

// Discussion
// The solution leverages a modified delegate function from an earlier exercise. 
// It was modified so that we can mimic how mixins are expected to behave — that is, 
// methods from the mixin use state from the object they are being called on and 
// call on other methods on the object they are mixed in to. The delegate function 
// now accepts three arguments: callingObject, methodOwner, and methodName. The 
// callingObject is added so that the method is called with it as the context. Related 
// to this, it's worth noting that extend is used with the object returned by the 
// new constructor. This is done so that the object extended has the states.

// The key here is observing the code and the result from the example run; that changes
//  to a method on the professional mixin (i.e., profesional.invoice) were also reflected
//   on the method call on the object created from either the Doctor or Professor 
//   constructors and that the mixin uses state (i.e, firstName) and methods (i.e., fullName)
//    from the object that it extended. The extend function simply iterates over all the keys
//     of the mixin object and uses that to create and, consequently, delegate methods.