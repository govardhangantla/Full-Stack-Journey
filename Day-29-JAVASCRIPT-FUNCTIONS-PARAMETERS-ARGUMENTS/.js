// ==================================================
// JAVASCRIPT JOURNEY
// LESSON 29 → LESSON 30
// FUNCTIONS
// ==================================================


// ==================================================
// LESSON 29: FUNCTIONS INTRODUCTION
// ==================================================


// 1. Basic Function

function greet() {
    console.log("Hello Govardhan");
}

greet();


// 2. Function with Multiple Statements

function welcome() {
    console.log("Welcome");
    console.log("JavaScript");
    console.log("Learning Started");
}

welcome();


// 3. Calling a Function Multiple Times

function sayHello() {
    console.log("Hello");
}

sayHello();
sayHello();
sayHello();


// 4. Function with a Loop

function printNumbers() {

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

}

printNumbers();


// ==================================================
// LESSON 30: PARAMETERS AND ARGUMENTS
// ==================================================


// 1. One Parameter

function greetPerson(name) {
    console.log("Hello", name);
}

greetPerson("Govardhan");
greetPerson("Ganesh");


// 2. Multiple Parameters

function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// 3. Multiplication

function multiply(a, b) {
    console.log(a * b);
}

multiply(5, 4);


// 4. Three Parameters

function addThree(a, b, c) {
    console.log(a + b + c);
}

addThree(10, 20, 30);


// 5. Parameter + Loop

function printNumbersTillN(N) {

    for (let i = 1; i <= N; i++) {
        console.log(i);
    }

}

printNumbersTillN(5);


// 6. Print Even Numbers

function printEven(N) {

    for (let i = 2; i <= N; i += 2) {
        console.log(i);
    }

}

printEven(10);


// 7. Sum Using Parameter

function sumNumbers(N) {

    let sum = 0;

    for (let i = 1; i <= N; i++) {
        sum += i;
    }

    console.log(sum);
}

sumNumbers(5);


// ==================================================
// END
// LESSON 29 → LESSON 30
// ==================================================