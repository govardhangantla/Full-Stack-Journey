// ========================================
// JavaScript Journey - Day 5
// Type Conversion & Type Coercion
// ========================================

// 1. String to Number

let age = "18";

console.log(age);
console.log(typeof age);

age = Number(age);

console.log(age);
console.log(typeof age);


// 2. Number to String

let marks = 85;

console.log(typeof marks);

marks = String(marks);

console.log(typeof marks);


// 3. Boolean Conversion

console.log(Boolean(1));
console.log(Boolean(0));


// 4. Type Coercion with +

console.log("10" + 5);


// 5. Type Coercion with -

console.log("10" - 5);


// 6. Type Coercion with *

console.log("10" * 2);


// 7. Type Coercion with /

console.log("10" / 2);


// 8. parseInt()

console.log(parseInt("25"));
console.log(parseInt("25.75"));


// 9. parseFloat()

console.log(parseFloat("25.75"));


// 10. Student Example

let studentAge = "18";

console.log("Before Conversion:", typeof studentAge);

studentAge = Number(studentAge);

console.log("After Conversion:", typeof studentAge);


// ========================================
// End of Day 5
// ========================================