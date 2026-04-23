
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module03TextandLists() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Text Content &amp; Lists</Typography>
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
            <li>Use heading tags to create content hierarchy</li>
            <li>Format paragraphs and text properly</li>
            <li>Add emphasis with bold and italic text</li>
            <li>Create ordered, unordered, and description lists</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Headings - Creating Content Hierarchy</Typography>
          <Typography variant="h3">The Six Heading Levels</Typography>
          <Typography>
            HTML provides six levels of headings, from &lt;h1&gt; (most important) to &lt;h6&gt; (least important).
          </Typography>
          <CodeBlock language="html">{`<h1>This is Heading 1 - The Main Title</h1>
<h2>This is Heading 2 - Major Section</h2>
<h3>This is Heading 3 - Subsection</h3>
<h4>This is Heading 4 - Sub-subsection</h4>
<h5>This is Heading 5 - Minor heading</h5>
<h6>This is Heading 6 - Smallest heading</h6>`}</CodeBlock>
          <Typography variant="h3">Heading Hierarchy</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>HEADING HIERARCHY</li>
            <li>&lt;h1&gt; Learn Web Development at KOOMPI MAIN TITLE</li>
            <li>(only ONE per page)</li>
            <li>&lt;h2&gt; Track 02: Web Development MAJOR SECTION</li>
            <li>&lt;h3&gt; Level 1: HTML Fundamentals SUBSECTION</li>
            <li>&lt;h4&gt; Module 1: Getting Started SUB-SUBSECTION</li>
            <li>&lt;h4&gt; Module 2: Document Structure</li>
            <li>&lt;h3&gt; Level 2: CSS Styling</li>
            <li>&lt;h2&gt; Track 03: Business Skills</li>
          </ul>
          <Typography variant="h3">Important Rules for Headings</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rule</TableHead>
                <TableHead>Why</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Only ONE &lt;h1&gt; per page</TableCell>
                <TableCell>The page should have one main topic</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Don&apos;t skip levels</TableCell>
                <TableCell>Go h1 → h2 → h3, not h1 → h3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Use for structure, not size</TableCell>
                <TableCell>Don&apos;t use h3 just because it looks smaller</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Make them descriptive</TableCell>
                <TableCell>&quot;Our Services&quot; not &quot;Section 2&quot;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Example: Article Structure</Typography>
          <CodeBlock language="html">{`<article>
 <h1>The Complete Guide to Learning HTML</h1>
 <h2>Introduction</h2>
 <p>HTML is the foundation of web development...</p>
 <h2>Getting Started</h2>
 <h3>What You Need</h3>
 <p>A text editor and a browser...</p>
 <h3>Your First Page</h3>
 <p>Create a file called index.html...</p>
 <h2>Basic Elements</h2>
 <h3>Text Elements</h3>
 <h4>Headings</h4>
 <p>There are six levels of headings...</p>
 <h4>Paragraphs</h4>
 <p>Use the p tag for paragraphs...</p>
 <h2>Conclusion</h2>
 <p>You now know the basics of HTML...</p>
</article>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Paragraphs and Text Blocks</Typography>
          <Typography variant="h3">The &lt;p&gt; Element</Typography>
          <Typography>
            The &lt;p&gt; element defines a paragraph of text.
          </Typography>
          <CodeBlock language="html">{`<p>This is a paragraph. Browsers automatically add space before and after paragraphs.</p>
<p>This is another paragraph. Notice there's space between them.</p>`}</CodeBlock>
          <Typography variant="h3">Line Breaks</Typography>
          <Typography>
            To break a line without starting a new paragraph, use &lt;br&gt;:
          </Typography>
          <CodeBlock language="html">{`<p>
 KOOMPI Company<br>
 Phnom Penh, Cambodia<br>
 info@koompi.com
</p>`}</CodeBlock>
          <Typography>
            Note: &lt;br&gt; is a void element (no closing tag).
          </Typography>
          <Typography variant="h3">Horizontal Rule</Typography>
          <Typography>
            The &lt;hr&gt; element creates a horizontal line, useful for separating sections:
          </Typography>
          <CodeBlock language="html">{`<h2>Section One</h2>
<p>Content of section one...</p>
<hr>
<h2>Section Two</h2>
<p>Content of section two...</p>`}</CodeBlock>
          <Typography variant="h3">Preformatted Text</Typography>
          <Typography>
            The &lt;pre&gt; element preserves spaces and line breaks exactly as written:
          </Typography>
          <CodeBlock language="html">{`<pre>
 Name: Sokha
 Age: 22
 Country: Cambodia
</pre>`}</CodeBlock>
          <Typography>
            This displays with the exact spacing, unlike normal HTML which collapses multiple spaces.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Text Formatting and Emphasis</Typography>
          <Typography variant="h3">Semantic vs Presentational Elements</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Semantic (Use These)</TableHead>
                <TableHead>Presentational (Avoid)</TableHead>
                <TableHead>Visual Effect</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>&lt;strong&gt;</TableCell>
                <TableCell>&lt;b&gt;</TableCell>
                <TableCell>Bold</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;em&gt;</TableCell>
                <TableCell>&lt;i&gt;</TableCell>
                <TableCell>Italic</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Why semantic? Screen readers say &quot;emphasized&quot; for &lt;em&gt; but just &quot;italic&quot; for &lt;i&gt;.
          </Typography>
          <Typography variant="h3">Strong (Bold/Important)</Typography>
          <Typography>
            Use &lt;strong&gt; for text with strong importance:
          </Typography>
          <CodeBlock language="html">{`<p><strong>Warning:</strong> Do not delete system files!</p>
<p>The deadline is <strong>December 31, 2024</strong>.</p>`}</CodeBlock>
          <Typography variant="h3">Emphasis (Italic)</Typography>
          <Typography>
            Use &lt;em&gt; for text with emphasis:
          </Typography>
          <CodeBlock language="html">{`<p>You <em>must</em> complete all exercises.</p>
<p>The word <em>semantic</em> means meaningful.</p>`}</CodeBlock>
          <Typography variant="h3">Combining Formatting</Typography>
          <Typography>
            You can nest formatting elements:
          </Typography>
          <CodeBlock language="html">{`<p>This is <strong><em>very important</em></strong>.</p>`}</CodeBlock>
          <Typography variant="h3">Other Text Elements</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>&lt;mark&gt;</TableCell>
                <TableCell>Highlighted text</TableCell>
                <TableCell>&lt;mark&gt;highlighted&lt;/mark&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;small&gt;</TableCell>
                <TableCell>Smaller text (fine print)</TableCell>
                <TableCell>&lt;small&gt;Terms apply&lt;/small&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;del&gt;</TableCell>
                <TableCell>Deleted text (strikethrough)</TableCell>
                <TableCell>&lt;del&gt;old price&lt;/del&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;ins&gt;</TableCell>
                <TableCell>Inserted text (underline)</TableCell>
                <TableCell>&lt;ins&gt;new text&lt;/ins&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;sub&gt;</TableCell>
                <TableCell>Subscript</TableCell>
                <TableCell>H&lt;sub&gt;2&lt;/sub&gt;O</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;sup&gt;</TableCell>
                <TableCell>Superscript</TableCell>
                <TableCell>x&lt;sup&gt;2&lt;/sup&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;code&gt;</TableCell>
                <TableCell>Code snippet</TableCell>
                <TableCell>&lt;code&gt;console.log()&lt;/code&gt;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Example: Formatted Article</Typography>
          <CodeBlock language="html">{`<article>
 <h1>HTML Text Formatting</h1>
 <p>HTML provides many ways to format text. The most common are 
 <strong>bold</strong> and <em>italic</em>.</p>
 <p><strong>Important:</strong> Use semantic elements like 
 <code>&lt;strong&gt;</code> instead of <code>&lt;b&gt;</code>.</p>
 <p>Water is written as H<sub>2</sub>O in chemistry.</p>
 <p>The area formula is πr<sup>2</sup>.</p>
 <p><small>© 2024 KOOMPI. All rights reserved.</small></p>
</article>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Unordered Lists</Typography>
          <Typography variant="h3">What is an Unordered List?</Typography>
          <Typography>
            An unordered list displays items with bullet points. Order doesn&apos;t matter.
          </Typography>
          <CodeBlock language="html">{`<ul>
 <li>Rice</li>
 <li>Fish</li>
 <li>Vegetables</li>
</ul>`}</CodeBlock>
          <Typography>
            Displays as:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Rice</li>
            <li>Fish</li>
            <li>Vegetables</li>
          </ul>
          <Typography variant="h3">When to Use Unordered Lists</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Good Use Cases</TableHead>
                <TableHead>Bad Use Cases</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Shopping list</TableCell>
                <TableCell>Step-by-step instructions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Feature list</TableCell>
                <TableCell>Numbered procedures</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Navigation menu</TableCell>
                <TableCell>Rankings</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Example: Skills List</Typography>
          <CodeBlock language="html">{`<h2>My Skills</h2>
<ul>
 <li>HTML</li>
 <li>CSS</li>
 <li>Linux Terminal</li>
 <li>Basic English</li>
</ul>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Ordered Lists</Typography>
          <Typography variant="h3">What is an Ordered List?</Typography>
          <Typography>
            An ordered list displays items with numbers. Order matters.
          </Typography>
          <CodeBlock language="html">{`<ol>
 <li>Turn on computer</li>
 <li>Open text editor</li>
 <li>Create new file</li>
 <li>Write HTML code</li>
 <li>Save and preview</li>
</ol>`}</CodeBlock>
          <Typography>
            Displays as:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Turn on computer</li>
            <li>Open text editor</li>
            <li>Create new file</li>
            <li>Write HTML code</li>
            <li>Save and preview</li>
          </ul>
          <Typography variant="h3">Ordered List Attributes</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Attribute</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>type</TableCell>
                <TableCell>Number style</TableCell>
                <TableCell>type=&quot;A&quot;, type=&quot;a&quot;, type=&quot;I&quot;, type=&quot;i&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>start</TableCell>
                <TableCell>Starting number</TableCell>
                <TableCell>start=&quot;5&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>reversed</TableCell>
                <TableCell>Count backwards</TableCell>
                <TableCell>&lt;ol reversed&gt;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Examples with Attributes</Typography>
          <CodeBlock language="html">{`<!-- Letters instead of numbers -->
<ol type="A">
 <li>First item</li> <!-- Displays as A. -->
 <li>Second item</li> <!-- Displays as B. -->
</ol>
<!-- Start from different number -->
<ol start="5">
 <li>Fifth item</li> <!-- Displays as 5. -->
 <li>Sixth item</li> <!-- Displays as 6. -->
</ol>
<!-- Roman numerals -->
<ol type="I">
 <li>Chapter One</li> <!-- Displays as I. -->
 <li>Chapter Two</li> <!-- Displays as II. -->
</ol>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Nested Lists</Typography>
          <Typography variant="h3">Lists Inside Lists</Typography>
          <Typography>
            You can put lists inside other lists:
          </Typography>
          <CodeBlock language="html">{`<h2>Web Development Curriculum</h2>
<ol>
 <li>HTML Fundamentals
 <ul>
 <li>Document Structure</li>
 <li>Text Content</li>
 <li>Links and Images</li>
 </ul>
 </li>
 <li>CSS Styling
 <ul>
 <li>Selectors</li>
 <li>Box Model</li>
 <li>Layout</li>
 </ul>
 </li>
 <li>JavaScript
 <ul>
 <li>Variables</li>
 <li>Functions</li>
 <li>DOM</li>
 </ul>
 </li>
</ol>`}</CodeBlock>
          <Typography variant="h3">Proper Nesting</Typography>
          <Typography>
            Important: The nested list goes INSIDE the &lt;li&gt; element:
          </Typography>
          <CodeBlock language="html">{`<!-- CORRECT -->
<ul>
 <li>Item
 <ul>
 <li>Nested item</li>
 </ul>
 </li>
</ul>
<!-- WRONG -->
<ul>
 <li>Item</li>
 <ul>
 <li>Nested item</li>
 </ul>
</ul>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Description Lists</Typography>
          <Typography variant="h3">What is a Description List?</Typography>
          <Typography>
            A description list pairs terms with their definitions.
          </Typography>
          <CodeBlock language="html">{`<dl>
 <dt>HTML</dt>
 <dd>HyperText Markup Language - the structure of web pages</dd>
 <dt>CSS</dt>
 <dd>Cascading Style Sheets - the styling of web pages</dd>
 <dt>JavaScript</dt>
 <dd>A programming language - adds interactivity to web pages</dd>
</dl>`}</CodeBlock>
          <Typography variant="h3">Description List Elements</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element</TableHead>
                <TableHead>Meaning</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>&lt;dl&gt;</TableCell>
                <TableCell>Description List</TableCell>
                <TableCell>Container for all items</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;dt&gt;</TableCell>
                <TableCell>Description Term</TableCell>
                <TableCell>The word/term being defined</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;dd&gt;</TableCell>
                <TableCell>Description Details</TableCell>
                <TableCell>The explanation/definition</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Multiple Definitions</Typography>
          <Typography>
            A term can have multiple definitions:
          </Typography>
          <CodeBlock language="html">{`<dl>
 <dt>JavaScript</dt>
 <dd>A programming language for web development</dd>
 <dd>Can run in browsers and on servers (Node.js)</dd>
 <dd>Originally created in 1995</dd>
</dl>`}</CodeBlock>
          <Typography variant="h3">Use Cases for Description Lists</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Good Use</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Glossary</TableCell>
                <TableCell>Technical terms and definitions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>FAQ</TableCell>
                <TableCell>Question and answer pairs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Metadata</TableCell>
                <TableCell>Key-value pairs like &quot;Author: Sokha&quot;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Heading Practice</Typography>
          <Typography>Create a page about Cambodia with proper heading structure.</Typography>
          
          <Typography variant="h3">Exercise 2: Format This Text</Typography>
          <Typography>Take plain text and add HTML formatting using strong, em, and lists.</Typography>

          <div className="mt-20 pt-10 border-t border-white/5">
            <Typography variant="h2">Module Summary</Typography>
            <Typography variant="h3">Key Rules</Typography>
            <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
              <li>Only one &lt;h1&gt; per page</li>
              <li>Don't skip heading levels</li>
              <li>Use semantic elements (&lt;strong&gt; not &lt;b&gt;)</li>
              <li>Nested lists go inside &lt;li&gt; elements</li>
            </ul>
            <Typography variant="h3">Next Steps</Typography>
            <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
              <li>Complete all exercises</li>
              <li>Get mentor verification</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
