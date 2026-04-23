
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module07ProjectBioPage() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Project - Personal Bio Page</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 01: HTML Fundamentals</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Overview</Typography>
          <Typography>
            Congratulations! You&apos;ve learned all the HTML fundamentals. Now it&apos;s time to put them together and build your first real project: a Personal Bio Page.
          </Typography>
          <Typography>
            This project will showcase everything you&apos;ve learned and become the foundation of your portfolio.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Requirements</Typography>
          <Typography variant="h3">Must Have (Required)</Typography>
          <Typography>
            Your Bio Page MUST include:
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Requirement</TableHead>
                <TableHead>HTML Elements Used</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Proper HTML5 structure</TableCell>
                <TableCell>&lt;!DOCTYPE&gt;, &lt;html&gt;, &lt;head&gt;, &lt;body&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Page title and metadata</TableCell>
                <TableCell>&lt;title&gt;, &lt;meta&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Your name as main heading</TableCell>
                <TableCell>&lt;h1&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>At least 3 sections with headings</TableCell>
                <TableCell>&lt;h2&gt;, &lt;section&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Multiple paragraphs of text</TableCell>
                <TableCell>&lt;p&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>At least one list</TableCell>
                <TableCell>&lt;ul&gt; or &lt;ol&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>At least one image</TableCell>
                <TableCell>&lt;img&gt; with proper alt</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Navigation links</TableCell>
                <TableCell>&lt;nav&gt;, &lt;a&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Internal page links (anchors)</TableCell>
                <TableCell>&lt;a href=&quot;#id&quot;&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>At least one external link</TableCell>
                <TableCell>&lt;a target=&quot;_blank&quot;&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Contact section</TableCell>
                <TableCell>Email link, possibly form</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Semantic HTML</TableCell>
                <TableCell>&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Nice to Have (Bonus)</Typography>
          <Typography>
            Score extra points with:
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bonus Feature</TableHead>
                <TableHead>What It Shows</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Multiple pages</TableCell>
                <TableCell>Link skills</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Contact form</TableCell>
                <TableCell>Form skills</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Table (skills or education)</TableCell>
                <TableCell>Table skills</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Figure with caption</TableCell>
                <TableCell>Advanced images</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description list</TableCell>
                <TableCell>Semantic knowledge</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Khmer language content</TableCell>
                <TableCell>Bilingual skills</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Structure</Typography>
          <Typography variant="h3">Folder Setup</Typography>
          <CodeBlock language="bash">{`cd ~/projects/portfolio
mkdir personal-bio
cd personal-bio
mkdir images
touch index.html
touch about.html # Optional: separate about page
touch contact.html # Optional: separate contact page`}</CodeBlock>
          <Typography variant="h3">File Structure</Typography>
          <CodeBlock language="text">{`personal-bio/
├── index.html ← Main page (required)
├── about.html ← About page (optional)
├── contact.html ← Contact page (optional)
├── images/
│ ├── profile.jpg ← Your photo
│ └── ...
└── README.md ← Project description`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Page Template</Typography>
          <Typography>
            Use this as a starting point:
          </Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta name="description" content="Personal bio page of [Your Name], 
 a KOOMPI Apprentice learning web development.">
 <title>[Your Name] - KOOMPI Apprentice</title>
</head>
<body>
 <!-- Header with Navigation -->
 <header>
 <nav>
 <a href="#about">About</a>
 <a href="#skills">Skills</a>
 <a href="#education">Education</a>
 <a href="#contact">Contact</a>
 </nav>
 </header>
 <!-- Main Content -->
 <main>
 <!-- Hero Section -->
 <section id="hero">
 <h1>Your Name Here</h1>
 <p>Your title/role here</p>
 </section>
 <!-- About Section -->
 <section id="about">
 <h2>About Me</h2>
 <!-- Your content here -->
 </section>
 <!-- Skills Section -->
 <section id="skills">
 <h2>My Skills</h2>
 <!-- Your content here -->
 </section>
 <!-- Education Section -->
 <section id="education">
 <h2>Education & Training</h2>
 <!-- Your content here -->
 </section>
 <!-- Contact Section -->
 <section id="contact">
 <h2>Contact Me</h2>
 <!-- Your content here -->
 </section>
 </main>
 <!-- Footer -->
 <footer>
 <p>&copy; 2024 Your Name. Made with at KOOMPI.</p>
 </footer>
</body>
</html>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Section-by-Section Guide</Typography>
          <Typography variant="h3">1. Header &amp; Navigation</Typography>
          <CodeBlock language="html">{`<header>
 <h1>Your Name</h1>
 <p>Future Software Engineer | KOOMPI Apprentice</p>
 <nav>
 <ul>
 <li><a href="#about">About</a></li>
 <li><a href="#skills">Skills</a></li>
 <li><a href="#goals">Goals</a></li>
 <li><a href="#contact">Contact</a></li>
 </ul>
 </nav>
</header>`}</CodeBlock>
          <Typography variant="h3">2. About Section</Typography>
          <Typography>
            Include:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>A profile image</li>
            <li>2-3 paragraphs about yourself</li>
            <li>Where you&apos;re from</li>
            <li>What you&apos;re learning</li>
          </ul>
          <CodeBlock language="html">{`<section id="about">
 <h2>About Me</h2>
 <figure>
 <img src="images/profile.jpg" 
 alt="Photo of [Your Name] smiling"
 width="200" height="200">
 <figcaption>That's me!</figcaption>
 </figure>
 <p>Hello! My name is <strong>[Your Name]</strong>. I am from 
 [Your Province], Cambodia. I am currently an apprentice at KOOMPI, 
 learning to become a software engineer.</p>
 <p>I started my journey in [Month Year]. Before this, I was 
 [your previous activity]. I decided to learn technology because 
 [your reason].</p>
 <p>When I'm not coding, I enjoy [your hobbies].</p>
</section>`}</CodeBlock>
          <Typography variant="h3">3. Skills Section</Typography>
          <Typography>
            Use a list to show your skills:
          </Typography>
          <CodeBlock language="html">{`<section id="skills">
 <h2>My Skills</h2>
 <h3>Technical Skills</h3>
 <ul>
 <li><strong>HTML</strong> - Building web page structure</li>
 <li><strong>Linux Terminal</strong> - Command line navigation</li>
 <li><strong>Typing</strong> - Touch typing in English and Khmer</li>
 <li><strong>File Management</strong> - Organizing projects</li>
 </ul>
 <h3>Currently Learning</h3>
 <ul>
 <li>CSS - Styling web pages</li>
 <li>JavaScript - Adding interactivity</li>
 <li>English - Improving communication</li>
 </ul>
 <h3>Soft Skills</h3>
 <ul>
 <li>Problem Solving</li>
 <li>Teamwork</li>
 <li>Customer Service</li>
 </ul>
</section>`}</CodeBlock>
          <Typography>
            Or use a table:
          </Typography>
          <CodeBlock language="html">{`<section id="skills">
 <h2>My Skills</h2>
 <table>
 <caption>Technical Skills Progress</caption>
 <thead>
 <tr>
 <th scope="col">Skill</th>
 <th scope="col">Level</th>
 <th scope="col">Status</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>HTML</td>
 <td>Intermediate</td>
 <td>Completed </td>
 </tr>
 <tr>
 <td>CSS</td>
 <td>Beginner</td>
 <td>Learning </td>
 </tr>
 <tr>
 <td>JavaScript</td>
 <td>Not Started</td>
 <td>Coming Soon </td>
 </tr>
 </tbody>
 </table>
</section>`}</CodeBlock>
          <Typography variant="h3">4. Education / Journey Section</Typography>
          <CodeBlock language="html">{`<section id="education">
 <h2>Education & Training</h2>
 <h3>KOOMPI Apprenticeship</h3>
 <p><strong>Period:</strong> [Start Date] - Present</p>
 <p><strong>Focus:</strong> Web Development, English, Business Skills</p>
 <p>Currently in Track 02: Web Development, learning to build 
 modern websites and applications.</p>
 <h3>Previous Education</h3>
 <p>[Your school/previous education]</p>
 <h3>Certifications</h3>
 <ul>
 <li>Digital Citizen (KOOMPI) - [Date]</li>
 <li>HTML Fundamentals (In Progress)</li>
 </ul>
</section>`}</CodeBlock>
          <Typography variant="h3">5. Goals Section</Typography>
          <CodeBlock language="html">{`<section id="goals">
 <h2>My Goals</h2>
 <h3>Short-term Goals (6 months)</h3>
 <ol>
 <li>Complete HTML and CSS certification</li>
 <li>Build 3 complete websites</li>
 <li>Improve English speaking skills</li>
 </ol>
 <h3>Long-term Goals (2 years)</h3>
 <ol>
 <li>Become a full-stack developer</li>
 <li>Get a job in the tech industry</li>
 <li>Start my own project or business</li>
 <li>Help other Cambodian youth learn technology</li>
 </ol>
</section>`}</CodeBlock>
          <Typography variant="h3">6. Contact Section</Typography>
          <CodeBlock language="html">{`<section id="contact">
 <h2>Contact Me</h2>
 <p>I'd love to hear from you! Whether you have a question, 
 want to collaborate, or just want to say hi, feel free to reach out.</p>
 <dl>
 <dt>Email</dt>
 <dd><a href="mailto:your.email@example.com">your.email@example.com</a></dd>
 <dt>Phone</dt>
 <dd><a href="tel:+85512345678">+855 12 345 678</a></dd>
 <dt>GitHub</dt>
 <dd>
 <a href="https://github.com/yourusername" 
 target="_blank" 
 rel="noopener noreferrer">
 github.com/yourusername
 </a>
 </dd>
 <dt>Location</dt>
 <dd>Phnom Penh, Cambodia</dd>
 </dl>
</section>`}</CodeBlock>
          <Typography>
            Or with a form:
          </Typography>
          <CodeBlock language="html">{`<section id="contact">
 <h2>Contact Me</h2>
 <form action="#" method="POST">
 <div>
 <label for="name">Your Name:</label>
 <input type="text" id="name" name="name" required>
 </div>
 <div>
 <label for="email">Your Email:</label>
 <input type="email" id="email" name="email" required>
 </div>
 <div>
 <label for="message">Message:</label>
 <textarea id="message" name="message" rows="5" required></textarea>
 </div>
 <button type="submit">Send Message</button>
 </form>
</section>`}</CodeBlock>
          <Typography variant="h3">7. Footer</Typography>
          <CodeBlock language="html">{`<footer>
 <nav>
 <a href="#hero">Back to Top</a>
 </nav>
 <p>Connect with me:</p>
 <ul>
 <li><a href="mailto:you@example.com">Email</a></li>
 <li><a href="https://github.com/you" target="_blank" rel="noopener">GitHub</a></li>
 </ul>
 <p>&copy; 2024 [Your Name]. Made with at KOOMPI, Cambodia.</p>
</footer>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Checklist Before Submission</Typography>
          <Typography variant="h3">Technical Requirements</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Valid HTML5 structure (DOCTYPE, html, head, body)</li>
            <li>Page title appears in browser tab</li>
            <li>Charset and viewport meta tags present</li>
            <li>At least one &lt;h1&gt; (only one per page)</li>
            <li>Proper heading hierarchy (h1 → h2 → h3)</li>
            <li>All images have alt text</li>
            <li>All links work correctly</li>
            <li>Internal navigation with anchors works</li>
            <li>External links open in new tab</li>
            <li>Semantic elements used (header, main, footer, nav, section)</li>
          </ul>
          <Typography variant="h3">Content Requirements</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Your real name (or preferred name)</li>
            <li>About section with multiple paragraphs</li>
            <li>Skills listed (technical and soft)</li>
            <li>Education or journey information</li>
            <li>Goals for the future</li>
            <li>Contact information</li>
          </ul>
          <Typography variant="h3">Quality Check</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>No spelling errors</li>
            <li>Content is honest and accurate</li>
            <li>Professional but personal tone</li>
            <li>Clean, indented code</li>
            <li>Files organized properly</li>
            <li>Works when opened in browser</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Evaluation Rubric</Typography>
          <Typography>
            Your project will be evaluated on:
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Criteria</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Structure</TableCell>
                <TableCell>25</TableCell>
                <TableCell>Proper HTML5 structure, semantics</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Content</TableCell>
                <TableCell>25</TableCell>
                <TableCell>Complete, relevant, personal</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Technical</TableCell>
                <TableCell>25</TableCell>
                <TableCell>Links work, images load, forms function</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quality</TableCell>
                <TableCell>15</TableCell>
                <TableCell>Clean code, good organization</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Creativity</TableCell>
                <TableCell>10</TableCell>
                <TableCell>Personal touch, goes beyond basics</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell>100</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Grading Scale</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Score</TableHead>
                <TableHead>Result</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>90-100</TableCell>
                <TableCell>Master Badge</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>75-89</TableCell>
                <TableCell>Builder Badge</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>60-74</TableCell>
                <TableCell>Foundation Badge</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Below 60</TableCell>
                <TableCell>Needs improvement (retry)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Submission Process</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Complete your project following all requirements</li>
            <li>Test it by opening in browser, clicking all links</li>
            <li>Show your mentor for verification</li>
            <li>Push to GitHub (if you&apos;ve learned Git)</li>
            <li>Present to fellow apprentices (optional but encouraged)</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Example Projects</Typography>
          <Typography variant="h3">What Makes a Good Bio Page</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>GOOD BIO PAGE</li>
            <li>• Personal yet professional</li>
            <li>• Shows personality through content</li>
            <li>• Includes specific details about journey</li>
            <li>• Lists actual skills with honesty</li>
            <li>• Has clear goals and aspirations</li>
            <li>• Easy to navigate</li>
            <li>• All links and images work</li>
            <li>• Clean, readable code</li>
          </ul>
          <Typography variant="h3">Common Mistakes to Avoid</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>AVOID THESE</li>
            <li>• Lorem ipsum or placeholder text</li>
            <li>• Missing alt text on images</li>
            <li>• Broken links</li>
            <li>• Wrong heading order (h1 → h3)</li>
            <li>• No navigation</li>
            <li>• Copied content from examples</li>
            <li>• Unclear or vague descriptions</li>
            <li>• Overly long pages with no structure</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Congratulations</Typography>
          <Typography>
            Once you complete this project, you will have:
          </Typography>
          <Typography>
            Built your first real website
Applied all HTML fundamentals
Created the foundation of your portfolio
Earned your HTML Fundamentals Badge
Qualified for Web Developer Apprentice certification (after CSS)
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">What&apos;s Next?</Typography>
          <Typography>
            After completing your HTML Bio Page:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Get feedback from your mentor</li>
            <li>Improve based on feedback</li>
            <li>Move to Track 02: CSS Styling</li>
            <li>Come back and make your bio page beautiful with CSS!</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            You did it!
          </Typography>
          <Typography>
            Your first website is a huge achievement.
          </Typography>
          <Typography>
            This page will grow with you throughout your journey.
          </Typography>
        </div>
      </section>
    </div>
  );
}
