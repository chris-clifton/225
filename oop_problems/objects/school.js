// School
// Create a school object that uses the student obejct form previous exercise
// Implement following methods
  // addStudent: adds a student by creating a new student and adding the student to a collection
    // adds constraint that the year can only be 1-5th, else "Invalid Year."
  // enrollStudent: Enrolls student in a course
  // addGrade: adds the grade of a student for a course
  // getReportCard: Logs the grade of a student for all courses, or "In Progress" if no grade
  // courseReport: Logs grade of all students for a given course name (only students with grades included)

// Student Object

function createStudent(name, year) {
  var student = {};
  student.name = name;
  student.year = year;
  student.courses = [];

  student.info = function() {
    console.log(`${this.name} is a ${year} year student.`)
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

// School Object

var school = {};
school.students = [];
school.courses = [];

school.addStudent = function(studentName, year) {
  var validYears = ['1st', '2nd', '3rd', '4th', '5th'];
  var student;

  // Check that the year input is valid
  if (!validYears.includes(year)) {
    return "Invalid year."
  }

  // Create student, add to students array, and return
  student = createStudent(studentName, year);
  students.push(student);
  return student;
}

school.enrollStudent = function(student, courseName, courseCode) { 
  student.addCourse({name: courseName, code: courseCode});
}

school.addGrade = function(student, courseName, grade) {
  var course = student.listCourses().filter(function(course) {
    return course.code === courseName;
  })[0];

  if (course) {
    course.grade = grade;
  }
}

school.getReportCard = function(student) {
  student.listCourses().forEach(function(course) {
    if (course.grade) {
      console.log(course.name + ': ' + String(course.grade));
    } else {
      console.log(course.name + ': In Progress');
    }
  });
}

school.courseReport = function(courseName) {
  function getCourse(student, courseName) {
    return student.listCourses().filter(function(course) {
      return course.name === courseName;
    })[0];
  }

  var courseStudents = this.students.map(function(student) {
    var course = getCourse(student, courseName) || { grade: undefined };
    return { name: student.name, grade: course.grade };
  }).filter(function(student) {
    return student.grade;
  });

  if (courseStudents.length > 0) {
    console.log('=' + courseName + ' Grades=');

    var average = courseStudents.reduce(function(total, student) {
      console.log(student.name + ': ' + String(student.grade));
      return total + student.grade;
    }, 0) / courseStudents.length;

    console.log('---');
    console.log('Course Average: ' + String(average));
  }
}

school.addCourse = function(courseName, courseCode) {
  var course = { name: courseName,
                 code: courseCode,
                 enrolled: [], 
  };
  this.courses.push(course);
}

// school.getCourseByCode = function(findCode) {
//   var i;

//   for(i = 0; i < this.courses.length; i += 1) {
//     if (this.courses[i].code === findCode) {
//       return i;
//     }
//   };

//   console.log("Invalid code.")
// }

school.getCourseByName = function(findName) {
  var i;

  for(i = 0; i < this.courses.length; i += 1) {
    if (this.courses[i].name === findName) {
      return i;
    }
  };

  console.log("Invalid course name.");
}

school.addCourse('OOP JS', 225);

console.log(school);