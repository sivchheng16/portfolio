
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module04BoxModel() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">The Box Model</Typography>
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
            <li>Understand the CSS box model completely</li>
            <li>Control spacing with margin and padding</li>
            <li>Apply borders and outlines</li>
            <li>Use box-sizing for predictable layouts</li>
            <li>Control element dimensions</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Understanding the Box Model</Typography>
          <Typography variant="h3">Everything is a Box</Typography>
          <Typography>
            In CSS, every element is a rectangular box. The box model describes how space is calculated.
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>THE CSS BOX MODEL</li>
            <li>MARGIN</li>
            <li>BORDER</li>
            <li>PADDING</li>
            <li>CONTENT</li>
            <li>(text, images, etc.)</li>
          </ul>
          <Typography variant="h3">Box Model Components</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Content</TableCell>
                <TableCell>The actual content (text, image)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Padding</TableCell>
                <TableCell>Space INSIDE the box, around content</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Border</TableCell>
                <TableCell>The edge of the box</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Margin</TableCell>
                <TableCell>Space OUTSIDE the box, between elements</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Content - Width and Height</Typography>
          <Typography variant="h3">Setting Dimensions</Typography>
          <CodeBlock language="css">{`.box {
 width: 300px;
 height: 200px;
}`}</CodeBlock>
          <Typography variant="h3">Width Options</Typography>
          <CodeBlock language="css">{`/* Fixed width */
width: 300px;
/* Percentage of parent */
width: 50%;
/* Maximum width (responsive) */
max-width: 800px;
/* Minimum width */
min-width: 200px;
/* Viewport width */
width: 100vw;`}</CodeBlock>
          <Typography variant="h3">Height Options</Typography>
          <CodeBlock language="css">{`/* Fixed height */
height: 200px;
/* Minimum height (content can grow) */
min-height: 400px;
/* Full viewport height */
height: 100vh;
/* Auto - based on content */
height: auto;`}</CodeBlock>
          <Typography variant="h3">Best Practice: Responsive</Typography>
          <CodeBlock language="css">{`/* Instead of fixed width */
.container {
 max-width: 1200px; /* Never wider than this */
 width: 100%; /* Fill available space */
 margin: 0 auto; /* Center it */
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Padding</Typography>
          <Typography variant="h3">Padding: Space Inside</Typography>
          <Typography>
            Padding creates space between the content and the border.
          </Typography>
          <CodeBlock language="css">{`.box {
 padding: 20px; /* All four sides */
}`}</CodeBlock>
          <Typography variant="h3">Individual Sides</Typography>
          <CodeBlock language="css">{`.box {
 padding-top: 10px;
 padding-right: 20px;
 padding-bottom: 10px;
 padding-left: 20px;
}`}</CodeBlock>
          <Typography variant="h3">Shorthand Notation</Typography>
          <CodeBlock language="css">{`/* All sides */
padding: 20px;
/* Vertical | Horizontal */
padding: 10px 20px;
/* Top | Horizontal | Bottom */
padding: 10px 20px 30px;
/* Top | Right | Bottom | Left (clockwise) */
padding: 10px 20px 30px 40px;`}</CodeBlock>
          <Typography>
            Remember: Start at top, go clockwise (like a clock!)
          </Typography>
          <Typography variant="h3">Practical Examples</Typography>
          <CodeBlock language="css">{`/* Button */
.button {
 padding: 12px 24px; /* More horizontal space */
}
/* Card */
.card {
 padding: 20px;
}
/* Header */
header {
 padding: 10px 20px;
}
/* Section */
section {
 padding: 60px 20px; /* More vertical breathing room */
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Border</Typography>
          <Typography variant="h3">Border Property</Typography>
          <CodeBlock language="css">{`.box {
 border: 1px solid black;
}`}</CodeBlock>
          <Typography variant="h3">Border Shorthand</Typography>
          <CodeBlock language="css">{`border: [width] [style] [color];
/* Examples */
border: 1px solid #333;
border: 2px dashed blue;
border: 3px dotted red;
- ### Border Styles
- \`\`\`css
- border-style: solid; /* */
- border-style: dashed; /* - - - - - */
- border-style: dotted; /* .......... */
- border-style: double; /* */
- border-style: groove; /* 3D groove */
- border-style: ridge; /* 3D ridge */
- border-style: none; /* No border */
### Individual Border Sides
\`\`\`css
border-top: 2px solid black;
border-right: 1px dashed gray;
border-bottom: 3px solid blue;
border-left: none;`}</CodeBlock>
          <Typography variant="h3">Border Radius (Rounded Corners)</Typography>
          <CodeBlock language="css">{`/* All corners */
border-radius: 10px;
/* Circle (if width = height) */
border-radius: 50%;
/* Individual corners */
border-radius: 10px 20px 10px 20px; /* TL TR BR BL */
/* Different horizontal/vertical */
border-radius: 20px / 10px;`}</CodeBlock>
          <Typography variant="h3">Practical Border Examples</Typography>
          <CodeBlock language="css">{`/* Card */
.card {
 border: 1px solid #ddd;
 border-radius: 8px;
}
/* Button */
.button {
 border: 2px solid #3498db;
 border-radius: 4px;
}
/* Circle avatar */
.avatar {
 width: 100px;
 height: 100px;
 border-radius: 50%;
 border: 3px solid white;
}
/* Bottom border only (underline effect) */
.tab {
 border: none;
 border-bottom: 3px solid #3498db;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Margin</Typography>
          <Typography variant="h3">Margin: Space Outside</Typography>
          <Typography>
            Margin creates space between elements.
          </Typography>
          <CodeBlock language="css">{`.box {
 margin: 20px; /* All four sides */
}`}</CodeBlock>
          <Typography variant="h3">Individual Sides</Typography>
          <CodeBlock language="css">{`.box {
 margin-top: 10px;
 margin-right: 20px;
 margin-bottom: 10px;
 margin-left: 20px;
}`}</CodeBlock>
          <Typography variant="h3">Shorthand (Same as Padding)</Typography>
          <CodeBlock language="css">{`/* All sides */
margin: 20px;
/* Vertical | Horizontal */
margin: 10px 20px;
/* Top | Right | Bottom | Left */
margin: 10px 20px 30px 40px;`}</CodeBlock>
          <Typography variant="h3">Auto Margin (Centering)</Typography>
          <CodeBlock language="css">{`.container {
 max-width: 800px;
 margin: 0 auto; /* 0 top/bottom, auto left/right = centered */
}`}</CodeBlock>
          <Typography variant="h3">Margin Collapse</Typography>
          <Typography>
            When vertical margins touch, they collapse (only the larger one applies):
          </Typography>
          <CodeBlock language="css">{`h1 { margin-bottom: 20px; }
p { margin-top: 15px; }
/* You might expect 35px gap, but you get 20px (the larger one) */`}</CodeBlock>
          <Typography>
            This only happens with vertical margins, not horizontal.
          </Typography>
          <Typography variant="h3">Negative Margins</Typography>
          <CodeBlock language="css">{`/* Pull element up/left */
.overlap {
 margin-top: -20px;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Box Sizing</Typography>
          <Typography variant="h3">The Problem</Typography>
          <Typography>
            By default, width and height only apply to content. Padding and border add to total size!
          </Typography>
          <CodeBlock language="css">{`.box {
 width: 200px;
 padding: 20px;
 border: 5px solid black;
}
/* Actual width = 200 + 20 + 20 + 5 + 5 = 250px! */`}</CodeBlock>
          <Typography variant="h3">The Solution: box-sizing</Typography>
          <CodeBlock language="css">{`.box {
 box-sizing: border-box;
 width: 200px;
 padding: 20px;
 border: 5px solid black;
}
/* Now width IS 200px (including padding and border) */`}</CodeBlock>
          <Typography variant="h3">Apply Globally (Best Practice)</Typography>
          <CodeBlock language="css">{`/* Add to your CSS reset */
*, *::before, *::after {
 box-sizing: border-box;
}`}</CodeBlock>
          <Typography variant="h3">Visual Comparison</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>BOX-SIZING COMPARISON</li>
            <li>content-box (default) border-box (recommended)</li>
            <li>width: 200px width: 200px</li>
            <li>padding: 20px padding: 20px</li>
            <li>border: 5px border: 5px</li>
            <li>250px total 200px total</li>
            <li>200px content content</li>
            <li>(smaller)</li>
            <li>Total width = content + padding + border</li>
            <li>Total width = width (includes padding + border)</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Putting It All Together</Typography>
          <Typography variant="h3">Complete Card Example</Typography>
          <CodeBlock language="css">{`.card {
 /* Box sizing */
 box-sizing: border-box;
 /* Dimensions */
 width: 300px;
 min-height: 200px;
 /* Padding (inside) */
 padding: 20px;
 /* Border */
 border: 1px solid #ddd;
 border-radius: 8px;
 /* Margin (outside) */
 margin: 15px;
 /* Colors */
 background-color: white;
}
.card-title {
 margin: 0 0 15px 0; /* Only bottom margin */
 padding-bottom: 10px;
 border-bottom: 1px solid #eee;
}
.card-content {
 margin: 0;
}`}</CodeBlock>
          <Typography variant="h3">Debug with DevTools</Typography>
          <Typography>
            In browser DevTools, you can see the box model:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Right-click element → Inspect</li>
            <li>Look at the box model diagram</li>
            <li>See content, padding, border, margin values</li>
            <li>Hover to highlight each part</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Box Model Quiz</Typography>
          <Typography>
            A box has:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>width: 200px</li>
            <li>padding: 20px</li>
            <li>border: 5px solid</li>
            <li>margin: 10px</li>
          </ul>
          <Typography>
            With default box-sizing, what&apos;s the total width including margin?
          </Typography>
          <Typography variant="h3">Exercise 2: Create a Card</Typography>
          <Typography>
            Create a card with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>White background</li>
            <li>Light gray border</li>
            <li>20px padding inside</li>
            <li>Rounded corners</li>
            <li>15px margin between cards</li>
          </ul>
          <Typography variant="h3">Exercise 3: Center a Container</Typography>
          <Typography>
            Create a container that:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Has max-width of 1000px</li>
            <li>Is centered horizontally</li>
            <li>Has 20px padding</li>
          </ul>
          <Typography variant="h3">Exercise 4: Button Styling</Typography>
          <Typography>
            Create a button with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Padding: 12px vertical, 24px horizontal</li>
            <li>Border: 2px solid</li>
            <li>Border radius: 4px</li>
            <li>No margin on top, 20px on bottom</li>
          </ul>
          <Typography variant="h3">Exercise 5: Apply to Bio Page</Typography>
          <Typography>
            Update your bio page with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Proper box-sizing reset</li>
            <li>Consistent padding in sections</li>
            <li>Margins between elements</li>
            <li>Cards with borders and rounded corners</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Box Model Properties
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>width/height</TableCell>
                <TableCell>Content dimensions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>padding</TableCell>
                <TableCell>Space inside (content to border)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>border</TableCell>
                <TableCell>The box edge</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>margin</TableCell>
                <TableCell>Space outside (between boxes)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>box-sizing</TableCell>
                <TableCell>How size is calculated</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Shorthand Pattern (Clockwise)
          </Typography>
          <CodeBlock language="text">{` TOP
 ↓
LEFT → ───── → RIGHT
 ↓
 BOTTOM`}</CodeBlock>
          <Typography>
            padding: top right bottom left;
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Before moving to Module 06:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Understand all box model parts</li>
            <li>Use box-sizing: border-box</li>
            <li>Create cards with proper spacing</li>
            <li>Style bio page with good spacing</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 06 - Layout &amp; Positioning
          </Typography>
          <Typography>
            You will learn to control where elements appear on the page!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Master of spacing!
          </Typography>
          <Typography>
            Understanding the box model is key to CSS layouts.
          </Typography>
        </div>
      </section>
    </div>
  );
}
