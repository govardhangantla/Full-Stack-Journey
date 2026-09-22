// ==================================================
// JavaScript Journey
// Operators, Comparison, Logical Operators & Conditions
// ==================================================


// ==================================================
// PART 1: ARITHMETIC OPERATORS
// ==================================================

let a = 10;
let b = 3;

console.log("===== ARITHMETIC OPERATORS =====");

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);


// ==================================================
// PART 2: ASSIGNMENT OPERATOR
// ==================================================

console.log("===== ASSIGNMENT OPERATOR =====");

let score = 50;

console.log("Original Score:", score);

score += 10;
console.log("After += 10:", score);

score -= 5;
console.log("After -= 5:", score);

score *= 2;
console.log("After *= 2:", score);

score /= 5;
console.log("After /= 5:", score);


// ==================================================
// PART 3: INCREMENT AND DECREMENT
// ==================================================

console.log("===== INCREMENT & DECREMENT =====");

let count = 10;

count++;
console.log("After Increment:", count);

count--;
console.log("After Decrement:", count);


// ==================================================
// PART 4: COMPARISON OPERATORS
// ==================================================

console.log("===== COMPARISON OPERATORS =====");

let x = 10;
let y = 5;

console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x >= y:", x >= y);
console.log("x <= y:", x <= y);
console.log("x == y:", x == y);
console.log("x != y:", x != y);


// ==================================================
// PART 5: STRICT COMPARISON
// ==================================================

console.log("===== STRICT COMPARISON =====");

console.log("10 === 10:", 10 === 10);
console.log('10 === "10":', 10 === "10");

console.log("10 !== 5:", 10 !== 5);
console.log('10 !== "10":', 10 !== "10");


// ==================================================
// PART 6: LOGICAL AND OPERATOR
// ==================================================

console.log("===== AND OPERATOR =====");

let age = 20;

console.log(
    "Age between 18 and 25:",
    age >= 18 && age <= 25
);


// ==================================================
// PART 7: LOGICAL OR OPERATOR
// ==================================================

console.log("===== OR OPERATOR =====");

let marks = 85;

console.log(
    "Marks below 40 or above 90:",
    marks < 40 || marks > 90
);


// ==================================================
// PART 8: LOGICAL NOT OPERATOR
// ==================================================

console.log("===== NOT OPERATOR =====");

let isStudent = true;

console.log("Is Student:", isStudent);
console.log("Not Student:", !isStudent);


// ==================================================
// PART 9: IF STATEMENT
// ==================================================

console.log("===== IF STATEMENT =====");

let studentAge = 18;

if (studentAge >= 18) {
    console.log("Student is an adult");
}


// ==================================================
// PART 10: IF ELSE
// ==================================================

console.log("===== IF ELSE =====");

let studentMarks = 75;

if (studentMarks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// ==================================================
// PART 11: ELSE IF
// ==================================================

console.log("===== ELSE IF =====");

let score2 = 85;

if (score2 >= 90) {
    console.log("Grade A+");
} else if (score2 >= 75) {
    console.log("Grade A");
} else if (score2 >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}


// ==================================================
// PART 12: EVEN OR ODD
// ==================================================

console.log("===== EVEN OR ODD =====");

let number = 10;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// ==================================================
// PART 13: POSITIVE, NEGATIVE OR ZERO
// ==================================================

console.log("===== POSITIVE / NEGATIVE / ZERO =====");

let value = -5;

if (value > 0) {
    console.log("Positive");
} else if (value < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// ==================================================
// PART 14: LARGEST OF TWO NUMBERS
// ==================================================

console.log("===== LARGEST OF TWO NUMBERS =====");

let number1 = 20;
let number2 = 15;

if (number1 > number2) {
    console.log("Number 1 is larger");
} else if (number2 > number1) {
    console.log("Number 2 is larger");
} else {
    console.log("Both numbers are equal");
}


// ==================================================
// PART 15: STUDENT GRADE
// ==================================================

console.log("===== STUDENT GRADE =====");

let finalMarks = 82;

if (finalMarks >= 90) {
    console.log("Grade A+");
} else if (finalMarks >= 75) {
    console.log("Grade A");
} else if (finalMarks >= 60) {
    console.log("Grade B");
} else if (finalMarks >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// ==================================================
// PART 16: COMBINING LOGICAL OPERATORS WITH IF
// ==================================================

console.log("===== MULTIPLE CONDITIONS =====");

let studentAge2 = 18;
let studentMarks2 = 80;

if (studentAge2 >= 18 && studentMarks2 >= 40) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// ==================================================
// ==================================================

