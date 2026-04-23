
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module01IntroductionCSS() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Introduction to CSS</Typography>
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
            <li>Understand what CSS is and why it&apos;s essential</li>
            <li>Add CSS to your HTML pages using three methods</li>
            <li>Write basic CSS rules</li>
            <li>Understand CSS syntax and terminology</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What is CSS?</Typography>
          <Typography variant="h3">CSS Defined</Typography>
          <Typography>
            CSS stands for Cascading Style Sheets.
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Cascading: Styles can override each other in a specific order</li>
            <li>Style: Appearance and presentation</li>
            <li>Sheets: Separate files or sections containing styles</li>
          </ul>
          <Typography variant="h3">The Role of CSS</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>HTML</TableHead>
                <TableHead>CSS</TableHead>
                <TableHead>JavaScript</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><strong>Structure</strong></TableCell>
                <TableCell><strong>Style</strong></TableCell>
                <TableCell><strong>Behavior</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&quot;What&apos;s on the page?&quot;</TableCell>
                <TableCell>&quot;How does it look?&quot;</TableCell>
                <TableCell>&quot;What does it do?&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Headings</li>
                    <li>Paragraphs</li>
                    <li>Images</li>
                    <li>Links</li>
                  </ul>
                </TableCell>
                <TableCell>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Colors</li>
                    <li>Fonts</li>
                    <li>Spacing</li>
                    <li>Layout</li>
                  </ul>
                </TableCell>
                <TableCell>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Click events</li>
                    <li>Animations</li>
                    <li>Data loading</li>
                    <li>Form validation</li>
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Why Learn CSS?</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Without CSS</TableHead>
                <TableHead>With CSS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Boring, plain pages</TableCell>
                <TableCell>Beautiful, engaging designs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Same look everywhere</TableCell>
                <TableCell>Unique brand identity</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hard to read</TableCell>
                <TableCell>Easy to read with good typography</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Not professional</TableCell>
                <TableCell>Professional appearance</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desktop only</TableCell>
                <TableCell>Works on all devices</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: CSS Syntax</Typography>
          <Typography variant="h3">The Anatomy of a CSS Rule</Typography>
          <CodeBlock language="css">{`selector {
 property: value;
 property: value;
}`}</CodeBlock>
          <Typography>
            Example:
          </Typography>
          <CodeBlock language="css">{`h1 {
 color: blue;
 font-size: 24px;
}`}</CodeBlock>
          <Typography variant="h3">Breaking It Down</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li><strong>Selector (h1):</strong> What element(s) to style</li>
            <li><strong>Declaration (color: blue;):</strong> A property-value pair inside the braces</li>
            <li><strong>Property (color):</strong> What aspect of the element to change</li>
            <li><strong>Value (blue):</strong> What setting to apply to that property</li>
          </ul>
          <Typography variant="h3">CSS Terminology</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Term</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Selector</TableCell>
                <TableCell>What element(s) to style</TableCell>
                <TableCell>h1, .class, #id</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Property</TableCell>
                <TableCell>What aspect to change</TableCell>
                <TableCell>color, font-size</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Value</TableCell>
                <TableCell>What to set the property to</TableCell>
                <TableCell>blue, 24px</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Declaration</TableCell>
                <TableCell>A property-value pair</TableCell>
                <TableCell>color: blue;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rule</TableCell>
                <TableCell>Selector + declarations</TableCell>
                <TableCell>The whole block</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Multiple Declarations</Typography>
          <CodeBlock language="css">{`p {
 color: #333333;
 font-size: 16px;
 line-height: 1.6;
 margin-bottom: 20px;
}`}</CodeBlock>
          <Typography>
            Every declaration ends with a semicolon (;).
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Three Ways to Add CSS</Typography>
          <Typography variant="h3">Method 1: Inline CSS</Typography>
          <Typography>
            CSS written directly in HTML elements using the style attribute.
          </Typography>
          <CodeBlock language="html">{`<h1 style="color: blue; font-size: 24px;">Hello World</h1>
<p style="color: gray;">This is a paragraph.</p>`}</CodeBlock>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pros</TableHead>
                <TableHead>Cons</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Quick for testing</TableCell>
                <TableCell>Hard to maintain</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Specific to one element</TableCell>
                <TableCell>Repeats for each element</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Mixes structure and style</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Not recommended for real projects</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Method 2: Internal CSS</Typography>
          <Typography>
            CSS written in a &lt;style&gt; element in the &lt;head&gt; section.
          </Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>My Page</title>
 <style>
 h1 {
 color: blue;
 font-size: 24px;
 }
 p {
 color: gray;
 line-height: 1.6;
 }
 </style>
</head>
<body>
 <h1>Hello World</h1>
 <p>This is a paragraph.</p>
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
                <TableCell>All styles in one place</TableCell>
                <TableCell>Only for that one page</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Good for single-page sites</TableCell>
                <TableCell>Can&apos;t reuse across pages</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Easier than inline</TableCell>
                <TableCell>Makes HTML file longer</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Method 3: External CSS (Recommended!)</Typography>
          <Typography>
            CSS in a separate .css file, linked to HTML.
          </Typography>
          <Typography>
            styles.css:
          </Typography>
          <CodeBlock language="css">{`h1 {
 color: blue;
 font-size: 24px;
}
p {
 color: gray;
 line-height: 1.6;
}`}</CodeBlock>
          <Typography>
            index.html:
          </Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>My Page</title>
 <link rel="stylesheet" href="styles.css">
</head>
<body>
 <h1>Hello World</h1>
 <p>This is a paragraph.</p>
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
                <TableCell>Reuse across all pages</TableCell>
                <TableCell>Need to link in each HTML</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Easy to maintain</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Browser can cache it</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Best practice!</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: The Link Element</Typography>
          <Typography variant="h3">Linking External CSS</Typography>
          <CodeBlock language="html">{`<link rel="stylesheet" href="css/style.css">`}</CodeBlock>
          <Typography variant="h3">Attributes Explained</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Attribute</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>rel</TableCell>
                <TableCell>stylesheet</TableCell>
                <TableCell>Relationship (this is a stylesheet)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>href</TableCell>
                <TableCell>css/style.css</TableCell>
                <TableCell>Path to the CSS file</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Common File Structures</Typography>
          <CodeBlock language="text">{`project/
├── index.html
├── about.html
├── css/
│ └── style.css ← External CSS file
└── images/`}</CodeBlock>
          <Typography>
            From index.html:
          </Typography>
          <CodeBlock language="html">{`<link rel="stylesheet" href="css/style.css">`}</CodeBlock>
          <Typography variant="h3">Multiple Stylesheets</Typography>
          <Typography>
            You can link multiple CSS files:
          </Typography>
          <CodeBlock language="html">{`<head>
 <link rel="stylesheet" href="css/reset.css">
 <link rel="stylesheet" href="css/style.css">
 <link rel="stylesheet" href="css/responsive.css">
</head>`}</CodeBlock>
          <Typography>
            Order matters! Later files can override earlier ones.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Your First Stylesheet</Typography>
          <Typography variant="h3">Setting Up</Typography>
          <Typography>
            Step 1: Create the folder structure
          </Typography>
          <CodeBlock language="bash">{`cd ~/projects/learning
mkdir css-practice
cd css-practice
mkdir css
touch index.html css/style.css`}</CodeBlock>
          <Typography>
            Step 2: Create the HTML (index.html)
          </Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>My First Styled Page</title>
 <link rel="stylesheet" href="css/style.css">
</head>
<body>
 <header>
 <h1>Welcome to My Website</h1>
 <p>This is my first styled page!</p>
 </header>
 <main>
 <section>
 <h2>About This Page</h2>
 <p>I am learning CSS at KOOMPI. CSS makes websites beautiful!</p>
 <p>With CSS, I can change colors, fonts, spacing, and layout.</p>
 </section>
 <section>
 <h2>What I'm Learning</h2>
 <ul>
 <li>HTML structure</li>
 <li>CSS styling</li>
 <li>Web development</li>
 </ul>
 </section>
 </main>
 <footer>
 <p>&copy; 2024 My Name. Learning at KOOMPI.</p>
 </footer>
</body>
</html>`}</CodeBlock>
          <Typography>
            Step 3: Add basic styles (css/style.css)
          </Typography>
          <CodeBlock language="css">{`/* My First Stylesheet */
/* Body styles - applies to whole page */
body {
 font-family: Arial, sans-serif;
 line-height: 1.6;
 margin: 0;
 padding: 20px;
 background-color: #f4f4f4;
 color: #333;
}
/* Header styles */
header {
 background-color: #35424a;
 color: white;
 padding: 20px;
 text-align: center;
}
/* Main heading */
h1 {
 margin: 0;
}
/* Section headings */
h2 {
 color: #35424a;
 border-bottom: 2px solid #35424a;
 padding-bottom: 10px;
}
/* Paragraphs */
p {
 margin-bottom: 15px;
}
/* Lists */
ul {
 background-color: white;
 padding: 20px;
 padding-left: 40px;
}
li {
 margin-bottom: 10px;
}
/* Footer */
footer {
 background-color: #35424a;
 color: white;
 text-align: center;
 padding: 10px;
 margin-top: 20px;
}`}</CodeBlock>
          <Typography>
            Step 4: View in browser
          </Typography>
          <CodeBlock language="bash">{`firefox index.html`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: CSS Comments</Typography>
          <Typography variant="h3">Writing Comments</Typography>
          <Typography>
            Comments help you organize and explain your CSS:
          </Typography>
          <CodeBlock language="css">{`/* This is a single-line comment */
/*
 * This is a multi-line comment
 * It can span several lines
 * Use it to explain complex code
 */
/* ==========================================
 HEADER STYLES
 ========================================== */
header {
 background-color: #333;
}
/* Navigation */
nav {
 /* TODO: Add responsive styles */
}`}</CodeBlock>
          <Typography variant="h3">Comment Best Practices</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Do</TableHead>
                <TableHead>Don&apos;t</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Explain why, not what</TableCell>
                <TableCell>Comment obvious code</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mark sections</TableCell>
                <TableCell>Leave TODO comments in production</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Note browser fixes</TableCell>
                <TableCell>Write novels</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: CSS Reset and Best Practices</Typography>
          <Typography variant="h3">Why Reset?</Typography>
          <Typography>
            Different browsers have different default styles. A CSS reset creates a consistent starting point.
          </Typography>
          <Typography variant="h3">Simple Reset</Typography>
          <CodeBlock language="css">{`/* Simple CSS Reset */
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}`}</CodeBlock>
          <Typography>
            The * selector targets ALL elements.
          </Typography>
          <Typography variant="h3">Best Practices Summary</Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────────────────────┐
│ CSS BEST PRACTICES │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ USE EXTERNAL CSS │
│ • Keep styles in .css files │
│ • Link from HTML <head> │
│ │
│ ORGANIZE YOUR CODE │
│ • Use comments to mark sections │
│ • Group related styles together │
│ • Keep consistent indentation │
│ │
│ USE MEANINGFUL NAMES │
│ • Name classes by purpose, not appearance │
│ • .error not .red-text │
│ • .primary-button not .big-blue-button │
│ │
│ START WITH A RESET │
│ • Normalize browser differences │
│ • Creates consistent base │
│ │
│ TEST IN BROWSER │
│ • Refresh often to see changes │
│ • Use DevTools to experiment │
│ │
└─────────────────────────────────────────────────────────────────────────────┘`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: CSS Terminology</Typography>
          <Typography>
            Match the terms:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>h1 is a ______</li>
            <li>color is a ______</li>
            <li>blue is a ______</li>
            <li>color: blue; is a ______</li>
          </ul>
          <Typography>
            Options: selector, property, value, declaration
          </Typography>
          <Typography variant="h3">Exercise 2: Add Inline CSS</Typography>
          <Typography>
            Add inline styles to make:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>The &lt;h1&gt; red</li>
            <li>The &lt;p&gt; blue with 20px font size</li>
          </ul>
          <CodeBlock language="html">{`<h1>Title</h1>
<p>Paragraph text</p>`}</CodeBlock>
          <Typography variant="h3">Exercise 3: Create Internal CSS</Typography>
          <Typography>
            Convert your inline CSS to internal CSS in the &lt;head&gt;.
          </Typography>
          <Typography variant="h3">Exercise 4: Create External CSS</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create a new project folder</li>
            <li>Create index.html and css/style.css</li>
            <li>Link the stylesheet</li>
            <li>Style at least 5 different elements</li>
          </ul>
          <Typography variant="h3">Exercise 5: Style Your Bio Page</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create a css folder</li>
            <li>Create style.css</li>
            <li>Link it to your HTML</li>
            <li>Add basic styles for body, headings, and paragraphs</li>
          </ul>
        </div>
      </section>

      <div className="mt-20 pt-10 border-t border-white/5 mx-10">
        <Typography variant="h2">Module Summary</Typography>
        <Typography variant="h3">Key Vocabulary</Typography>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Term</TableHead>
              <TableHead>Meaning</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>CSS</TableCell>
              <TableCell>Cascading Style Sheets</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Selector</TableCell>
              <TableCell>What element(s) to style</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Property</TableCell>
              <TableCell>What aspect to change</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Value</TableCell>
              <TableCell>What to set the property to</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Declaration</TableCell>
              <TableCell>Property-value pair</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Rule</TableCell>
              <TableCell>Complete CSS block</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Typography variant="h2">Next Steps</Typography>
        <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
          <li>Complete all exercises</li>
          <li>Create first external stylesheet</li>
          <li>Apply basic styles to bio page</li>
          <li>Get mentor verification</li>
        </ul>

        <div className="mt-12 p-8 glass-panel rounded-3xl text-center">
          <Typography variant="h4" className="text-primary font-bold">Coming Next</Typography>
          <Typography variant="lead" className="italic text-xl">Module 03 - Selectors & Specificity</Typography>
          <Typography className="text-text-secondary">You will learn to target exactly the elements you want!</Typography>
        </div>

        <div className="mt-12 text-center opacity-40 italic">
          <Typography variant="muted">"CSS turns structure into beauty."</Typography>
        </div>
      </div>
    </div>
  );
}
