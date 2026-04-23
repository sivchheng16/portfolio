
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module02BasicCommands() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Basic Git Commands</Typography>
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
            <li>View commit history</li>
            <li>Undo changes in various ways</li>
            <li>Work with branches</li>
            <li>Use essential daily Git commands</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Viewing History</Typography>
          <Typography variant="h3">git log</Typography>
          <Typography>
            See all commits:
          </Typography>
          <CodeBlock language="bash">{`git log`}</CodeBlock>
          <Typography>
            Output:
          </Typography>
          <CodeBlock language="text">{`commit a1b2c3d4e5f6... (HEAD -> main)
Author: Sokha <sokha@email.com>
Date: Thu Dec 26 10:00:00 2024 +0700
 Add navigation styling
commit f6e5d4c3b2a1...
Author: Sokha <sokha@email.com>
Date: Thu Dec 26 09:30:00 2024 +0700
 Add header section`}</CodeBlock>
          <Typography variant="h3">Compact Log View</Typography>
          <CodeBlock language="bash">{`# One line per commit
git log --oneline
# Output:
# a1b2c3d Add navigation styling
# f6e5d4c Add header section
# 1234567 Initial commit`}</CodeBlock>
          <Typography variant="h3">Other Useful Log Options</Typography>
          <CodeBlock language="bash">{`# Last 5 commits
git log -5
# Show what changed in each commit
git log -p
# Graph view (for branches)
git log --oneline --graph --all`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Checking Differences</Typography>
          <Typography variant="h3">git diff</Typography>
          <Typography>
            See what changed in your files:
          </Typography>
          <CodeBlock language="bash">{`# Changes not yet staged
git diff
# Changes that are staged
git diff --staged
# Specific file
git diff index.html`}</CodeBlock>
          <Typography variant="h3">Understanding Diff Output</Typography>
          <CodeBlock language="diff">{`diff --git a/index.html b/index.html
--- a/index.html
+++ b/index.html
@@ -1,5 +1,6 @@
 <html>
 <head>
- <title>Old Title</title>
+ <title>New Title</title>
+ <link rel="stylesheet" href="style.css">
 </head>
 </html>`}</CodeBlock>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Lines starting with - were removed</li>
            <li>Lines starting with + were added</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Undoing Changes</Typography>
          <Typography variant="h3">Discard Unstaged Changes</Typography>
          <CodeBlock language="bash">{`# Discard changes to specific file
git checkout -- filename.html
# Or using restore (newer)
git restore filename.html`}</CodeBlock>
          <Typography>
            Warning: This permanently loses your changes!
          </Typography>
          <Typography variant="h3">Unstage Files</Typography>
          <CodeBlock language="bash">{`# Unstage specific file
git reset HEAD filename.html
# Or using restore (newer)
git restore --staged filename.html`}</CodeBlock>
          <Typography variant="h3">Amend Last Commit</Typography>
          <Typography>
            Forgot something? Fix the last commit:
          </Typography>
          <CodeBlock language="bash">{`# Make your fix
git add forgotten-file.html
# Amend the commit
git commit --amend -m "Better commit message"`}</CodeBlock>
          <Typography variant="h3">Revert a Commit</Typography>
          <Typography>
            Create a new commit that undoes a previous one:
          </Typography>
          <CodeBlock language="bash">{`git revert abc123`}</CodeBlock>
          <Typography>
            This is safe — doesn&apos;t rewrite history.
          </Typography>
          <Typography variant="h3">Reset to Previous Commit</Typography>
          <Typography>
            Caution: This can lose work!
          </Typography>
          <CodeBlock language="bash">{`# Soft reset (keep changes staged)
git reset --soft abc123
# Mixed reset (keep changes unstaged) - default
git reset abc123
# Hard reset (discard all changes)
git reset --hard abc123`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Branches</Typography>
          <Typography variant="h3">What Are Branches?</Typography>
          <Typography>
            Branches let you work on features without affecting main code:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>[feature-login]</li>
            <li>→ Add login page</li>
            <li>main: ● ● ● ●</li>
            <li>→ Continue main work</li>
            <li>[main]</li>
          </ul>
          <Typography variant="h3">Creating Branches</Typography>
          <CodeBlock language="bash">{`# Create a new branch
git branch feature-login
# Switch to it
git checkout feature-login
# Or do both at once
git checkout -b feature-login
# Newer syntax
git switch -c feature-login`}</CodeBlock>
          <Typography variant="h3">Listing Branches</Typography>
          <CodeBlock language="bash">{`# List local branches
git branch
# Current branch has asterisk
# feature-login
# * main`}</CodeBlock>
          <Typography variant="h3">Switching Branches</Typography>
          <CodeBlock language="bash">{`git checkout main
# or
git switch main`}</CodeBlock>
          <Typography variant="h3">Merging Branches</Typography>
          <Typography>
            Bring changes from one branch into another:
          </Typography>
          <CodeBlock language="bash">{`# Switch to branch you want to merge INTO
git checkout main
# Merge the feature branch
git merge feature-login`}</CodeBlock>
          <Typography variant="h3">Deleting Branches</Typography>
          <CodeBlock language="bash">{`# Delete merged branch
git branch -d feature-login
# Force delete (even if not merged)
git branch -D abandoned-feature`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Common Workflows</Typography>
          <Typography variant="h3">Daily Workflow</Typography>
          <CodeBlock language="bash">{`# Morning: Start work
git status # Check current state
git pull # Get latest changes (if using remote)
# Make changes to files...
# Save progress
git add .
git commit -m "Add contact form"
# Continue working...
git add .
git commit -m "Style contact form"
# End of day: Push to remote
git push`}</CodeBlock>
          <Typography variant="h3">Feature Branch Workflow</Typography>
          <CodeBlock language="bash">{`# Start new feature
git checkout -b feature-dark-mode
# Work on feature...
git add .
git commit -m "Add dark mode toggle"
git add .
git commit -m "Implement dark mode styles"
# Feature complete - merge back
git checkout main
git merge feature-dark-mode
git branch -d feature-dark-mode`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Useful Commands Reference</Typography>
          <Typography variant="h3">Status &amp; Information</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Command</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>git status</TableCell>
                <TableCell>Current state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git log</TableCell>
                <TableCell>Commit history</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git log --oneline</TableCell>
                <TableCell>Compact history</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git diff</TableCell>
                <TableCell>Show changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git branch</TableCell>
                <TableCell>List branches</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Making Changes</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Command</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>git add .</TableCell>
                <TableCell>Stage all</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git add file</TableCell>
                <TableCell>Stage specific file</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git commit -m &quot;msg&quot;</TableCell>
                <TableCell>Commit with message</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git commit --amend</TableCell>
                <TableCell>Fix last commit</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Undoing</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Command</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>git restore file</TableCell>
                <TableCell>Discard changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git restore --staged file</TableCell>
                <TableCell>Unstage</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git revert commit</TableCell>
                <TableCell>Undo a commit safely</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git reset --hard commit</TableCell>
                <TableCell>Reset to commit (destructive)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Branches</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Command</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>git branch name</TableCell>
                <TableCell>Create branch</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git checkout name</TableCell>
                <TableCell>Switch to branch</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git checkout -b name</TableCell>
                <TableCell>Create and switch</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git merge name</TableCell>
                <TableCell>Merge branch</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git branch -d name</TableCell>
                <TableCell>Delete branch</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Common Problems &amp; Solutions</Typography>
          <Typography variant="h3">Problem: Committed to Wrong Branch</Typography>
          <CodeBlock language="bash">{`# Move commit to correct branch
git checkout correct-branch
git cherry-pick abc123
# Remove from wrong branch
git checkout wrong-branch
git reset --hard HEAD~1`}</CodeBlock>
          <Typography variant="h3">Problem: Need to Temporarily Save Work</Typography>
          <CodeBlock language="bash">{`# Stash current changes
git stash
# Do other work...
# Get changes back
git stash pop`}</CodeBlock>
          <Typography variant="h3">Problem: Merge Conflict</Typography>
          <Typography>
            When Git can&apos;t auto-merge:
          </Typography>
          <CodeBlock language="text">{`<<<<<<< HEAD
Your version
=======
Their version
>>>>>>> branch-name`}</CodeBlock>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Edit file to resolve</li>
            <li>Remove conflict markers</li>
            <li>git add filename</li>
            <li>git commit</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Log Exploration</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create 5 commits in a project</li>
            <li>View with git log</li>
            <li>View with git log --oneline</li>
            <li>Find a specific commit</li>
          </ul>
          <Typography variant="h3">Exercise 2: Undo Practice</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Make changes to a file</li>
            <li>Use git restore to undo before staging</li>
            <li>Make changes again</li>
            <li>Stage, then unstage with git restore --staged</li>
          </ul>
          <Typography variant="h3">Exercise 3: Branch Workflow</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create a new branch called feature-test</li>
            <li>Make changes and commit</li>
            <li>Switch back to main</li>
            <li>Merge the feature branch</li>
            <li>Delete the feature branch</li>
          </ul>
          <Typography variant="h3">Exercise 4: Amend Commit</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Make a commit with a typo in the message</li>
            <li>Use git commit --amend to fix it</li>
            <li>Verify with git log</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Essential Commands
          </Typography>
          <CodeBlock language="bash">{`# Status
git status
git log --oneline
# Changes
git add .
git commit -m "message"
# Undo
git restore filename
git restore --staged filename
# Branches
git branch name
git checkout name
git merge name`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Before moving to Module 04:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>View and understand history</li>
            <li>Undo changes safely</li>
            <li>Create and merge branches</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 04 - GitHub &amp; Remote Repositories
          </Typography>
          <Typography>
            You will put your code online!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Git mastery growing!
          </Typography>
          <Typography>
            These commands will become second nature.
          </Typography>
        </div>
      </section>
    </div>
  );
}
