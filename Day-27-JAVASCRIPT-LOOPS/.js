// ==================================================
// JavaScript Journey
// ALL LOOPS - Lessons 9 to 16
// ==================================================


// ==================================================
// 1. FOR LOOP
// ==================================================

console.log("===== FOR LOOP =====");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// ==================================================
// 2. FOR LOOP - REVERSE
// ==================================================

console.log("===== FOR LOOP - REVERSE =====");

for (let i = 5; i >= 1; i--) {
    console.log(i);
}


// ==================================================
// 3. WHILE LOOP
// ==================================================

console.log("===== WHILE LOOP =====");

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


// ==================================================
// 4. WHILE LOOP - REVERSE
// ==================================================

console.log("===== WHILE LOOP - REVERSE =====");

let j = 5;

while (j >= 1) {
    console.log(j);
    j--;
}


// ==================================================
// 5. DO...WHILE LOOP
// ==================================================

console.log("===== DO WHILE LOOP =====");

let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);


// ==================================================
// 6. DO...WHILE - REVERSE
// ==================================================

console.log("===== DO WHILE - REVERSE =====");

let l = 5;

do {
    console.log(l);
    l--;
} while (l >= 1);


// ==================================================
// 7. BREAK
// ==================================================

console.log("===== BREAK =====");

for (let num = 1; num <= 10; num++) {

    if (num === 6) {
        break;
    }

    console.log(num);
}


// ==================================================
// 8. CONTINUE
// ==================================================

console.log("===== CONTINUE =====");

for (let num = 1; num <= 10; num++) {

    if (num === 5) {
        continue;
    }

    console.log(num);
}


// ==================================================
// 9. NESTED LOOP
// ==================================================

console.log("===== NESTED LOOP =====");

for (let row = 1; row <= 3; row++) {

    for (let col = 1; col <= 3; col++) {
        console.log(row, col);
    }
}


// ==================================================
// 10. NESTED LOOP - STAR PATTERN
// ==================================================

console.log("===== STAR PATTERN =====");

for (let row = 1; row <= 3; row++) {

    let output = "";

    for (let col = 1; col <= 3; col++) {
        output += "* ";
    }

    console.log(output);
}


// ==================================================
// 11. FOR...OF LOOP
// ==================================================

console.log("===== FOR...OF LOOP =====");

let numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    console.log(number);
}


// ==================================================
// 12. FOR...OF WITH STRING
// ==================================================

console.log("===== FOR...OF WITH STRING =====");

let name = "Govardhan";

for (let character of name) {
    console.log(character);
}


// ==================================================
// 13. FOR...IN LOOP
// ==================================================

console.log("===== FOR...IN LOOP =====");

let student = {
    name: "Govardhan",
    age: 18,
    branch: "CSE"
};

for (let key in student) {
    console.log(key);
}


// ==================================================
// 14. FOR...IN - KEY AND VALUE
// ==================================================

console.log("===== FOR...IN KEY AND VALUE =====");

for (let key in student) {
    console.log(key, student[key]);
}


// ==================================================
// 15. FOR...IN WITH ARRAY
// ==================================================

console.log("===== FOR...IN WITH ARRAY =====");

let values = [10, 20, 30];

for (let index in values) {
    console.log(index, values[index]);
}


// ==================================================
// 16. EVEN NUMBERS USING FOR LOOP
// ==================================================

console.log("===== EVEN NUMBERS =====");

for (let num = 1; num <= 10; num++) {

    if (num % 2 === 0) {
        console.log(num);
    }
}


// ==================================================
// 17. ODD NUMBERS USING FOR LOOP
// ==================================================

console.log("===== ODD NUMBERS =====");

for (let num = 1; num <= 10; num++) {

    if (num % 2 !== 0) {
        console.log(num);
    }
}


// ==================================================
// 18. SUM USING FOR LOOP
// ==================================================

console.log("===== SUM =====");

let sum = 0;

for (let num = 1; num <= 5; num++) {
    sum += num;
}

console.log("Sum:", sum);


// ==================================================
// END OF ALL LOOPS
// ==================================================