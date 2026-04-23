
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module04Collaboration() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Collaboration Workflow</Typography>
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
            <li>Work with teammates on the same project</li>
            <li>Use pull requests</li>
            <li>Resolve merge conflicts</li>
            <li>Contribute to open source</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Collaboration Overview</Typography>
          <Typography variant="h3">How Teams Work Together</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>TEAM COLLABORATION</li>
            <li>GITHUB</li>
            <li>(main)</li>
            <li>Sokha&apos;s Dara&apos;s Bopha&apos;s</li>
            <li>Computer Computer Computer</li>
            <li>feature-nav feature-footer fix-bug</li>
            <li>Everyone pushes to GitHub, pulls updates from GitHub</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Fork &amp; Pull Request Workflow</Typography>
          <Typography variant="h3">For Contributing to Others&apos; Projects</Typography>
          <CodeBlock language="text">{`1. FORK → Create your copy of their repo
2. CLONE → Download your fork
3. BRANCH → Create feature branch
4. CODE → Make your changes
5. PUSH → Push to YOUR fork
6. PR → Request they merge your changes`}</CodeBlock>
          <Typography variant="h3">Step-by-Step</Typography>
          <Typography>
            1. Fork the Repository
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Go to the project on GitHub</li>
            <li>Click &quot;Fork&quot; button</li>
            <li>Now you have your own copy</li>
          </ul>
          <Typography>
            2. Clone Your Fork
          </Typography>
          <CodeBlock language="bash">{`git clone https://github.com/YOUR-USERNAME/project.git
cd project`}</CodeBlock>
          <Typography>
            3. Add Upstream Remote
          </Typography>
          <CodeBlock language="bash">{`git remote add upstream https://github.com/ORIGINAL-OWNER/project.git`}</CodeBlock>
          <Typography>
            4. Create Branch &amp; Work
          </Typography>
          <CodeBlock language="bash">{`git checkout -b feature-improvement
# Make changes...
git add .
git commit -m "Add improvement"`}</CodeBlock>
          <Typography>
            5. Push to Your Fork
          </Typography>
          <CodeBlock language="bash">{`git push origin feature-improvement`}</CodeBlock>
          <Typography>
            6. Create Pull Request
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Go to your fork on GitHub</li>
            <li>Click &quot;Compare &amp; pull request&quot;</li>
            <li>Describe your changes</li>
            <li>Submit!</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Pull Requests</Typography>
          <Typography variant="h3">What is a Pull Request?</Typography>
          <Typography>
            A pull request (PR) is a proposal to merge your changes into another branch.
          </Typography>
          <Typography variant="h3">Creating a Good PR</Typography>
          <Typography>
            Title: Clear summary of changes
          </Typography>
          <CodeBlock language="text">{`Add dark mode toggle to navigation`}</CodeBlock>
          <Typography>
            Description:
          </Typography>
          <CodeBlock language="markdown">{`## What does this PR do?
Adds a dark mode toggle button to the navigation bar.
## Changes made
- Added toggle button in nav.html
- Added dark mode CSS in styles.css
- Added toggle JavaScript in app.js
## Screenshots
[Include if visual changes]
## How to test
1. Open the page
2. Click the moon icon
3. Verify colors change`}</CodeBlock>
          <Typography variant="h3">Reviewing PRs</Typography>
          <Typography>
            When reviewing someone&apos;s PR:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Read the description</li>
            <li>Look at the files changed</li>
            <li>Test locally if possible</li>
            <li>Leave constructive comments</li>
            <li>Approve or request changes</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Merge Conflicts</Typography>
          <Typography variant="h3">When Conflicts Happen</Typography>
          <Typography>
            Conflicts occur when two people change the same lines:
          </Typography>
          <CodeBlock language="text">{`You: "The color is blue"
Teammate: "The color is red"
Git: "I don't know which one to use!"`}</CodeBlock>
          <Typography variant="h3">Conflict Markers</Typography>
          <CodeBlock language="html">{`<<<<<<< HEAD
<h1 class="blue-header">Welcome</h1>
=======
<h1 class="red-header">Hello</h1>
>>>>>>> feature-branch`}</CodeBlock>
          <Typography variant="h3">Resolving Conflicts</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Open the conflicted file</li>
            <li>Decide what to keep</li>
            <li>Remove conflict markers</li>
            <li>Save the file</li>
            <li>Stage and commit</li>
          </ul>
          <CodeBlock language="html">{`<!-- Resolved: we decided on purple -->
<h1 class="purple-header">Welcome</h1>`}</CodeBlock>
          <CodeBlock language="bash">{`git add conflicted-file.html
git commit -m "Resolve merge conflict in header"`}</CodeBlock>
          <Typography variant="h3">Avoiding Conflicts</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Pull before starting work</li>
            <li>Communicate with teammates</li>
            <li>Work on different files when possible</li>
            <li>Use feature branches</li>
            <li>Merge main into your branch regularly</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Team Workflow Best Practices</Typography>
          <Typography variant="h3">Branch Naming</Typography>
          <CodeBlock language="text">{`feature/add-login-page
feature/dark-mode
fix/navigation-bug
hotfix/critical-security
docs/update-readme`}</CodeBlock>
          <Typography variant="h3">Commit Message Format</Typography>
          <CodeBlock language="text">{`type: short description
Longer explanation if needed.
- Bullet points for details
- Reference issues: Fixes #123`}</CodeBlock>
          <Typography>
            Types: feat, fix, docs, style, refactor, test
          </Typography>
          <Typography variant="h3">Protected Branches</Typography>
          <Typography>
            Main branch should require:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Pull request reviews</li>
            <li>Passing tests</li>
            <li>No direct pushes</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Contributing to Open Source</Typography>
          <Typography variant="h3">Finding Projects</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>GitHub Explore</li>
            <li>Topics you&apos;re interested in</li>
            <li>Projects you use</li>
            <li>&quot;Good first issue&quot; labels</li>
          </ul>
          <Typography variant="h3">First Contributions</Typography>
          <Typography>
            Start small:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Fix typos in documentation</li>
            <li>Improve README</li>
            <li>Add tests</li>
            <li>Fix simple bugs</li>
          </ul>
          <Typography variant="h3">Contribution Checklist</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Read CONTRIBUTING.md</li>
            <li>Check existing issues/PRs</li>
            <li>Fork and clone</li>
            <li>Follow code style</li>
            <li>Write clear commit messages</li>
            <li>Test your changes</li>
            <li>Respond to review feedback</li>
          </ul>
          <Typography variant="h3">Your First Open Source PR</Typography>
          <Typography>
            Try First Contributions — a project made for learning!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: GitHub Features</Typography>
          <Typography variant="h3">Issues</Typography>
          <Typography>
            Track bugs and features:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Report bugs</li>
            <li>Request features</li>
            <li>Discuss improvements</li>
          </ul>
          <Typography variant="h3">Projects</Typography>
          <Typography>
            Organize work:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Kanban boards</li>
            <li>Track progress</li>
            <li>Assign tasks</li>
          </ul>
          <Typography variant="h3">Actions</Typography>
          <Typography>
            Automate workflows:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Run tests</li>
            <li>Deploy code</li>
            <li>Check code quality</li>
          </ul>
          <Typography variant="h3">GitHub Pages</Typography>
          <Typography>
            Host websites for free!
          </Typography>
          <CodeBlock language="bash">{`# In repo settings → Pages
# Select branch (usually main or gh-pages)
# Your site: username.github.io/repo-name`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Fork &amp; PR</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Fork a practice repository</li>
            <li>Make a simple change</li>
            <li>Create a pull request</li>
          </ul>
          <Typography variant="h3">Exercise 2: Simulate Conflict</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create two branches from main</li>
            <li>Change the same line in both</li>
            <li>Merge first branch</li>
            <li>Try to merge second (conflict!)</li>
            <li>Resolve it</li>
          </ul>
          <Typography variant="h3">Exercise 3: Review a PR</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Find a PR on a public project</li>
            <li>Read through the changes</li>
            <li>Note what makes it good or could be improved</li>
          </ul>
          <Typography variant="h3">Exercise 4: GitHub Pages</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create a simple repo with index.html</li>
            <li>Enable GitHub Pages</li>
            <li>Access your live site!</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Collaboration Commands
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
                <TableCell>git remote add upstream url</TableCell>
                <TableCell>Link to original repo</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git fetch upstream</TableCell>
                <TableCell>Get original&apos;s changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git merge upstream/main</TableCell>
                <TableCell>Merge original&apos;s changes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Workflow
          </Typography>
          <CodeBlock language="text">{`fork → clone → branch → code → push → PR`}</CodeBlock>
          <Typography>
            Conflict Resolution
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Identify conflicted files</li>
            <li>Edit to resolve</li>
            <li>Remove markers</li>
            <li>Stage and commit</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Level Complete</Typography>
          <Typography>
            You&apos;ve completed Git &amp; GitHub! You can now:
          </Typography>
          <Typography>
            Track changes with Git
Use branches for features
Host code on GitHub
Collaborate with pull requests
Contribute to open source
          </Typography>
          <Typography>
            Git &amp; GitHub Badge earned!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            You&apos;re a Git collaborator!
          </Typography>
          <Typography>
            Open source awaits your contributions.
          </Typography>
        </div>
      </section>
    </div>
  );
}
