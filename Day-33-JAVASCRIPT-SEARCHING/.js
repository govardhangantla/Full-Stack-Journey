// ================================
// LESSON 36 - ARRAY SEARCHING
// ================================


// 1. includes()
// Checks whether an element exists

let numbers1 = [10, 20, 30, 40, 50];

console.log(numbers1.includes(30));
console.log(numbers1.includes(100));


// 2. indexOf()
// Returns the index of an element

let numbers2 = [10, 20, 30, 40, 50];

console.log(numbers2.indexOf(30));
console.log(numbers2.indexOf(100));


// 3. lastIndexOf()
// Returns the last occurrence of an element

let numbers3 = [10, 20, 30, 20, 40, 20];

console.log(numbers3.lastIndexOf(20));


// 4. find()
// Returns the first element that satisfies a condition

let numbers4 = [5, 12, 18, 25, 30];

let result1 = numbers4.find(n => n > 20);

console.log(result1);


// 5. findIndex()
// Returns the index of the first element
// that satisfies a condition

let numbers5 = [5, 12, 18, 25, 30];

let result2 = numbers5.findIndex(n => n > 20);

console.log(result2);


// 6. includes() Practice

let numbers6 = [10, 20, 30, 40];

console.log(numbers6.includes(20));
console.log(numbers6.includes(50));


// 7. indexOf() Practice

let numbers7 = [10, 20, 30, 40];

console.log(numbers7.indexOf(10));
console.log(numbers7.indexOf(40));
console.log(numbers7.indexOf(50));


// 8. find() Practice

let numbers8 = [10, 15, 22, 30];

let result3 = numbers8.find(n => n > 20);

console.log(result3);


// 9. findIndex() Practice

let numbers9 = [10, 15, 22, 30];

let result4 = numbers9.findIndex(n => n > 20);

console.log(result4);


// 10. Combined Practice

let numbers10 = [5, 10, 15, 20, 25, 30];

console.log(numbers10.includes(20));

console.log(numbers10.indexOf(25));

console.log(numbers10.find(n => n > 18));

console.log(numbers10.findIndex(n => n > 18));