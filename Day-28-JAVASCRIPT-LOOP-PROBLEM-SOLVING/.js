// ==================================================
// JAVASCRIPT JOURNEY
// LESSON 17 → LESSON 28
// LOOP PROBLEM SOLVING + PATTERNS
// ==================================================


// ==================================================
// LESSON 17: PRINT NUMBERS FROM 1 TO N
// ==================================================

let N = 5;

for (let i = 1; i <= N; i++) {
    console.log(i);
}


// ==================================================
// LESSON 18: PRINT EVEN NUMBERS
// ==================================================

N = 10;

for (let i = 2; i <= N; i += 2) {
    console.log(i);
}


// ==================================================
// LESSON 19: PRINT ODD NUMBERS
// ==================================================

N = 10;

for (let i = 1; i <= N; i += 2) {
    console.log(i);
}


// ==================================================
// LESSON 20: SUM OF NUMBERS FROM 1 TO N
// ==================================================

N = 5;

let sum = 0;

for (let i = 1; i <= N; i++) {
    sum += i;
}

console.log("Sum:", sum);


// ==================================================
// LESSON 21: MULTIPLICATION TABLE
// ==================================================

N = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${N} × ${i} = ${N * i}`);
}


// ==================================================
// LESSON 22: REVERSE COUNTING
// ==================================================

N = 5;

for (let i = N; i >= 1; i--) {
    console.log(i);
}


// ==================================================
// LESSON 23: FACTORIAL
// ==================================================

N = 5;

let factorial = 1;

for (let i = 1; i <= N; i++) {
    factorial *= i;
}

console.log("Factorial:", factorial);


// ==================================================
// LESSON 24: COUNT DIGITS
// ==================================================

N = 58392;

let count = 0;

while (N > 0) {
    N = Math.floor(N / 10);
    count++;
}

console.log("Number of digits:", count);


// ==================================================
// LESSON 25: REVERSE A NUMBER
// ==================================================

N = 12345;

let reverse = 0;

while (N > 0) {

    let digit = N % 10;

    reverse = reverse * 10 + digit;

    N = Math.floor(N / 10);
}

console.log("Reverse:", reverse);


// ==================================================
// LESSON 26: PRIME NUMBER
// ==================================================

N = 17;

let isPrime = true;

if (N < 2) {
    isPrime = false;
}

for (let i = 2; i <= Math.sqrt(N); i++) {

    if (N % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}


// ==================================================
// LESSON 27: NUMBER PATTERNS
// ==================================================


// Pattern 1: Square Numbers
//
// 1 2 3
// 1 2 3
// 1 2 3

N = 3;

for (let i = 1; i <= N; i++) {

    let row = "";

    for (let j = 1; j <= N; j++) {

        row += j + " ";
    }

    console.log(row);
}


// Pattern 2: Increasing Number Triangle
//
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

N = 5;

for (let i = 1; i <= N; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {

        row += j + " ";
    }

    console.log(row);
}


// ==================================================
// LESSON 28: STAR PATTERNS
// ==================================================


// Pattern 1: Increasing Star Triangle
//
// *
// **
// ***
// ****
// *****

N = 5;

for (let i = 1; i <= N; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {

        row += "*";
    }

    console.log(row);
}


// Pattern 2: Decreasing Star Triangle
//
// *****
// ****
// ***
// **
// *

N = 5;

for (let i = N; i >= 1; i--) {

    let row = "";

    for (let j = 1; j <= i; j++) {

        row += "*";
    }

    console.log(row);
}


// Pattern 3: Star Square
//
// *****
// *****
// *****
// *****
// *****

N = 5;

for (let i = 1; i <= N; i++) {

    let row = "";

    for (let j = 1; j <= N; j++) {

        row += "*";
    }

    console.log(row);
}


// Pattern 4: Number Triangle
//
// 1
// 12
// 123
// 1234
// 12345

N = 5;

for (let i = 1; i <= N; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {

        row += j;
    }

    console.log(row);
}


// ==================================================
// END
// LESSON 17 → LESSON 28
// ==================================================