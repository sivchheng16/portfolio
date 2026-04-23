
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module02VariablesDataTypes() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Variables &amp; Data Types</Typography>
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
            <li>Declare variables using let, const, and var</li>
            <li>Work with different data types</li>
            <li>Perform string operations</li>
            <li>Understand type conversion</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What Are Variables?</Typography>
          <Typography variant="h3">Variables Store Data</Typography>
          <Typography>
            Think of variables as labeled boxes that hold information:
          </Typography>
          <CodeBlock language="javascript">{`let name = "Sokha"; // Box labeled "name" contains "Sokha"
let age = 22; // Box labeled "age" contains 22
let isStudent = true; // Box labeled "isStudent" contains true`}</CodeBlock>
          <Typography variant="h3">Declaring Variables</Typography>
          <CodeBlock language="javascript">{`// Declaration with value
let score = 100;
// Declaration without value (undefined)
let playerName;
// Assign value later
playerName = "Dara";
// Change value
score = 150;`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: let, const, and var</Typography>
          <Typography variant="h3">Three Ways to Declare</Typography>
          <CodeBlock language="javascript">{`let message = "Hello"; // Can be changed
const PI = 3.14159; // Cannot be changed
var oldWay = "Legacy"; // Old way (avoid)`}</CodeBlock>
          <Typography variant="h3">let — Use Most of the Time</Typography>
          <CodeBlock language="javascript">{`let count = 0;
count = 1; // OK - can change
count = 2; // OK - can change again
let count = 3; // Error - can't redeclare`}</CodeBlock>
          <Typography variant="h3">const — For Values That Don&apos;t Change</Typography>
          <CodeBlock language="javascript">{`const maxUsers = 100;
maxUsers = 200; // Error! Cannot change const
const siteName = "KOOMPI";
siteName = "Other"; // Error!`}</CodeBlock>
          <Typography>
            When to use const:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Configuration values</li>
            <li>Constants (like PI, MAX_VALUE)</li>
            <li>DOM element references</li>
            <li>When value shouldn&apos;t change</li>
          </ul>
          <Typography variant="h3">var — The Old Way (Avoid)</Typography>
          <CodeBlock language="javascript">{`var oldVariable = "Legacy code";
// Works but can cause problems
// Only use when maintaining old code`}</CodeBlock>
          <Typography variant="h3">Comparison</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>let</TableHead>
                <TableHead>const</TableHead>
                <TableHead>var</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Can reassign</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>No</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Can redeclare</TableCell>
                <TableCell>No</TableCell>
                <TableCell>No</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Block scope</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>No</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Recommended</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Naming Variables</Typography>
          <Typography variant="h3">Rules</Typography>
          <CodeBlock language="javascript">{`// Valid names
let userName;
let user_name;
let userName1;
let \$price;
let _private;
// Invalid names
let 1user; // Can't start with number
let user-name; // Can't use hyphen
let let; // Can't use reserved words
let my name; // Can't have spaces`}</CodeBlock>
          <Typography variant="h3">Common Conventions</Typography>
          <CodeBlock language="javascript">{`// camelCase (most common in JavaScript)
let firstName;
let userEmailAddress;
let isLoggedIn;
// Use descriptive names
let x; // What does x mean?
let userAge; // Clear meaning
// Boolean names often start with is, has, can
let isActive;
let hasPermission;
let canEdit;`}</CodeBlock>
          <Typography variant="h3">Reserved Words (Can&apos;t Use)</Typography>
          <CodeBlock language="text">{`break, case, catch, class, const, continue, 
do, else, export, extends, false, finally, 
for, function, if, import, in, instanceof, 
let, new, null, return, static, switch, 
this, throw, true, try, typeof, undefined, 
var, void, while, with, yield`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Data Types</Typography>
          <Typography variant="h3">Primitive Data Types</Typography>
          <CodeBlock language="javascript">{`// 1. STRING - text
let name = "Sokha";
let greeting = 'Hello!';
let message = \`Welcome, \${name}\`;
// 2. NUMBER - integers and decimals
let age = 22;
let price = 9.99;
let negative = -10;
// 3. BOOLEAN - true or false
let isStudent = true;
let hasLicense = false;
// 4. UNDEFINED - no value assigned
let unknown;
console.log(unknown); // undefined
// 5. NULL - intentionally empty
let selectedUser = null;
// 6. SYMBOL - unique identifier (advanced)
let id = Symbol('id');`}</CodeBlock>
          <Typography variant="h3">Checking Type</Typography>
          <CodeBlock language="javascript">{`let name = "Sokha";
let age = 22;
let isStudent = true;
console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (JavaScript quirk!)`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Working with Strings</Typography>
          <Typography variant="h3">Creating Strings</Typography>
          <CodeBlock language="javascript">{`// Single quotes
let str1 = 'Hello';
// Double quotes
let str2 = "World";
// Template literals (backticks) - allows expressions
let str3 = \`Hello, World!\`;`}</CodeBlock>
          <Typography variant="h3">String Concatenation</Typography>
          <CodeBlock language="javascript">{`let firstName = "Sokha";
let lastName = "Meas";
// Using +
let fullName = firstName + " " + lastName;
console.log(fullName); // "Sokha Meas"
// Using template literals (better!)
let greeting = \`Hello, \${firstName} \${lastName}!\`;
console.log(greeting); // "Hello, Sokha Meas!"`}</CodeBlock>
          <Typography variant="h3">Template Literals</Typography>
          <CodeBlock language="javascript">{`let name = "Dara";
let age = 25;
// Can embed expressions
let intro = \`My name is \${name} and I am \${age} years old.\`;
// Can do calculations
let message = \`Next year I will be \${age + 1}.\`;
// Multi-line strings
let poem = \`
 Roses are red,
 Violets are blue,
 JavaScript is fun,
 And so are you!
\`;`}</CodeBlock>
          <Typography variant="h3">String Properties and Methods</Typography>
          <CodeBlock language="javascript">{`let text = "Hello, Cambodia!";
// Length
console.log(text.length); // 16
// Access character
console.log(text[0]); // "H"
console.log(text[7]); // "C"
// Common methods
console.log(text.toUpperCase()); // "HELLO, CAMBODIA!"
console.log(text.toLowerCase()); // "hello, cambodia!"
console.log(text.includes("Cambodia")); // true
console.log(text.indexOf("Cambodia")); // 7
console.log(text.slice(0, 5)); // "Hello"
console.log(text.replace("Cambodia", "World")); // "Hello, World!"`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Working with Numbers</Typography>
          <Typography variant="h3">Basic Operations</Typography>
          <CodeBlock language="javascript">{`let a = 10;
let b = 3;
console.log(a + b); // 13 (addition)
console.log(a - b); // 7 (subtraction)
console.log(a * b); // 30 (multiplication)
console.log(a / b); // 3.333... (division)
console.log(a % b); // 1 (remainder/modulo)
console.log(a ** b); // 1000 (exponent)`}</CodeBlock>
          <Typography variant="h3">Increment and Decrement</Typography>
          <CodeBlock language="javascript">{`let count = 0;
count++; // count is now 1
count++; // count is now 2
count--; // count is now 1
// Also:
count += 5; // count = count + 5
count -= 2; // count = count - 2
count *= 3; // count = count * 3`}</CodeBlock>
          <Typography variant="h3">Math Object</Typography>
          <CodeBlock language="javascript">{`// Rounding
console.log(Math.round(4.5)); // 5
console.log(Math.floor(4.9)); // 4 (round down)
console.log(Math.ceil(4.1)); // 5 (round up)
// Other useful methods
console.log(Math.abs(-5)); // 5 (absolute value)
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1
console.log(Math.random()); // Random 0-1
// Random whole number between 1 and 10
let random = Math.floor(Math.random() * 10) + 1;`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Type Conversion</Typography>
          <Typography variant="h3">Automatic Conversion (Coercion)</Typography>
          <CodeBlock language="javascript">{`// String + Number = String
console.log("5" + 3); // "53" (string)
// Number operations try to convert
console.log("5" - 3); // 2 (number)
console.log("5" * 3); // 15 (number)
// Be careful!
console.log("5" + 3); // "53"
console.log(5 + "3"); // "53"`}</CodeBlock>
          <Typography variant="h3">Explicit Conversion</Typography>
          <CodeBlock language="javascript">{`// To String
let num = 123;
let str = String(num); // "123"
let str2 = num.toString(); // "123"
// To Number
let text = "456";
let number = Number(text); // 456
let num2 = parseInt("456"); // 456
let num3 = parseFloat("3.14"); // 3.14
// To Boolean
let bool = Boolean(1); // true
let bool2 = Boolean(0); // false
let bool3 = Boolean(""); // false
let bool4 = Boolean("hello"); // true`}</CodeBlock>
          <Typography variant="h3">Truthy and Falsy</Typography>
          <CodeBlock language="javascript">{`// Falsy values (become false)
Boolean(0); // false
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
Boolean(false); // false
// Everything else is truthy
Boolean(1); // true
Boolean("hello"); // true
Boolean([]); // true
Boolean({}); // true`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Variable Practice</Typography>
          <Typography>
            Create variables for:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Your name</li>
            <li>Your age</li>
            <li>Whether you are a student (true/false)</li>
            <li>Your favorite color</li>
          </ul>
          <Typography>
            Print all of them to the console.
          </Typography>
          <Typography variant="h3">Exercise 2: String Concatenation</Typography>
          <Typography>
            Create a variable with your first name and another with your last name. Combine them to create a full name using:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>The + operator</li>
            <li>Template literals</li>
          </ul>
          <Typography variant="h3">Exercise 3: Math Calculator</Typography>
          <Typography>
            Create variables for:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>price = 100</li>
            <li>quantity = 5</li>
            <li>taxRate = 0.10</li>
          </ul>
          <Typography>
            Calculate and print:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Subtotal (price × quantity)</li>
            <li>Tax amount (subtotal × taxRate)</li>
            <li>Total (subtotal + tax)</li>
          </ul>
          <Typography variant="h3">Exercise 4: Type Checking</Typography>
          <Typography>
            For each variable below, use typeof to check the type:
          </Typography>
          <CodeBlock language="javascript">{`let a = "Hello";
let b = 42;
let c = true;
let d;
let e = null;`}</CodeBlock>
          <Typography variant="h3">Exercise 5: User Info</Typography>
          <Typography>
            Create a page that:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Prompts for user&apos;s name</li>
            <li>Prompts for user&apos;s age</li>
            <li>Displays: &quot;Hello [name], you will be [age+1] next year!&quot;</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Variable Declarations
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Keyword</TableHead>
                <TableHead>Reassign</TableHead>
                <TableHead>Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>let</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>Variables that change</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>const</TableCell>
                <TableCell>No</TableCell>
                <TableCell>Constants, config</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>var</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>Old code only</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Data Types
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>String</TableCell>
                <TableCell>&quot;Hello&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell>42, 3.14</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Boolean</TableCell>
                <TableCell>true, false</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Undefined</TableCell>
                <TableCell>undefined</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Null</TableCell>
                <TableCell>null</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Before moving to Module 04:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Practiced variable declarations</li>
            <li>Worked with strings and numbers</li>
            <li>Understand data types</li>
            <li>Completed all exercises</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 04 - Operators &amp; Conditions
          </Typography>
          <Typography>
            You will learn to make decisions in code!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Data is the foundation!
          </Typography>
          <Typography>
            Everything in programming starts with data.
          </Typography>
        </div>
      </section>
    </div>
  );
}
