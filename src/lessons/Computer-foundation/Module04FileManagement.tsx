
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';

export default function Module04FileManagement() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">File Management & Organization</Typography>
          <Typography variant="lead">
            Track 00: Organizing Your Digital Workspace Like a Professional
          </Typography>
        </div>
      </section>

      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Objectives</Typography>
          <Typography>
            By the end of this module, you will be able to:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Organize files and folders like a professional developer</li>
            <li>Use consistent naming conventions</li>
            <li>Manage projects efficiently</li>
            <li>Keep your digital workspace clean and productive</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Why Organization Matters</Typography>
          <Typography variant="h3">The Cost of Disorganization</Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
              <Typography variant="h4" className="text-red-400 mb-4">Disorganized Developer</Typography>
              <CodeBlock language="text">{`Desktop/
├── final_v2_FINAL.html
├── test.html
├── asdfasdf.js
├── project(1).zip
├── New folder/
└── untitled.txt`}</CodeBlock>
              <ul className="list-disc pl-8 mt-4 space-y-1 text-sm text-text-secondary">
                <li>Can't find anything</li>
                <li>Wastes time searching</li>
                <li>Looks unprofessional</li>
              </ul>
            </div>
            
            <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-2xl">
              <Typography variant="h4" className="text-green-400 mb-4">Organized Developer</Typography>
              <CodeBlock language="text">{`projects/
├── koompi-website/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── portfolio/`}</CodeBlock>
              <ul className="list-disc pl-8 mt-4 space-y-1 text-sm text-text-secondary">
                <li>Easy to navigate</li>
                <li>Saves hours of work</li>
                <li>Team-friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Standard Project Structure</Typography>
          <Typography>
            Every web project should follow a similar pattern to ensure clarity and scalability:
          </Typography>
          
          <div className="my-8 p-6 glass-panel rounded-2xl border border-white/5">
            <CodeBlock language="text">{`project-name/
├── index.html           # Main homepage
├── about.html           # Other HTML pages
├── css/                 # All stylesheets
│   └── style.css
├── js/                  # All JavaScript files
│   └── main.js
├── images/              # All visual assets
│   ├── logo.png
│   └── icons/
└── README.md            # Project description`}</CodeBlock>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Folder</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Root (<code>/</code>)</TableCell>
                <TableCell>Main HTML files and documentation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>css/</code></TableCell>
                <TableCell>Keeps styles separate from logic</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>js/</code></TableCell>
                <TableCell>Keeps interactive scripts organized</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>images/</code></TableCell>
                <TableCell>Centralizes all visual media</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: File Naming Conventions</Typography>
          <Typography variant="h3">The Golden Rules</Typography>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Do</TableHead>
                <TableHead>Don't</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><span className="text-green-400">Lowercase only</span> (<code>index.html</code>)</TableCell>
                <TableCell><span className="text-red-400">Uppercase</span> (<code>Index.HTML</code>)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><span className="text-green-400">Hyphens for spaces</span> (<code>my-work.css</code>)</TableCell>
                <TableCell><span className="text-red-400">Spaces</span> (<code>my work.css</code>)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><span className="text-green-400">Be descriptive</span> (<code>contact-form.js</code>)</TableCell>
                <TableCell><span className="text-red-400">Be vague</span> (<code>script1.js</code>)</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="h3" className="mt-8">Examples</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bad</TableHead>
                <TableHead>Good</TableHead>
                <TableHead>Why</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><code>My Page.html</code></TableCell>
                <TableCell><code>my-page.html</code></TableCell>
                <TableCell>No spaces, lowercase</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>sdfljk.js</code></TableCell>
                <TableCell><code>form-handler.js</code></TableCell>
                <TableCell>Clear purpose</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>image (1).png</code></TableCell>
                <TableCell><code>profile-photo.png</code></TableCell>
                <TableCell>Descriptive</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Organizing Your Home Directory</Typography>
          <Typography>
            Set up your permanent workspace structure:
          </Typography>
          <CodeBlock language="text">{`/home/student/
├── projects/            # ALL coding projects
│   ├── learning/        # Practice and exercises
│   └── portfolio/       # Your main portfolio
├── Documents/           # General files
│   └── notes/           # Study notes
└── Downloads/           # TEMPORARY only!`}</CodeBlock>
          
          <Typography variant="h3" className="mt-8 text-primary">Workspace Setup Tip</Typography>
          <Typography>
            Keep your Desktop empty! It's for shortcuts only. A clean Desktop leads to a clear mind.
          </Typography>
        </div>
      </section>

      <section className="lesson-section">
        <div className="lesson-content">
          <div className="mt-20 pt-10 border-t border-white/5">
            <Typography variant="h2">Module Summary</Typography>
            
            <div className="p-8 glass-panel rounded-3xl border border-white/5 mb-12">
              <Typography variant="h3" className="mb-4 text-primary">Digital Foundations Complete!</Typography>
              <Typography>
                Congratulations! You have finished Track 00. You now have the fundamental skills:
              </Typography>
              <ul className="list-disc pl-8 mt-4 space-y-2 text-text-secondary">
                <li>Comfort with the Linux terminal (CLI)</li>
                <li>Professional file organization habits</li>
                <li>Consistent naming conventions</li>
                <li>Typing proficiency (aim for 30+ WPM)</li>
              </ul>
            </div>

            <div className="mt-12 p-8 bg-primary/10 rounded-3xl text-center border border-primary/20">
              <Typography variant="h4" className="text-primary uppercase tracking-widest">Next Step</Typography>
              <Typography variant="lead" className="mt-2">Track 02: Web Development (HTML)</Typography>
              <Typography className="mt-2 text-text-secondary">
                You are now ready to start building real websites. The journey of a Software Engineer begins here!
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
