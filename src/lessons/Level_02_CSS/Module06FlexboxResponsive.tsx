
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module06FlexboxResponsive() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Flexbox &amp; Responsive Design</Typography>
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
            <li>Create layouts with Flexbox</li>
            <li>Align and distribute items easily</li>
            <li>Make responsive designs with media queries</li>
            <li>Build mobile-first layouts</li>
            <li>Add smooth CSS transitions</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Introduction to Flexbox</Typography>
          <Typography variant="h3">What is Flexbox?</Typography>
          <Typography>
            Flexbox is a modern CSS layout system that makes it easy to:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Align items horizontally or vertically</li>
            <li>Distribute space between items</li>
            <li>Create responsive layouts</li>
            <li>Reorder elements</li>
          </ul>
          <Typography variant="h3">Enabling Flexbox</Typography>
          <CodeBlock language="css">{`.container {
 display: flex;
}`}</CodeBlock>
          <Typography>
            All direct children become flex items.
          </Typography>
          <Typography variant="h3">Flex Container vs Flex Items</Typography>
          <CodeBlock language="html">{`<div class="container"> <!-- Flex Container -->
 <div class="item">1</div> <!-- Flex Item -->
 <div class="item">2</div> <!-- Flex Item -->
 <div class="item">3</div> <!-- Flex Item -->
</div>`}</CodeBlock>
          <CodeBlock language="css">{`.container {
 display: flex; /* Makes this a flex container */
}
.item {
 /* These are automatically flex items */
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Main Flexbox Properties</Typography>
          <Typography variant="h3">Flex Direction</Typography>
          <CodeBlock language="css">{`.container {
 display: flex;
 flex-direction: row; /* Default - horizontal */
 flex-direction: row-reverse; /* Horizontal, reversed */
 flex-direction: column; /* Vertical */
 flex-direction: column-reverse;
}`}</CodeBlock>
          <CodeBlock language="text">{`row: [1] [2] [3]
row-reverse: [3] [2] [1]
column: [1]
 [2]
 [3]`}</CodeBlock>
          <Typography variant="h3">Justify Content (Main Axis)</Typography>
          <Typography>
            Distributes items along the main axis:
          </Typography>
          <CodeBlock language="css">{`.container {
 display: flex;
 justify-content: flex-start; /* Default - start */
 justify-content: flex-end; /* End */
 justify-content: center; /* Center */
 justify-content: space-between; /* Space between items */
 justify-content: space-around; /* Space around items */
 justify-content: space-evenly; /* Equal space everywhere */
}`}</CodeBlock>
          <CodeBlock language="text">{`flex-start: [1][2][3]............
flex-end: ............[1][2][3]
center: .....[1][2][3].....
space-between: [1].....[2].....[3]
space-around: ..[1]....[2]....[3]..
space-evenly: ...[1]...[2]...[3]...`}</CodeBlock>
          <Typography variant="h3">Align Items (Cross Axis)</Typography>
          <Typography>
            Aligns items perpendicular to main axis:
          </Typography>
          <CodeBlock language="css">{`.container {
 display: flex;
 align-items: stretch; /* Default - stretch to fill */
 align-items: flex-start; /* Top */
 align-items: flex-end; /* Bottom */
 align-items: center; /* Center vertically */
 align-items: baseline; /* Align text baselines */
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Flex Item Properties</Typography>
          <Typography variant="h3">Flex Grow</Typography>
          <Typography>
            How much item should grow to fill space:
          </Typography>
          <CodeBlock language="css">{`.item {
 flex-grow: 0; /* Default - don't grow */
 flex-grow: 1; /* Grow to fill available space */
}`}</CodeBlock>
          <Typography variant="h3">Flex Shrink</Typography>
          <Typography>
            How much item should shrink when space is limited:
          </Typography>
          <CodeBlock language="css">{`.item {
 flex-shrink: 1; /* Default - can shrink */
 flex-shrink: 0; /* Don't shrink */
}`}</CodeBlock>
          <Typography variant="h3">Flex Basis</Typography>
          <Typography>
            Initial size before growing/shrinking:
          </Typography>
          <CodeBlock language="css">{`.item {
 flex-basis: auto; /* Use width/height */
 flex-basis: 200px; /* Start at 200px */
 flex-basis: 50%; /* Start at 50% */
}`}</CodeBlock>
          <Typography variant="h3">Flex Shorthand</Typography>
          <CodeBlock language="css">{`.item {
 flex: 1; /* flex: 1 1 0% */
 flex: 0 0 200px; /* Don't grow, don't shrink, 200px base */
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Flexbox Examples</Typography>
          <Typography variant="h3">Centered Content</Typography>
          <CodeBlock language="css">{`.container {
 display: flex;
 justify-content: center;
 align-items: center;
 min-height: 100vh;
}`}</CodeBlock>
          <Typography variant="h3">Navigation Bar</Typography>
          <CodeBlock language="css">{`.navbar {
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 15px 20px;
 background-color: #333;
}
.nav-links {
 display: flex;
 list-style: none;
 gap: 20px;
}`}</CodeBlock>
          <Typography variant="h3">Card Grid</Typography>
          <CodeBlock language="css">{`.card-container {
 display: flex;
 flex-wrap: wrap;
 gap: 20px;
}
.card {
 flex: 1 1 300px; /* Grow, shrink, min 300px */
 max-width: 400px;
}`}</CodeBlock>
          <Typography variant="h3">Footer with Columns</Typography>
          <CodeBlock language="css">{`.footer {
 display: flex;
 justify-content: space-between;
 gap: 40px;
}
.footer-column {
 flex: 1;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Responsive Design Principles</Typography>
          <Typography variant="h3">What is Responsive Design?</Typography>
          <Typography>
            Responsive design makes websites work on all screen sizes.
          </Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────────────────────┐
│ RESPONSIVE DESIGN │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ Desktop Tablet Mobile │
│ ═══════ ══════ ══════ │
│ │
│ ┌──────────────┐ ┌──────────┐ ┌─────┐ │
│ │ [Nav] │ │ [Nav] │ │[≡] │ │
│ │ ┌────┬─────┐ │ │ ┌──────┐ │ │ │ │
│ │ │Side│Main │ │ │ │ Main │ │ │Main │ │
│ │ │bar │ │ │ │ │ │ │ │ │ │
│ │ │ │ │ │ │ └──────┘ │ │ │ │
│ │ └────┴─────┘ │ │ [Side] │ │ │ │
│ │ [Footer] │ │ [Footer] │ │Side │ │
│ └──────────────┘ └──────────┘ │Foot │ │
│ └─────┘ │
│ │
│ Same website, different layouts based on screen size │
│ │
└─────────────────────────────────────────────────────────────────────────────┘`}</CodeBlock>
          <Typography variant="h3">Mobile-First Approach</Typography>
          <Typography>
            Start with mobile styles, then add styles for larger screens:
          </Typography>
          <CodeBlock language="css">{`/* Mobile styles first (default) */
.container {
 padding: 10px;
}
/* Tablet and up */
@media (min-width: 768px) {
 .container {
 padding: 20px;
 }
}
/* Desktop and up */
@media (min-width: 1024px) {
 .container {
 padding: 40px;
 }
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Media Queries</Typography>
          <Typography variant="h3">Basic Syntax</Typography>
          <CodeBlock language="css">{`@media (condition) {
 /* Styles apply when condition is true */
}`}</CodeBlock>
          <Typography variant="h3">Common Breakpoints</Typography>
          <CodeBlock language="css">{`/* Mobile (default) */
/* No media query needed */
/* Tablet */
@media (min-width: 768px) { }
/* Desktop */
@media (min-width: 1024px) { }
/* Large desktop */
@media (min-width: 1200px) { }`}</CodeBlock>
          <Typography variant="h3">Responsive Example</Typography>
          <CodeBlock language="css">{`/* Mobile: single column */
.cards {
 display: flex;
 flex-direction: column;
 gap: 20px;
}
/* Tablet: 2 columns */
@media (min-width: 768px) {
 .cards {
 flex-direction: row;
 flex-wrap: wrap;
 }
 .card {
 flex: 0 0 calc(50% - 10px);
 }
}
/* Desktop: 3 columns */
@media (min-width: 1024px) {
 .card {
 flex: 0 0 calc(33.333% - 14px);
 }
}`}</CodeBlock>
          <Typography variant="h3">Hide/Show Elements</Typography>
          <CodeBlock language="css">{`/* Hide on mobile */
.desktop-only {
 display: none;
}
@media (min-width: 768px) {
 .desktop-only {
 display: block;
 }
}
/* Hide on desktop */
.mobile-only {
 display: block;
}
@media (min-width: 768px) {
 .mobile-only {
 display: none;
 }
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: CSS Transitions</Typography>
          <Typography variant="h3">Basic Transitions</Typography>
          <Typography>
            Make property changes smooth:
          </Typography>
          <CodeBlock language="css">{`.button {
 background-color: #3498db;
 transition: background-color 0.3s;
}
.button:hover {
 background-color: #2980b9;
}`}</CodeBlock>
          <Typography variant="h3">Transition Properties</Typography>
          <CodeBlock language="css">{`transition: property duration timing-function delay;
/* Examples */
transition: all 0.3s ease;
transition: background-color 0.3s ease-in-out;
transition: transform 0.2s ease, opacity 0.3s;`}</CodeBlock>
          <Typography variant="h3">Multiple Transitions</Typography>
          <CodeBlock language="css">{`.card {
 background-color: white;
 transform: translateY(0);
 box-shadow: 0 2px 4px rgba(0,0,0,0.1);
 transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
 transform: translateY(-5px);
 box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}`}</CodeBlock>
          <Typography variant="h3">Transform Examples</Typography>
          <CodeBlock language="css">{`/* Grow on hover */
.grow:hover {
 transform: scale(1.1);
}
/* Move up */
.lift:hover {
 transform: translateY(-10px);
}
/* Rotate */
.spin:hover {
 transform: rotate(180deg);
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Flexbox Navigation</Typography>
          <Typography>
            Create a navigation bar with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Logo on left</li>
            <li>Links on right</li>
            <li>Vertically centered</li>
          </ul>
          <Typography variant="h3">Exercise 2: Card Layout</Typography>
          <Typography>
            Create a responsive card grid:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>1 column on mobile</li>
            <li>2 columns on tablet</li>
            <li>3 columns on desktop</li>
            <li>Use flex-wrap</li>
          </ul>
          <Typography variant="h3">Exercise 3: Center Everything</Typography>
          <Typography>
            Create a full-screen centered box:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Use flexbox centering</li>
            <li>100vh height</li>
          </ul>
          <Typography variant="h3">Exercise 4: Responsive Portfolio</Typography>
          <Typography>
            Make your bio page responsive:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Single column on mobile</li>
            <li>Side-by-side on desktop</li>
            <li>Adjust font sizes</li>
          </ul>
          <Typography variant="h3">Exercise 5: Smooth Interactions</Typography>
          <Typography>
            Add transitions to:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Buttons (background color)</li>
            <li>Cards (shadow and lift)</li>
            <li>Links (color change)</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Flexbox Properties
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>On</TableHead>
                <TableHead>Controls</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>flex-direction</TableCell>
                <TableCell>Container</TableCell>
                <TableCell>Direction of items</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>justify-content</TableCell>
                <TableCell>Container</TableCell>
                <TableCell>Main axis alignment</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>align-items</TableCell>
                <TableCell>Container</TableCell>
                <TableCell>Cross axis alignment</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>flex-wrap</TableCell>
                <TableCell>Container</TableCell>
                <TableCell>Wrapping behavior</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>flex</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Grow/shrink/basis</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Common Breakpoints
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Device</TableHead>
                <TableHead>Breakpoint</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Mobile</TableCell>
                <TableCell>&lt; 768px</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tablet</TableCell>
                <TableCell>≥ 768px</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desktop</TableCell>
                <TableCell>≥ 1024px</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Large</TableCell>
                <TableCell>≥ 1200px</TableCell>
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
            <li>Master flexbox alignment</li>
            <li>Create responsive layouts</li>
            <li>Use media queries properly</li>
            <li>Add smooth transitions</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 08 - Project: Styled Portfolio
          </Typography>
          <Typography>
            You will create your complete styled website!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Modern layouts unlocked!
          </Typography>
          <Typography>
            Flexbox + Media Queries = Responsive mastery
          </Typography>
        </div>
      </section>
    </div>
  );
}
