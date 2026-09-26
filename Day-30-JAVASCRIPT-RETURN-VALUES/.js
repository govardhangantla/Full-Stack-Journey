// ==================================================
// JAVASCRIPT JOURNEY
// LESSON 31: RETURN VALUES
// ==================================================


// 1. Return Sum

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);


// 2. Return Square

function square(n) {
    return n * n;
}

console.log(square(5));


// 3. Return Cube

function cube(n) {
    return n * n * n;
}

console.log(cube(3));


// 4. Return String

function greet(name) {
    return "Hello " + name;
}

let message = greet("Govardhan");

console.log(message);


// 5. Return Even or Odd

function checkEven(n) {

    if (n % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log(checkEven(10));
console.log(checkEven(7));


// 6. Return Sum from 1 to N

function sumNumbers(N) {

    let sum = 0;

    for (let i = 1; i <= N; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumNumbers(5));


// 7. Return Factorial

function factorial(N) {

    let result = 1;

    for (let i = 1; i <= N; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));


// 8. Return Prime Result

function isPrime(N) {

    if (N < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(N); i++) {

        if (N % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(17));
console.log(isPrime(10));


// 9. Return Boolean for Even

function isEven(n) {

    if (n % 2 === 0) {
        return true;
    }

    return false;
}

console.log(isEven(10));
console.log(isEven(7));


// 10. Return Value and Use It Again

function multiply(a, b) {
    return a * b;
}

let answer = multiply(5, 4);

console.log(answer);


// 11. Return Maximum

function maximum(a, b) {

    if (a > b) {
        return a;
    }

    return b;
}

console.log(maximum(10, 20));


// 12. Return Minimum

function minimum(a, b) {

    if (a < b) {
        return a;
    }

    return b;
}

console.log(minimum(10, 20));


// ==================================================
// END OF LESSON 31
// RETURN VALUES
// ==================================================