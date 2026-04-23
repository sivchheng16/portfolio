
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module01ES6Features() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">ES6+ Modern Features</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 04: JavaScript Advanced</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Objectives</Typography>
          <Typography>
            By the end of this module, you will be able to:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Use destructuring for objects and arrays</li>
            <li>Apply spread and rest operators</li>
            <li>Work with template literals effectively</li>
            <li>Understand JavaScript modules (import/export)</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Destructuring</Typography>
          <Typography variant="h3">Object Destructuring</Typography>
          <Typography>
            Extract values from objects into variables:
          </Typography>
          <CodeBlock language="javascript">{`// Without destructuring
const user = { name: "Sokha", age: 22, city: "Phnom Penh" };
const name = user.name;
const age = user.age;
// With destructuring
const { name, age, city } = user;
console.log(name); // "Sokha"
console.log(age); // 22`}</CodeBlock>
          <Typography variant="h3">Renaming Variables</Typography>
          <CodeBlock language="javascript">{`const user = { name: "Sokha", age: 22 };
// Rename while destructuring
const { name: userName, age: userAge } = user;
console.log(userName); // "Sokha"
console.log(userAge); // 22`}</CodeBlock>
          <Typography variant="h3">Default Values</Typography>
          <CodeBlock language="javascript">{`const user = { name: "Sokha" };
const { name, age = 18 } = user;
console.log(age); // 18 (default value used)`}</CodeBlock>
          <Typography variant="h3">Nested Destructuring</Typography>
          <CodeBlock language="javascript">{`const user = {
 name: "Sokha",
 address: {
 city: "Phnom Penh",
 country: "Cambodia"
 }
};
const { name, address: { city, country } } = user;
console.log(city); // "Phnom Penh"`}</CodeBlock>
          <Typography variant="h3">Array Destructuring</Typography>
          <CodeBlock language="javascript">{`const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first); // "red"
console.log(second); // "green"
// Skip elements
const [primary, , tertiary] = colors;
console.log(tertiary); // "blue"
// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Spread Operator (...)</Typography>
          <Typography variant="h3">Spread Arrays</Typography>
          <CodeBlock language="javascript">{`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Combine arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
// Copy array
const copy = [...arr1];
copy.push(4);
console.log(arr1); // [1, 2, 3] - original unchanged
console.log(copy); // [1, 2, 3, 4]
// Add elements
const withNew = [0, ...arr1, 4];
console.log(withNew); // [0, 1, 2, 3, 4]`}</CodeBlock>
          <Typography variant="h3">Spread Objects</Typography>
          <CodeBlock language="javascript">{`const user = { name: "Sokha", age: 22 };
// Copy object
const userCopy = { ...user };
// Merge objects
const details = { city: "Phnom Penh", job: "Developer" };
const fullUser = { ...user, ...details };
console.log(fullUser);
// { name: "Sokha", age: 22, city: "Phnom Penh", job: "Developer" }
// Override properties
const updated = { ...user, age: 23 };
console.log(updated); // { name: "Sokha", age: 23 }`}</CodeBlock>
          <Typography variant="h3">Spread in Function Calls</Typography>
          <CodeBlock language="javascript">{`const numbers = [5, 2, 8, 1, 9];
// Instead of Math.max(5, 2, 8, 1, 9)
const max = Math.max(...numbers);
console.log(max); // 9`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Rest Operator (...)</Typography>
          <Typography variant="h3">Rest in Functions</Typography>
          <Typography>
            Collect remaining arguments:
          </Typography>
          <CodeBlock language="javascript">{`function sum(...numbers) {
 return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15`}</CodeBlock>
          <Typography variant="h3">Rest with Destructuring</Typography>
          <CodeBlock language="javascript">{`const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
const { name, ...otherProps } = { name: "Sokha", age: 22, city: "PP" };
console.log(name); // "Sokha"
console.log(otherProps); // { age: 22, city: "PP" }`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Enhanced Object Literals</Typography>
          <Typography variant="h3">Shorthand Properties</Typography>
          <CodeBlock language="javascript">{`const name = "Sokha";
const age = 22;
// Old way
const user1 = { name: name, age: age };
// Shorthand
const user2 = { name, age };
console.log(user2); // { name: "Sokha", age: 22 }`}</CodeBlock>
          <Typography variant="h3">Shorthand Methods</Typography>
          <CodeBlock language="javascript">{`// Old way
const obj1 = {
 sayHello: function() {
 console.log("Hello!");
 }
};
// Shorthand
const obj2 = {
 sayHello() {
 console.log("Hello!");
 }
};`}</CodeBlock>
          <Typography variant="h3">Computed Property Names</Typography>
          <CodeBlock language="javascript">{`const key = "dynamicKey";
const obj = {
 [key]: "value",
 ["item" + 1]: "first",
 ["item" + 2]: "second"
};
console.log(obj.dynamicKey); // "value"
console.log(obj.item1); // "first"`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Template Literals Advanced</Typography>
          <Typography variant="h3">Multi-line Strings</Typography>
          <CodeBlock language="javascript">{`const html = \`
 <div class="card">
 <h2>Title</h2>
 <p>Content goes here</p>
 </div>
\`;`}</CodeBlock>
          <Typography variant="h3">Expression Interpolation</Typography>
          <CodeBlock language="javascript">{`const price = 100;
const tax = 0.1;
const message = \`
 Price: \$\${price}
 Tax: \$\${price * tax}
 Total: \$\${price * (1 + tax)}
\`;`}</CodeBlock>
          <Typography variant="h3">Tagged Templates</Typography>
          <CodeBlock language="javascript">{`function highlight(strings, ...values) {
 return strings.reduce((result, str, i) => {
 return result + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : '');
 }, '');
}
const name = "Sokha";
const role = "Developer";
const result = highlight\`Welcome \${name}, you are a \${role}!\`;
// "Welcome <mark>Sokha</mark>, you are a <mark>Developer</mark>!"`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Optional Chaining &amp; Nullish Coalescing</Typography>
          <Typography variant="h3">Optional Chaining (?.)</Typography>
          <Typography>
            Safely access nested properties:
          </Typography>
          <CodeBlock language="javascript">{`const user = {
 name: "Sokha",
 address: {
 city: "Phnom Penh"
 }
};
// Without optional chaining
const country1 = user.address && user.address.country;
// With optional chaining
const country2 = user.address?.country;
console.log(country2); // undefined (no error!)
// Works with methods too
const user2 = {};
user2.getName?.(); // undefined, no error
// Array access
const arr = null;
arr?.[0]; // undefined, no error`}</CodeBlock>
          <Typography variant="h3">Nullish Coalescing (??)</Typography>
          <Typography>
            Default value only for null/undefined (not for 0 or &quot;&quot;):
          </Typography>
          <CodeBlock language="javascript">{`const count = 0;
// || treats 0 as falsy
console.log(count || 10); // 10 (wrong!)
// ?? only checks null/undefined
console.log(count ?? 10); // 0 (correct!)
const name = "";
console.log(name || "Anonymous"); // "Anonymous"
console.log(name ?? "Anonymous"); // "" (empty string is valid)`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Modules (Import/Export)</Typography>
          <Typography variant="h3">Named Exports</Typography>
          <CodeBlock language="javascript">{`// utils.js
export const PI = 3.14159;
export function add(a, b) {
 return a + b;
}
export function subtract(a, b) {
 return a - b;
}`}</CodeBlock>
          <CodeBlock language="javascript">{`// main.js
import { PI, add, subtract } from './utils.js';
console.log(PI); // 3.14159
console.log(add(2, 3)); // 5`}</CodeBlock>
          <Typography variant="h3">Default Export</Typography>
          <CodeBlock language="javascript">{`// Calculator.js
export default class Calculator {
 add(a, b) { return a + b; }
 subtract(a, b) { return a - b; }
}`}</CodeBlock>
          <CodeBlock language="javascript">{`// main.js
import Calculator from './Calculator.js';
const calc = new Calculator();
console.log(calc.add(5, 3)); // 8`}</CodeBlock>
          <Typography variant="h3">Mixed Exports</Typography>
          <CodeBlock language="javascript">{`// api.js
export const API_URL = "https://api.example.com";
export function fetchData() { /* ... */ }
export default class ApiClient { /* ... */ }`}</CodeBlock>
          <CodeBlock language="javascript">{`// main.js
import ApiClient, { API_URL, fetchData } from './api.js';`}</CodeBlock>
          <Typography variant="h3">Renaming Imports</Typography>
          <CodeBlock language="javascript">{`import { add as addNumbers, subtract as subtractNumbers } from './utils.js';`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Destructuring Practice</Typography>
          <CodeBlock language="javascript">{`const product = {
 id: 1,
 name: "KOOMPI E13",
 price: 299,
 specs: {
 ram: "8GB",
 storage: "256GB"
 }
};
// Destructure: name, price, and ram from specs`}</CodeBlock>
          <Typography variant="h3">Exercise 2: Spread Operations</Typography>
          <CodeBlock language="javascript">{`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Create new array: [0, 1, 2, 3, 4, 5, 6, 7]`}</CodeBlock>
          <Typography variant="h3">Exercise 3: Rest Parameters</Typography>
          <Typography>
            Create a function average(...numbers) that calculates the average of any number of arguments.
          </Typography>
          <Typography variant="h3">Exercise 4: Optional Chaining</Typography>
          <Typography>
            Safely access deeply nested data without errors.
          </Typography>
          <Typography variant="h3">Exercise 5: Modules</Typography>
          <Typography>
            Create two files:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>math.js with exported functions</li>
            <li>app.js that imports and uses them</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Syntax</TableHead>
                <TableHead>Use Case</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Destructuring</TableCell>
                <TableCell>{"const { a, b } = obj"}</TableCell>
                <TableCell>Extract values</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Spread</TableCell>
                <TableCell>[...arr]</TableCell>
                <TableCell>Copy/combine</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rest</TableCell>
                <TableCell>(...args)</TableCell>
                <TableCell>Collect arguments</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Optional Chaining</TableCell>
                <TableCell>obj?.prop</TableCell>
                <TableCell>Safe access</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Nullish Coalescing</TableCell>
                <TableCell>a ?? b</TableCell>
                <TableCell>Default for null</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Modules</TableCell>
                <TableCell>import/export</TableCell>
                <TableCell>Code organization</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 03 - Asynchronous JavaScript
          </Typography>
          <Typography>
            You will learn Promises, async/await, and handling asynchronous operations!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Modern JavaScript is powerful!
          </Typography>
          <Typography>
            These features make your code cleaner and safer.
          </Typography>
        </div>
      </section>
    </div>
  );
}
