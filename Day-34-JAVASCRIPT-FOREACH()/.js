// ================================
// LESSON 37 - forEach()
// ================================


// 1. Basic forEach()

let numbers1 = [10, 20, 30, 40];

numbers1.forEach(n => {
    console.log(n);
});


// 2. forEach() with calculation

let numbers2 = [10, 20, 30, 40];

numbers2.forEach(n => {
    console.log(n * 2);
});


// 3. forEach() with index

let numbers3 = [10, 20, 30, 40];

numbers3.forEach((n, index) => {
    console.log(index, n);
});


// 4. Print even numbers

let numbers4 = [10, 15, 20, 25, 30];

numbers4.forEach(n => {
    if (n % 2 === 0) {
        console.log(n);
    }
});


// 5. Print odd numbers

let numbers5 = [10, 15, 20, 25, 30];

numbers5.forEach(n => {
    if (n % 2 !== 0) {
        console.log(n);
    }
});


// 6. Find sum using forEach()

let numbers6 = [10, 20, 30, 40];

let sum = 0;

numbers6.forEach(n => {
    sum += n;
});

console.log(sum);


// 7. Find square of every element

let numbers7 = [1, 2, 3, 4, 5];

numbers7.forEach(n => {
    console.log(n * n);
});


// 8. Array of names

let names = ["Govardhan", "Ganesh", "Rahul"];

names.forEach(name => {
    console.log(name);
});


// 9. Names with index

let names2 = ["Govardhan", "Ganesh", "Rahul"];

names2.forEach((name, index) => {
    console.log(index, name);
});


// 10. Check numbers greater than 20

let numbers8 = [10, 25, 15, 30, 40];

numbers8.forEach(n => {
    if (n > 20) {
        console.log(n);
    }
});