
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module05ArraysLoops() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Arrays &amp; Loops</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 03: JavaScript Basics</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Objectives</Typography>
          <Typography>
            By the end of this module, you will be able to:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create and manipulate arrays</li>
            <li>Use for, while, and forEach loops</li>
            <li>Apply array methods (push, pop, map, filter)</li>
            <li>Iterate through collections</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Introduction to Arrays</Typography>
          <Typography variant="h3">What Are Arrays?</Typography>
          <Typography>
            Arrays store multiple values in a single variable:
          </Typography>
          <CodeBlock language="javascript">{`// Without arrays
let student1 = "Sokha";
let student2 = "Dara";
let student3 = "Bopha";
// With arrays
let students = ["Sokha", "Dara", "Bopha"];`}</CodeBlock>
          <Typography variant="h3">Creating Arrays</Typography>
          <CodeBlock language="javascript">{`// Array literal (preferred)
let fruits = ["apple", "banana", "orange"];
// Empty array
let emptyArray = [];
// Mixed types (possible but not recommended)
let mixed = [1, "hello", true, null];
// Array of numbers
let scores = [85, 92, 78, 95, 88];`}</CodeBlock>
          <Typography variant="h3">Accessing Elements</Typography>
          <Typography>
            Arrays are zero-indexed (start at 0):
          </Typography>
          <CodeBlock language="javascript">{`let colors = ["red", "green", "blue"];
console.log(colors[0]); // "red"
console.log(colors[1]); // "green"
console.log(colors[2]); // "blue"
console.log(colors[3]); // undefined (doesn't exist)
// Last element
console.log(colors[colors.length - 1]); // "blue"`}</CodeBlock>
          <Typography variant="h3">Array Length</Typography>
          <CodeBlock language="javascript">{`let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Modifying Arrays</Typography>
          <Typography variant="h3">Changing Elements</Typography>
          <CodeBlock language="javascript">{`let colors = ["red", "green", "blue"];
colors[1] = "yellow";
console.log(colors); // ["red", "yellow", "blue"]`}</CodeBlock>
          <Typography variant="h3">Adding Elements</Typography>
          <CodeBlock language="javascript">{`let fruits = ["apple", "banana"];
// Add to end
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]
// Add to beginning
fruits.unshift("mango");
console.log(fruits); // ["mango", "apple", "banana", "orange"]`}</CodeBlock>
          <Typography variant="h3">Removing Elements</Typography>
          <CodeBlock language="javascript">{`let fruits = ["apple", "banana", "orange"];
// Remove from end
let last = fruits.pop();
console.log(last); // "orange"
console.log(fruits); // ["apple", "banana"]
// Remove from beginning
let first = fruits.shift();
console.log(first); // "apple"
console.log(fruits); // ["banana"]`}</CodeBlock>
          <Typography variant="h3">Splice (Add/Remove at Position)</Typography>
          <CodeBlock language="javascript">{`let colors = ["red", "green", "blue", "yellow"];
// Remove 1 element at index 2
colors.splice(2, 1);
console.log(colors); // ["red", "green", "yellow"]
// Insert "purple" at index 1
colors.splice(1, 0, "purple");
console.log(colors); // ["red", "purple", "green", "yellow"]
// Replace 1 element at index 0 with "orange"
colors.splice(0, 1, "orange");
console.log(colors); // ["orange", "purple", "green", "yellow"]`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: For Loops</Typography>
          <Typography variant="h3">Basic For Loop</Typography>
          <CodeBlock language="javascript">{`for (let i = 0; i < 5; i++) {
 console.log(i);
}
// Output: 0, 1, 2, 3, 4`}</CodeBlock>
          <Typography variant="h3">Loop Structure</Typography>
          <CodeBlock language="javascript">{`for (initialization; condition; update) {
 // code to repeat
}
// initialization: let i = 0 → runs once at start
// condition: i < 5 → checked before each iteration
// update: i++ → runs after each iteration`}</CodeBlock>
          <Typography variant="h3">Looping Through Arrays</Typography>
          <CodeBlock language="javascript">{`let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
 console.log(fruits[i]);
}
// apple
// banana
// orange`}</CodeBlock>
          <Typography variant="h3">For...of Loop (Simpler!)</Typography>
          <CodeBlock language="javascript">{`let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
 console.log(fruit);
}
// apple
// banana
// orange`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: While Loops</Typography>
          <Typography variant="h3">While Loop</Typography>
          <Typography>
            Repeats while condition is true:
          </Typography>
          <CodeBlock language="javascript">{`let count = 0;
while (count < 5) {
 console.log(count);
 count++;
}
// 0, 1, 2, 3, 4`}</CodeBlock>
          <Typography variant="h3">Do...While Loop</Typography>
          <Typography>
            Runs at least once:
          </Typography>
          <CodeBlock language="javascript">{`let count = 0;
do {
 console.log(count);
 count++;
} while (count < 5);
// 0, 1, 2, 3, 4`}</CodeBlock>
          <Typography variant="h3">When to Use Each</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Loop Type</TableHead>
                <TableHead>Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>for</TableCell>
                <TableCell>Known number of iterations</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>for...of</TableCell>
                <TableCell>Arrays and iterables</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>while</TableCell>
                <TableCell>Unknown iterations, complex conditions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>do...while</TableCell>
                <TableCell>Must run at least once</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Array Methods</Typography>
          <Typography variant="h3">forEach — Do Something with Each Element</Typography>
          <CodeBlock language="javascript">{`let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
 console.log(num * 2);
});
// 2, 4, 6, 8, 10
// With arrow function
numbers.forEach(num => console.log(num * 2));`}</CodeBlock>
          <Typography variant="h3">map — Transform Each Element</Typography>
          <CodeBlock language="javascript">{`let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
// Original unchanged
console.log(numbers); // [1, 2, 3, 4, 5]`}</CodeBlock>
          <Typography variant="h3">filter — Keep Matching Elements</Typography>
          <CodeBlock language="javascript">{`let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
// Find students with passing grades
let scores = [45, 72, 88, 55, 91, 67];
let passing = scores.filter(score => score >= 60);
console.log(passing); // [72, 88, 91, 67]`}</CodeBlock>
          <Typography variant="h3">find — Get First Match</Typography>
          <CodeBlock language="javascript">{`let users = [
 { name: "Sokha", age: 22 },
 { name: "Dara", age: 25 },
 { name: "Bopha", age: 22 }
];
let user = users.find(u => u.name === "Dara");
console.log(user); // { name: "Dara", age: 25 }`}</CodeBlock>
          <Typography variant="h3">includes — Check if Element Exists</Typography>
          <CodeBlock language="javascript">{`let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape")); // false`}</CodeBlock>
          <Typography variant="h3">reduce — Combine to Single Value</Typography>
          <CodeBlock language="javascript">{`let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15
// Initial value is 0, then:
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Practical Examples</Typography>
          <Typography variant="h3">Shopping Cart</Typography>
          <CodeBlock language="javascript">{`let cart = [
 { name: "Laptop", price: 299 },
 { name: "Mouse", price: 25 },
 { name: "Keyboard", price: 49 }
];
// Calculate total
let total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(\`Total: \$\${total}\`); // Total: \$373
// Get item names
let items = cart.map(item => item.name);
console.log(items); // ["Laptop", "Mouse", "Keyboard"]
// Find expensive items
let expensive = cart.filter(item => item.price > 30);
console.log(expensive); // Laptop and Keyboard`}</CodeBlock>
          <Typography variant="h3">Student Grades</Typography>
          <CodeBlock language="javascript">{`let students = [
 { name: "Sokha", score: 85 },
 { name: "Dara", score: 72 },
 { name: "Bopha", score: 91 },
 { name: "Vanna", score: 58 }
];
// Get passing students
let passing = students.filter(s => s.score >= 60);
console.log(passing);
// Get names only
let names = students.map(s => s.name);
console.log(names);
// Calculate average
let total = students.reduce((sum, s) => sum + s.score, 0);
let average = total / students.length;
console.log(\`Average: \${average}\`); // 76.5`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Nested Loops</Typography>
          <Typography variant="h3">Looping Through 2D Arrays</Typography>
          <CodeBlock language="javascript">{`let matrix = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
];
for (let row of matrix) {
 for (let num of row) {
 console.log(num);
 }
}
// 1, 2, 3, 4, 5, 6, 7, 8, 9`}</CodeBlock>
          <Typography variant="h3">Multiplication Table</Typography>
          <CodeBlock language="javascript">{`for (let i = 1; i <= 5; i++) {
 let row = "";
 for (let j = 1; j <= 5; j++) {
 row += \`\${i * j}\t\`;
 }
 console.log(row);
}
// 1 2 3 4 5
// 2 4 6 8 10
// ...`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Array Basics</Typography>
          <Typography>
            Create an array of 5 Cambodian provinces. Then:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Print each province</li>
            <li>Add 2 more provinces</li>
            <li>Remove the first one</li>
            <li>Check if &quot;Siem Reap&quot; is in the array</li>
          </ul>
          <Typography variant="h3">Exercise 2: Sum Array</Typography>
          <Typography>
            Write a function that takes an array of numbers and returns their sum.
          </Typography>
          <Typography variant="h3">Exercise 3: Find Maximum</Typography>
          <Typography>
            Write a function that finds the largest number in an array (without using Math.max).
          </Typography>
          <Typography variant="h3">Exercise 4: Filter Practice</Typography>
          <Typography>
            Given an array of ages, filter to find:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>All adults (18+)</li>
            <li>All teenagers (13-19)</li>
          </ul>
          <Typography variant="h3">Exercise 5: Todo List Data</Typography>
          <Typography>
            Create an array of todo objects with task and done properties. Write functions to:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>List all tasks</li>
            <li>List only incomplete tasks</li>
            <li>Mark a task as done</li>
            <li>Count completed tasks</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Array Methods
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Method</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Returns</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>push()</TableCell>
                <TableCell>Add to end</TableCell>
                <TableCell>New length</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>pop()</TableCell>
                <TableCell>Remove from end</TableCell>
                <TableCell>Removed element</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>map()</TableCell>
                <TableCell>Transform all</TableCell>
                <TableCell>New array</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>filter()</TableCell>
                <TableCell>Keep matches</TableCell>
                <TableCell>New array</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>find()</TableCell>
                <TableCell>Get first match</TableCell>
                <TableCell>Element or undefined</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>forEach()</TableCell>
                <TableCell>Loop through</TableCell>
                <TableCell>undefined</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>reduce()</TableCell>
                <TableCell>Combine to one</TableCell>
                <TableCell>Single value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>includes()</TableCell>
                <TableCell>Check existence</TableCell>
                <TableCell>Boolean</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Loop Types
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Syntax</TableHead>
                <TableHead>Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>for</TableCell>
                <TableCell>for (let i=0; i&lt;n; i++)</TableCell>
                <TableCell>Index needed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>for...of</TableCell>
                <TableCell>for (let x of arr)</TableCell>
                <TableCell>Simple iteration</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>forEach</TableCell>
                <TableCell>arr.forEach(fn)</TableCell>
                <TableCell>Array operations</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>while</TableCell>
                <TableCell>while (cond)</TableCell>
                <TableCell>Unknown iterations</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Before moving to Module 07:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create and manipulate arrays</li>
            <li>Use all loop types</li>
            <li>Apply map, filter, reduce</li>
            <li>Complete all exercises</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 07 - DOM Manipulation
          </Typography>
          <Typography>
            You will learn to change web pages with JavaScript!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Collections power your apps!
          </Typography>
          <Typography>
            Arrays hold all your data.
          </Typography>
        </div>
      </section>
    </div>
  );
}
