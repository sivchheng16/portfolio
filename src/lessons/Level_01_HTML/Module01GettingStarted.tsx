
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module01GettingStarted() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Getting Started with Web Development</Typography>
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
            <li>Understand how the internet and websites work</li>
            <li>Explain what HTML is and why it matters</li>
            <li>Set up your development environment</li>
            <li>Create and view your first HTML page</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What is the Internet and How Websites Work</Typography>
          <Typography variant="h3">The Internet: A Global Network</Typography>
          <Typography>
            The Internet is a global network of interconnected computers that allows users to share information and communicate. Think of it as millions of computers talking to each other.
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>HOW THE INTERNET WORKS</li>
            <li>Your Computer Website Server</li>
            <li>(CLIENT) (SERVER)</li>
            <li>&quot;I want google.com&quot;</li>
            <li>sends google.com page</li>
            <li>The CLIENT asks for information</li>
            <li>The SERVER sends the information</li>
          </ul>
          <Typography variant="h3">Key Concepts</Typography>
          <Typography variant="h4">Client-Server Model</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>What it is</TableHead>
                <TableHead>Examples</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Client</TableCell>
                <TableCell>Your device that requests information</TableCell>
                <TableCell>Your computer, phone, tablet</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Server</TableCell>
                <TableCell>A computer that stores and sends website files</TableCell>
                <TableCell>Google&apos;s servers, KOOMPI&apos;s servers</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Browser</TableCell>
                <TableCell>Software that displays websites</TableCell>
                <TableCell>Chrome, Firefox, Safari</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h4">IP Addresses &amp; Domain Names</Typography>
          <Typography>
            Every computer on the internet has an address:
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Term</TableHead>
                <TableHead>What it is</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>IP Address</TableCell>
                <TableCell>Numerical address of a computer</TableCell>
                <TableCell>142.250.190.46</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Domain Name</TableCell>
                <TableCell>Human-readable name</TableCell>
                <TableCell>google.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>DNS</TableCell>
                <TableCell>System that translates domains to IPs</TableCell>
                <TableCell>Like a phonebook</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Example: When you type google.com, DNS translates it to 142.250.190.46, then your browser connects to that server.
          </Typography>
          <Typography variant="h4">What Browsers Do</Typography>
          <Typography>
            When you visit a website, your browser:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Takes your request (URL you typed)</li>
            <li>Finds the server using DNS</li>
            <li>Downloads the files (HTML, CSS, images)</li>
            <li>Renders (displays) the page for you</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Introduction to HTML</Typography>
          <Typography variant="h3">What is HTML?</Typography>
          <Typography>
            HTML stands for HyperText Markup Language.
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>HyperText: Text with links to other content</li>
            <li>Markup: A way to annotate text for structure</li>
            <li>Language: A set of rules computers understand</li>
            <li>HTML IS LIKE A SKELETON</li>
            <li>HTML + CSS + JavaScript = WEBSITE</li>
            <li>(Structure) (Appearance) (Behavior) (Complete)</li>
            <li>Skeleton Skin/Clothes Movement Living Being</li>
            <li>Defines what Makes it look Makes it The final</li>
            <li>content exists beautiful interactive result</li>
          </ul>
          <Typography variant="h3">HTML Tags</Typography>
          <Typography>
            HTML uses tags to define content. Tags are keywords inside angle brackets.
          </Typography>
          <CodeBlock language="html">{`<tagname>Content goes here</tagname>`}</CodeBlock>
          <Typography variant="h3">Parts of an Element</Typography>
          <CodeBlock language="html">{`<p>This is a paragraph.</p>`}</CodeBlock>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Part</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Opening Tag</TableCell>
                <TableCell>Starts the element</TableCell>
                <TableCell><code>&lt;p&gt;</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Content</TableCell>
                <TableCell>What appears on page</TableCell>
                <TableCell>This is a paragraph.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Closing Tag</TableCell>
                <TableCell>Ends the element (has <code>/</code>)</TableCell>
                <TableCell><code>&lt;/p&gt;</code></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Self-Closing Tags</Typography>
          <Typography>
            Some elements don't have content, so they close themselves:
          </Typography>
          <CodeBlock language="html">{`<img src="photo.jpg" alt="A photo">
<br>
<hr>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Setting Up Your Development Environment</Typography>
          <Typography variant="h3">What You Need</Typography>
          <Typography>
            To create websites, you need:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Text Editor — To write code</li>
            <li>Web Browser — To view your work</li>
          </ul>
          <Typography variant="h3">Text Editor: Visual Studio Code</Typography>
          <Typography>
            VS Code is the most popular code editor for web development.
          </Typography>
          <Typography>
            Installing VS Code on KOOMPI:
          </Typography>
          <CodeBlock language="bash">{`# Ask your mentor if VS Code is already installed
# Or install using your package manager

`}</CodeBlock>
          <Typography>
            If VS Code is already installed, open it:
          </Typography>
          <CodeBlock language="bash">{`code .`}</CodeBlock>
          <Typography>
            Why VS Code?
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Free and open-source</li>
            <li>Syntax highlighting (colors your code)</li>
            <li>Auto-completion (suggests code as you type)</li>
            <li>Extensions for extra features</li>
            <li>Used by millions of developers</li>
          </ul>
          <Typography variant="h3">Web Browser</Typography>
          <Typography>
            Use Firefox or Chromium (included in KOOMPI) to view your websites.
          </Typography>
          <Typography>
            Important feature: Developer Tools (DevTools)
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Right-click on any webpage → &quot;Inspect&quot; or press F12</li>
            <li>See the HTML structure of any website</li>
            <li>Very useful for learning and debugging</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Your First HTML Page - &quot;Hello World&quot;</Typography>
          <Typography variant="h3">Create Your First Website</Typography>
          <Typography>
            Step 1: Create project folder
          </Typography>
          <CodeBlock language="bash">{`cd ~/projects/learning/html-fundamentals
mkdir hello-world
cd hello-world`}</CodeBlock>
          <Typography>
            Step 2: Create the HTML file
          </Typography>
          <CodeBlock language="bash">{`touch index.html`}</CodeBlock>
          <Typography>
            Step 3: Open in VS Code
          </Typography>
          <CodeBlock language="bash">{`code index.html`}</CodeBlock>
          <Typography>
            Step 4: Type this code
          </Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>My First Webpage</title>
</head>
<body>
 <h1>Hello World!</h1>
 <p>This is my very first HTML page.</p>
 <p>I am learning web development at KOOMPI.</p>
</body>
</html>`}</CodeBlock>
          <Typography>
            Step 5: Save the file
            Press Ctrl + S
          </Typography>
          <Typography>
            Step 6: View in browser
          </Typography>
          <Typography>
            Option 1: Open file manager, navigate to your folder, double-click index.html
          </Typography>
          <Typography>
            Option 2: In terminal:
          </Typography>
          <CodeBlock language="bash">{`firefox index.html
# or
xdg-open index.html`}</CodeBlock>
          <Typography variant="h3">Congratulations! You&apos;ve built your first webpage</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Understanding the Code</Typography>
          <Typography>
            Let&apos;s break down each part of your first HTML page:
          </Typography>
          <Typography variant="h3">&lt;!DOCTYPE html&gt;</Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>`}</CodeBlock>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Not an HTML tag, but a declaration</li>
            <li>Tells the browser: &quot;This is an HTML5 document&quot;</li>
            <li>Must be the first line of every HTML file</li>
          </ul>
          <Typography variant="h3">&lt;html&gt; Element</Typography>
          <CodeBlock language="html">{`<html lang="en">
 ...
</html>`}</CodeBlock>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>The root element (everything goes inside)</li>
            <li>lang=&quot;en&quot; tells browsers the language is English</li>
            <li>Contains &lt;head&gt; and &lt;body&gt;</li>
          </ul>
          <Typography variant="h3">&lt;head&gt; Element</Typography>
          <CodeBlock language="html">{`<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>My First Webpage</title>
</head>`}</CodeBlock>
          <Typography>
            Contains metadata (information about the page, not visible content):
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>&lt;meta charset=&quot;UTF-8&quot;&gt;</TableCell>
                <TableCell>Allows all characters, including Khmer ខ្មែរ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;meta name=&quot;viewport&quot;&gt;</TableCell>
                <TableCell>Makes page work on mobile devices</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;title&gt;</TableCell>
                <TableCell>Shows in browser tab</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">&lt;body&gt; Element</Typography>
          <CodeBlock language="html">{`<body>
 <h1>Hello World!</h1>
 <p>This is my very first HTML page.</p>
 <p>I am learning web development at KOOMPI.</p>
</body>`}</CodeBlock>
          <Typography>
            Contains visible content — what users see:
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>&lt;h1&gt;</TableCell>
                <TableCell>Main heading (biggest)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;p&gt;</TableCell>
                <TableCell>Paragraph of text</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Using Browser Developer Tools</Typography>
          <Typography variant="h3">Why DevTools?</Typography>
          <Typography>
            Developer Tools let you:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>See the HTML structure of any webpage</li>
            <li>Find and fix problems in your code</li>
            <li>Learn how other websites are built</li>
            <li>Test changes without breaking your files</li>
          </ul>
          <Typography variant="h3">Opening DevTools</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Browser</TableHead>
                <TableHead>Shortcut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Firefox</TableCell>
                <TableCell>F12 or Ctrl + Shift + I</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Chrome</TableCell>
                <TableCell>F12 or Ctrl + Shift + I</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Or: Right-click anywhere on page → &quot;Inspect&quot;
          </Typography>
          <Typography variant="h3">DevTools Panels</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>DEVELOPER TOOLS PANELS</li>
            <li>ELEMENTS PANEL (or &quot;Inspector&quot; in Firefox)</li>
            <li>• See all HTML elements</li>
            <li>• Click to select elements on page</li>
            <li>• Edit HTML temporarily</li>
            <li>• Most important for HTML learning!</li>
            <li>CONSOLE PANEL</li>
            <li>• Shows errors (very useful!)</li>
            <li>• Run JavaScript (later)</li>
            <li>NETWORK PANEL</li>
            <li>• See all files being loaded</li>
            <li>• Loading times</li>
          </ul>
          <Typography variant="h3">Practice: Inspect Your Page</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Open your &quot;Hello World&quot; page in browser</li>
            <li>Press F12 to open DevTools</li>
            <li>Click on the &lt;h1&gt; element in the Elements panel</li>
            <li>Notice it highlights on the page</li>
            <li>Try double-clicking to edit the text (temporary change)</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Essential Web Terminology</Typography>
          <Typography variant="h3">Key Terms You Must Know</Typography>
          <Typography variant="h3">Example with All Parts</Typography>
          <CodeBlock language="html">{`<a href="https://koompi.com" target="_blank">Visit KOOMPI</a>`}</CodeBlock>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li><strong>Element</strong>: The entire line</li>
            <li><strong>Tag</strong>: <code>&lt;a&gt;</code> (opening) and <code>&lt;/a&gt;</code> (closing)</li>
            <li><strong>Attributes</strong>: <code>href</code> and <code>target</code></li>
            <li><strong>Content</strong>: "Visit KOOMPI"</li>
          </ul>
          <div className="mt-20 pt-10 border-t border-white/5">
            <Typography variant="h2">Module Summary</Typography>
            <Typography variant="h3">Key Vocabulary</Typography>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>English</TableHead>
                  <TableHead>Khmer</TableHead>
                  <TableHead>Meaning</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Internet</TableCell>
                  <TableCell>អុីនធឺណិត</TableCell>
                  <TableCell>Global network of computers</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Browser</TableCell>
                  <TableCell>កម្មវិធីរុករក</TableCell>
                  <TableCell>Software to view websites</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tag</TableCell>
                  <TableCell>ស្លាក</TableCell>
                  <TableCell>Markers defining HTML elements</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Element</TableCell>
                  <TableCell>ធាតុ</TableCell>
                  <TableCell>Complete HTML component</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Attribute</TableCell>
                  <TableCell>គុណលក្ខណៈ</TableCell>
                  <TableCell>Extra information in tags</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Typography variant="h3">What You Learned</Typography>
            <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
              <li>How the internet works (client-server)</li>
              <li>What HTML is and its role in websites</li>
              <li>Setting up VS Code for development</li>
              <li>Creating your first HTML page</li>
              <li>Using browser DevTools</li>
              <li>HTML terminology: tags, elements, attributes</li>
            </ul>
            <Typography variant="h3">Next Steps</Typography>
            <Typography>Before moving to Module 03:</Typography>
            <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
              <li>Complete all self-check exercises</li>
              <li>Create the "About Me" page</li>
              <li>Explore at least 3 websites using DevTools</li>
              <li>Get mentor verification</li>
            </ul>
            <div className="mt-12 p-8 glass-panel rounded-3xl text-center">
              <Typography variant="h4" className="text-primary">Coming Next</Typography>
              <Typography variant="lead" className="italic">Module 03 - HTML Document Structure</Typography>
              <Typography>You will learn the complete structure of HTML documents and semantic elements!</Typography>
            </div>
            <div className="mt-12 text-center opacity-40 italic">
              <Typography variant="muted">The journey of a web developer begins with "Hello World"</Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
