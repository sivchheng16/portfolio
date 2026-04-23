
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module05LayoutPositioning() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Layout &amp; Positioning</Typography>
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
            <li>Understand the display property values</li>
            <li>Use positioning (static, relative, absolute, fixed)</li>
            <li>Create layouts with floats (legacy knowledge)</li>
            <li>Build navigation bars</li>
            <li>Create multi-column layouts</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: The Display Property</Typography>
          <Typography variant="h3">Block vs Inline</Typography>
          <Typography>
            Every element has a default display value:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>BLOCK vs INLINE</li>
            <li>BLOCK ELEMENTS INLINE ELEMENTS</li>
            <li>text more text</li>
            <li>Takes full width box box</li>
            <li>Stacks vertically • Flows with text</li>
            <li>• Only as wide as content</li>
            <li>• Can&apos;t set width/height</li>
            <li>• Full width available</li>
            <li>• Stacks below previous</li>
            <li>• Can set width/height</li>
            <li>Examples: Examples:</li>
            <li>div, p, h1-h6, section span, a, strong, em, img</li>
          </ul>
          <Typography variant="h3">Display Values</Typography>
          <CodeBlock language="css">{`/* Block - full width, stacks vertically */
display: block;
/* Inline - flows with text */
display: inline;
/* Inline-block - inline but with width/height */
display: inline-block;
/* None - completely hidden */
display: none;
/* Flex - flexbox layout (next module) */
display: flex;
/* Grid - grid layout (advanced) */
display: grid;`}</CodeBlock>
          <Typography variant="h3">Inline-Block: Best of Both</Typography>
          <CodeBlock language="css">{`.button {
 display: inline-block;
 width: 200px; /* Can set width (like block) */
 padding: 10px 20px; 
 /* Sits inline with other elements (like inline) */
}`}</CodeBlock>
          <Typography>
            Use inline-block for:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Horizontal navigation</li>
            <li>Buttons side by side</li>
            <li>Image galleries</li>
          </ul>
          <Typography variant="h3">Display: None vs Visibility</Typography>
          <CodeBlock language="css">{`/* Completely removes element */
display: none;
/* Hides but keeps space */
visibility: hidden;`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Position Property</Typography>
          <Typography variant="h3">Position Values</Typography>
          <CodeBlock language="css">{`position: static; /* Default - normal flow */
position: relative; /* Relative to normal position */
position: absolute; /* Relative to positioned parent */
position: fixed; /* Relative to viewport */
position: sticky; /* Hybrid relative/fixed */`}</CodeBlock>
          <Typography variant="h3">Static (Default)</Typography>
          <CodeBlock language="css">{`.box {
 position: static; /* Default - follows normal document flow */
}`}</CodeBlock>
          <Typography>
            Elements appear where they naturally would.
          </Typography>
          <Typography variant="h3">Relative</Typography>
          <Typography>
            Offset from its normal position:
          </Typography>
          <CodeBlock language="css">{`.box {
 position: relative;
 top: 20px; /* Move down 20px */
 left: 30px; /* Move right 30px */
}`}</CodeBlock>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Original space is preserved</li>
            <li>Other elements not affected</li>
          </ul>
          <Typography variant="h3">Absolute</Typography>
          <Typography>
            Positioned relative to nearest positioned ancestor:
          </Typography>
          <CodeBlock language="css">{`.parent {
 position: relative; /* Creates positioning context */
}
.child {
 position: absolute;
 top: 10px;
 right: 10px;
}`}</CodeBlock>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Removed from normal flow</li>
            <li>Other elements ignore it</li>
            <li>Parent needs position: relative</li>
          </ul>
          <Typography variant="h3">Fixed</Typography>
          <Typography>
            Positioned relative to viewport (browser window):
          </Typography>
          <CodeBlock language="css">{`.navbar {
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
}`}</CodeBlock>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Stays in place when scrolling</li>
            <li>Removed from document flow</li>
          </ul>
          <Typography variant="h3">Sticky</Typography>
          <Typography>
            Hybrid of relative and fixed:
          </Typography>
          <CodeBlock language="css">{`.header {
 position: sticky;
 top: 0; /* Sticks when reaching top */
}`}</CodeBlock>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Acts relative until scroll position reached</li>
            <li>Then acts fixed</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Positioning Offsets</Typography>
          <Typography variant="h3">Offset Properties</Typography>
          <CodeBlock language="css">{`top: 20px; /* Distance from top */
right: 20px; /* Distance from right */
bottom: 20px; /* Distance from bottom */
left: 20px; /* Distance from left */`}</CodeBlock>
          <Typography variant="h3">Centering with Position</Typography>
          <CodeBlock language="css">{`/* Center absolutely */
.centered {
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
}`}</CodeBlock>
          <Typography variant="h3">Z-Index (Stacking)</Typography>
          <Typography>
            When elements overlap, z-index controls which is on top:
          </Typography>
          <CodeBlock language="css">{`.behind {
 position: relative;
 z-index: 1;
}
.in-front {
 position: relative;
 z-index: 2; /* Higher = on top */
}`}</CodeBlock>
          <Typography>
            Note: Only works on positioned elements (not static).
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Creating a Navigation Bar</Typography>
          <Typography variant="h3">Horizontal Navigation</Typography>
          <Typography>
            HTML:
          </Typography>
          <CodeBlock language="html">{`<nav class="main-nav">
 <ul>
 <li><a href="#">Home</a></li>
 <li><a href="#">About</a></li>
 <li><a href="#">Services</a></li>
 <li><a href="#">Contact</a></li>
 </ul>
</nav>`}</CodeBlock>
          <Typography>
            CSS:
          </Typography>
          <CodeBlock language="css">{`.main-nav ul {
 list-style: none;
 margin: 0;
 padding: 0;
 background-color: #333;
}
.main-nav li {
 display: inline-block;
}
.main-nav a {
 display: block;
 padding: 15px 20px;
 color: white;
 text-decoration: none;
}
.main-nav a:hover {
 background-color: #555;
}`}</CodeBlock>
          <Typography variant="h3">Fixed Navigation</Typography>
          <CodeBlock language="css">{`.main-nav {
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 z-index: 1000;
}
/* Add padding to body to prevent content hiding behind nav */
body {
 padding-top: 60px; /* Height of navbar */
}`}</CodeBlock>
          <Typography variant="h3">Navigation with Logo</Typography>
          <CodeBlock language="css">{`.main-nav {
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 20px;
 background-color: #333;
}
.logo {
 color: white;
 font-size: 1.5rem;
 font-weight: bold;
}
.nav-links {
 list-style: none;
 display: flex;
 margin: 0;
 padding: 0;
}
.nav-links a {
 display: block;
 padding: 15px 20px;
 color: white;
 text-decoration: none;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Floats (Legacy Layout)</Typography>
          <Typography variant="h3">Understanding Floats</Typography>
          <Typography>
            Floats were used for layout before Flexbox. Know them for older code.
          </Typography>
          <CodeBlock language="css">{`.left-column {
 float: left;
 width: 30%;
}
.right-column {
 float: right;
 width: 70%;
}`}</CodeBlock>
          <Typography variant="h3">Clearing Floats</Typography>
          <Typography>
            Floats can cause layout problems. Clear them:
          </Typography>
          <CodeBlock language="css">{`/* Clearfix - add to parent of floated elements */
.clearfix::after {
 content: "";
 display: table;
 clear: both;
}`}</CodeBlock>
          <Typography variant="h3">Float for Text Wrapping</Typography>
          <Typography>
            Floats are still useful for wrapping text around images:
          </Typography>
          <CodeBlock language="css">{`.article-image {
 float: left;
 margin-right: 20px;
 margin-bottom: 10px;
}`}</CodeBlock>
          <Typography>
            Modern recommendation: Use Flexbox or Grid for layouts, floats for text wrapping only.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Two-Column Layout</Typography>
          <Typography variant="h3">Using Float (Legacy)</Typography>
          <CodeBlock language="css">{`.container {
 max-width: 1200px;
 margin: 0 auto;
}
.sidebar {
 float: left;
 width: 25%;
 padding: 20px;
}
.main-content {
 float: right;
 width: 75%;
 padding: 20px;
}
.container::after {
 content: "";
 display: table;
 clear: both;
}`}</CodeBlock>
          <Typography variant="h3">Using Inline-Block</Typography>
          <CodeBlock language="css">{`.sidebar {
 display: inline-block;
 width: 24%; /* Slightly less than 25% for spacing */
 vertical-align: top;
 padding: 20px;
}
.main-content {
 display: inline-block;
 width: 74%;
 vertical-align: top;
 padding: 20px;
}`}</CodeBlock>
          <Typography variant="h3">Using Flexbox (Modern - Preview)</Typography>
          <CodeBlock language="css">{`.container {
 display: flex;
}
.sidebar {
 width: 25%;
 padding: 20px;
}
.main-content {
 flex: 1; /* Takes remaining space */
 padding: 20px;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Practical Layout Examples</Typography>
          <Typography variant="h3">Card Grid</Typography>
          <CodeBlock language="css">{`.cards-container {
 max-width: 1200px;
 margin: 0 auto;
}
.card {
 display: inline-block;
 width: calc(33.333% - 20px); /* 3 columns with gap */
 margin: 10px;
 vertical-align: top;
 box-sizing: border-box;
 padding: 20px;
 border: 1px solid #ddd;
 border-radius: 8px;
}`}</CodeBlock>
          <Typography variant="h3">Sticky Footer</Typography>
          <CodeBlock language="css">{`html, body {
 height: 100%;
}
.wrapper {
 min-height: 100%;
 display: flex;
 flex-direction: column;
}
main {
 flex: 1; /* Grows to fill space */
}
footer {
 background-color: #333;
 color: white;
 padding: 20px;
}`}</CodeBlock>
          <Typography variant="h3">Overlay</Typography>
          <CodeBlock language="css">{`.modal-overlay {
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.5);
 z-index: 1000;
}
.modal-content {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 background-color: white;
 padding: 30px;
 border-radius: 8px;
 z-index: 1001;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Display Types</Typography>
          <Typography>
            Change these elements&apos; display:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Make links display as blocks</li>
            <li>Make divs display inline</li>
            <li>Make spans display as inline-block with width</li>
          </ul>
          <Typography variant="h3">Exercise 2: Fixed Header</Typography>
          <Typography>
            Create a fixed navigation bar that:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Stays at top when scrolling</li>
            <li>Has proper z-index</li>
            <li>Content doesn&apos;t hide behind it</li>
          </ul>
          <Typography variant="h3">Exercise 3: Absolute Positioning</Typography>
          <Typography>
            Create a card with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>A &quot;Sale&quot; badge in the top-right corner (absolute)</li>
            <li>Card is the positioning parent (relative)</li>
          </ul>
          <Typography variant="h3">Exercise 4: Two-Column Layout</Typography>
          <Typography>
            Create a blog layout with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Sidebar (25% width) on the left</li>
            <li>Main content (75% width) on the right</li>
            <li>Both using inline-block or flexbox</li>
          </ul>
          <Typography variant="h3">Exercise 5: Complete Navigation</Typography>
          <Typography>
            Build navigation with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Logo on the left</li>
            <li>Links on the right</li>
            <li>Fixed position</li>
            <li>Hover effects</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Display Values
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Value</TableHead>
                <TableHead>Behavior</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>block</TableCell>
                <TableCell>Full width, stacks vertically</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>inline</TableCell>
                <TableCell>Flows with text, no width/height</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>inline-block</TableCell>
                <TableCell>Inline but with dimensions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>none</TableCell>
                <TableCell>Hidden completely</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>flex</TableCell>
                <TableCell>Flexbox container</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Position Values
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Value</TableHead>
                <TableHead>Relative To</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>static</TableCell>
                <TableCell>Normal flow (default)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>relative</TableCell>
                <TableCell>Normal position</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>absolute</TableCell>
                <TableCell>Positioned parent</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fixed</TableCell>
                <TableCell>Viewport</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>sticky</TableCell>
                <TableCell>Scroll position</TableCell>
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
            <li>Master display property</li>
            <li>Understand all position values</li>
            <li>Create fixed navigation</li>
            <li>Build two-column layout</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 07 - Flexbox &amp; Responsive Design
          </Typography>
          <Typography>
            You will learn modern, flexible layouts!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Layout master!
          </Typography>
          <Typography>
            Now you control where everything goes.
          </Typography>
        </div>
      </section>
    </div>
  );
}
