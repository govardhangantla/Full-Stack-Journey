// ================================
// LESSON 39 - filter()
// ================================


// 1. Basic filter()

let numbers1 = [10, 15, 20, 25, 30];

let result1 = numbers1.filter(n => n > 20);

console.log(result1);


// 2. Filter even numbers

let numbers2 = [10, 15, 20, 25, 30];

let evenNumbers = numbers2.filter(n => n % 2 === 0);

console.log(evenNumbers);


// 3. Filter odd numbers

let numbers3 = [10, 15, 20, 25, 30];

let oddNumbers = numbers3.filter(n => n % 2 !== 0);

console.log(oddNumbers);


// 4. Filter numbers less than 20

let numbers4 = [10, 15, 20, 25, 30];

let result4 = numbers4.filter(n => n < 20);

console.log(result4);


// 5. Filter numbers between 10 and 30

let numbers5 = [5, 10, 15, 20, 25, 30, 35];

let result5 = numbers5.filter(n => n >= 10 && n <= 30);

console.log(result5);


// 6. Filter strings

let names = ["Govardhan", "Ganesh", "Rahul", "Gopi"];

let result6 = names.filter(name => name.length > 5);

console.log(result6);


// 7. filter() with index

let numbers6 = [10, 20, 30, 40];

let result7 = numbers6.filter((n, index) => index % 2 === 0);

console.log(result7);


// 8. Filter numbers greater than 50

let numbers7 = [20, 55, 70, 35, 90, 45];

let result8 = numbers7.filter(n => n > 50);

console.log(result8);


// 9. Filter positive numbers

let numbers8 = [-10, 20, -5, 30, -2, 40];

let positiveNumbers = numbers8.filter(n => n > 0);

console.log(positiveNumbers);


// 10. Filter negative numbers

let numbers9 = [-10, 20, -5, 30, -2, 40];

let negativeNumbers = numbers9.filter(n => n < 0);

console.log(negativeNumbers);


// 11. Filter numbers divisible by 5

let numbers10 = [10, 12, 15, 22, 25, 30, 33];

let divisibleBy5 = numbers10.filter(n => n % 5 === 0);

console.log(divisibleBy5);


// 12. Filter names starting with G

let names2 = ["Govardhan", "Ganesh", "Rahul", "Gopi", "Ravi"];

let gNames = names2.filter(name => name.startsWith("G"));

console.log(gNames);


// 13. Original array is not changed

let numbers11 = [10, 20, 30, 40];

let newNumbers = numbers11.filter(n => n > 20);

console.log("Original:", numbers11);
console.log("New:", newNumbers);


// 14. Combined Practice

let numbers12 = [5, 10, 15, 20, 25, 30, 35];

let result14 = numbers12.filter(n => n % 5 === 0 && n > 15);

console.log(result14);