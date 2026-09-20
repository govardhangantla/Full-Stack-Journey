// ==================================================
// JavaScript Journey
// Day 3 + Day 4
// Variables and Data Types
// ==================================================


// ==================================================
// PART 1: let
// ==================================================

// Creating a variable using let
let name = "Govardhan";
let age = 18;
let branch = "CSE";

console.log("Name:", name);
console.log("Age:", age);
console.log("Branch:", branch);


// Changing the value of a let variable

let score = 50;

console.log("Old Score:", score);

score = 80;

console.log("New Score:", score);


// Another example

let city = "Visakhapatnam";

console.log("Old City:", city);

city = "Hyderabad";

console.log("New City:", city);


// ==================================================
// PART 2: const
// ==================================================

// Creating a constant

const college = "VIIT";
const country = "India";

console.log("College:", college);
console.log("Country:", country);


// const variables cannot be reassigned

// The following would give an error:
//
// college = "ABC College";


// ==================================================
// PART 3: var
// ==================================================

// var is an older way of declaring variables

var oldVariable = "Hello";

console.log("Old Variable:", oldVariable);


// var can be reassigned

oldVariable = "Hello JavaScript";

console.log("Updated Variable:", oldVariable);


// ==================================================
// PART 4: let, const and var together
// ==================================================

let studentAge = 18;

const studentCollege = "VIIT";

var studentName = "Govardhan";

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Student College:", studentCollege);


// ==================================================
// PART 5: STRING
// ==================================================

// String stores text

let firstName = "Govardhan";
let cityName = "Visakhapatnam";
let course = "Computer Science";

console.log(firstName);
console.log(cityName);
console.log(course);


// ==================================================
// PART 6: NUMBER
// ==================================================

// Number stores numeric values

let studentMarks = 85;
let cgpa = 8.6;
let price = 99.50;

console.log("Marks:", studentMarks);
console.log("CGPA:", cgpa);
console.log("Price:", price);


// Integer

let number1 = 100;

console.log(number1);


// Decimal

let number2 = 25.5;

console.log(number2);


// ==================================================
// PART 7: BOOLEAN
// ==================================================

// Boolean has only two values:
// true
// false

let isStudent = true;
let isWorking = false;

console.log("Is Student:", isStudent);
console.log("Is Working:", isWorking);


// Boolean with a condition

let marks = 80;

let passed = marks >= 40;

console.log("Passed:", passed);


// ==================================================
// PART 8: UNDEFINED
// ==================================================

// Variable is created but no value is assigned

let result;

console.log("Result:", result);


// Another example

let futurePlan;

console.log("Future Plan:", futurePlan);


// ==================================================
// PART 9: NULL
// ==================================================

// null means intentionally no value

let selectedPlayer = null;

console.log("Selected Player:", selectedPlayer);


// ==================================================
// PART 10: typeof
// ==================================================

// typeof is used to check the data type

console.log("Name Type:", typeof name);

console.log("Age Type:", typeof age);

console.log("Branch Type:", typeof branch);

console.log("Score Type:", typeof score);

console.log("Is Student Type:", typeof isStudent);

console.log("Result Type:", typeof result);

console.log("Selected Player Type:", typeof selectedPlayer);


// ==================================================
// PART 11: STRING VS NUMBER
// ==================================================

let numberValue = 10;

let stringValue = "10";

console.log("Number:", numberValue);
console.log("String:", stringValue);

console.log("Number Type:", typeof numberValue);
console.log("String Type:", typeof stringValue);


// ==================================================
// PART 12: BASIC CALCULATIONS WITH VARIABLES
// ==================================================

let a = 10;
let b = 20;

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);


// ==================================================
// PART 13: STRING + STRING
// ==================================================

let first = "Hello";
let second = "JavaScript";

console.log(first + " " + second);


// ==================================================
// PART 14: STRING + NUMBER
// ==================================================

let myAge = 18;

console.log("My age is " + myAge);


// ==================================================
// PART 15: STUDENT PROFILE
// ==================================================

let student = "Govardhan";
let studentBranch = "CSE";
let studentYear = 2;
let studentCGPA = 8.6;
let studentIsActive = true;

console.log("================================");
console.log("       STUDENT PROFILE");
console.log("================================");

console.log("Name:", student);
console.log("Branch:", studentBranch);
console.log("Year:", studentYear);
console.log("CGPA:", studentCGPA);
console.log("Active Student:", studentIsActive);


// ==================================================
// PART 16: CHECK ALL DATA TYPES
// ==================================================

console.log("================================");
console.log("        DATA TYPES");
console.log("================================");

console.log("student:", typeof student);
console.log("studentBranch:", typeof studentBranch);
console.log("studentYear:", typeof studentYear);
console.log("studentCGPA:", typeof studentCGPA);
console.log("studentIsActive:", typeof studentIsActive);
console.log("result:", typeof result);
console.log("selectedPlayer:", typeof selectedPlayer);


// ==================================================
// END OF DAY 3 + DAY 4
// ==================================================