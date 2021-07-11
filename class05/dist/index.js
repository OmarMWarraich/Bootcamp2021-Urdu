"use strict";
var message = "Hello from new file";
var numeric = 10;
var floating_value = 10.3;
var condition = true;
var condition02 = "123";
console.log(message);
console.log(numeric);
console.log(floating_value);
console.log(condition);
console.log(condition02);
var id;
var student_name;
var email;
// function declaration
// function calling
// function parameter
// function return type
function set_student_values(id, student_name, email) {
    this.id = id;
    this.student_name = student_name;
    this.email = email;
}
function printStudent() {
    console.log("The ID of student is " + this.id + "The name of student is " + this.student_name + "The email of student is " + this.email);
}
set_student_values(1, "Faheem", "Faheem@yahoo.com");
printStudent();
