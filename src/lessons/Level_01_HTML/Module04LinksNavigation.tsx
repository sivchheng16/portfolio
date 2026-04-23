
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module04LinksNavigation() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Links &amp; Navigation</Typography>
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
            <li>Create hyperlinks using the anchor tag</li>
            <li>Understand absolute vs relative URLs</li>
            <li>Link to external websites, other pages, and page sections</li>
            <li>Create navigation menus</li>
            <li>Use special link types (email, phone)</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Introduction to Hyperlinks</Typography>
          <Typography variant="h3">What is a Hyperlink?</Typography>
          <Typography>
            A hyperlink (or just &quot;link&quot;) is text or an image that you can click to go to another location. Links are what connect the &quot;web&quot; together.
          </Typography>
          <CodeBlock language="html">{`<a href="https://koompi.com">Visit KOOMPI</a>`}</CodeBlock>
          <Typography variant="h3">The Anchor Element</Typography>
          <Typography>
            The &lt;a&gt; (anchor) element creates links:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>&lt;a href=&quot;URL&quot;&gt;Link Text&lt;/a&gt;</li>
            <li>What users see and click</li>
            <li>Where the link goes (destination)</li>
            <li>Anchor tag</li>
          </ul>
          <Typography variant="h3">Anatomy of a Link</Typography>
          <CodeBlock language="html">{`<a href="https://www.google.com" target="_blank" title="Search Engine">Google</a>
 │ │ │ │
 │ │ │ └── Visible text
 │ │ └── Tooltip on hover
 │ └── Open in new tab
 └── Destination URL`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Types of URLs</Typography>
          <Typography variant="h3">Absolute URLs</Typography>
          <Typography>
            Absolute URLs include the full address. Use for external websites.
          </Typography>
          <CodeBlock language="html">{`<a href="https://www.google.com">Google</a>
<a href="https://koompi.com">KOOMPI</a>
<a href="https://github.com">GitHub</a>`}</CodeBlock>
          <Typography>
            Structure of absolute URL:
          </Typography>
          <CodeBlock language="text">{`https://www.example.com/folder/page.html
│ │ │
│ │ └── Path to file
│ └── Domain name
└── Protocol (https = secure)`}</CodeBlock>
          <Typography variant="h3">Relative URLs</Typography>
          <Typography>
            Relative URLs are paths from your current location. Use for your own website.
          </Typography>
          <CodeBlock language="text">{`my-website/
├── index.html ← You are here
├── about.html
├── contact.html
└── pages/
 ├── services.html
 └── team.html`}</CodeBlock>
          <Typography>
            From index.html:
          </Typography>
          <CodeBlock language="html">{`<!-- Same folder -->
<a href="about.html">About Us</a>
<a href="contact.html">Contact</a>
<!-- Subfolder -->
<a href="pages/services.html">Services</a>
<a href="pages/team.html">Our Team</a>`}</CodeBlock>
          <Typography>
            From pages/services.html:
          </Typography>
          <CodeBlock language="html">{`<!-- Go up one folder, then to file -->
<a href="../index.html">Home</a>
<a href="../about.html">About</a>
<!-- Same folder -->
<a href="team.html">Our Team</a>`}</CodeBlock>
          <Typography variant="h3">Path Reference</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Path</TableHead>
                <TableHead>Meaning</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>page.html</TableCell>
                <TableCell>File in same folder</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>folder/page.html</TableCell>
                <TableCell>File in subfolder</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>../page.html</TableCell>
                <TableCell>File in parent folder</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>../../page.html</TableCell>
                <TableCell>File two folders up</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>/page.html</TableCell>
                <TableCell>File from website root</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Link Attributes</Typography>
          <Typography variant="h3">Essential Attributes</Typography>
          <Typography variant="h4">href (Hypertext Reference)</Typography>
          <Typography>
            The destination URL. Required for a link to work.
          </Typography>
          <CodeBlock language="html">{`<a href="about.html">About</a>`}</CodeBlock>
          <Typography variant="h4">target (Where to Open)</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Value</TableHead>
                <TableHead>Behavior</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>_self</TableCell>
                <TableCell>Same tab (default)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>_blank</TableCell>
                <TableCell>New tab/window</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <CodeBlock language="html">{`<!-- Opens in same tab -->
<a href="about.html">About</a>
<!-- Opens in new tab -->
<a href="https://google.com" target="_blank">Google</a>`}</CodeBlock>
          <Typography>
            Best Practice: Use target=&quot;_blank&quot; for external links.
          </Typography>
          <Typography variant="h4">title (Tooltip)</Typography>
          <Typography>
            Shows text when hovering over the link:
          </Typography>
          <CodeBlock language="html">{`<a href="about.html" title="Learn more about KOOMPI">About Us</a>`}</CodeBlock>
          <Typography variant="h3">Security for External Links</Typography>
          <Typography>
            When using target=&quot;_blank&quot;, add security attributes:
          </Typography>
          <CodeBlock language="html">{`<a href="https://external-site.com" 
 target="_blank" 
 rel="noopener noreferrer">
 External Link
</a>`}</CodeBlock>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Attribute</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>noopener</TableCell>
                <TableCell>Prevents security vulnerabilities</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>noreferrer</TableCell>
                <TableCell>Doesn&apos;t send referrer information</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Internal Page Navigation</Typography>
          <Typography variant="h3">Linking to Page Sections</Typography>
          <Typography>
            You can link to specific parts of the same page using IDs.
          </Typography>
          <Typography>
            Step 1: Add an ID to the target element
          </Typography>
          <CodeBlock language="html">{`<h2 id="about">About Us</h2>
<h2 id="services">Our Services</h2>
<h2 id="contact">Contact Us</h2>`}</CodeBlock>
          <Typography>
            Step 2: Link to the ID using #
          </Typography>
          <CodeBlock language="html">{`<a href="#about">Go to About</a>
<a href="#services">Go to Services</a>
<a href="#contact">Go to Contact</a>`}</CodeBlock>
          <Typography variant="h3">Complete Example: Table of Contents</Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>My Article</title>
</head>
<body>
 <h1>Complete Guide to HTML</h1>
 <!-- Table of Contents -->
 <nav>
 <h2>Contents</h2>
 <ul>
 <li><a href="#introduction">Introduction</a></li>
 <li><a href="#basics">HTML Basics</a></li>
 <li><a href="#elements">Common Elements</a></li>
 <li><a href="#conclusion">Conclusion</a></li>
 </ul>
 </nav>
 <!-- Sections -->
 <section id="introduction">
 <h2>Introduction</h2>
 <p>HTML is the foundation of web pages...</p>
 </section>
 <section id="basics">
 <h2>HTML Basics</h2>
 <p>Every HTML page has a structure...</p>
 </section>
 <section id="elements">
 <h2>Common Elements</h2>
 <p>The most common elements are...</p>
 </section>
 <section id="conclusion">
 <h2>Conclusion</h2>
 <p>Now you understand HTML basics...</p>
 </section>
 <!-- Back to top link -->
 <a href="#top">Back to Top</a>
</body>
</html>`}</CodeBlock>
          <Typography variant="h3">Linking to Sections on Other Pages</Typography>
          <CodeBlock language="html">{`<!-- Link to specific section on another page -->
<a href="about.html#team">Meet Our Team</a>
<a href="services.html#pricing">See Pricing</a>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Special Link Types</Typography>
          <Typography variant="h3">Email Links</Typography>
          <Typography>
            Opens the user&apos;s email program with a new message:
          </Typography>
          <CodeBlock language="html">{`<a href="mailto:info@koompi.com">Email Us</a>
<!-- With subject line -->
<a href="mailto:info@koompi.com?subject=Hello">Email with Subject</a>
<!-- With subject and body -->
<a href="mailto:info@koompi.com?subject=Question&body=Hi, I have a question...">
 Contact Support
</a>`}</CodeBlock>
          <Typography variant="h3">Phone Links</Typography>
          <Typography>
            Opens phone dialer on mobile devices:
          </Typography>
          <CodeBlock language="html">{`<a href="tel:+85512345678">Call Us: +855 12 345 678</a>`}</CodeBlock>
          <Typography variant="h3">Download Links</Typography>
          <Typography>
            The download attribute prompts file download:
          </Typography>
          <CodeBlock language="html">{`<a href="files/resume.pdf" download>Download My Resume</a>
<!-- Suggest filename -->
<a href="files/doc.pdf" download="koompi-brochure.pdf">Download Brochure</a>`}</CodeBlock>
          <Typography variant="h3">Summary of Special Links</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>URL Format</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>mailto:email@domain</TableCell>
                <TableCell>mailto:info@koompi.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phone</TableCell>
                <TableCell>tel:+number</TableCell>
                <TableCell>tel:+85512345678</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SMS</TableCell>
                <TableCell>sms:+number</TableCell>
                <TableCell>sms:+85512345678</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Download</TableCell>
                <TableCell>href + download</TableCell>
                <TableCell>&lt;a href=&quot;file.pdf&quot; download&gt;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Building Navigation Menus</Typography>
          <Typography variant="h3">Basic Navigation</Typography>
          <Typography>
            Use the &lt;nav&gt; element for navigation:
          </Typography>
          <CodeBlock language="html">{`<nav>
 <a href="index.html">Home</a>
 <a href="about.html">About</a>
 <a href="services.html">Services</a>
 <a href="contact.html">Contact</a>
</nav>`}</CodeBlock>
          <Typography variant="h3">Navigation with List</Typography>
          <Typography>
            More common and accessible approach:
          </Typography>
          <CodeBlock language="html">{`<nav>
 <ul>
 <li><a href="index.html">Home</a></li>
 <li><a href="about.html">About</a></li>
 <li><a href="services.html">Services</a></li>
 <li><a href="contact.html">Contact</a></li>
 </ul>
</nav>`}</CodeBlock>
          <Typography variant="h3">Complete Header Example</Typography>
          <CodeBlock language="html">{`<header>
 <div class="logo">
 <a href="index.html">KOOMPI</a>
 </div>
 <nav>
 <ul>
 <li><a href="index.html">Home</a></li>
 <li><a href="about.html">About Us</a></li>
 <li><a href="products.html">Products</a></li>
 <li><a href="blog.html">Blog</a></li>
 <li><a href="contact.html">Contact</a></li>
 </ul>
 </nav>
</header>`}</CodeBlock>
          <Typography variant="h3">Current Page Indicator</Typography>
          <Typography>
            Common patterns to show which page the user is on:
          </Typography>
          <CodeBlock language="html">{`<!-- Using a class -->
<li><a href="about.html" class="active">About</a></li>
<!-- Using aria-current -->
<li><a href="about.html" aria-current="page">About</a></li>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Link Best Practices</Typography>
          <Typography variant="h3">Writing Good Link Text</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>LINK TEXT BEST PRACTICES</li>
            <li>BAD GOOD</li>
            <li>Click here Read our privacy policy</li>
            <li>Read more View all products</li>
            <li>Link Download the brochure</li>
            <li>Here Contact our support team</li>
            <li>BAD: &quot;To learn more, click here.&quot;</li>
            <li>GOOD: &quot;Learn more about our services.&quot;</li>
            <li>BAD: &quot;For info, click here, here, and here.&quot;</li>
            <li>GOOD: &quot;Read about our team, products, and mission.&quot;</li>
          </ul>
          <Typography>
            Why good link text matters:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Screen readers read links out of context</li>
            <li>Users scan pages looking for links</li>
            <li>Search engines use link text for ranking</li>
          </ul>
          <Typography variant="h3">Accessibility Tips</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Practice</TableHead>
                <TableHead>Why</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Use descriptive text</TableCell>
                <TableCell>Screen readers announce it</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Don&apos;t use &quot;click here&quot;</TableCell>
                <TableCell>Meaningless when heard alone</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Indicate external links</TableCell>
                <TableCell>Users know they&apos;re leaving</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Indicate file downloads</TableCell>
                <TableCell>Users know what to expect</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Example: Good Navigation</Typography>
          <CodeBlock language="html">{`<nav aria-label="Main navigation">
 <ul>
 <li><a href="index.html">Home</a></li>
 <li><a href="about.html">About KOOMPI</a></li>
 <li><a href="products.html">Our Products</a></li>
 <li><a href="blog.html">Read Our Blog</a></li>
 <li><a href="contact.html">Contact Us</a></li>
 </ul>
</nav>
<p>
 Read our <a href="privacy.html">privacy policy</a> for information 
 about how we protect your data.
</p>
<p>
 Learn more at 
 <a href="https://wikipedia.org" target="_blank" rel="noopener noreferrer">
 Wikipedia (opens in new tab)
 </a>.
</p>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Create a Multi-Page Site</Typography>
          <Typography>
            Create three HTML files that link to each other:
          </Typography>
          <CodeBlock language="text">{`my-site/
├── index.html (Home - links to about and contact)
├── about.html (About - links to home and contact)
└── contact.html (Contact - links to home and about)`}</CodeBlock>
          <Typography>
            Each page should have navigation that works correctly.
          </Typography>
          <Typography variant="h3">Exercise 2: Absolute vs Relative Quiz</Typography>
          <Typography>
            Which type of URL would you use?
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Link to your about page: _______</li>
            <li>Link to Google: _______</li>
            <li>Link to a file in a subfolder: _______</li>
            <li>Link to Facebook: _______</li>
            <li>Link from subfolder back to home: _______</li>
          </ul>
          <Typography variant="h3">Exercise 3: Page with Sections</Typography>
          <Typography>
            Create a long page with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>A table of contents with 4 links</li>
            <li>4 sections with IDs matching the links</li>
            <li>&quot;Back to top&quot; link at the bottom</li>
          </ul>
          <Typography variant="h3">Exercise 4: Contact Page</Typography>
          <Typography>
            Create a contact page with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Email link (to your email or example)</li>
            <li>Phone link</li>
            <li>Link to open a map (Google Maps URL)</li>
            <li>Download link for a resume/CV</li>
          </ul>
          <Typography variant="h3">Exercise 5: Navigation Menu</Typography>
          <Typography>
            Create a complete navigation menu with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Logo that links to home</li>
            <li>5 navigation links</li>
            <li>Current page indicator on one link</li>
            <li>At least one external link that opens in new tab</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Elements &amp; Attributes
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element/Attribute</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>&lt;a&gt;</TableCell>
                <TableCell>Creates hyperlinks</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>href</TableCell>
                <TableCell>Link destination</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>target</TableCell>
                <TableCell>Where link opens</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>title</TableCell>
                <TableCell>Tooltip text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>download</TableCell>
                <TableCell>Download file</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>rel</TableCell>
                <TableCell>Link relationship</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            URL Types
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>When to Use</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Absolute</TableCell>
                <TableCell>External sites</TableCell>
                <TableCell>https://google.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Relative</TableCell>
                <TableCell>Your own site</TableCell>
                <TableCell>about.html, ../index.html</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Anchor</TableCell>
                <TableCell>Same page sections</TableCell>
                <TableCell>#section-id</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Contact links</TableCell>
                <TableCell>mailto:email@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phone</TableCell>
                <TableCell>Call links</TableCell>
                <TableCell>tel:+85512345678</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Before moving to Module 06:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create multi-page site with working links</li>
            <li>Build page with internal navigation</li>
            <li>Create contact page with special links</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 06 - Images &amp; Media
          </Typography>
          <Typography>
            You will learn to add images to your web pages!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Links connect the web!
          </Typography>
          <Typography>
            Good navigation makes happy users.
          </Typography>
        </div>
      </section>
    </div>
  );
}
