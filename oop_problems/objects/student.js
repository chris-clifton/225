// Create object factory for a student object

// Should have following methods:
// info: logs name and year of student
// addCourse: enrolls student in a course (has properties name and code)
// listCourses: returns list of courses student has enrolled in
// addNote: adds a `note` property to a course, take a `code` and `note` as an argument
  // if a note already exists, the note is appended to the existing one
// updateNote: updates a note for a course (replaces existing)
// viewNotes: logs the notes for all the courses

function createStudent(name, grade) {
  var student = {};
  student.name = name;
  student.grade = grade;
  student.courses = [];

  student.info = function() {
    console.log(`${this.name} is a ${grade} year student.`)
  }

  student.addCourse = function(course) {
    this.courses.push(course);
  }

  student.listCourses = function() {
    return this.courses;
  }

  student.addNote = function(courseCode, newNote) {
    var courseIndex = this.getCourseByCode(courseCode);
    var course = this.courses[courseIndex];
    var note = 'note';

    // Check if the note property exists
    if (course.hasOwnProperty(note)) {
      course.note += '; ' + newNote;
    } else {
      course.note = newNote;
    }
  }

  student.updateNote = function(courseCode, newNote) {
    var courseIndex = this.getCourseByCode(courseCode);
    this.courses[courseIndex].note = newNote;
  }

  student.viewNotes = function() {
    this.courses.forEach(function(course) {
      if (course.hasOwnProperty('note')) {
        console.log(`${course.name}: ${course.note}`);
      }
    })
  }

  student.getCourseByCode = function(findCode) {
    var i;

    for(i = 0; i < this.courses.length; i += 1) {
      if (this.courses[i].code === findCode) {
        return i;
      }
    };
    console.log("Invalid code.")
  }

  return student;
}

var bones = createStudent('bones', '225');
bones.info();
bones.addCourse('OOP JS', 225);
bones.addCourse('AWS', 'Solutions Architect');

bones.addNote(225, 'still on it');
bones.addNote(225, 'another one');
bones.addNote('Solutions Architect', 'this is an AWS course');
bones.viewNotes();


bones.updateNote(225, 'only note');
bones.viewNotes();
