//  dA Create a student enrollment system using JavaScript classes. Implement two classes, Student and Admission, to manage student enrollments, course admission, and enrollment tracking. The Student class should have methods for enrolling in courses and displaying enrolled courses, while the Admission class should handle student enrollments, course admission, and the display of enrolled students. Your task is to implement these classes with clear and organized code, adhering to the specified requirements provided.
// student class
class Student {
    constructor() {
      this.enrolledCourses = [];
      this.students = [];
    }
  
    enrollStudent(name, course) {
      this.students.push(name);
      this.enrolledCourses.push(course);
      console.log(`${name} has been enrolled in ${course}`);
    }
  
    displayCourses() {
      console.log("Enrolled courses are:");
      this.enrolledCourses.forEach((course, index) => 
        console.log(`${this.students[index]} is enrolled in: ${course}`)
      );
    }
  }
  
  const myStudent = new Student();
  myStudent.enrollStudent('Sabha', 'Fullstack');
  myStudent.displayCourses();
  myStudent.enrollStudent('Rahul', 'Blockchain');
  myStudent.displayCourses();
  
  class Admission extends Student {
    constructor(studentInstance) {
      super();
      this.enrolledCourses = studentInstance.enrolledCourses;
      this.students = studentInstance.students;
    }
  
    displayEnrolledCourses() {
      console.log("Enrolled courses are:");
      this.enrolledCourses.forEach((course) =>
        console.log(course)
      );
    }
  
    displayEnrolledStudents() {
      console.log("Enrolled students are:");
      this.students.forEach((student) =>
        console.log(student)
      );
    }
  }
  
  const myOfficeAdmission = new Admission(myStudent);
  myOfficeAdmission.enrollStudent('Alice', 'Data Science');
  myOfficeAdmission.displayEnrolledCourses();
  myOfficeAdmission.displayEnrolledStudents();
  
  
  
  

