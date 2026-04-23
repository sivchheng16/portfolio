
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module02DocumentStructure() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">HTML Document Structure</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 01: HTML Fundamentals</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Objectives</Typography>
          <Typography>
            By the end of this module, you will be able to:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Understand the complete structure of HTML documents</li>
            <li>Use the DOCTYPE declaration correctly</li>
            <li>Work with &lt;html&gt;, &lt;head&gt;, and &lt;body&gt; elements</li>
            <li>Add metadata and configure your pages properly</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: The Complete HTML5 Structure</Typography>
          <Typography variant="h3">Every HTML Page Has This Structure</Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
 <!-- Metadata goes here (not visible) -->
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Page Title</title>
</head>
<body>
 <!-- Visible content goes here -->
</body>
</html>`}</CodeBlock>
          <Typography variant="h3">Visual Representation</Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────────────────────┐
│ <!DOCTYPE html> ← Declaration (tells browser this is HTML5) │
├─────────────────────────────────────────────────────────────────────────────┤
│ <html lang="en"> ← Root element (contains everything) │
│ ├─────────────────────────────────────────────────────────────────────┐ │
│ │ <head> ← Metadata container (invisible info) │ │
│ │ │ │ │
│ │ │ <meta charset="UTF-8"> │ │
│ │ │ <meta name="viewport" content="..."> │ │
│ │ │ <title>Page Title</title> │ │
│ │ │ <link rel="stylesheet" href="style.css"> │ │
│ │ │ │ │
│ │ </head> │ │
│ ├─────────────────────────────────────────────────────────────────────┤ │
│ │ <body> ← Content container (visible content) │ │
│ │ │ │ │
│ │ │ <h1>Welcome</h1> │ │
│ │ │ <p>This is visible on the page!</p> │ │
│ │ │ │ │
│ │ </body> │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ </html> │
└─────────────────────────────────────────────────────────────────────────────┘`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: The DOCTYPE Declaration</Typography>
          <Typography variant="h3">What is DOCTYPE?</Typography>
          <Typography>
            The &lt;!DOCTYPE html&gt; declaration:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Tells the browser which version of HTML to expect</li>
            <li>Must be the very first line (no spaces or comments before it)</li>
            <li>Is NOT case-sensitive (but lowercase is convention)</li>
            <li>Is NOT an HTML tag</li>
          </ul>
          <Typography variant="h3">Why It Matters</Typography>
          <Typography>
            Without DOCTYPE, browsers enter &quot;quirks mode&quot; — they try to guess how to display the page, often incorrectly.
          </Typography>
          <Typography>
            With DOCTYPE, browsers use &quot;standards mode&quot; — they follow modern web standards.
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>QUIRKS MODE vs STANDARDS MODE</li>
            <li>WITHOUT DOCTYPE WITH DOCTYPE</li>
            <li>Quirks Mode Standards Mode</li>
            <li>• Unpredictable behavior • Consistent behavior</li>
            <li>• Different across browsers • Same across browsers</li>
            <li>• Old CSS bugs • Modern CSS support</li>
            <li>• Harder to debug • Easier to debug</li>
          </ul>
          <Typography variant="h3">Modern HTML5 DOCTYPE</Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>`}</CodeBlock>
          <Typography>
            This simple declaration is all you need for HTML5. Previous versions had longer, complex DOCTYPEs.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: The &lt;html&gt; Element</Typography>
          <Typography variant="h3">The Root Element</Typography>
          <Typography>
            Everything in your HTML document (except DOCTYPE) goes inside the &lt;html&gt; element.
          </Typography>
          <CodeBlock language="html">{`<html lang="en">
 <!-- All other elements go here -->
</html>`}</CodeBlock>
          <Typography variant="h3">The lang Attribute</Typography>
          <Typography>
            The lang attribute specifies the primary language of the document.
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Language</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>en</TableCell>
                <TableCell>English</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>km</TableCell>
                <TableCell>Khmer (ភាសាខ្មែរ)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>zh</TableCell>
                <TableCell>Chinese</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ja</TableCell>
                <TableCell>Japanese</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>th</TableCell>
                <TableCell>Thai</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Why use lang?
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Screen readers use it to pronounce words correctly</li>
            <li>Search engines use it for language-specific results</li>
            <li>Translation tools detect the language</li>
            <li>Required for accessibility</li>
          </ul>
          <Typography variant="h3">Khmer Language Example</Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="km">
<head>
 <meta charset="UTF-8">
 <title>គេហទំព័រខ្មែរ</title>
</head>
<body>
 <h1>សួស្តី ពិភពលោក!</h1>
 <p>នេះគឺជាទំព័រដំបូងរបស់ខ្ញុំ។</p>
</body>
</html>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: The &lt;head&gt; Element</Typography>
          <Typography variant="h3">Metadata Container</Typography>
          <Typography>
            The &lt;head&gt; contains information about the page, not the page content itself. Nothing in &lt;head&gt; is visible on the page (except &lt;title&gt; in the browser tab).
          </Typography>
          <Typography variant="h3">Essential Head Elements</Typography>
          <CodeBlock language="html">{`<head>
 <!-- Character encoding - ALWAYS include first -->
 <meta charset="UTF-8">
 <!-- Responsive design - ALWAYS include -->
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <!-- Page title - ALWAYS include -->
 <title>Your Page Title</title>
 <!-- Description for search engines -->
 <meta name="description" content="A brief description of your page">
 <!-- Link to CSS stylesheet -->
 <link rel="stylesheet" href="css/style.css">
 <!-- Favicon (icon in browser tab) -->
 <link rel="icon" href="favicon.ico">
</head>`}</CodeBlock>
          <Typography variant="h3">Understanding Each Element</Typography>
          <Typography variant="h4">&lt;meta charset=&quot;UTF-8&quot;&gt;</Typography>
          <Typography>
            Defines character encoding. UTF-8 supports all characters including:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>English: Hello</li>
            <li>Khmer: សួស្តី</li>
            <li>Chinese: 你好</li>
            <li>Emoji:</li>
          </ul>
          <Typography>
            Always put this first in your &lt;head&gt;.
          </Typography>
          <Typography variant="h4">&lt;meta name=&quot;viewport&quot;&gt;</Typography>
          <CodeBlock language="html">{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</CodeBlock>
          <Typography>
            Makes your page work on mobile devices:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>width=device-width: Use the device&apos;s width</li>
            <li>initial-scale=1.0: Start at 100% zoom</li>
          </ul>
          <Typography variant="h4">&lt;title&gt;</Typography>
          <CodeBlock language="html">{`<title>KOOMPI - Technology for Everyone</title>`}</CodeBlock>
          <Typography>
            The title appears:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>In the browser tab</li>
            <li>In bookmarks</li>
            <li>In search engine results</li>
            <li>When sharing on social media</li>
          </ul>
          <Typography>
            Good titles:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Are descriptive</li>
            <li>Are 50-60 characters</li>
            <li>Include the page topic and site name</li>
          </ul>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bad</TableHead>
                <TableHead>Good</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>index</TableCell>
                <TableCell>Home - KOOMPI Apprenticeship</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>My Page</TableCell>
                <TableCell>About Me - Sokha&apos;s Portfolio</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Page 1</TableCell>
                <TableCell>Getting Started with HTML - Tutorial</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: The &lt;body&gt; Element</Typography>
          <Typography variant="h3">Content Container</Typography>
          <Typography>
            The &lt;body&gt; contains everything users see and interact with.
          </Typography>
          <CodeBlock language="html">{`<body>
 <header>
 <!-- Site header, navigation -->
 </header>
 <main>
 <!-- Main content -->
 </main>
 <footer>
 <!-- Site footer -->
 </footer>
</body>`}</CodeBlock>
          <Typography variant="h3">Common Body Elements (Preview)</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>&lt;header&gt;</TableCell>
                <TableCell>Page or section header</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;nav&gt;</TableCell>
                <TableCell>Navigation links</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;main&gt;</TableCell>
                <TableCell>Main content (use only once)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;article&gt;</TableCell>
                <TableCell>Self-contained content</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;section&gt;</TableCell>
                <TableCell>Thematic grouping</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;aside&gt;</TableCell>
                <TableCell>Sidebar content</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;footer&gt;</TableCell>
                <TableCell>Page or section footer</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Semantic HTML</Typography>
          <Typography>
            Semantic means &quot;meaningful.&quot; Using the right tags helps:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Screen readers navigate the page</li>
            <li>Search engines understand content</li>
            <li>Developers read the code</li>
          </ul>
          <CodeBlock language="html">{`<!-- Non-semantic (bad) -->
<div id="header">
 <div id="nav">Links here</div>
</div>
<!-- Semantic (good) -->
<header>
 <nav>Links here</nav>
</header>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: HTML Comments</Typography>
          <Typography variant="h3">What Are Comments?</Typography>
          <Typography>
            Comments are notes in your code that browsers ignore. Only developers see them.
          </Typography>
          <CodeBlock language="html">{`<!-- This is a comment -->`}</CodeBlock>
          <Typography variant="h3">Using Comments</Typography>
          <CodeBlock language="html">{`<body>
 <!-- Main Navigation -->
 <nav>
 <a href="index.html">Home</a>
 <a href="about.html">About</a>
 </nav>
 <!-- Main Content Section -->
 <main>
 <h1>Welcome</h1>
 <!-- TODO: Add more content here -->
 </main>
 <!-- Footer -->
 <footer>
 <p>© 2024 KOOMPI</p>
 </footer>
</body>`}</CodeBlock>
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
                <TableCell>Mark sections</TableCell>
                <TableCell>Comment obvious code</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Leave TODO notes</TableCell>
                <TableCell>Write novels in comments</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Explain complex parts</TableCell>
                <TableCell>Leave debugging comments in final code</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Complete Page Template</Typography>
          <Typography variant="h3">Your Starting Template</Typography>
          <Typography>
            Save this as your template for new projects:
          </Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
 <!-- Character encoding -->
 <meta charset="UTF-8">
 <!-- Responsive design -->
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <!-- Page info -->
 <title>Page Title - Site Name</title>
 <meta name="description" content="Brief description of this page">
 <!-- Styles -->
 <link rel="stylesheet" href="css/style.css">
</head>
<body>
 <!-- Header -->
 <header>
 <nav>
 <a href="index.html">Home</a>
 <a href="about.html">About</a>
 <a href="contact.html">Contact</a>
 </nav>
 </header>
 <!-- Main Content -->
 <main>
 <h1>Page Heading</h1>
 <p>Page content goes here.</p>
 </main>
 <!-- Footer -->
 <footer>
 <p>© 2024 Your Name. All rights reserved.</p>
 </footer>
 <!-- Scripts (if needed) -->
 <script src="js/main.js"></script>
</body>
</html>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Structure Quiz</Typography>
          <Typography>
            Answer these questions:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>What must be the first line of every HTML file?</li>
            <li>What are the two main sections inside &lt;html&gt;?</li>
            <li>What goes in &lt;head&gt;?</li>
            <li>What goes in &lt;body&gt;?</li>
            <li>Why do we use lang=&quot;en&quot; or lang=&quot;km&quot;?</li>
          </ul>
          <Typography variant="h3">Exercise 2: Fix the Errors</Typography>
          <Typography>
            This code has errors. Find and fix them:
          </Typography>
          <CodeBlock language="html">{`<html>
<head>
<body>
 <h1>My Page</h1>
</body>
</head>
</html>`}</CodeBlock>
          <Typography>
            Errors to find:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Missing DOCTYPE</li>
            <li>Missing &lt;title&gt;</li>
            <li>Missing &lt;meta charset&gt;</li>
            <li>Tags in wrong order</li>
          </ul>
          <Typography variant="h3">Exercise 3: Create Multi-Language Pages</Typography>
          <Typography>
            Create two pages:
          </Typography>
          <Typography>
            english.html:
          </Typography>
          <CodeBlock language="html">{`<!-- Create a page in English with lang="en" -->
<!-- Title: Welcome -->
<!-- Content: A greeting and introduction -->`}</CodeBlock>
          <Typography>
            khmer.html:
          </Typography>
          <CodeBlock language="html">{`<!-- Create a page in Khmer with lang="km" -->
<!-- Title: សួស្តី -->
<!-- Content: A greeting and introduction in Khmer -->`}</CodeBlock>
          <Typography variant="h3">Exercise 4: Add Metadata</Typography>
          <Typography>
            Take one of your pages and add:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>A proper &lt;title&gt; (descriptive)</li>
            <li>A &lt;meta name=&quot;description&quot;&gt; tag</li>
            <li>Proper comments marking each section</li>
          </ul>
          <Typography variant="h3">Exercise 5: Build From Memory</Typography>
          <Typography>
            Without looking at notes, create a complete HTML page structure including:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>DOCTYPE</li>
            <li>html with lang</li>
            <li>head with charset, viewport, title</li>
            <li>body with header, main, footer</li>
            <li>Comments marking each section</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <div className="mt-20 pt-10 border-t border-white/5">
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
                  <TableCell>DOCTYPE</TableCell>
                  <TableCell>Declaration that specifies HTML version</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Root element</TableCell>
                  <TableCell>The <code>&lt;html&gt;</code> element containing everything</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Metadata</TableCell>
                  <TableCell>Information about the page (in head)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Semantic</TableCell>
                  <TableCell>Using meaningful, descriptive tags</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Character encoding</TableCell>
                  <TableCell>System for representing characters (UTF-8)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Typography variant="h3">Structure Summary</Typography>
            <CodeBlock language="text">{`<!DOCTYPE html>
├── <html lang="en">
│   ├── <head>
│   │   ├── <meta charset="UTF-8">
│   │   ├── <meta name="viewport">
│   │   ├── <title>
│   │   └── <link>, <meta>, etc.
│   │
│   └── <body>
│       ├── <header>
│       ├── <main>
│       └── <footer>
│
└── </html>`}</CodeBlock>
            <Typography variant="h2">Next Steps</Typography>
            <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
              <li>Complete all exercises</li>
              <li>Create the template file</li>
              <li>Build English and Khmer pages</li>
              <li>Get mentor verification</li>
            </ul>
            <div className="mt-12 p-8 glass-panel rounded-3xl text-center">
              <Typography variant="h4" className="text-primary">Coming Next</Typography>
              <Typography variant="lead" className="italic">Module 04 - Text Content & Lists</Typography>
              <Typography>You will learn to structure text with headings, paragraphs, and lists!</Typography>
            </div>
            <div className="mt-12 text-center opacity-40 italic">
               <Typography variant="muted">Great structure = Great websites!</Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
