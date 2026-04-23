
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module06DOMManipulation() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">DOM Manipulation</Typography>
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
            <li>Select HTML elements with JavaScript</li>
            <li>Change content, styles, and attributes</li>
            <li>Handle user events (clicks, input)</li>
            <li>Create dynamic web page interactions</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What is the DOM?</Typography>
          <Typography variant="h3">Document Object Model</Typography>
          <Typography>
            The DOM is how JavaScript sees HTML:
          </Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────────────────────┐
│ THE DOM TREE │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ document │
│ │ │
│ <html> │
│ ╱ ╲ │
│ <head> <body> │
│ │ │ │
│ <title> ┌─┴─────┬─────────┐ │
│ │ │ │ │
│ <header> <main> <footer> │
│ │ │ │ │
│ <h1> <div> <p> │
│ │ │
│ <button> │
│ │
│ Every element becomes a "node" JavaScript can work with. │
│ │
└─────────────────────────────────────────────────────────────────────────────┘`}</CodeBlock>
          <Typography variant="h3">Accessing the DOM</Typography>
          <Typography>
            The document object is your entry point:
          </Typography>
          <CodeBlock language="javascript">{`console.log(document); // The whole page
console.log(document.title); // Page title
console.log(document.body); // Body element
console.log(document.URL); // Page URL`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Selecting Elements</Typography>
          <Typography variant="h3">getElementById</Typography>
          <Typography>
            Select one element by its ID:
          </Typography>
          <CodeBlock language="html">{`<h1 id="title">Welcome</h1>`}</CodeBlock>
          <CodeBlock language="javascript">{`const title = document.getElementById("title");
console.log(title); // <h1 id="title">Welcome</h1>`}</CodeBlock>
          <Typography variant="h3">querySelector</Typography>
          <Typography>
            Select the first matching element (like CSS):
          </Typography>
          <CodeBlock language="javascript">{`// By ID
const title = document.querySelector("#title");
// By class
const card = document.querySelector(".card");
// By tag
const firstParagraph = document.querySelector("p");
// Complex selector
const navLink = document.querySelector("nav a.active");`}</CodeBlock>
          <Typography variant="h3">querySelectorAll</Typography>
          <Typography>
            Select ALL matching elements:
          </Typography>
          <CodeBlock language="javascript">{`// Get all paragraphs
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs); // NodeList [p, p, p, ...]
// Loop through them
paragraphs.forEach(p => {
 console.log(p.textContent);
});`}</CodeBlock>
          <Typography variant="h3">Selection Methods Summary</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Method</TableHead>
                <TableHead>Returns</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>getElementById()</TableCell>
                <TableCell>Single element</TableCell>
                <TableCell>(&quot;myId&quot;)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>querySelector()</TableCell>
                <TableCell>First match</TableCell>
                <TableCell>(&quot;.class&quot;)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>querySelectorAll()</TableCell>
                <TableCell>All matches</TableCell>
                <TableCell>(&quot;p&quot;)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>getElementsByClassName()</TableCell>
                <TableCell>HTMLCollection</TableCell>
                <TableCell>(&quot;class&quot;)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>getElementsByTagName()</TableCell>
                <TableCell>HTMLCollection</TableCell>
                <TableCell>(&quot;div&quot;)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Tip: Use querySelector and querySelectorAll for flexibility.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Changing Content</Typography>
          <Typography variant="h3">textContent</Typography>
          <Typography>
            Change text inside an element:
          </Typography>
          <CodeBlock language="html">{`<p id="message">Hello</p>`}</CodeBlock>
          <CodeBlock language="javascript">{`const message = document.querySelector("#message");
message.textContent = "Welcome, Sokha!";
// Now: <p id="message">Welcome, Sokha!</p>`}</CodeBlock>
          <Typography variant="h3">innerHTML</Typography>
          <Typography>
            Change HTML inside an element:
          </Typography>
          <CodeBlock language="javascript">{`const container = document.querySelector("#container");
container.innerHTML = "<h2>New Heading</h2><p>New paragraph</p>";`}</CodeBlock>
          <Typography>
            Warning: Be careful with innerHTML and user input (security risk).
          </Typography>
          <Typography variant="h3">textContent vs innerHTML</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>For</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>textContent</TableCell>
                <TableCell>Plain text</TableCell>
                <TableCell>&quot;Hello World&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>innerHTML</TableCell>
                <TableCell>HTML markup</TableCell>
                <TableCell>&quot;&lt;b&gt;Hello&lt;/b&gt; World&quot;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <CodeBlock language="javascript">{`element.textContent = "<b>bold</b>"; // Shows: <b>bold</b>
element.innerHTML = "<b>bold</b>"; // Shows: **bold**`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Changing Styles</Typography>
          <Typography variant="h3">Inline Styles</Typography>
          <CodeBlock language="javascript">{`const box = document.querySelector("#box");
box.style.backgroundColor = "blue";
box.style.color = "white";
box.style.padding = "20px";
box.style.borderRadius = "8px";`}</CodeBlock>
          <Typography>
            Note: Use camelCase for CSS properties (background-color → backgroundColor).
          </Typography>
          <Typography variant="h3">Adding/Removing Classes</Typography>
          <Typography>
            Better approach — use CSS classes:
          </Typography>
          <CodeBlock language="css">{`/* styles.css */
.highlight {
 background-color: yellow;
 font-weight: bold;
}
.hidden {
 display: none;
}`}</CodeBlock>
          <CodeBlock language="javascript">{`const element = document.querySelector("#myElement");
// Add class
element.classList.add("highlight");
// Remove class
element.classList.remove("highlight");
// Toggle class (add if missing, remove if present)
element.classList.toggle("hidden");
// Check if has class
if (element.classList.contains("highlight")) {
 console.log("It's highlighted!");
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Event Handling</Typography>
          <Typography variant="h3">What Are Events?</Typography>
          <Typography>
            Events are user actions: clicks, typing, scrolling, etc.
          </Typography>
          <Typography variant="h3">addEventListener</Typography>
          <CodeBlock language="javascript">{`const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
 console.log("Button was clicked!");
});
// With arrow function
button.addEventListener("click", () => {
 console.log("Clicked!");
});`}</CodeBlock>
          <Typography variant="h3">Common Events</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Triggers When</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>click</TableCell>
                <TableCell>Element is clicked</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>dblclick</TableCell>
                <TableCell>Double-clicked</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>mouseover</TableCell>
                <TableCell>Mouse enters element</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>mouseout</TableCell>
                <TableCell>Mouse leaves element</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>keydown</TableCell>
                <TableCell>Key is pressed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>keyup</TableCell>
                <TableCell>Key is released</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>input</TableCell>
                <TableCell>Input value changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>change</TableCell>
                <TableCell>Input value changes (on blur)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>submit</TableCell>
                <TableCell>Form is submitted</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>load</TableCell>
                <TableCell>Page/image loads</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Event Object</Typography>
          <Typography>
            Every event handler receives an event object:
          </Typography>
          <CodeBlock language="javascript">{`button.addEventListener("click", function(event) {
 console.log(event.type); // "click"
 console.log(event.target); // The clicked element
 console.log(event.clientX); // Mouse X position
});
// Often shortened to 'e'
button.addEventListener("click", (e) => {
 e.target.style.backgroundColor = "red";
});`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Interactive Examples</Typography>
          <Typography variant="h3">Toggle Dark Mode</Typography>
          <CodeBlock language="html">{`<button id="themeToggle">Toggle Dark Mode</button>`}</CodeBlock>
          <CodeBlock language="javascript">{`const toggle = document.querySelector("#themeToggle");
toggle.addEventListener("click", () => {
 document.body.classList.toggle("dark-mode");
});`}</CodeBlock>
          <CodeBlock language="css">{`.dark-mode {
 background-color: #1a1a1a;
 color: white;
}`}</CodeBlock>
          <Typography variant="h3">Counter</Typography>
          <CodeBlock language="html">{`<p>Count: <span id="count">0</span></p>
<button id="increment">+</button>
<button id="decrement">-</button>`}</CodeBlock>
          <CodeBlock language="javascript">{`let count = 0;
const countDisplay = document.querySelector("#count");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
incrementBtn.addEventListener("click", () => {
 count++;
 countDisplay.textContent = count;
});
decrementBtn.addEventListener("click", () => {
 count--;
 countDisplay.textContent = count;
});`}</CodeBlock>
          <Typography variant="h3">Form Input</Typography>
          <CodeBlock language="html">{`<input type="text" id="nameInput" placeholder="Enter your name">
<p>Hello, <span id="greeting">Guest</span>!</p>`}</CodeBlock>
          <CodeBlock language="javascript">{`const input = document.querySelector("#nameInput");
const greeting = document.querySelector("#greeting");
input.addEventListener("input", (e) => {
 greeting.textContent = e.target.value || "Guest";
});`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Creating &amp; Removing Elements</Typography>
          <Typography variant="h3">Create New Elements</Typography>
          <CodeBlock language="javascript">{`// Create element
const newDiv = document.createElement("div");
newDiv.textContent = "I am new!";
newDiv.classList.add("card");
// Add to page
document.body.appendChild(newDiv);
// Or add to specific parent
const container = document.querySelector("#container");
container.appendChild(newDiv);`}</CodeBlock>
          <Typography variant="h3">Insert in Specific Position</Typography>
          <CodeBlock language="javascript">{`const list = document.querySelector("#myList");
const newItem = document.createElement("li");
newItem.textContent = "New Item";
// At the end
list.appendChild(newItem);
// At the beginning
list.prepend(newItem);
// Before another element
const secondItem = list.children[1];
list.insertBefore(newItem, secondItem);`}</CodeBlock>
          <Typography variant="h3">Remove Elements</Typography>
          <CodeBlock language="javascript">{`const element = document.querySelector("#toRemove");
element.remove();
// Or using parent
const parent = document.querySelector("#container");
const child = document.querySelector("#child");
parent.removeChild(child);`}</CodeBlock>
          <Typography variant="h3">Dynamic Todo Example</Typography>
          <CodeBlock language="javascript">{`const addBtn = document.querySelector("#addTask");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
addBtn.addEventListener("click", () => {
 const taskText = taskInput.value.trim();
 if (taskText) {
 const li = document.createElement("li");
 li.textContent = taskText;
 // Add delete button
 const deleteBtn = document.createElement("button");
 deleteBtn.textContent = "Delete";
 deleteBtn.addEventListener("click", () => li.remove());
 li.appendChild(deleteBtn);
 taskList.appendChild(li);
 taskInput.value = "";
 }
});`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Select and Change</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create an HTML file with a heading and paragraph</li>
            <li>Use JavaScript to:</li>
          </ul>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Change the heading text</li>
            <li>Change the paragraph color</li>
            <li>Add a class to the paragraph</li>
          </ul>
          <Typography variant="h3">Exercise 2: Click Counter</Typography>
          <Typography>
            Create a button that:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Displays how many times it&apos;s been clicked</li>
            <li>Changes color after 10 clicks</li>
          </ul>
          <Typography variant="h3">Exercise 3: Name Greeter</Typography>
          <Typography>
            Create:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>An input field for name</li>
            <li>A paragraph that updates to &quot;Hello, [name]!&quot; as you type</li>
          </ul>
          <Typography variant="h3">Exercise 4: Toggle Visibility</Typography>
          <Typography>
            Create:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>A paragraph of text</li>
            <li>A button that shows/hides the text when clicked</li>
          </ul>
          <Typography variant="h3">Exercise 5: Dynamic List</Typography>
          <Typography>
            Create:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>An input field</li>
            <li>An &quot;Add&quot; button</li>
            <li>A list that shows added items</li>
            <li>Each item has a &quot;Delete&quot; button</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Selecting Elements
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Method</TableHead>
                <TableHead>Returns</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>querySelector()</TableCell>
                <TableCell>First match</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>querySelectorAll()</TableCell>
                <TableCell>All matches</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>getElementById()</TableCell>
                <TableCell>Element by ID</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Changing Elements
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property/Method</TableHead>
                <TableHead>Changes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>textContent</TableCell>
                <TableCell>Text only</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>innerHTML</TableCell>
                <TableCell>HTML content</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>style.property</TableCell>
                <TableCell>Inline CSS</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>classList.add()</TableCell>
                <TableCell>Add CSS class</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>classList.remove()</TableCell>
                <TableCell>Remove class</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>classList.toggle()</TableCell>
                <TableCell>Toggle class</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Events
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>When</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>click</TableCell>
                <TableCell>Element clicked</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>input</TableCell>
                <TableCell>Input changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>submit</TableCell>
                <TableCell>Form submitted</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>keydown</TableCell>
                <TableCell>Key pressed</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Before moving to Module 08:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Select elements with JavaScript</li>
            <li>Change content and styles</li>
            <li>Handle click events</li>
            <li>Create dynamic elements</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 08 - Project: Interactive Quiz
          </Typography>
          <Typography>
            You will build your complete JavaScript project!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            JavaScript controls the page!
          </Typography>
          <Typography>
            Now your websites can respond to users.
          </Typography>
        </div>
      </section>
    </div>
  );
}
