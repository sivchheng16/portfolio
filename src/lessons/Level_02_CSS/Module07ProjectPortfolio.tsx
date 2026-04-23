
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module07ProjectPortfolio() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Project - Styled Portfolio</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 02: CSS Styling</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Overview</Typography>
          <Typography>
            It&apos;s time to combine everything you&apos;ve learned! You will transform your HTML Bio Page into a beautiful, professional, responsive portfolio website.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Requirements</Typography>
          <Typography variant="h3">Must Have (Required)</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Requirement</TableHead>
                <TableHead>CSS Concepts Used</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>External CSS file(s)</TableCell>
                <TableCell>External stylesheets</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Custom color scheme</TableCell>
                <TableCell>Color properties</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Custom fonts (Google Fonts)</TableCell>
                <TableCell>Typography</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Styled navigation with hover effects</TableCell>
                <TableCell>Selectors, transitions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Proper spacing (margin/padding)</TableCell>
                <TableCell>Box model</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cards or styled sections</TableCell>
                <TableCell>Borders, backgrounds</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Responsive design (mobile + desktop)</TableCell>
                <TableCell>Media queries</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Smooth transitions on interactions</TableCell>
                <TableCell>Transitions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Flexbox for layout</TableCell>
                <TableCell>Flexbox</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Centered container</TableCell>
                <TableCell>Max-width, margin auto</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Nice to Have (Bonus)</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Skills Shown</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Background image or gradient</TableCell>
                <TableCell>Background properties</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sticky navigation</TableCell>
                <TableCell>Position fixed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Animated buttons</TableCell>
                <TableCell>Transform, transition</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Custom scrollbar</TableCell>
                <TableCell>Advanced styling</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dark/light sections</TableCell>
                <TableCell>Color contrast</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Icon integration</TableCell>
                <TableCell>External assets</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Structure</Typography>
          <CodeBlock language="text">{`portfolio/
├── index.html
├── about.html (optional)
├── contact.html (optional)
├── css/
│ └── style.css
├── images/
│ ├── profile.jpg
│ └── ...
└── README.md`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step-by-Step Guide</Typography>
          <Typography variant="h3">Step 1: CSS Reset &amp; Base Styles</Typography>
          <CodeBlock language="css">{`/* css/style.css */
/* ==========================================
 CSS RESET & BASE
 ========================================== */
*, *::before, *::after {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
html {
 scroll-behavior: smooth;
}
body {
 font-family: 'Open Sans', Arial, sans-serif;
 font-size: 16px;
 line-height: 1.6;
 color: #333;
 background-color: #f5f5f5;
}
img {
 max-width: 100%;
 height: auto;
}
a {
 text-decoration: none;
 color: inherit;
}
ul {
 list-style: none;
}`}</CodeBlock>
          <Typography variant="h3">Step 2: CSS Variables (Optional but Recommended)</Typography>
          <CodeBlock language="css">{`/* ==========================================
 CSS VARIABLES (Custom Properties)
 ========================================== */
:root {
 /* Colors */
 --primary: #3498db;
 --primary-dark: #2980b9;
 --secondary: #2ecc71;
 --dark: #2c3e50;
 --light: #ecf0f1;
 --text: #333333;
 --text-light: #666666;
 --white: #ffffff;
 /* Spacing */
 --space-xs: 5px;
 --space-sm: 10px;
 --space-md: 20px;
 --space-lg: 40px;
 --space-xl: 80px;
 /* Transitions */
 --transition: 0.3s ease;
 /* Border radius */
 --radius: 8px;
 /* Shadows */
 --shadow: 0 2px 10px rgba(0,0,0,0.1);
 --shadow-lg: 0 10px 30px rgba(0,0,0,0.15);
}`}</CodeBlock>
          <Typography variant="h3">Step 3: Layout Classes</Typography>
          <CodeBlock language="css">{`/* ==========================================
 LAYOUT
 ========================================== */
.container {
 max-width: 1200px;
 margin: 0 auto;
 padding: 0 var(--space-md);
}
.section {
 padding: var(--space-xl) 0;
}
.section-dark {
 background-color: var(--dark);
 color: var(--white);
}
.section-light {
 background-color: var(--white);
}
.flex {
 display: flex;
}
.flex-center {
 display: flex;
 justify-content: center;
 align-items: center;
}
.flex-between {
 display: flex;
 justify-content: space-between;
 align-items: center;
}`}</CodeBlock>
          <Typography variant="h3">Step 4: Navigation Styling</Typography>
          <CodeBlock language="css">{`/* ==========================================
 NAVIGATION
 ========================================== */
.navbar {
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 background-color: var(--dark);
 padding: var(--space-sm) 0;
 z-index: 1000;
 box-shadow: var(--shadow);
}
.navbar .container {
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.logo {
 font-size: 1.5rem;
 font-weight: 700;
 color: var(--white);
}
.nav-links {
 display: flex;
 gap: var(--space-md);
}
.nav-links a {
 color: var(--light);
 padding: var(--space-sm) var(--space-md);
 border-radius: var(--radius);
 transition: var(--transition);
}
.nav-links a:hover {
 background-color: var(--primary);
 color: var(--white);
}
/* Space for fixed navbar */
body {
 padding-top: 60px;
}`}</CodeBlock>
          <Typography variant="h3">Step 5: Hero Section</Typography>
          <CodeBlock language="css">{`/* ==========================================
 HERO SECTION
 ========================================== */
.hero {
 min-height: 80vh;
 display: flex;
 align-items: center;
 background: linear-gradient(135deg, var(--dark) 0%, var(--primary) 100%);
 color: var(--white);
 text-align: center;
}
.hero h1 {
 font-size: 3rem;
 margin-bottom: var(--space-md);
}
.hero p {
 font-size: 1.25rem;
 opacity: 0.9;
 margin-bottom: var(--space-lg);
}
.hero-image {
 width: 150px;
 height: 150px;
 border-radius: 50%;
 border: 4px solid var(--white);
 margin-bottom: var(--space-md);
}`}</CodeBlock>
          <Typography variant="h3">Step 6: Cards &amp; Content</Typography>
          <CodeBlock language="css">{`/* ==========================================
 CARDS
 ========================================== */
.cards {
 display: flex;
 flex-wrap: wrap;
 gap: var(--space-md);
}
.card {
 flex: 1 1 300px;
 background-color: var(--white);
 border-radius: var(--radius);
 box-shadow: var(--shadow);
 padding: var(--space-lg);
 transition: var(--transition);
}
.card:hover {
 transform: translateY(-5px);
 box-shadow: var(--shadow-lg);
}
.card h3 {
 color: var(--dark);
 margin-bottom: var(--space-sm);
}
.card p {
 color: var(--text-light);
}`}</CodeBlock>
          <Typography variant="h3">Step 7: Buttons</Typography>
          <CodeBlock language="css">{`/* ==========================================
 BUTTONS
 ========================================== */
.btn {
 display: inline-block;
 padding: 12px 30px;
 border-radius: var(--radius);
 font-weight: 600;
 cursor: pointer;
 transition: var(--transition);
 border: none;
}
.btn-primary {
 background-color: var(--primary);
 color: var(--white);
}
.btn-primary:hover {
 background-color: var(--primary-dark);
 transform: translateY(-2px);
}
.btn-outline {
 background-color: transparent;
 border: 2px solid var(--white);
 color: var(--white);
}
.btn-outline:hover {
 background-color: var(--white);
 color: var(--dark);
}`}</CodeBlock>
          <Typography variant="h3">Step 8: Footer</Typography>
          <CodeBlock language="css">{`/* ==========================================
 FOOTER
 ========================================== */
.footer {
 background-color: var(--dark);
 color: var(--light);
 padding: var(--space-lg) 0;
 text-align: center;
}
.footer a {
 color: var(--primary);
 transition: var(--transition);
}
.footer a:hover {
 color: var(--white);
}`}</CodeBlock>
          <Typography variant="h3">Step 9: Responsive Design</Typography>
          <CodeBlock language="css">{`/* ==========================================
 RESPONSIVE DESIGN
 ========================================== */
/* Tablet */
@media (max-width: 768px) {
 .hero h1 {
 font-size: 2rem;
 }
 .hero p {
 font-size: 1rem;
 }
 .nav-links {
 display: none; /* Add hamburger menu later */
 }
 .section {
 padding: var(--space-lg) 0;
 }
 .card {
 flex: 1 1 100%;
 }
}
/* Mobile */
@media (max-width: 480px) {
 .hero h1 {
 font-size: 1.75rem;
 }
 .container {
 padding: 0 var(--space-sm);
 }
 .btn {
 display: block;
 width: 100%;
 text-align: center;
 }
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Complete HTML Template</Typography>
          <CodeBlock language="html">{`<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Your Name - Portfolio</title>
 <!-- Google Fonts -->
 <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
 <!-- Your CSS -->
 <link rel="stylesheet" href="css/style.css">
</head>
<body>
 <!-- Navigation -->
 <nav class="navbar">
 <div class="container flex-between">
 <a href="#" class="logo">Your Name</a>
 <ul class="nav-links">
 <li><a href="#about">About</a></li>
 <li><a href="#skills">Skills</a></li>
 <li><a href="#projects">Projects</a></li>
 <li><a href="#contact">Contact</a></li>
 </ul>
 </div>
 </nav>
 <!-- Hero Section -->
 <section class="hero">
 <div class="container">
 <img src="images/profile.jpg" alt="Your Name" class="hero-image">
 <h1>Hi, I'm [Your Name]</h1>
 <p>KOOMPI Apprentice | Future Software Engineer</p>
 <a href="#about" class="btn btn-outline">Learn More</a>
 </div>
 </section>
 <!-- About Section -->
 <section id="about" class="section section-light">
 <div class="container">
 <h2>About Me</h2>
 <p>Your story here...</p>
 </div>
 </section>
 <!-- Skills Section -->
 <section id="skills" class="section">
 <div class="container">
 <h2>My Skills</h2>
 <div class="cards">
 <div class="card">
 <h3>HTML</h3>
 <p>Building structured web pages</p>
 </div>
 <div class="card">
 <h3>CSS</h3>
 <p>Styling beautiful interfaces</p>
 </div>
 <div class="card">
 <h3>JavaScript</h3>
 <p>Coming soon...</p>
 </div>
 </div>
 </div>
 </section>
 <!-- Contact Section -->
 <section id="contact" class="section section-dark">
 <div class="container">
 <h2>Get In Touch</h2>
 <p>email@example.com</p>
 <a href="mailto:email@example.com" class="btn btn-primary">Email Me</a>
 </div>
 </section>
 <!-- Footer -->
 <footer class="footer">
 <div class="container">
 <p>&copy; 2024 Your Name. Built at KOOMPI </p>
 </div>
 </footer>
</body>
</html>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Evaluation Checklist</Typography>
          <Typography variant="h3">Technical (60 points)</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>External CSS file linked (5)</li>
            <li>CSS reset applied (5)</li>
            <li>Custom color scheme with variables (10)</li>
            <li>Google Fonts integrated (5)</li>
            <li>Navigation styled with hover effects (10)</li>
            <li>Flexbox used for layout (10)</li>
            <li>Responsive design works on mobile (10)</li>
            <li>Transitions on interactive elements (5)</li>
          </ul>
          <Typography variant="h3">Visual Design (25 points)</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Consistent color palette (5)</li>
            <li>Good typography hierarchy (5)</li>
            <li>Appropriate spacing (5)</li>
            <li>Visual balance and alignment (5)</li>
            <li>Professional appearance (5)</li>
          </ul>
          <Typography variant="h3">Code Quality (15 points)</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Well-organized CSS with comments (5)</li>
            <li>Meaningful class names (5)</li>
            <li>No unused code (5)</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Level Complete</Typography>
          <Typography>
            Upon submitting your styled portfolio:
          </Typography>
          <Typography>
            CSS Styling Badge earned
Web Developer Apprentice Certificate awarded (combined with HTML)
Ready for Track 03: JavaScript
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            You did it!
          </Typography>
          <Typography>
            Your first portfolio website is complete!
          </Typography>
          <Typography>
            This is the beginning of your professional presence online.
          </Typography>
        </div>
      </section>
    </div>
  );
}
