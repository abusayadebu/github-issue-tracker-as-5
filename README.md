# JavaScript Basic Questions

## 1️⃣ What is the difference between var, let, and const?

In JavaScript, **var**, **let**, and **const** are used to create variables. A variable is used to store data like a name, number, or any value.

**var** is the old way to declare a variable in JavaScript. Before ES6, most developers used var. A variable declared with var can be changed later, and it can also be declared again with the same name. Because of this reason, sometimes it can create problems in large programs. That is why developers now try not to use var in modern JavaScript.

**let** was introduced in ES6. It is a better and safer way to declare a variable. The value of a let variable can be changed, but it cannot be declared again in the same block of code. Because of this, let helps to avoid many coding mistakes.

**const** is also introduced in ES6. It is used when we do not want to change the value of a variable. Once we assign a value to a const variable, we cannot change it later. That is why const is usually used for values that should stay fixed.

Example:

```javascript
var name = "Abu Sayad";
let age = 25;
const country = "Bangladesh";

age = 30; 
```

Here, age can change because it uses **let**, but **country cannot change** because it uses **const**.

---

## 2️⃣ What is the spread operator (...)?

The **spread operator** is written using three dots `...`. It is used to spread or expand the values of an array or object. It makes the code shorter and easier to read.

Many developers use the spread operator to **copy arrays, combine arrays, or add new values** to an existing array or object.

For example, if we have one array and we want to create another array using its values, we can use the spread operator.

Example:

```javascript
const numbers1 = [1, 2, 3];
const numbers2 = [...numbers1, 4, 5];

console.log(numbers2);
```

Here the spread operator copies the values from **numbers1** and then adds **4 and 5** to create a new array.

The spread operator is also used with objects.

Example:

```javascript
const person = { name: "John", age: 25 };

const newPerson = { ...person, city: "Dhaka" };
```

This creates a new object by copying the old object and adding a new property.

So in simple words, the spread operator helps to **copy and expand data easily**.

---

## 3️⃣ What is the difference between map(), filter(), and forEach()?

In JavaScript, **map()**, **filter()**, and **forEach()** are array methods. They are used to work with arrays and perform actions on each item of the array.

**forEach()** is used when we want to run a function for every element in the array. It simply goes through each item one by one and runs the function. But it does not return a new array.

Example:

```javascript
const numbers = [1, 2, 3];

numbers.forEach(function(num){
  console.log(num);
});
```

This will just print each number.

**map()** is similar to forEach(), but the difference is that map() returns a **new array**. It is usually used when we want to change the values of an array and store the result in another array.

Example:

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(function(num){
  return num * 2;
});

console.log(doubled);
```

Here map() creates a new array with doubled values.

**filter()** is used when we want to select some items from an array based on a condition. It checks each element and keeps only the elements that match the condition.

Example:

```javascript
const numbers = [1,2,3,4,5];

const bigNumbers = numbers.filter(function(num){
  return num > 3;
});

console.log(bigNumbers);
```

Here filter() returns only the numbers greater than 3.

So simply:
- **forEach() → runs a function for each item**
- **map() → creates a new array with changed values**
- **filter() → creates a new array with selected values**

---

## 4️⃣ What is an arrow function?

An **arrow function** is a shorter way to write a function in JavaScript. It was introduced in ES6. It helps developers write cleaner and shorter code.

Normally, a function is written like this:

```javascript
function add(a, b) {
  return a + b;
}
```

The same function can be written using an arrow function like this:

```javascript
const add = (a, b) => {
  return a + b;
};
```

If the function has only one line, we can make it even shorter.

```javascript
const add = (a, b) => a + b;
```

Arrow functions are commonly used in modern JavaScript, especially with array methods like **map()**, **filter()**, and **forEach()**.

So in simple words, an arrow function is just a **short and modern way to write functions**.

---

## 5️⃣ What are template literals?

Template literals are used to create strings in JavaScript in an easier way. They use **backticks (` `)** instead of single quotes or double quotes.

One big advantage of template literals is that we can easily add variables inside a string using `${}`.

Example:

```javascript
const name = "Abu Sayaad";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`;

console.log(message);
```

In this example, the values of **name** and **age** are inserted directly inside the string.

Before template literals, developers had to use string concatenation like this:

```javascript
"My name is " + name + " and I am " + age + " years old."
```

Template literals make the code cleaner and easier to read.

So in simple words, template literals help us **write strings with variables in a simple and readable way**.