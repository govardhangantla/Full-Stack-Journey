// ================================
// LESSON 35 - ARRAY METHODS
// ================================


// 1. push()
// Adds an element to the end

let numbers1 = [10, 20, 30];

numbers1.push(40);

console.log(numbers1);


// 2. pop()
// Removes the last element

let numbers2 = [10, 20, 30, 40];

numbers2.pop();

console.log(numbers2);


// 3. unshift()
// Adds an element to the beginning

let numbers3 = [20, 30, 40];

numbers3.unshift(10);

console.log(numbers3);


// 4. shift()
// Removes the first element

let numbers4 = [10, 20, 30, 40];

numbers4.shift();

console.log(numbers4);


// 5. slice()
// Takes a part of an array
// Does not change the original array

let numbers5 = [10, 20, 30, 40, 50];

let result = numbers5.slice(1, 4);

console.log(result);
console.log(numbers5);


// 6. splice()
// Removes elements from an array

let numbers6 = [10, 20, 30, 40, 50];

numbers6.splice(2, 1);

console.log(numbers6);


// 7. splice()
// Adds an element to an array

let numbers7 = [10, 20, 40, 50];

numbers7.splice(2, 0, 30);

console.log(numbers7);


// 8. splice()
// Remove and add elements

let numbers8 = [10, 20, 30, 40, 50];

numbers8.splice(2, 1, 100);

console.log(numbers8);


// 9. Combined Practice

let numbers9 = [10, 20, 30];

numbers9.push(40);

numbers9.unshift(5);

numbers9.pop();

numbers9.shift();

console.log(numbers9);