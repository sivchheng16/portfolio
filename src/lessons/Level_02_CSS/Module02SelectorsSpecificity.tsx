
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module02SelectorsSpecificity() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Selectors &amp; Specificity</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 02: CSS Styling</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Objectives</Typography>
          <Typography>
            By the end of this module, you will be able to:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Use different types of CSS selectors</li>
            <li>Target elements precisely with classes and IDs</li>
            <li>Combine selectors for complex targeting</li>
            <li>Understand how specificity determines which styles win</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Basic Selectors</Typography>
          <Typography variant="h3">Element (Type) Selectors</Typography>
          <Typography>
            Target elements by their tag name:
          </Typography>
          <CodeBlock language="css">{`/* All paragraphs */
p {
 color: gray;
}
/* All headings level 1 */
h1 {
 font-size: 32px;
}
/* All links */
a {
 color: blue;
}
/* All list items */
li {
 margin-bottom: 10px;
}`}</CodeBlock>
          <Typography variant="h3">Universal Selector</Typography>
          <Typography>
            The * targets everything:
          </Typography>
          <CodeBlock language="css">{`/* Affects every element */
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}`}</CodeBlock>
          <Typography variant="h3">Grouping Selectors</Typography>
          <Typography>
            Style multiple elements the same way with commas:
          </Typography>
          <CodeBlock language="css">{`/* All these get the same style */
h1, h2, h3 {
 font-family: Georgia, serif;
 color: #333;
}
/* Headers and paragraphs */
h1, h2, p {
 margin-bottom: 15px;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Class Selectors</Typography>
          <Typography variant="h3">What Are Classes?</Typography>
          <Typography>
            Classes let you style specific elements. Add a class attribute in HTML, then target it with .classname in CSS.
          </Typography>
          <Typography>
            HTML:
          </Typography>
          <CodeBlock language="html">{`<p class="intro">This is an introduction paragraph.</p>
<p>This is a regular paragraph.</p>
<p class="intro">This also has the intro class.</p>`}</CodeBlock>
          <Typography>
            CSS:
          </Typography>
          <CodeBlock language="css">{`.intro {
 font-size: 1.2em;
 font-weight: bold;
 color: #2c3e50;
}`}</CodeBlock>
          <Typography variant="h3">Class Rules</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Start with a letter</li>
            <li>Can contain letters, numbers, hyphens, underscores</li>
            <li>Case-sensitive (.Intro ≠ .intro)</li>
            <li>Start with . in CSS</li>
          </ul>
          <Typography variant="h3">Multiple Classes</Typography>
          <Typography>
            An element can have multiple classes:
          </Typography>
          <CodeBlock language="html">{`<div class="card featured">Featured Product</div>
<div class="card">Regular Product</div>
<div class="card sale">Sale Product</div>`}</CodeBlock>
          <CodeBlock language="css">{`.card {
 border: 1px solid #ddd;
 padding: 20px;
 margin: 10px;
}
.featured {
 border-color: gold;
 background-color: #fffdf0;
}
.sale {
 border-color: red;
 background-color: #fff0f0;
}`}</CodeBlock>
          <Typography variant="h3">Naming Classes</Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────────────────────┐
│ CLASS NAMING BEST PRACTICES │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ BAD (Based on appearance) GOOD (Based on purpose) │
│ ════════════════════════════ ══════════════════════════ │
│ │
│ .red-text .error-message │
│ .big-font .page-title │
│ .left-box .sidebar │
│ .blue-button .primary-button │
│ .margin-20 .card │
│ │
│ WHY? If you change the color from red to orange, ".red-text" │
│ becomes confusing. ".error-message" stays meaningful. │
│ │
└─────────────────────────────────────────────────────────────────────────────┘`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: ID Selectors</Typography>
          <Typography variant="h3">What Are IDs?</Typography>
          <Typography>
            IDs are unique identifiers. Each ID should only appear ONCE per page.
          </Typography>
          <Typography>
            HTML:
          </Typography>
          <CodeBlock language="html">{`<header id="main-header">
 <h1>Site Title</h1>
</header>
<nav id="main-nav">
 <a href="#">Home</a>
</nav>`}</CodeBlock>
          <Typography>
            CSS:
          </Typography>
          <CodeBlock language="css">{`#main-header {
 background-color: #333;
 color: white;
 padding: 20px;
}
#main-nav {
 background-color: #444;
}`}</CodeBlock>
          <Typography variant="h3">Class vs ID</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Syntax (HTML)</TableCell>
                <TableCell>class=&quot;name&quot;</TableCell>
                <TableCell>id=&quot;name&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Syntax (CSS)</TableCell>
                <TableCell>.name</TableCell>
                <TableCell>#name</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Usage</TableCell>
                <TableCell>Multiple elements</TableCell>
                <TableCell>One element only</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Reusability</TableCell>
                <TableCell>Highly reusable</TableCell>
                <TableCell>Unique per page</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Specificity</TableCell>
                <TableCell>Lower</TableCell>
                <TableCell>Higher</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Best for</TableCell>
                <TableCell>Styling</TableCell>
                <TableCell>Unique elements, anchors</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">When to Use Each</Typography>
          <CodeBlock language="css">{`/* Use CLASSES for: */
.button { } /* Multiple buttons */
.card { } /* Multiple cards */
.nav-link { } /* Multiple nav links */
.error { } /* Any error message */
/* Use IDs for: */
#main-header { } /* Only one header */
#footer { } /* Only one footer */
#contact-form { } /* Specific form */
#hero-section { } /* Unique section */`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Combining Selectors</Typography>
          <Typography variant="h3">Descendant Selector (Space)</Typography>
          <Typography>
            Selects elements inside other elements:
          </Typography>
          <CodeBlock language="css">{`/* Paragraphs inside articles */
article p {
 line-height: 1.8;
}
/* Links inside navigation */
nav a {
 text-decoration: none;
 color: white;
}
/* List items inside unordered lists inside nav */
nav ul li {
 display: inline-block;
}`}</CodeBlock>
          <Typography variant="h3">Child Selector (&gt;)</Typography>
          <Typography>
            Selects direct children only:
          </Typography>
          <CodeBlock language="css">{`/* Only direct child paragraphs of article */
article > p {
 font-size: 18px;
}`}</CodeBlock>
          <Typography>
            Difference:
          </Typography>
          <CodeBlock language="html">{`<article>
 <p>Direct child - selected</p>
 <div>
 <p>Nested paragraph - NOT selected with ></p>
 </div>
</article>`}</CodeBlock>
          <Typography variant="h3">Element + Class</Typography>
          <Typography>
            Target elements with specific class:
          </Typography>
          <CodeBlock language="css">{`/* Only paragraphs with intro class */
p.intro {
 font-weight: bold;
}
/* Only links with nav-link class */
a.nav-link {
 padding: 10px;
}
/* Only divs with card class */
div.card {
 border-radius: 8px;
}`}</CodeBlock>
          <Typography variant="h3">Multiple Classes</Typography>
          <Typography>
            Target elements with multiple classes:
          </Typography>
          <CodeBlock language="css">{`/* Element with BOTH classes */
.card.featured {
 border: 2px solid gold;
}
/* Different from: */
.card .featured {
 /* This selects .featured INSIDE .card */
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Attribute Selectors</Typography>
          <Typography variant="h3">Selecting by Attribute</Typography>
          <CodeBlock language="css">{`/* Links with target attribute */
a[target] {
 font-weight: bold;
}
/* Inputs that are required */
input[required] {
 border-color: red;
}
/* Links that open in new tab */
a[target="_blank"] {
 /* Show external link icon */
}
/* Inputs of type email */
input[type="email"] {
 background-color: #f9f9f9;
}`}</CodeBlock>
          <Typography variant="h3">Common Attribute Selectors</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Selector</TableHead>
                <TableHead>Meaning</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>[attr]</TableCell>
                <TableCell>Has attribute</TableCell>
                <TableCell>[required]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>[attr=&quot;value&quot;]</TableCell>
                <TableCell>Exact value</TableCell>
                <TableCell>[type=&quot;email&quot;]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>[attr^=&quot;value&quot;]</TableCell>
                <TableCell>Starts with</TableCell>
                <TableCell>[href^=&quot;https&quot;]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>[attr$=&quot;value&quot;]</TableCell>
                <TableCell>Ends with</TableCell>
                <TableCell>[href$=&quot;.pdf&quot;]</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>[attr*=&quot;value&quot;]</TableCell>
                <TableCell>Contains</TableCell>
                <TableCell>[class*=&quot;btn&quot;]</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Practical Examples</Typography>
          <CodeBlock language="css">{`/* External links (start with http) */
a[href^="http"] {
 color: blue;
}
/* PDF downloads (end with .pdf) */
a[href\$=".pdf"]::after {
 content: " (PDF)";
}
/* All button classes */
[class*="button"] {
 cursor: pointer;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Pseudo-classes</Typography>
          <Typography variant="h3">What Are Pseudo-classes?</Typography>
          <Typography>
            Pseudo-classes select elements based on their state or position.
          </Typography>
          <Typography variant="h3">Interactive States</Typography>
          <CodeBlock language="css">{`/* Mouse hover */
a:hover {
 color: orange;
 text-decoration: underline;
}
/* Being clicked */
button:active {
 transform: scale(0.98);
}
/* Keyboard focus */
input:focus {
 border-color: blue;
 outline: none;
}
/* Visited links */
a:visited {
 color: purple;
}`}</CodeBlock>
          <Typography variant="h3">Position-based</Typography>
          <CodeBlock language="css">{`/* First child */
li:first-child {
 font-weight: bold;
}
/* Last child */
li:last-child {
 border-bottom: none;
}
/* Nth child (every 2nd item) */
tr:nth-child(2n) {
 background-color: #f2f2f2;
}
/* Nth child (every 3rd item starting from 1st) */
li:nth-child(3n+1) {
 color: red;
}`}</CodeBlock>
          <Typography variant="h3">Form States</Typography>
          <CodeBlock language="css">{`/* Disabled inputs */
input:disabled {
 background-color: #ccc;
 cursor: not-allowed;
}
/* Checked checkboxes */
input:checked {
 /* Styles for checked state */
}
/* Valid input */
input:valid {
 border-color: green;
}
/* Invalid input */
input:invalid {
 border-color: red;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Specificity</Typography>
          <Typography variant="h3">What is Specificity?</Typography>
          <Typography>
            When multiple styles target the same element, specificity determines which wins.
          </Typography>
          <Typography variant="h3">Specificity Hierarchy</Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────────────────────┐
│ SPECIFICITY HIERARCHY │
│ (from lowest to highest) │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ 1. Element selectors p, h1, div, a (0,0,1) │
│ │
│ 2. Class selectors .intro, .button, .nav-link (0,1,0) │
│ Attribute selectors [type="email"] │
│ Pseudo-classes :hover, :first-child │
│ │
│ 3. ID selectors #header, #main-nav (1,0,0) │
│ │
│ 4. Inline styles style="color: red" (1,0,0,0) │
│ │
│ 5. !important color: red !important; (wins) │
│ │
└─────────────────────────────────────────────────────────────────────────────┘`}</CodeBlock>
          <Typography variant="h3">Calculating Specificity</Typography>
          <Typography>
            Count selectors in each category: (ID, Class, Element)
          </Typography>
          <CodeBlock language="css">{`p { } /* (0,0,1) = 1 */
.intro { } /* (0,1,0) = 10 */
p.intro { } /* (0,1,1) = 11 */
#header { } /* (1,0,0) = 100 */
#header p { } /* (1,0,1) = 101 */
#header .intro { } /* (1,1,0) = 110 */
#header p.intro { } /* (1,1,1) = 111 */`}</CodeBlock>
          <Typography variant="h3">Example: Which Wins?</Typography>
          <CodeBlock language="html">{`<p id="intro" class="highlight">Hello World</p>`}</CodeBlock>
          <CodeBlock language="css">{`p { color: black; } /* (0,0,1) */
.highlight { color: yellow; } /* (0,1,0) - wins over p */
p.highlight { color: orange; } /* (0,1,1) - wins over .highlight */
#intro { color: blue; } /* (1,0,0) - WINS! Highest specificity */`}</CodeBlock>
          <Typography>
            Result: blue wins!
          </Typography>
          <Typography variant="h3">Avoid !important</Typography>
          <CodeBlock language="css">{`/* DON'T do this */
p {
 color: red !important; /* Overrides everything - bad practice */
}
/* Instead, use more specific selectors */
article p.intro {
 color: red;
}`}</CodeBlock>
          <Typography>
            !important makes debugging difficult. Use specificity properly instead.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Selector Types</Typography>
          <Typography>
            What type of selector is each?
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>header { }</li>
            <li>.navigation { }</li>
            <li>#main-content { }</li>
            <li>nav a { }</li>
            <li>a:hover { }</li>
          </ul>
          <Typography variant="h3">Exercise 2: Create Classes</Typography>
          <Typography>
            Add classes to this HTML and style them:
          </Typography>
          <CodeBlock language="html">{`<div>Regular card</div>
<div>Featured card with special border</div>
<div>Sale card with red accent</div>`}</CodeBlock>
          <Typography variant="h3">Exercise 3: Specificity Battle</Typography>
          <Typography>
            Which color wins for each element?
          </Typography>
          <CodeBlock language="css">{`p { color: black; }
.text { color: blue; }
#special { color: red; }
p.text { color: green; }`}</CodeBlock>
          <CodeBlock language="html">{`<p class="text">Paragraph 1</p>
<p id="special" class="text">Paragraph 2</p>`}</CodeBlock>
          <Typography variant="h3">Exercise 4: Navigation Styling</Typography>
          <Typography>
            Style a navigation using:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Element selectors for nav and ul</li>
            <li>Class selectors for .nav-link</li>
            <li>Pseudo-class for hover effect</li>
          </ul>
          <Typography variant="h3">Exercise 5: Form Styling</Typography>
          <Typography>
            Style a form using:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Attribute selectors for input types</li>
            <li>Pseudo-classes for focus and invalid states</li>
            <li>Classes for the submit button</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Selector Types
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Selector</TableHead>
                <TableHead>Syntax</TableHead>
                <TableHead>Specificity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Element</TableCell>
                <TableCell>p</TableCell>
                <TableCell>(0,0,1)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Class</TableCell>
                <TableCell>.name</TableCell>
                <TableCell>(0,1,0)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>#name</TableCell>
                <TableCell>(1,0,0)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Descendant</TableCell>
                <TableCell>div p</TableCell>
                <TableCell>Sum of parts</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Child</TableCell>
                <TableCell>div &gt; p</TableCell>
                <TableCell>Sum of parts</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Attribute</TableCell>
                <TableCell>[type]</TableCell>
                <TableCell>(0,1,0)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pseudo-class</TableCell>
                <TableCell>:hover</TableCell>
                <TableCell>(0,1,0)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Key Rules
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>IDs beat classes beat elements</li>
            <li>More specific selectors win</li>
            <li>Later rules win if specificity is equal</li>
            <li>Avoid !important</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Before moving to Module 04:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Practice all selector types</li>
            <li>Style navigation with classes</li>
            <li>Add hover effects</li>
            <li>Understand specificity</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 04 - Colors, Backgrounds &amp; Typography
          </Typography>
          <Typography>
            You will learn to add beautiful colors and fonts!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Precision targeting unlocked!
          </Typography>
          <Typography>
            Now you can style exactly what you want.
          </Typography>
        </div>
      </section>
    </div>
  );
}
