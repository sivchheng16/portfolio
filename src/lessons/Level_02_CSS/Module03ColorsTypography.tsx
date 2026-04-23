
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module03ColorsTypography() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Colors, Backgrounds &amp; Typography</Typography>
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
            <li>Use different color formats (names, hex, RGB, HSL)</li>
            <li>Apply background colors and images</li>
            <li>Style text with fonts, sizes, and spacing</li>
            <li>Create visually appealing and readable designs</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Color Values</Typography>
          <Typography variant="h3">Color Formats in CSS</Typography>
          <CodeBlock language="css">{`/* All of these create the same blue color */
/* Named colors (limited options) */
color: blue;
/* Hexadecimal (most common) */
color: #0000ff;
/* RGB (Red, Green, Blue) */
color: rgb(0, 0, 255);
/* RGBA (with transparency) */
color: rgba(0, 0, 255, 0.5);
/* HSL (Hue, Saturation, Lightness) */
color: hsl(240, 100%, 50%);
/* HSLA (with transparency) */
color: hsla(240, 100%, 50%, 0.5);`}</CodeBlock>
          <Typography variant="h3">Hexadecimal Colors</Typography>
          <CodeBlock language="text">{`#RRGGBB or #RGB (shorthand)
#ff0000 = red (#f00)
#00ff00 = green (#0f0)
#0000ff = blue (#00f)
#ffffff = white (#fff)
#000000 = black (#000)
#808080 = gray`}</CodeBlock>
          <Typography>
            Common hex colors to memorize:
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Color</TableHead>
                <TableHead>Hex</TableHead>
                <TableHead>Shorthand</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Black</TableCell>
                <TableCell>#000000</TableCell>
                <TableCell>#000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>White</TableCell>
                <TableCell>#ffffff</TableCell>
                <TableCell>#fff</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Red</TableCell>
                <TableCell>#ff0000</TableCell>
                <TableCell>#f00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Green</TableCell>
                <TableCell>#00ff00</TableCell>
                <TableCell>#0f0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Blue</TableCell>
                <TableCell>#0000ff</TableCell>
                <TableCell>#00f</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gray</TableCell>
                <TableCell>#808080</TableCell>
                <TableCell>—</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">RGB Colors</Typography>
          <CodeBlock language="css">{`/* rgb(red, green, blue) - values 0-255 */
color: rgb(255, 0, 0); /* Red */
color: rgb(0, 255, 0); /* Green */
color: rgb(0, 0, 255); /* Blue */
color: rgb(128, 128, 128); /* Gray */
/* With transparency (0-1) */
color: rgba(255, 0, 0, 0.5); /* 50% transparent red */`}</CodeBlock>
          <Typography variant="h3">HSL Colors</Typography>
          <Typography>
            HSL is often more intuitive:
          </Typography>
          <CodeBlock language="css">{`/* hsl(hue, saturation, lightness) */
color: hsl(0, 100%, 50%); /* Red */
color: hsl(120, 100%, 50%); /* Green */
color: hsl(240, 100%, 50%); /* Blue */
/* Adjusting lightness */
color: hsl(0, 100%, 25%); /* Dark red */
color: hsl(0, 100%, 50%); /* Normal red */
color: hsl(0, 100%, 75%); /* Light red */`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Applying Colors</Typography>
          <Typography variant="h3">Text Color</Typography>
          <CodeBlock language="css">{`h1 {
 color: #2c3e50;
}
p {
 color: #666666;
}
a {
 color: #3498db;
}
a:hover {
 color: #2980b9;
}`}</CodeBlock>
          <Typography variant="h3">Background Color</Typography>
          <CodeBlock language="css">{`body {
 background-color: #f5f5f5;
}
header {
 background-color: #2c3e50;
 color: white;
}
.highlight {
 background-color: #ffff00;
}
.card {
 background-color: white;
}`}</CodeBlock>
          <Typography variant="h3">Color Schemes</Typography>
          <CodeBlock language="css">{`/* Professional color scheme example */
:root {
 --primary: #3498db; /* Main brand color */
 --secondary: #2ecc71; /* Accent color */
 --dark: #2c3e50; /* Dark backgrounds, headings */
 --light: #ecf0f1; /* Light backgrounds */
 --text: #333333; /* Body text */
 --text-light: #7f8c8d; /* Muted text */
}
body {
 background-color: var(--light);
 color: var(--text);
}
h1 {
 color: var(--dark);
}
a {
 color: var(--primary);
}
button {
 background-color: var(--primary);
 color: white;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Background Properties</Typography>
          <Typography variant="h3">Background Image</Typography>
          <CodeBlock language="css">{`.hero {
 background-image: url('images/hero-bg.jpg');
}`}</CodeBlock>
          <Typography variant="h3">Background Size</Typography>
          <CodeBlock language="css">{`.hero {
 background-image: url('images/hero-bg.jpg');
 background-size: cover; /* Covers entire element */
}
/* Options */
background-size: cover; /* Scale to cover, may crop */
background-size: contain; /* Scale to fit, may leave space */
background-size: 100% 100%; /* Stretch to fill */
background-size: 300px 200px; /* Specific size */`}</CodeBlock>
          <Typography variant="h3">Background Position</Typography>
          <CodeBlock language="css">{`.hero {
 background-image: url('images/hero-bg.jpg');
 background-size: cover;
 background-position: center; /* Center the image */
}
/* Options */
background-position: center;
background-position: top left;
background-position: bottom right;
background-position: 50% 50%;
background-position: 20px 40px;`}</CodeBlock>
          <Typography variant="h3">Background Repeat</Typography>
          <CodeBlock language="css">{`/* Default: repeats */
background-repeat: repeat;
/* No repeat */
background-repeat: no-repeat;
/* Repeat horizontally only */
background-repeat: repeat-x;
/* Repeat vertically only */
background-repeat: repeat-y;`}</CodeBlock>
          <Typography variant="h3">Complete Background Example</Typography>
          <CodeBlock language="css">{`.hero {
 background-image: url('images/hero-bg.jpg');
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 background-attachment: fixed; /* Parallax effect */
 height: 100vh;
}
/* Shorthand */
.hero {
 background: url('images/hero-bg.jpg') center/cover no-repeat fixed;
 height: 100vh;
}`}</CodeBlock>
          <Typography variant="h3">Gradient Backgrounds</Typography>
          <CodeBlock language="css">{`/* Linear gradient */
.gradient {
 background: linear-gradient(to right, #3498db, #2ecc71);
}
/* Angled gradient */
.gradient {
 background: linear-gradient(45deg, #3498db, #2ecc71);
}
/* Multiple colors */
.gradient {
 background: linear-gradient(to bottom, #3498db, #9b59b6, #e74c3c);
}
/* Radial gradient */
.gradient {
 background: radial-gradient(circle, #3498db, #2c3e50);
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Typography - Font Properties</Typography>
          <Typography variant="h3">Font Family</Typography>
          <CodeBlock language="css">{`body {
 font-family: Arial, Helvetica, sans-serif;
}
h1 {
 font-family: Georgia, 'Times New Roman', serif;
}
code {
 font-family: 'Courier New', Consolas, monospace;
}`}</CodeBlock>
          <Typography>
            Font Stack: List fonts in order of preference. The browser uses the first available one.
          </Typography>
          <Typography variant="h3">Web-Safe Fonts</Typography>
          <Typography>
            Fonts available on most computers:
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Serif</TableHead>
                <TableHead>Sans-Serif</TableHead>
                <TableHead>Monospace</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Georgia</TableCell>
                <TableCell>Arial</TableCell>
                <TableCell>Courier New</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Times New Roman</TableCell>
                <TableCell>Helvetica</TableCell>
                <TableCell>Consolas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Palatino</TableCell>
                <TableCell>Verdana</TableCell>
                <TableCell>Monaco</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Google Fonts</Typography>
          <Typography>
            Free fonts from Google:
          </Typography>
          <Typography>
            Step 1: Choose fonts at fonts.google.com
          </Typography>
          <Typography>
            Step 2: Add link in HTML &lt;head&gt;
          </Typography>
          <CodeBlock language="html">{`<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto&display=swap" rel="stylesheet">`}</CodeBlock>
          <Typography>
            Step 3: Use in CSS
          </Typography>
          <CodeBlock language="css">{`body {
 font-family: 'Open Sans', sans-serif;
}
h1 {
 font-family: 'Roboto', sans-serif;
}`}</CodeBlock>
          <Typography variant="h3">Font Size</Typography>
          <CodeBlock language="css">{`/* Pixels - fixed size */
p { font-size: 16px; }
/* Em - relative to parent */
p { font-size: 1.2em; }
/* Rem - relative to root (html) */
p { font-size: 1rem; }
/* Percentage */
p { font-size: 100%; }`}</CodeBlock>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Unit</TableHead>
                <TableHead>Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>px</TableCell>
                <TableCell>Precise sizes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>rem</TableCell>
                <TableCell>Scalable layouts</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>em</TableCell>
                <TableCell>Component-relative sizing</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>%</TableCell>
                <TableCell>Relative to parent</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Font Weight</Typography>
          <CodeBlock language="css">{`/* Keywords */
font-weight: normal; /* 400 */
font-weight: bold; /* 700 */
/* Numbers (100-900) */
font-weight: 100; /* Thin */
font-weight: 300; /* Light */
font-weight: 400; /* Normal */
font-weight: 500; /* Medium */
font-weight: 700; /* Bold */
font-weight: 900; /* Black */`}</CodeBlock>
          <Typography variant="h3">Font Style</Typography>
          <CodeBlock language="css">{`font-style: normal;
font-style: italic;
font-style: oblique;`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Text Properties</Typography>
          <Typography variant="h3">Text Alignment</Typography>
          <CodeBlock language="css">{`text-align: left; /* Default for LTR */
text-align: right;
text-align: center;
text-align: justify; /* Stretches to fill width */`}</CodeBlock>
          <Typography variant="h3">Text Decoration</Typography>
          <CodeBlock language="css">{`/* Underline, line-through, etc. */
text-decoration: none; /* Remove underline from links */
text-decoration: underline;
text-decoration: line-through; /* Strikethrough */
text-decoration: overline;`}</CodeBlock>
          <Typography variant="h3">Text Transform</Typography>
          <CodeBlock language="css">{`text-transform: none;
text-transform: uppercase; /* ALL CAPS */
text-transform: lowercase; /* all lowercase */
text-transform: capitalize; /* First Letter Of Each Word */`}</CodeBlock>
          <Typography variant="h3">Line Height</Typography>
          <CodeBlock language="css">{`/* Controls space between lines */
line-height: 1.6; /* Recommended for body text */
line-height: 1.2; /* Tighter for headings */
line-height: 24px; /* Exact pixels */`}</CodeBlock>
          <Typography variant="h3">Letter Spacing</Typography>
          <CodeBlock language="css">{`/* Space between letters */
letter-spacing: 1px;
letter-spacing: 0.1em;
letter-spacing: -0.5px; /* Tighter */`}</CodeBlock>
          <Typography variant="h3">Word Spacing</Typography>
          <CodeBlock language="css">{`word-spacing: 5px;`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Complete Typography Example</Typography>
          <CodeBlock language="css">{`/* Base typography */
body {
 font-family: 'Open Sans', Arial, sans-serif;
 font-size: 16px;
 line-height: 1.6;
 color: #333;
}
/* Headings */
h1, h2, h3, h4, h5, h6 {
 font-family: 'Roboto', Helvetica, sans-serif;
 font-weight: 700;
 line-height: 1.2;
 color: #2c3e50;
 margin-bottom: 0.5em;
}
h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
/* Paragraphs */
p {
 margin-bottom: 1rem;
}
/* Links */
a {
 color: #3498db;
 text-decoration: none;
}
a:hover {
 text-decoration: underline;
}
/* Intro paragraph */
.intro {
 font-size: 1.25rem;
 font-weight: 300;
 color: #555;
}
/* All caps heading */
.section-title {
 text-transform: uppercase;
 letter-spacing: 2px;
 font-size: 0.875rem;
 color: #666;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Color &amp; Typography Best Practices</Typography>
          <Typography variant="h3">Readability Rules</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>READABILITY BEST PRACTICES</li>
            <li>CONTRAST</li>
            <li>• Dark text on light background (or vice versa)</li>
            <li>• Avoid low-contrast combinations</li>
            <li>• Test readability!</li>
            <li>FONT SIZE</li>
            <li>• Body text: minimum 16px</li>
            <li>• Never go below 12px</li>
            <li>LINE HEIGHT</li>
            <li>• Body text: 1.5 - 1.7</li>
            <li>• Headings: 1.1 - 1.3</li>
            <li>LINE LENGTH</li>
            <li>• Ideal: 50-75 characters per line</li>
            <li>• Too wide = hard to read</li>
            <li>FONT CHOICES</li>
            <li>• Maximum 2-3 fonts per site</li>
            <li>• One for headings, one for body</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Color Formats</Typography>
          <Typography>
            Write these colors in hex, RGB, and named format:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Red</li>
            <li>White</li>
            <li>A dark gray</li>
          </ul>
          <Typography variant="h3">Exercise 2: Color Scheme</Typography>
          <Typography>
            Create a color scheme with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Primary color</li>
            <li>Secondary color</li>
            <li>Dark color for text</li>
            <li>Light color for backgrounds</li>
          </ul>
          <Typography variant="h3">Exercise 3: Hero Section</Typography>
          <Typography>
            Create a hero section with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Background image</li>
            <li>Cover sizing</li>
            <li>Centered content</li>
            <li>Text overlay (hint: use semi-transparent background)</li>
          </ul>
          <Typography variant="h3">Exercise 4: Typography System</Typography>
          <Typography>
            Create a complete typography system:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Body font (Google Fonts)</li>
            <li>Heading font</li>
            <li>Sizes for h1 through p</li>
            <li>Line heights</li>
            <li>Color scheme</li>
          </ul>
          <Typography variant="h3">Exercise 5: Style Your Bio Page</Typography>
          <Typography>
            Apply to your bio page:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Custom color scheme</li>
            <li>Google Fonts</li>
            <li>Background colors for sections</li>
            <li>Readable typography</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Color Formats
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Format</TableHead>
                <TableHead>Example</TableHead>
                <TableHead>Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Named</TableCell>
                <TableCell>blue</TableCell>
                <TableCell>Quick prototyping</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hex</TableCell>
                <TableCell>#3498db</TableCell>
                <TableCell>Most common</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>RGB</TableCell>
                <TableCell>rgb(52, 152, 219)</TableCell>
                <TableCell>Transparency needs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>HSL</TableCell>
                <TableCell>hsl(204, 70%, 53%)</TableCell>
                <TableCell>Easy variations</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Typography Properties
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Controls</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>font-family</TableCell>
                <TableCell>Which font</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>font-size</TableCell>
                <TableCell>How big</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>font-weight</TableCell>
                <TableCell>How bold</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>line-height</TableCell>
                <TableCell>Space between lines</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>text-align</TableCell>
                <TableCell>Horizontal alignment</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>text-decoration</TableCell>
                <TableCell>Underlines, etc.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>text-transform</TableCell>
                <TableCell>Uppercase, etc.</TableCell>
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
            <li>Master color formats</li>
            <li>Implement Google Fonts</li>
            <li>Create typography system</li>
            <li>Style bio page with colors and fonts</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 05 - The Box Model
          </Typography>
          <Typography>
            You will learn how spacing works in CSS!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Your designs are coming to life!
          </Typography>
          <Typography>
            Colors and fonts transform plain pages into beautiful ones.
          </Typography>
        </div>
      </section>
    </div>
  );
}
