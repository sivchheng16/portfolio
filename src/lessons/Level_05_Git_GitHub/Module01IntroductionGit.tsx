
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module01IntroductionGit() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Introduction to Git</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 05: Git &amp; GitHub</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Objectives</Typography>
          <Typography>
            By the end of this module, you will be able to:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Understand what version control is</li>
            <li>Explain why Git is important</li>
            <li>Install and configure Git</li>
            <li>Create your first repository</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What is Version Control?</Typography>
          <Typography variant="h3">The Problem</Typography>
          <Typography>
            Have you ever:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Needed to undo changes but can&apos;t remember what you changed?</li>
            <li>Lost work because you overwrote a file?</li>
            <li>Wanted to try something without breaking your project?</li>
            <li>Needed to work on the same files with teammates?</li>
          </ul>
          <Typography>
            Version control solves all these problems!
          </Typography>
          <Typography variant="h3">Version Control Defined</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>VERSION CONTROL</li>
            <li>A system that tracks changes to files over time.</li>
            <li>You can:</li>
            <li>• See what changed and when</li>
            <li>• Go back to any previous version</li>
            <li>• Work on multiple versions simultaneously</li>
            <li>• Merge work from multiple people</li>
            <li>Think of it as unlimited UNDO + history + collaboration</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: What is Git?</Typography>
          <Typography variant="h3">Git Defined</Typography>
          <Typography>
            Git is the most popular version control system. Created by Linus Torvalds (creator of Linux) in 2005.
          </Typography>
          <Typography variant="h3">Git vs GitHub</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Git</TableHead>
                <TableHead>GitHub</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Software on your computer</TableCell>
                <TableCell>Website/service</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tracks changes locally</TableCell>
                <TableCell>Hosts code online</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Works offline</TableCell>
                <TableCell>Needs internet</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Free, open source</TableCell>
                <TableCell>Free + paid plans</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>The tool</TableCell>
                <TableCell>A place to use the tool</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Analogy: Git is like a camera (takes snapshots). GitHub is like a photo album cloud service (stores and shares photos).
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Key Git Concepts</Typography>
          <Typography variant="h3">Repository (Repo)</Typography>
          <Typography>
            A folder where Git tracks all changes:
          </Typography>
          <CodeBlock language="text">{`my-project/
├── index.html
├── style.css
├── script.js
└── .git/ ← Git's data (hidden folder)`}</CodeBlock>
          <Typography variant="h3">Commit</Typography>
          <Typography>
            A &quot;snapshot&quot; of your files at a point in time:
          </Typography>
          <CodeBlock language="text">{`Commit History:
────────────────────────────────────────────────────────────
 [Initial] → [Add CSS] → [Fix bug] → [Add feature] → [Now]
────────────────────────────────────────────────────────────
 ↑
 You can go back to any of these!`}</CodeBlock>
          <Typography variant="h3">Staging Area</Typography>
          <Typography>
            Before committing, you &quot;stage&quot; files — select which changes to include:
          </Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────────────────────┐
│ THE GIT WORKFLOW │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ WORKING DIRECTORY → STAGING AREA → REPOSITORY │
│ (Your files) (To be saved) (Saved history) │
│ │
│ index.html (modified) ┌─────────────┐ Commit 1 │
│ style.css (modified) ──► │ index.html │ ──► Commit 2 │
│ readme.md (no change) │ style.css │ Commit 3 │
│ └─────────────┘ ... │
│ │
│ git add git commit │
│ │
└─────────────────────────────────────────────────────────────────────────────┘`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Installing Git</Typography>
          <Typography variant="h3">On KOOMPI OS (Linux)</Typography>
          <Typography>
            Git is usually pre-installed. Check:
          </Typography>
          <CodeBlock language="bash">{`git --version`}</CodeBlock>
          <Typography>
            If not installed:
          </Typography>
          <CodeBlock language="bash">{`sudo pacman -S git`}</CodeBlock>
          <Typography variant="h3">Configure Git</Typography>
          <Typography>
            Set your identity (required before first commit):
          </Typography>
          <CodeBlock language="bash">{`git config --global user.name "Your Name"
git config --global user.email "you@example.com"`}</CodeBlock>
          <Typography>
            Check your settings:
          </Typography>
          <CodeBlock language="bash">{`git config --list`}</CodeBlock>
          <Typography variant="h3">Configure Editor</Typography>
          <CodeBlock language="bash">{`# Set VS Code as default editor
git config --global core.editor "code --wait"
# Or nano (simpler)
git config --global core.editor "nano"`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Creating a Repository</Typography>
          <Typography variant="h3">Initialize a New Repository</Typography>
          <CodeBlock language="bash">{`# Navigate to your project
cd ~/projects/my-website
# Initialize Git
git init`}</CodeBlock>
          <Typography>
            You&apos;ll see: Initialized empty Git repository in /home/user/projects/my-website/.git/
          </Typography>
          <Typography variant="h3">Check Status</Typography>
          <CodeBlock language="bash">{`git status`}</CodeBlock>
          <Typography>
            Shows:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Which files are new (untracked)</li>
            <li>Which files have changes</li>
            <li>Which files are staged</li>
          </ul>
          <Typography variant="h3">Your First Commit</Typography>
          <CodeBlock language="bash">{`# Stage all files
git add .
# Create commit with message
git commit -m "Initial commit"`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: The .gitignore File</Typography>
          <Typography variant="h3">What to Ignore</Typography>
          <Typography>
            Some files shouldn&apos;t be tracked:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>node_modules/ (can be reinstalled)</li>
            <li>.env files (secrets)</li>
            <li>build files</li>
            <li>system files</li>
          </ul>
          <Typography variant="h3">Create .gitignore</Typography>
          <CodeBlock language="bash">{`# Create the file
touch .gitignore`}</CodeBlock>
          <Typography variant="h3">Common .gitignore Content</Typography>
          <CodeBlock language="text">{`# Dependencies
node_modules/
# Build files
dist/
build/
# Environment variables
.env
.env.local
# OS files
.DS_Store
Thumbs.db
# Editor files
.vscode/
*.swp
# Logs
*.log`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Understanding Git Workflow</Typography>
          <Typography variant="h3">The Three States</Typography>
          <Typography>
            Files can be in three states:
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>State</TableHead>
                <TableHead>Meaning</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Modified</TableCell>
                <TableCell>Changed but not staged</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Staged</TableCell>
                <TableCell>Marked to go in next commit</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Committed</TableCell>
                <TableCell>Safely stored in Git</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Basic Workflow</Typography>
          <CodeBlock language="bash">{`# 1. Make changes to your files
# (edit index.html, add style.css, etc.)
# 2. Check what changed
git status
# 3. Stage changes
git add . # All changes
git add index.html # Specific file
# 4. Commit with message
git commit -m "Add navigation bar"
# 5. Repeat!`}</CodeBlock>
          <Typography variant="h3">Good Commit Messages</Typography>
          <CodeBlock language="bash">{`# Bad
git commit -m "changes"
git commit -m "fixed stuff"
git commit -m "asdf"
# Good
git commit -m "Add contact form to homepage"
git commit -m "Fix navigation bug on mobile"
git commit -m "Update hero section styling"`}</CodeBlock>
          <Typography>
            Tips:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Start with a verb (Add, Fix, Update, Remove)</li>
            <li>Keep it short (50 characters)</li>
            <li>Explain what, not how</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Install &amp; Configure</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Verify Git is installed (git --version)</li>
            <li>Configure your name and email</li>
            <li>Verify configuration (git config --list)</li>
          </ul>
          <Typography variant="h3">Exercise 2: First Repository</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create a new project folder</li>
            <li>Add an index.html file with basic content</li>
            <li>Initialize Git</li>
            <li>Make your first commit</li>
          </ul>
          <Typography variant="h3">Exercise 3: Multiple Commits</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Modify your HTML file</li>
            <li>Commit the changes with a meaningful message</li>
            <li>Add a CSS file</li>
            <li>Commit that change</li>
            <li>Run git log to see your history</li>
          </ul>
          <Typography variant="h3">Exercise 4: .gitignore</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create a .gitignore file</li>
            <li>Add common ignores</li>
            <li>Create a node_modules folder (to test)</li>
            <li>Verify it&apos;s ignored with git status</li>
          </ul>
          <Typography variant="h3">Exercise 5: Existing Project</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Take one of your existing projects (portfolio, quiz)</li>
            <li>Initialize Git in it</li>
            <li>Create a .gitignore</li>
            <li>Make your first commit</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Key Commands
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Command</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>git init</TableCell>
                <TableCell>Start tracking a folder</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git status</TableCell>
                <TableCell>See current state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git add</TableCell>
                <TableCell>Stage files</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git commit</TableCell>
                <TableCell>Save a snapshot</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git log</TableCell>
                <TableCell>View history</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Key Concepts
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Term</TableHead>
                <TableHead>Meaning</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Repository</TableCell>
                <TableCell>Tracked project folder</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Commit</TableCell>
                <TableCell>Snapshot of files</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Staging</TableCell>
                <TableCell>Selecting files to commit</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>.gitignore</TableCell>
                <TableCell>Files Git should ignore</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Before moving to Module 03:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Git installed and configured</li>
            <li>Created first repository</li>
            <li>Made multiple commits</li>
            <li>Understand staging</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 03 - Basic Git Commands
          </Typography>
          <Typography>
            You will learn to navigate Git history and undo changes!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            You&apos;ve entered the Git world!
          </Typography>
          <Typography>
            Every professional developer uses Git.
          </Typography>
        </div>
      </section>
    </div>
  );
}
