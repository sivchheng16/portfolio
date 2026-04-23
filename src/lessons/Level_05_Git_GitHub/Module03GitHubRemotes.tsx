
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module03GitHubRemotes() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">GitHub &amp; Remote Repositories</Typography>
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
            <li>Create a GitHub account</li>
            <li>Push local repositories to GitHub</li>
            <li>Clone repositories from GitHub</li>
            <li>Keep local and remote in sync</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What is GitHub?</Typography>
          <Typography variant="h3">GitHub Defined</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>GIT + GITHUB</li>
            <li>YOUR COMPUTER GITHUB (CLOUD)</li>
            <li>Local Repo push ► Remote Repo</li>
            <li>◄ pull</li>
            <li>Your work</li>
            <li>Your history</li>
            <li>Teammates</li>
            <li>Portfolio</li>
            <li>Backup</li>
            <li>Sharing</li>
          </ul>
          <Typography variant="h3">Why Use GitHub?</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Benefit</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Backup</TableCell>
                <TableCell>Code stored safely in cloud</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Portfolio</TableCell>
                <TableCell>Show your work to employers</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Collaboration</TableCell>
                <TableCell>Work with others</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Open Source</TableCell>
                <TableCell>Contribute to projects</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>History</TableCell>
                <TableCell>Access from anywhere</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Creating a GitHub Account</Typography>
          <Typography variant="h3">Step-by-Step</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Go to github.com</li>
            <li>Click &quot;Sign up&quot;</li>
            <li>Enter your email</li>
            <li>Create a password</li>
            <li>Choose a username (this is your public identity!)</li>
            <li>Verify your account</li>
          </ul>
          <Typography variant="h3">Username Tips</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Use your real name or professional alias</li>
            <li>Keep it simple and memorable</li>
            <li>Avoid numbers if possible</li>
            <li>This will be your brand!</li>
          </ul>
          <Typography>
            Examples: sokha-meas, dara-dev, vanna-codes
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Creating a Repository on GitHub</Typography>
          <Typography variant="h3">New Repository</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Click &quot;+&quot; in top right → &quot;New repository&quot;</li>
            <li>Fill in details:</li>
          </ul>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Repository name: my-portfolio</li>
            <li>Description: &quot;My personal portfolio website&quot;</li>
            <li>Public or Private</li>
            <li>Don&apos;t add README (we have local files)</li>
          </ul>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Click &quot;Create repository&quot;</li>
          </ul>
          <Typography variant="h3">You&apos;ll See Instructions Like</Typography>
          <CodeBlock language="bash">{`# Push an existing repository
git remote add origin https://github.com/username/my-portfolio.git
git branch -M main
git push -u origin main`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Connecting Local to Remote</Typography>
          <Typography variant="h3">Add Remote</Typography>
          <CodeBlock language="bash">{`# In your local project folder
git remote add origin https://github.com/username/my-portfolio.git`}</CodeBlock>
          <Typography variant="h3">Verify Remote</Typography>
          <CodeBlock language="bash">{`git remote -v
# Output:
# origin https://github.com/username/my-portfolio.git (fetch)
# origin https://github.com/username/my-portfolio.git (push)`}</CodeBlock>
          <Typography variant="h3">Push to GitHub</Typography>
          <CodeBlock language="bash">{`# First push (set upstream)
git push -u origin main
# Future pushes
git push`}</CodeBlock>
          <Typography variant="h3">What Just Happened?</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Your local commits were sent to GitHub</li>
            <li>GitHub now has a copy of your project</li>
            <li>Anyone (if public) can see it</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Cloning Repositories</Typography>
          <Typography variant="h3">Clone = Download + Connect</Typography>
          <CodeBlock language="bash">{`# Clone a repository
git clone https://github.com/username/repository.git
# Clone into specific folder
git clone https://github.com/username/repository.git my-folder`}</CodeBlock>
          <Typography variant="h3">What Clone Does</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Downloads all files</li>
            <li>Downloads entire history</li>
            <li>Sets up remote connection</li>
            <li>Ready to push/pull</li>
          </ul>
          <Typography variant="h3">Clone Your Own Repo to Another Computer</Typography>
          <CodeBlock language="bash">{`git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
# Now you can work and push changes`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Push and Pull</Typography>
          <Typography variant="h3">Push — Send Local Changes to GitHub</Typography>
          <CodeBlock language="bash">{`# After committing locally
git push
# First time for a branch
git push -u origin branch-name`}</CodeBlock>
          <Typography variant="h3">Pull — Get GitHub Changes Locally</Typography>
          <CodeBlock language="bash">{`# Get latest changes
git pull
# Same as:
git fetch
git merge origin/main`}</CodeBlock>
          <Typography variant="h3">Workflow with Remote</Typography>
          <CodeBlock language="bash">{`# Start of day: get latest
git pull
# Work...
git add .
git commit -m "Add feature"
# End of work: push
git push`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Authentication</Typography>
          <Typography variant="h3">HTTPS with Token</Typography>
          <Typography>
            GitHub no longer accepts passwords. Use tokens:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>GitHub → Settings → Developer settings → Personal access tokens</li>
            <li>Generate new token</li>
            <li>Copy and save it</li>
            <li>Use as password when pushing</li>
          </ul>
          <Typography variant="h3">SSH (Recommended)</Typography>
          <Typography>
            More secure and convenient:
          </Typography>
          <CodeBlock language="bash">{`# Generate SSH key
ssh-keygen -t ed25519 -C "your@email.com"
# Start SSH agent
eval "\$(ssh-agent -s)"
# Add key
ssh-add ~/.ssh/id_ed25519
# Copy public key
cat ~/.ssh/id_ed25519.pub`}</CodeBlock>
          <Typography>
            Add public key to GitHub:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Settings → SSH and GPG keys</li>
            <li>New SSH key</li>
            <li>Paste your key</li>
          </ul>
          <Typography>
            Now use SSH URLs:
          </Typography>
          <CodeBlock language="bash">{`git remote set-url origin git@github.com:username/repo.git`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Create GitHub Account</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Sign up at github.com</li>
            <li>Complete your profile</li>
            <li>Add a profile picture</li>
          </ul>
          <Typography variant="h3">Exercise 2: First Repository</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create a new repo on GitHub</li>
            <li>Push your portfolio project to it</li>
            <li>Verify it&apos;s visible on GitHub</li>
          </ul>
          <Typography variant="h3">Exercise 3: Clone Practice</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Clone your own repo to a different folder</li>
            <li>Make a change</li>
            <li>Commit and push</li>
            <li>Pull in original folder</li>
          </ul>
          <Typography variant="h3">Exercise 4: README</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Add a README.md to your repo</li>
            <li>Write a good description</li>
            <li>Push to GitHub</li>
            <li>See it displayed on the repo page</li>
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
                <TableCell>git remote add origin url</TableCell>
                <TableCell>Connect to GitHub</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git push</TableCell>
                <TableCell>Send commits to GitHub</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git pull</TableCell>
                <TableCell>Get commits from GitHub</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git clone url</TableCell>
                <TableCell>Download a repository</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>git remote -v</TableCell>
                <TableCell>View remote connections</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Workflow
          </Typography>
          <CodeBlock language="bash">{`# One-time setup
git remote add origin url
git push -u origin main
# Daily workflow
git pull # Get updates
# work...
git add .
git commit -m "msg"
git push # Send updates`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Before moving to Module 05:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>GitHub account created</li>
            <li>Portfolio on GitHub</li>
            <li>Can push and pull</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 05 - Collaboration Workflow
          </Typography>
          <Typography>
            You will learn to work with others!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Your code is online!
          </Typography>
          <Typography>
            GitHub is your professional portfolio.
          </Typography>
        </div>
      </section>
    </div>
  );
}
