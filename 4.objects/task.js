function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

new Student('Anna', 'female', '23');
new Student('Petr', 'male', '44');
new Student('Alex', 'male', '37');

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.hasOwnProperty('marks')) {
    this.marks = this.marks.concat(marksToAdd);
  }
}

Student.prototype.getAverage = function () {
  if ((this.hasOwnProperty('marks')) && (this.marks.length !== 0)) {
    let sumOfMarks = 0;
    for(let mark of this.marks) {
      sumOfMarks += mark;
    }
    return sumOfMarks / this.marks.length;
  } else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
