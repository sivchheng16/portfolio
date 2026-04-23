
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module01Introduction() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Introduction to JavaScript</Typography>
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
            <li>Understand what JavaScript is and why it&apos;s important</li>
            <li>Use the browser console</li>
            <li>Add JavaScript to your web pages</li>
            <li>Write your first JavaScript code</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What is JavaScript?</Typography>
          <Typography variant="h3">JavaScript Defined</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>THE WEB DEVELOPMENT TRIO (REVISITED)</li>
            <li>HTML CSS JavaScript</li>
            <li>STRUCTURE STYLE BEHAVIOR</li>
            <li>&quot;What&apos;s here&quot; &quot;How it looks&quot; &quot;What it does&quot;</li>
            <li>The skeleton The appearance The brains</li>
            <li>HTML = Nouns CSS = Adjectives JavaScript = Verbs</li>
            <li>(Things) (Descriptions) (Actions)</li>
          </ul>
          <Typography variant="h3">What JavaScript Can Do</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Respond to events</TableCell>
                <TableCell>When user clicks a button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Change HTML content</TableCell>
                <TableCell>Update text without reloading</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Change CSS styles</TableCell>
                <TableCell>Toggle dark mode</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Validate forms</TableCell>
                <TableCell>Check if email is valid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Create animations</TableCell>
                <TableCell>Smooth scrolling</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Communicate with servers</TableCell>
                <TableCell>Load new data</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Store data locally</TableCell>
                <TableCell>Remember user preferences</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">JavaScript is Everywhere</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Websites — Every interactive website uses JavaScript</li>
            <li>Web apps — Gmail, Google Docs, Facebook</li>
            <li>Mobile apps — React Native apps</li>
            <li>Servers — Node.js</li>
            <li>Desktop apps — Electron apps (VS Code!)</li>
            <li>Games — Browser games</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: The Browser Console</Typography>
          <Typography variant="h3">Opening the Console</Typography>
          <Typography>
            The console is where you can test JavaScript immediately.
          </Typography>
          <Typography>
            How to open:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Chrome/Edge: Right-click → Inspect → Console tab</li>
            <li>Or press F12 → Console tab</li>
            <li>Or press Ctrl + Shift + J (Windows/Linux)</li>
            <li>Or press Cmd + Option + J (Mac)</li>
          </ul>
          <Typography variant="h3">Your First JavaScript</Typography>
          <Typography>
            Type this in the console and press Enter:
          </Typography>
          <CodeBlock language="javascript">{`console.log("Hello, Cambodia!");`}</CodeBlock>
          <Typography>
            You should see: Hello, Cambodia!
          </Typography>
          <Typography variant="h3">Console Methods</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Command</TableHead>
                <TableHead>What it does</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>console.log()</TableCell>
                <TableCell>Print a message</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>console.warn()</TableCell>
                <TableCell>Print a warning (yellow)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>console.error()</TableCell>
                <TableCell>Print an error (red)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>console.clear()</TableCell>
                <TableCell>Clear the console</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Try These</Typography>
          <CodeBlock language="javascript">{`// Print messages
console.log("I am learning JavaScript!");
// Do math
console.log(10 + 5);
// Print multiple things
console.log("My age:", 25);`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Adding JavaScript to HTML</Typography>
          <Typography variant="h3">Three Methods</Typography>
          <Typography>
            Just like CSS, there are three ways to add JavaScript:
          </Typography>
          <Typography variant="h3">Method 1: Inline (Not Recommended)</Typography>
          <CodeBlock language="html">{`<button onclick="alert('Hello!')">Click Me</button>`}</CodeBlock>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pros</TableHead>
                <TableHead>Cons</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Quick to write</TableCell>
                <TableCell>Hard to maintain</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Mixes HTML and JS</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Not reusable</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Method 2: Internal Script</Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html>
<head>
 <title>My Page</title>
</head>
<body>
 <h1>Hello World</h1>
 <script>
 console.log("Hello from internal script!");
 alert("Welcome to my page!");
 </script>
</body>
</html>`}</CodeBlock>
          <Typography>
            Note: Place &lt;script&gt; at the end of &lt;body&gt; so HTML loads first.
          </Typography>
          <Typography variant="h3">Method 3: External File (Recommended!)</Typography>
          <Typography>
            script.js:
          </Typography>
          <CodeBlock language="javascript">{`console.log("Hello from external file!");
alert("Welcome to my page!");`}</CodeBlock>
          <Typography>
            index.html:
          </Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html>
<head>
 <title>My Page</title>
</head>
<body>
 <h1>Hello World</h1>
 <script src="script.js"></script>
</body>
</html>`}</CodeBlock>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pros</TableHead>
                <TableHead>Cons</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Clean separation</TableCell>
                <TableCell>Extra file to manage</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Reusable across pages</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cacheable by browser</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Easier to maintain</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: JavaScript Syntax Basics</Typography>
          <Typography variant="h3">Statements</Typography>
          <Typography>
            Statements are instructions. Each ends with a semicolon (;):
          </Typography>
          <CodeBlock language="javascript">{`console.log("Statement 1");
console.log("Statement 2");
console.log("Statement 3");`}</CodeBlock>
          <Typography variant="h3">Comments</Typography>
          <Typography>
            Comments explain your code (ignored by browser):
          </Typography>
          <CodeBlock language="javascript">{`// This is a single-line comment
/*
This is a 
multi-line comment
*/
// Good comments explain WHY, not WHAT
console.log("Hello"); // Prints greeting - obvious, don't need this comment
// Check if user is admin before showing settings - good comment`}</CodeBlock>
          <Typography variant="h3">Case Sensitivity</Typography>
          <Typography>
            JavaScript is case-sensitive:
          </Typography>
          <CodeBlock language="javascript">{`// These are ALL DIFFERENT:
let name = "Sokha";
let Name = "Dara";
let NAME = "Bopha";
// Common error:
console.log("Works");
Console.log("Error!"); // Console with capital C = error`}</CodeBlock>
          <Typography variant="h3">Common Errors</Typography>
          <CodeBlock language="javascript">{`// Unclosed string
console.log("Hello); // Missing closing quote
// Missing semicolon (usually okay, but can cause issues)
console.log("Hello")
// Typos in function names
consol.log("Hello"); // consol instead of console
// Using undefined variables
console.log(myName); // myName hasn't been defined`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Basic Interactions</Typography>
          <Typography variant="h3">Alert</Typography>
          <Typography>
            Shows a popup message:
          </Typography>
          <CodeBlock language="javascript">{`alert("Hello, user!");`}</CodeBlock>
          <Typography variant="h3">Confirm</Typography>
          <Typography>
            Shows popup with OK/Cancel, returns true/false:
          </Typography>
          <CodeBlock language="javascript">{`let result = confirm("Are you sure?");
console.log(result); // true if OK, false if Cancel`}</CodeBlock>
          <Typography variant="h3">Prompt</Typography>
          <Typography>
            Shows popup asking for input:
          </Typography>
          <CodeBlock language="javascript">{`let name = prompt("What is your name?");
console.log("Hello, " + name + "!");`}</CodeBlock>
          <Typography variant="h3">Example: Interactive Welcome</Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html>
<head>
 <title>Welcome</title>
</head>
<body>
 <h1 id="greeting">Welcome!</h1>
 <script>
 let name = prompt("What is your name?");
 alert("Hello, " + name + "! Welcome to KOOMPI.");
 console.log(name + " visited the page.");
 </script>
</body>
</html>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Your First Project Setup</Typography>
          <Typography variant="h3">Create Project Structure</Typography>
          <CodeBlock language="bash">{`mkdir javascript-practice
cd javascript-practice
touch index.html script.js`}</CodeBlock>
          <Typography variant="h3">index.html</Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>JavaScript Practice</title>
 <style>
 body {
 font-family: Arial, sans-serif;
 padding: 20px;
 max-width: 800px;
 margin: 0 auto;
 }
 h1 {
 color: #333;
 }
 #output {
 background-color: #f0f0f0;
 padding: 20px;
 border-radius: 8px;
 min-height: 100px;
 }
 </style>
</head>
<body>
 <h1>JavaScript Practice</h1>
 <div id="output">
 <p>Output will appear here...</p>
 </div>
 <script src="script.js"></script>
</body>
</html>`}</CodeBlock>
          <Typography variant="h3">script.js</Typography>
          <CodeBlock language="javascript">{`// JavaScript Practice
console.log("JavaScript file loaded!");
// Your code here`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Debugging Basics</Typography>
          <Typography variant="h3">Reading Errors</Typography>
          <Typography>
            When you make an error, check the console:
          </Typography>
          <CodeBlock language="text">{`Uncaught SyntaxError: Unexpected token ')' at script.js:5`}</CodeBlock>
          <Typography>
            This tells you:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Error type: SyntaxError</li>
            <li>Problem: Unexpected token &apos;)&apos;</li>
            <li>Location: script.js, line 5</li>
          </ul>
          <Typography variant="h3">Common Beginner Errors</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Error</TableHead>
                <TableHead>Cause</TableHead>
                <TableHead>Fix</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Unexpected token</TableCell>
                <TableCell>Typo or missing character</TableCell>
                <TableCell>Check punctuation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>is not defined</TableCell>
                <TableCell>Using undeclared variable</TableCell>
                <TableCell>Define the variable first</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>is not a function</TableCell>
                <TableCell>Calling non-function</TableCell>
                <TableCell>Check function name</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>null or undefined</TableCell>
                <TableCell>Missing element or value</TableCell>
                <TableCell>Check if element exists</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Debugging Tips</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Read the error — It tells you what&apos;s wrong</li>
            <li>Check the line number — Look at that specific line</li>
            <li>Use console.log — Print values to check them</li>
            <li>Comment out code — Isolate the problem</li>
            <li>Search the error — Google the exact message</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Console Practice</Typography>
          <Typography>
            Open the console and try:
          </Typography>
          <CodeBlock language="javascript">{`console.log("Hello!");
console.log(2 + 2);
console.log("My name is " + "Sokha");`}</CodeBlock>
          <Typography variant="h3">Exercise 2: Alert Welcome</Typography>
          <Typography>
            Create a page that:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Asks for user&apos;s name with prompt()</li>
            <li>Shows an alert welcoming them</li>
            <li>Logs the name to console</li>
          </ul>
          <Typography variant="h3">Exercise 3: Calculator in Console</Typography>
          <Typography>
            Use the console to calculate:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>25 + 17</li>
            <li>100 - 33</li>
            <li>12 * 5</li>
            <li>144 / 12</li>
          </ul>
          <Typography variant="h3">Exercise 4: External Script</Typography>
          <Typography>
            Create a project with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>index.html</li>
            <li>script.js</li>
            <li>Make script.js log &quot;JavaScript is working!&quot;</li>
          </ul>
          <Typography variant="h3">Exercise 5: Comments</Typography>
          <Typography>
            Write a code file with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>A single-line comment explaining what the file does</li>
            <li>A multi-line comment with your name and date</li>
            <li>Code that prints &quot;Hello World&quot;</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Key Terminology
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Term</TableHead>
                <TableHead>Meaning</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>JavaScript</TableCell>
                <TableCell>Programming language for web interactivity</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Console</TableCell>
                <TableCell>Browser tool to run and test JavaScript</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Statement</TableCell>
                <TableCell>Single instruction</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Script</TableCell>
                <TableCell>JavaScript code file or block</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Syntax</TableCell>
                <TableCell>Rules for how code must be written</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Three Ways to Add JavaScript
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Method</TableHead>
                <TableHead>Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Inline</TableCell>
                <TableCell>Never use</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Internal &lt;script&gt;</TableCell>
                <TableCell>Small tests</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>External file</TableCell>
                <TableCell>Real projects</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Before moving to Module 03:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Practiced with browser console</li>
            <li>Created external JavaScript file</li>
            <li>Made interactive page with prompts</li>
            <li>Understand error messages</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 03 - Variables &amp; Data Types
          </Typography>
          <Typography>
            You will learn to store and work with data!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            You&apos;re now a JavaScript developer!
          </Typography>
          <Typography>
            The browser console is your new playground.
          </Typography>
        </div>
      </section>
    </div>
  );
}
