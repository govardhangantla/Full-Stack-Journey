# 🗺️ Lesson 38 — map() in JavaScript

In this lesson, I learned how to use the `map()` method to transform elements in a JavaScript array and create a new array.

## 📚 Topics Covered

- `map()`
- Transforming array elements
- Returning values from `map()`
- Using `map()` with indexes
- Performing calculations
- Converting values
- Working with strings
- Difference between `forEach()` and `map()`

---

## 1️⃣ Basic map()

The `map()` method runs a function on every element and returns a **new array**.

### Example

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.map(n => {
    return n * 2;
});

console.log(result);
