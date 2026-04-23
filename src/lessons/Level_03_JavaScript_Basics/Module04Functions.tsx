
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module04Functions() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Functions</Typography>
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
            <li>Create and call functions</li>
            <li>Use parameters and return values</li>
            <li>Understand function scope</li>
            <li>Use arrow functions</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What Are Functions?</Typography>
          <Typography variant="h3">Functions Are Reusable Code</Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────────────────────┐
│ WHY FUNCTIONS? │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ WITHOUT FUNCTIONS: WITH FUNCTIONS: │
│ │
│ console.log("Hello, Sokha"); function greet(name) { │
│ console.log("Hello, Dara"); console.log("Hello, " + name); │
│ console.log("Hello, Bopha"); } │
│ console.log("Hello, Vanna"); │
│ // ... repeat for every person greet("Sokha"); │
│ greet("Dara"); │
│ greet("Bopha"); │
│ greet("Vanna"); │
│ // Reuse for anyone! │
│ │
│ Functions let you write once and use many times. │
│ │
└─────────────────────────────────────────────────────────────────────────────┘`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Creating Functions</Typography>
          <Typography variant="h3">Function Declaration</Typography>
          <CodeBlock language="javascript">{`function sayHello() {
 console.log("Hello!");
}
// Call the function
sayHello(); // Output: Hello!
sayHello(); // Output: Hello!`}</CodeBlock>
          <Typography variant="h3">Function with Parameters</Typography>
          <CodeBlock language="javascript">{`function greet(name) {
 console.log("Hello, " + name + "!");
}
greet("Sokha"); // Hello, Sokha!
greet("Dara"); // Hello, Dara!`}</CodeBlock>
          <Typography variant="h3">Multiple Parameters</Typography>
          <CodeBlock language="javascript">{`function introduce(name, age, job) {
 console.log(\`My name is \${name}, I'm \${age}, and I work as a \${job}.\`);
}
introduce("Sokha", 22, "developer");
// My name is Sokha, I'm 22, and I work as a developer.`}</CodeBlock>
          <Typography variant="h3">Default Parameters</Typography>
          <CodeBlock language="javascript">{`function greet(name = "Friend") {
 console.log(\`Hello, \${name}!\`);
}
greet("Sokha"); // Hello, Sokha!
greet(); // Hello, Friend!`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Return Values</Typography>
          <Typography variant="h3">The Return Statement</Typography>
          <Typography>
            Functions can send a value back:
          </Typography>
          <CodeBlock language="javascript">{`function add(a, b) {
 return a + b;
}
let result = add(5, 3);
console.log(result); // 8
// Use directly
console.log(add(10, 20)); // 30`}</CodeBlock>
          <Typography variant="h3">Return Stops Execution</Typography>
          <CodeBlock language="javascript">{`function checkAge(age) {
 if (age < 18) {
 return "Too young";
 }
 return "Welcome!";
 console.log("This never runs"); // Unreachable
}
console.log(checkAge(15)); // Too young
console.log(checkAge(25)); // Welcome!`}</CodeBlock>
          <Typography variant="h3">Returning Different Types</Typography>
          <CodeBlock language="javascript">{`// Return a number
function calculateArea(width, height) {
 return width * height;
}
// Return a string
function getFullName(first, last) {
 return first + " " + last;
}
// Return a boolean
function isAdult(age) {
 return age >= 18;
}
// Return an object
function createUser(name, age) {
 return {
 name: name,
 age: age,
 isAdult: age >= 18
 };
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Scope</Typography>
          <Typography variant="h3">What is Scope?</Typography>
          <Typography>
            Scope determines where variables are accessible.
          </Typography>
          <CodeBlock language="javascript">{`let globalVar = "I'm global";
function myFunction() {
 let localVar = "I'm local";
 console.log(globalVar); // Can access global
 console.log(localVar); // Can access local
}
myFunction();
console.log(globalVar); // Can access global
console.log(localVar); // Error! localVar not defined`}</CodeBlock>
          <Typography variant="h3">Block Scope</Typography>
          <Typography>
            Variables declared with let and const are block-scoped:
          </Typography>
          <CodeBlock language="javascript">{`if (true) {
 let blockVar = "I'm in a block";
 console.log(blockVar); // Works here
}
console.log(blockVar); // Error! Not accessible outside
// var leaks out of blocks (avoid!)
if (true) {
 var leakyVar = "I leak!";
}
console.log(leakyVar); // "I leak!" - This actually works`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Arrow Functions</Typography>
          <Typography variant="h3">Arrow Function Syntax</Typography>
          <Typography>
            A shorter way to write functions:
          </Typography>
          <CodeBlock language="javascript">{`// Traditional function
function add(a, b) {
 return a + b;
}
// Arrow function
const add = (a, b) => {
 return a + b;
};
// Even shorter (implicit return)
const add = (a, b) => a + b;`}</CodeBlock>
          <Typography variant="h3">Arrow Function Examples</Typography>
          <CodeBlock language="javascript">{`// No parameters
const sayHello = () => console.log("Hello!");
// One parameter (parentheses optional)
const double = x => x * 2;
const double = (x) => x * 2; // Also valid
// Multiple parameters
const add = (a, b) => a + b;
// With function body
const greet = (name) => {
 let message = \`Hello, \${name}!\`;
 console.log(message);
 return message;
};`}</CodeBlock>
          <Typography variant="h3">When to Use Arrow Functions</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Use Arrow Functions</TableHead>
                <TableHead>Use Regular Functions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Short operations</TableCell>
                <TableCell>Methods in objects</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Array methods</TableCell>
                <TableCell>Constructors</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Callbacks</TableCell>
                <TableCell>When you need this context</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Function Expressions</Typography>
          <Typography variant="h3">Storing Functions in Variables</Typography>
          <CodeBlock language="javascript">{`// Function declaration
function greet1(name) {
 return \`Hello, \${name}!\`;
}
// Function expression
const greet2 = function(name) {
 return \`Hello, \${name}!\`;
};
// Arrow function expression
const greet3 = (name) => \`Hello, \${name}!\`;
// All work the same way
console.log(greet1("Sokha"));
console.log(greet2("Sokha"));
console.log(greet3("Sokha"));`}</CodeBlock>
          <Typography variant="h3">Passing Functions as Arguments</Typography>
          <CodeBlock language="javascript">{`function doOperation(a, b, operation) {
 return operation(a, b);
}
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
console.log(doOperation(10, 5, add)); // 15
console.log(doOperation(10, 5, subtract)); // 5
console.log(doOperation(10, 5, multiply)); // 50`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Practical Function Examples</Typography>
          <Typography variant="h3">Calculator Functions</Typography>
          <CodeBlock language="javascript">{`const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";
function calculate(num1, num2, operation) {
 switch(operation) {
 case '+': return add(num1, num2);
 case '-': return subtract(num1, num2);
 case '*': return multiply(num1, num2);
 case '/': return divide(num1, num2);
 default: return "Invalid operation";
 }
}
console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '/')); // 2`}</CodeBlock>
          <Typography variant="h3">Validation Functions</Typography>
          <CodeBlock language="javascript">{`function isValidEmail(email) {
 return email.includes('@') && email.includes('.');
}
function isValidPassword(password) {
 return password.length >= 8;
}
function validateUser(email, password) {
 if (!isValidEmail(email)) {
 return "Invalid email format";
 }
 if (!isValidPassword(password)) {
 return "Password must be at least 8 characters";
 }
 return "Valid!";
}
console.log(validateUser("test@email.com", "12345678")); // Valid!
console.log(validateUser("testemail", "12345678")); // Invalid email`}</CodeBlock>
          <Typography variant="h3">Greeting Function</Typography>
          <CodeBlock language="javascript">{`function getGreeting() {
 const hour = new Date().getHours();
 if (hour < 12) {
 return "Good morning";
 } else if (hour < 18) {
 return "Good afternoon";
 } else {
 return "Good evening";
 }
}
function personalizeGreeting(name) {
 return \`\${getGreeting()}, \${name}!\`;
}
console.log(personalizeGreeting("Sokha"));
// Output depends on time of day`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Basic Function</Typography>
          <Typography>
            Create a function that:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Takes a person&apos;s name</li>
            <li>Returns &quot;Hello, [name]!&quot;</li>
            <li>Call it with 3 different names</li>
          </ul>
          <Typography variant="h3">Exercise 2: Calculator</Typography>
          <Typography>
            Create functions for add, subtract, multiply, divide. Each takes two numbers and returns the result.
          </Typography>
          <Typography variant="h3">Exercise 3: Temperature Converter</Typography>
          <Typography>
            Create two functions:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>celsiusToFahrenheit(celsius) — returns fahrenheit</li>
            <li>fahrenheitToCelsius(fahrenheit) — returns celsius</li>
          </ul>
          <Typography>
            Formula: F = (C × 9/5) + 32
          </Typography>
          <Typography variant="h3">Exercise 4: Grade Function</Typography>
          <Typography>
            Create a function that:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Takes a score (0-100)</li>
            <li>Returns the grade (A, B, C, D, F)</li>
          </ul>
          <Typography variant="h3">Exercise 5: Password Generator</Typography>
          <Typography>
            Create a function that generates a random password:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Takes a length parameter (default 8)</li>
            <li>Returns a random string of that length</li>
            <li>Use letters and numbers</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Function Types
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Syntax</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Declaration</TableCell>
                <TableCell>function name() {}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Expression</TableCell>
                <TableCell>const name = function() {}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Arrow</TableCell>
                <TableCell>const name = () =&gt; {}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Key Concepts
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Concept</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Parameters</TableCell>
                <TableCell>Inputs to the function</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Return</TableCell>
                <TableCell>Output from the function</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Scope</TableCell>
                <TableCell>Where variables are accessible</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Default values</TableCell>
                <TableCell>Fallback for missing parameters</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Before moving to Module 06:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create functions with parameters</li>
            <li>Use return statements</li>
            <li>Understand scope</li>
            <li>Practice arrow functions</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 06 - Arrays &amp; Loops
          </Typography>
          <Typography>
            You will learn to work with collections of data!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Functions are your building blocks!
          </Typography>
          <Typography>
            Good functions make good code.
          </Typography>
        </div>
      </section>
    </div>
  );
}
