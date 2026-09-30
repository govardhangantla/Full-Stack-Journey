// ================================
// LESSON 38 - map()
// ================================


// 1. Basic map()

let numbers1 = [10, 20, 30, 40];

let result1 = numbers1.map(n => {
    return n * 2;
});

console.log(result1);


// 2. Short map() syntax

let numbers2 = [10, 20, 30, 40];

let result2 = numbers2.map(n => n * 2);

console.log(result2);


// 3. Square every number

let numbers3 = [1, 2, 3, 4, 5];

let squares = numbers3.map(n => n * n);

console.log(squares);


// 4. Add 10 to every number

let numbers4 = [10, 20, 30, 40];

let result4 = numbers4.map(n => n + 10);

console.log(result4);


// 5. Subtract 5 from every number

let numbers5 = [10, 20, 30, 40];

let result5 = numbers5.map(n => n - 5);

console.log(result5);


// 6. Convert numbers to strings

let numbers6 = [10, 20, 30];

let result6 = numbers6.map(n => String(n));

console.log(result6);


// 7. map() with index

let numbers7 = [10, 20, 30];

let result7 = numbers7.map((n, index) => {
    return n + index;
});

console.log(result7);


// 8. Multiply every number by 3

let numbers8 = [2, 4, 6, 8];

let result8 = numbers8.map(n => n * 3);

console.log(result8);


// 9. Convert names to uppercase

let names = ["govardhan", "ganesh", "rahul"];

let upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);


// 10. Find double of every number

let numbers9 = [5, 10, 15, 20];

let doubleNumbers = numbers9.map(n => n * 2);

console.log(doubleNumbers);


// 11. Original array is not changed

let numbers10 = [10, 20, 30];

let newNumbers = numbers10.map(n => n * 2);

console.log("Original:", numbers10);
console.log("New:", newNumbers);


// 12. Combined Practice

let numbers11 = [1, 2, 3, 4, 5];

let result11 = numbers11.map(n => n * n);

console.log(result11);