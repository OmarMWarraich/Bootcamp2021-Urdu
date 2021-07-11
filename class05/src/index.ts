var message:string ="Hello from new file"
var numeric: number = 10;
var floating_value: number = 10.3;
var condition:boolean = true;
var condition02:any = "123";
console.log(message)
console.log(numeric)
console.log(floating_value)
console.log(condition)
console.log(condition02)

let id: number;
let student_name: string;
let email: string;


// function declaration
// function calling
// function parameter
// function return type

function set_student_values(this: any, id:number, student_name: string, email: string) : void {
    this.id = id;
    this.student_name = student_name;
    this.email = email;
}

function printStudent(this: any) : void {
    console.log("The ID of student is " + this.id + "The name of student is " + this.student_name + "The email of student is " + this.email);
}

set_student_values(1, "Faheem", "Faheem@yahoo.com" )
printStudent();