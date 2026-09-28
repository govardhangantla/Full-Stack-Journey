// ================================
// ARRAYS IN JAVASCRIPT
// ================================

// 1. Creating an Array

let numbers = [10, 20, 30, 40, 50];

console.log(numbers);


// 2. Accessing Elements

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);


// 3. Changing an Element

numbers[2] = 100;

console.log(numbers);


// 4. Array Length

console.log(numbers.length);


// 5. Loop Through an Array

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// 6. Array with Strings

let names = ["Govardhan", "Ganesh", "Rahul"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);


// 7. Add Element using push()

let values = [10, 20, 30];

values.push(40);

console.log(values);


// 8. Remove Last Element using pop()

values.pop();

console.log(values);


// 9. Sum of Array Elements

let arr = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);