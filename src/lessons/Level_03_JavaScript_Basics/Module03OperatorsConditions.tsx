
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module03OperatorsConditions() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Operators &amp; Conditions</Typography>
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
            <li>Use comparison and logical operators</li>
            <li>Write conditional statements (if/else)</li>
            <li>Use switch statements</li>
            <li>Combine conditions with AND/OR logic</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Comparison Operators</Typography>
          <Typography variant="h3">Comparing Values</Typography>
          <CodeBlock language="javascript">{`let a = 10;
let b = 5;
// Greater than / Less than
console.log(a > b); // true
console.log(a < b); // false
console.log(a >= 10); // true
console.log(b <= 5); // true
// Equal / Not equal
console.log(a == 10); // true
console.log(a != b); // true`}</CodeBlock>
          <Typography variant="h3">== vs === (Important!)</Typography>
          <CodeBlock language="javascript">{`// == compares VALUE (with conversion)
console.log(5 == "5"); // true (string converted to number)
console.log(1 == true); // true (true converted to 1)
// === compares VALUE AND TYPE (strict)
console.log(5 === "5"); // false (different types)
console.log(1 === true); // false (different types)
console.log(5 === 5); // true (same value and type)`}</CodeBlock>
          <Typography>
            Always use === and !== for safety!
          </Typography>
          <Typography variant="h3">Comparison Reference</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Operator</TableHead>
                <TableHead>Meaning</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>==</TableCell>
                <TableCell>Equal (loose)</TableCell>
                <TableCell>5 == &quot;5&quot; → true</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>===</TableCell>
                <TableCell>Equal (strict)</TableCell>
                <TableCell>5 === 5 → true</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>!=</TableCell>
                <TableCell>Not equal (loose)</TableCell>
                <TableCell>5 != &quot;6&quot; → true</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>!==</TableCell>
                <TableCell>Not equal (strict)</TableCell>
                <TableCell>5 !== &quot;5&quot; → true</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&gt;</TableCell>
                <TableCell>Greater than</TableCell>
                <TableCell>10 &gt; 5 → true</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;</TableCell>
                <TableCell>Less than</TableCell>
                <TableCell>5 &lt; 10 → true</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&gt;=</TableCell>
                <TableCell>Greater or equal</TableCell>
                <TableCell>5 &gt;= 5 → true</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;=</TableCell>
                <TableCell>Less or equal</TableCell>
                <TableCell>5 &lt;= 10 → true</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Logical Operators</Typography>
          <Typography variant="h3">AND (&amp;&amp;)</Typography>
          <Typography>
            Both conditions must be true:
          </Typography>
          <CodeBlock language="javascript">{`let age = 25;
let hasLicense = true;
// Can drive only if 18+ AND has license
let canDrive = age >= 18 && hasLicense;
console.log(canDrive); // true
// Example
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false`}</CodeBlock>
          <Typography variant="h3">OR (||)</Typography>
          <Typography>
            At least one condition must be true:
          </Typography>
          <CodeBlock language="javascript">{`let isWeekend = true;
let isHoliday = false;
// Day off if weekend OR holiday
let isDayOff = isWeekend || isHoliday;
console.log(isDayOff); // true
// Example
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false`}</CodeBlock>
          <Typography variant="h3">NOT (!)</Typography>
          <Typography>
            Inverts the value:
          </Typography>
          <CodeBlock language="javascript">{`let isLoggedIn = false;
console.log(!isLoggedIn); // true
console.log(!true); // false
console.log(!false); // true`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: If Statements</Typography>
          <Typography variant="h3">Basic If</Typography>
          <CodeBlock language="javascript">{`let age = 20;
if (age >= 18) {
 console.log("You are an adult.");
}`}</CodeBlock>
          <Typography variant="h3">If...Else</Typography>
          <CodeBlock language="javascript">{`let age = 15;
if (age >= 18) {
 console.log("You are an adult.");
} else {
 console.log("You are a minor.");
}`}</CodeBlock>
          <Typography variant="h3">If...Else If...Else</Typography>
          <CodeBlock language="javascript">{`let score = 85;
if (score >= 90) {
 console.log("Grade: A");
} else if (score >= 80) {
 console.log("Grade: B");
} else if (score >= 70) {
 console.log("Grade: C");
} else if (score >= 60) {
 console.log("Grade: D");
} else {
 console.log("Grade: F");
}`}</CodeBlock>
          <Typography variant="h3">Nested If</Typography>
          <CodeBlock language="javascript">{`let age = 25;
let hasLicense = true;
if (age >= 18) {
 if (hasLicense) {
 console.log("You can drive.");
 } else {
 console.log("You need a license.");
 }
} else {
 console.log("You are too young to drive.");
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Combining Conditions</Typography>
          <Typography variant="h3">Multiple Conditions with AND</Typography>
          <CodeBlock language="javascript">{`let age = 25;
let hasLicense = true;
let hasInsurance = true;
if (age >= 18 && hasLicense && hasInsurance) {
 console.log("You can legally drive.");
}`}</CodeBlock>
          <Typography variant="h3">Multiple Conditions with OR</Typography>
          <CodeBlock language="javascript">{`let day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
 console.log("It's the weekend!");
} else {
 console.log("It's a weekday.");
}`}</CodeBlock>
          <Typography variant="h3">Complex Conditions</Typography>
          <CodeBlock language="javascript">{`let age = 22;
let isStudent = true;
let isEmployee = false;
// Student discount for students OR employees under 25
if (isStudent || (isEmployee && age < 25)) {
 console.log("You get a discount!");
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Switch Statements</Typography>
          <Typography variant="h3">When to Use Switch</Typography>
          <Typography>
            Use switch when comparing one value against many options:
          </Typography>
          <CodeBlock language="javascript">{`let day = 3;
switch (day) {
 case 1:
 console.log("Monday");
 break;
 case 2:
 console.log("Tuesday");
 break;
 case 3:
 console.log("Wednesday");
 break;
 case 4:
 console.log("Thursday");
 break;
 case 5:
 console.log("Friday");
 break;
 case 6:
 console.log("Saturday");
 break;
 case 7:
 console.log("Sunday");
 break;
 default:
 console.log("Invalid day");
}`}</CodeBlock>
          <Typography variant="h3">Break is Important</Typography>
          <Typography>
            Without break, code &quot;falls through&quot; to the next case:
          </Typography>
          <CodeBlock language="javascript">{`let fruit = "apple";
switch (fruit) {
 case "apple":
 case "apricot":
 console.log("Starts with A");
 break;
 case "banana":
 console.log("Starts with B");
 break;
 default:
 console.log("Other fruit");
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Ternary Operator</Typography>
          <Typography variant="h3">Short If/Else</Typography>
          <Typography>
            The ternary operator is a shorthand for simple if/else:
          </Typography>
          <CodeBlock language="javascript">{`// condition ? valueIfTrue : valueIfFalse
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"
// Same as:
let status2;
if (age >= 18) {
 status2 = "adult";
} else {
 status2 = "minor";
}`}</CodeBlock>
          <Typography variant="h3">Practical Examples</Typography>
          <CodeBlock language="javascript">{`// Greeting based on time
let hour = 14;
let greeting = hour < 12 ? "Good morning" : "Good afternoon";
// Show/hide text
let isVisible = true;
let display = isVisible ? "block" : "none";
// Singular/plural
let count = 5;
let message = \`You have \${count} item\${count === 1 ? "" : "s"}\`;
console.log(message); // "You have 5 items"`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Practical Examples</Typography>
          <Typography variant="h3">Login Check</Typography>
          <CodeBlock language="javascript">{`let username = prompt("Enter username:");
let password = prompt("Enter password:");
const correctUser = "admin";
const correctPass = "password123";
if (username === correctUser && password === correctPass) {
 console.log("Login successful!");
} else if (username !== correctUser) {
 console.log("Username not found.");
} else {
 console.log("Incorrect password.");
}`}</CodeBlock>
          <Typography variant="h3">Age Verification</Typography>
          <CodeBlock language="javascript">{`let age = parseInt(prompt("Enter your age:"));
if (isNaN(age)) {
 console.log("Please enter a valid number.");
} else if (age < 0) {
 console.log("Age cannot be negative.");
} else if (age < 13) {
 console.log("You are a child.");
} else if (age < 20) {
 console.log("You are a teenager.");
} else if (age < 60) {
 console.log("You are an adult.");
} else {
 console.log("You are a senior.");
}`}</CodeBlock>
          <Typography variant="h3">Grade Calculator</Typography>
          <CodeBlock language="javascript">{`function getGrade(score) {
 if (score < 0 || score > 100) {
 return "Invalid score";
 }
 if (score >= 90) return "A";
 if (score >= 80) return "B";
 if (score >= 70) return "C";
 if (score >= 60) return "D";
 return "F";
}
console.log(getGrade(85)); // "B"`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Comparison Practice</Typography>
          <Typography>
            What do these evaluate to?
          </Typography>
          <CodeBlock language="javascript">{`console.log(10 > 5);
console.log(5 === "5");
console.log(5 == "5");
console.log("hello" !== "Hello");
console.log(10 >= 10);`}</CodeBlock>
          <Typography variant="h3">Exercise 2: Odd or Even</Typography>
          <Typography>
            Write code that:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Asks for a number</li>
            <li>Tells if it&apos;s odd or even</li>
          </ul>
          <Typography variant="h3">Exercise 3: Grade Calculator</Typography>
          <Typography>
            Write a program that:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Asks for a score (0-100)</li>
            <li>Outputs the grade (A, B, C, D, F)</li>
          </ul>
          <Typography variant="h3">Exercise 4: Login System</Typography>
          <Typography>
            Create a simple login that:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Asks for username and password</li>
            <li>Checks against stored values</li>
            <li>Shows success or appropriate error</li>
          </ul>
          <Typography variant="h3">Exercise 5: Day Name</Typography>
          <Typography>
            Use a switch statement to:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Take a number 1-7</li>
            <li>Output the day name (Monday-Sunday)</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Comparison Operators
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Operator</TableHead>
                <TableHead>Meaning</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>===</TableCell>
                <TableCell>Strict equal</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>!==</TableCell>
                <TableCell>Strict not equal</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&gt; &lt;</TableCell>
                <TableCell>Greater/less than</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&gt;= &lt;=</TableCell>
                <TableCell>Greater/less than or equal</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Logical Operators
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Operator</TableHead>
                <TableHead>Meaning</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>&amp;&amp;</TableCell>
                <TableCell>AND</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>||</TableCell>
                <TableCell>OR</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>!</TableCell>
                <TableCell>NOT</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Conditionals
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Use When</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>if/else</TableCell>
                <TableCell>Simple conditions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>else if</TableCell>
                <TableCell>Multiple conditions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>switch</TableCell>
                <TableCell>Comparing one value to many</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>? :</TableCell>
                <TableCell>Simple value assignment</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Before moving to Module 05:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Master comparison operators</li>
            <li>Write complex conditions</li>
            <li>Completed all exercises</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 05 - Functions
          </Typography>
          <Typography>
            You will learn to organize your code into reusable pieces!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Decisions drive your code!
          </Typography>
          <Typography>
            If/else statements let your code think.
          </Typography>
        </div>
      </section>
    </div>
  );
}
