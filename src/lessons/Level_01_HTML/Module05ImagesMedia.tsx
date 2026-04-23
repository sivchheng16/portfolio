
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module05ImagesMedia() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Images &amp; Media</Typography>
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
            <li>Embed images using the &lt;img&gt; element</li>
            <li>Write proper alternative text for accessibility</li>
            <li>Understand image file formats and when to use each</li>
            <li>Work with relative and absolute image paths</li>
            <li>Use images as links</li>
            <li>Add captions with &lt;figure&gt; and &lt;figcaption&gt;</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: The Image Element</Typography>
          <Typography variant="h3">Basic Image Syntax</Typography>
          <Typography>
            The &lt;img&gt; element displays images. It&apos;s a void element (no closing tag).
          </Typography>
          <CodeBlock language="html">{`<img src="photo.jpg" alt="Description of the image">`}</CodeBlock>
          <Typography variant="h3">Required Attributes</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Attribute</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Required?</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>src</TableCell>
                <TableCell>Image file location</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>alt</TableCell>
                <TableCell>Alternative text (accessibility)</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Anatomy of an Image Element</Typography>
          <CodeBlock language="html">{`<img src="images/koompi-laptop.jpg" 
 alt="KOOMPI laptop computer on a wooden desk" 
 width="800" 
 height="600">`}</CodeBlock>
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
                <TableCell>src</TableCell>
                <TableCell>images/koompi-laptop.jpg</TableCell>
                <TableCell>Where to find the image</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>alt</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>What screen readers say</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>width</TableCell>
                <TableCell>800</TableCell>
                <TableCell>Width in pixels</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>height</TableCell>
                <TableCell>600</TableCell>
                <TableCell>Height in pixels</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Image Paths</Typography>
          <Typography variant="h3">Folder Structure Example</Typography>
          <CodeBlock language="text">{`my-website/
├── index.html
├── about.html
├── images/
│ ├── logo.png
│ ├── hero-banner.jpg
│ ├── team/
│ │ ├── sokha.jpg
│ │ └── dara.jpg
│ └── products/
│ ├── laptop-1.jpg
│ └── laptop-2.jpg
└── pages/
 └── contact.html`}</CodeBlock>
          <Typography variant="h3">Relative Paths from index.html</Typography>
          <CodeBlock language="html">{`<!-- Image in images folder -->
<img src="images/logo.png" alt="Logo">
<!-- Image in images/team subfolder -->
<img src="images/team/sokha.jpg" alt="Sokha">
<!-- Image in images/products subfolder -->
<img src="images/products/laptop-1.jpg" alt="Laptop">`}</CodeBlock>
          <Typography variant="h3">Relative Paths from pages/contact.html</Typography>
          <CodeBlock language="html">{`<!-- Go up one folder, then into images -->
<img src="../images/logo.png" alt="Logo">
<img src="../images/team/sokha.jpg" alt="Sokha">`}</CodeBlock>
          <Typography variant="h3">Absolute Paths (External Images)</Typography>
          <CodeBlock language="html">{`<!-- From other websites -->
<img src="https://example.com/images/photo.jpg" alt="External photo">`}</CodeBlock>
          <Typography>
            Note: Avoid using images from other websites without permission.
          </Typography>
          <Typography variant="h3">Path Reference</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Path</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>index.html</TableCell>
                <TableCell>images/logo.png</TableCell>
                <TableCell>images/logo.png</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>index.html</TableCell>
                <TableCell>images/team/sokha.jpg</TableCell>
                <TableCell>images/team/sokha.jpg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>pages/contact.html</TableCell>
                <TableCell>images/logo.png</TableCell>
                <TableCell>../images/logo.png</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>pages/contact.html</TableCell>
                <TableCell>images/team/sokha.jpg</TableCell>
                <TableCell>../images/team/sokha.jpg</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Alternative Text (Alt Text)</Typography>
          <Typography variant="h3">Why Alt Text Matters</Typography>
          <Typography>
            Alt text is crucial for:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Accessibility: Screen readers read it to blind users</li>
            <li>Broken images: Shows when image won&apos;t load</li>
            <li>SEO: Search engines use it to understand images</li>
          </ul>
          <Typography variant="h3">Writing Good Alt Text</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>ALT TEXT BEST PRACTICES</li>
            <li>BAD GOOD</li>
            <li>alt=&quot;image&quot; alt=&quot;KOOMPI laptop computer&quot;</li>
            <li>alt=&quot;photo123.jpg&quot; alt=&quot;Students learning to code&quot;</li>
            <li>alt=&quot;&quot; (for meaningful images) alt=&quot;Angkor Wat temple at sunrise&quot;</li>
            <li>alt=&quot;Click here&quot; alt=&quot;Download button icon&quot;</li>
            <li>TIPS:</li>
            <li>• Be specific and descriptive</li>
            <li>• Don&apos;t start with &quot;Image of...&quot; or &quot;Photo of...&quot;</li>
            <li>• Keep it concise (under 125 characters)</li>
            <li>• Describe what&apos;s important in context</li>
          </ul>
          <Typography variant="h3">When to Use Empty Alt Text</Typography>
          <Typography>
            Use alt=&quot;&quot; for decorative images that don&apos;t add content:
          </Typography>
          <CodeBlock language="html">{`<!-- Decorative: adds no information -->
<img src="decorative-border.png" alt="">
<!-- Meaningful: needs description -->
<img src="team-photo.jpg" alt="The KOOMPI team at our office in Phnom Penh">`}</CodeBlock>
          <Typography variant="h3">Examples of Good Alt Text</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image Type</TableHead>
                <TableHead>Alt Text</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Logo</TableCell>
                <TableCell>alt=&quot;KOOMPI&quot; or alt=&quot;KOOMPI logo&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product photo</TableCell>
                <TableCell>alt=&quot;KOOMPI E13 laptop, silver, open showing screen&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Team photo</TableCell>
                <TableCell>alt=&quot;Four KOOMPI team members smiling in office&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Chart</TableCell>
                <TableCell>alt=&quot;Bar chart showing 50% increase in users from 2023 to 2024&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Icon button</TableCell>
                <TableCell>alt=&quot;Search&quot; or alt=&quot;Submit form&quot;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Image Dimensions</Typography>
          <Typography variant="h3">Setting Width and Height</Typography>
          <CodeBlock language="html">{`<!-- Using attributes -->
<img src="photo.jpg" alt="Photo" width="800" height="600">
<!-- Values are in pixels (don't include "px") -->`}</CodeBlock>
          <Typography variant="h3">Why Set Dimensions?</Typography>
          <Typography>
            Setting dimensions prevents layout shift — the page jumping around while images load.
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>WITHOUT DIMENSIONS</li>
            <li>Page loads text: 2. Image loads: 3. Content jumps!</li>
            <li>Title Title Title</li>
            <li>Text here...</li>
            <li>→ IMAGE → IMAGE</li>
            <li>Text here...</li>
            <li>WITH DIMENSIONS: Space is reserved, no jumping!</li>
          </ul>
          <Typography variant="h3">Responsive Images (Preview)</Typography>
          <Typography>
            For now, you can make images responsive with simple CSS:
          </Typography>
          <CodeBlock language="html">{`<img src="photo.jpg" alt="Photo" style="max-width: 100%; height: auto;">`}</CodeBlock>
          <Typography>
            This makes images shrink on small screens but never grow larger than their natural size.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Image File Formats</Typography>
          <Typography variant="h3">Common Web Image Formats</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Format</TableHead>
                <TableHead>Best For</TableHead>
                <TableHead>Features</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>JPEG/JPG</TableCell>
                <TableCell>Photographs</TableCell>
                <TableCell>Small file size, no transparency</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>PNG</TableCell>
                <TableCell>Graphics, logos, screenshots</TableCell>
                <TableCell>Transparency support, larger files</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SVG</TableCell>
                <TableCell>Icons, logos, illustrations</TableCell>
                <TableCell>Vector (scales perfectly), tiny file</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>WebP</TableCell>
                <TableCell>Modern websites</TableCell>
                <TableCell>Best compression, transparency</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>GIF</TableCell>
                <TableCell>Simple animations</TableCell>
                <TableCell>Animation support, limited colors</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Visual Guide</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>CHOOSING IMAGE FORMAT</li>
            <li>Is it a photograph?</li>
            <li>YES → Use JPEG</li>
            <li>NO → Does it need transparency?</li>
            <li>YES → Use PNG (or WebP)</li>
            <li>NO → Is it an icon/logo?</li>
            <li>YES → Use SVG</li>
            <li>NO → Is it animated?</li>
            <li>YES → Use GIF (or WebP)</li>
            <li>NO → Use PNG or WebP</li>
            <li>MODERN TIP: WebP works for almost everything and has the best</li>
            <li>compression. Use it when browser support isn&apos;t a concern.</li>
          </ul>
          <Typography variant="h3">Format Examples</Typography>
          <CodeBlock language="html">{`<!-- Photograph: JPEG -->
<img src="team-photo.jpg" alt="Team photo">
<!-- Logo with transparency: PNG -->
<img src="logo.png" alt="Company logo">
<!-- Scalable icon: SVG -->
<img src="icons/menu.svg" alt="Menu">
<!-- Modern format: WebP -->
<img src="banner.webp" alt="Banner image">`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Images as Links</Typography>
          <Typography variant="h3">Wrapping Images with Links</Typography>
          <Typography>
            Make images clickable by wrapping them in an anchor tag:
          </Typography>
          <CodeBlock language="html">{`<a href="https://koompi.com">
 <img src="koompi-logo.png" alt="KOOMPI - Visit our website">
</a>`}</CodeBlock>
          <Typography variant="h3">Image Links with Text</Typography>
          <CodeBlock language="html">{`<a href="products.html">
 <img src="laptop.jpg" alt="">
 <span>View Our Products</span>
</a>`}</CodeBlock>
          <Typography>
            Note: When an image is a link, the alt text should describe the link destination, not just the image.
          </Typography>
          <Typography variant="h3">Common Use Cases</Typography>
          <CodeBlock language="html">{`<!-- Logo links to homepage -->
<a href="index.html">
 <img src="logo.png" alt="KOOMPI Home">
</a>
<!-- Product thumbnail links to product page -->
<a href="products/koompi-e13.html">
 <img src="images/koompi-e13-thumb.jpg" alt="View KOOMPI E13 details">
</a>
<!-- Social media icon -->
<a href="https://facebook.com/koompi" target="_blank" rel="noopener noreferrer">
 <img src="icons/facebook.svg" alt="KOOMPI on Facebook">
</a>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Figure and Figcaption</Typography>
          <Typography variant="h3">Semantic Image Containers</Typography>
          <Typography>
            The &lt;figure&gt; element wraps images (or other content) with a caption.
          </Typography>
          <CodeBlock language="html">{`<figure>
 <img src="angkor-wat.jpg" alt="Angkor Wat temple complex at sunrise">
 <figcaption>Angkor Wat, a UNESCO World Heritage Site in Cambodia</figcaption>
</figure>`}</CodeBlock>
          <Typography variant="h3">When to Use Figure</Typography>
          <Typography>
            Use &lt;figure&gt; when:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>The image has a caption</li>
            <li>The content is referenced in text (&quot;see Figure 1&quot;)</li>
            <li>You&apos;re displaying diagrams, charts, or illustrations</li>
          </ul>
          <Typography variant="h3">Multiple Images in One Figure</Typography>
          <CodeBlock language="html">{`<figure>
 <img src="before.jpg" alt="Website before redesign">
 <img src="after.jpg" alt="Website after redesign">
 <figcaption>Website design: before and after the modernization</figcaption>
</figure>`}</CodeBlock>
          <Typography variant="h3">Figure for Code Examples</Typography>
          <Typography>
            &lt;figure&gt; isn&apos;t just for images:
          </Typography>
          <CodeBlock language="html">{`<figure>
 <pre><code>&lt;img src="photo.jpg" alt="Description"&gt;</code></pre>
 <figcaption>HTML code for adding an image</figcaption>
</figure>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Image Gallery</Typography>
          <Typography>
            Create a page with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>At least 4 images</li>
            <li>Each with proper alt text</li>
            <li>Images organized in an images/ folder</li>
            <li>Different image formats (at least 2 types)</li>
          </ul>
          <Typography variant="h3">Exercise 2: Fix the Alt Text</Typography>
          <Typography>
            Improve these alt texts:
          </Typography>
          <CodeBlock language="html">{`<img src="laptop.jpg" alt="image">
<img src="team.jpg" alt="photo123.jpg">
<img src="logo.png" alt="logo">
<img src="graph.png" alt="chart">`}</CodeBlock>
          <Typography variant="h3">Exercise 3: Image Paths Challenge</Typography>
          <Typography>
            Given this structure:
          </Typography>
          <CodeBlock language="text">{`project/
├── index.html
├── pages/
│ └── about.html
└── assets/
 └── images/
 ├── logo.png
 └── hero.jpg`}</CodeBlock>
          <Typography>
            Write the correct paths from both files to both images.
          </Typography>
          <Typography variant="h3">Exercise 4: Image Links</Typography>
          <Typography>
            Create a page with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Logo at top that links to homepage</li>
            <li>3 product images that link to (fake) product pages</li>
            <li>Social media icons that link to external sites</li>
          </ul>
          <Typography variant="h3">Exercise 5: Figure Gallery</Typography>
          <Typography>
            Create a photo gallery of Cambodia using &lt;figure&gt;:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>At least 3 photos</li>
            <li>Each with a &lt;figcaption&gt; describing the location</li>
            <li>Organized semantically</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Elements Learned
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
                <TableCell>&lt;img&gt;</TableCell>
                <TableCell>Displays an image</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;figure&gt;</TableCell>
                <TableCell>Container for images with captions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;figcaption&gt;</TableCell>
                <TableCell>Caption for figure content</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Key Attributes
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Attribute</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Required?</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>src</TableCell>
                <TableCell>Image location</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>alt</TableCell>
                <TableCell>Alternative text</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>width</TableCell>
                <TableCell>Image width (pixels)</TableCell>
                <TableCell>Recommended</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>height</TableCell>
                <TableCell>Image height (pixels)</TableCell>
                <TableCell>Recommended</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Formats Summary
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Format</TableHead>
                <TableHead>Use For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>JPEG</TableCell>
                <TableCell>Photos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>PNG</TableCell>
                <TableCell>Graphics with transparency</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SVG</TableCell>
                <TableCell>Icons, logos (vectors)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>WebP</TableCell>
                <TableCell>Everything (modern)</TableCell>
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
            <li>Create image gallery page</li>
            <li>Fix alt text exercise</li>
            <li>Complete path challenge</li>
            <li>Build figure gallery</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 07 - Tables &amp; Forms
          </Typography>
          <Typography>
            You will learn to create data tables and user input forms!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            A picture is worth a thousand words!
          </Typography>
          <Typography>
            But only if everyone can &quot;see&quot; it (with good alt text).
          </Typography>
        </div>
      </section>
    </div>
  );
}
