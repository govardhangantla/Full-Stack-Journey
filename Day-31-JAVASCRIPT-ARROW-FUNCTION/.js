// ================================
// LESSON 32 - ARROW FUNCTIONS
// ================================

const greet = () => {
    console.log("Hello Govardhan");
};

greet();

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

const square = (n) => {
    return n * n;
};

console.log(square(5));

const cube = n => {
    return n * n * n;
};

console.log(cube(3));

const multiply = (a, b) => a * b;

console.log(multiply(4, 5));

const sum = (a, b) => a + b;

console.log(sum(10, 30));

const isEven = n => n % 2 === 0;

console.log(isEven(10));
console.log(isEven(7));

const maximum = (a, b) => a > b ? a : b;

console.log(maximum(10, 20));


// ================================
// LESSON 33 - FUNCTION PRACTICE
// ================================

function addPractice(a, b) {
    return a + b;
}

console.log(addPractice(10, 20));


function squarePractice(n) {
    return n * n;
}

console.log(squarePractice(6));


function checkEvenOdd(n) {
    if (n % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));


function sumPractice(N) {
    let sum = 0;

    for (let i = 1; i <= N; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumPractice(5));


function factorialPractice(N) {
    let result = 1;

    for (let i = 1; i <= N; i++) {
        result *= i;
    }

    return result;
}

console.log(factorialPractice(5));


function primePractice(N) {
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

console.log(primePractice(17));
console.log(primePractice(10));


function reverseNumber(N) {
    let reverse = 0;

    while (N > 0) {
        let digit = N % 10;

        reverse = reverse * 10 + digit;

        N = Math.floor(N / 10);
    }

    return reverse;
}

console.log(reverseNumber(1234));