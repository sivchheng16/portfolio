
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';

export default function Module03LinuxTerminal() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Linux Terminal Fundamentals</Typography>
          <Typography variant="lead">
            Track 00: Mastering the Command Line Interface (CLI)
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
            <li>Understand what the terminal is and why it's powerful</li>
            <li>Navigate the file system using commands</li>
            <li>Create, move, copy, and delete files and folders</li>
            <li>Feel confident using the command line</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Introduction to the Terminal</Typography>
          <Typography variant="h3">What is the Terminal?</Typography>
          <Typography>
            The <strong>terminal</strong> (also called <strong>command line</strong> or <strong>shell</strong>) is a text-based way to control your computer. Instead of clicking with a mouse, you type commands.
          </Typography>

          <Typography variant="h4">GUI vs Terminal</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>GUI (Graphical)</TableHead>
                <TableHead>Terminal (Command Line)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Click with mouse</TableCell>
                <TableCell>Type commands</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>See icons and windows</TableCell>
                <TableCell>See text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Beginner-friendly</TableCell>
                <TableCell>Powerful for experts</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Limited to what menus offer</TableCell>
                <TableCell>Full control of system</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="h3">Why Developers Use the Terminal</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reason</TableHead>
                <TableHead>Explanation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><strong>Speed</strong></TableCell>
                <TableCell>Typing is faster than clicking through menus</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Power</strong></TableCell>
                <TableCell>Access to features not available in GUI</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Automation</strong></TableCell>
                <TableCell>Run scripts to repeat tasks automatically</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Remote</strong></TableCell>
                <TableCell>Control servers anywhere in the world</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="h3">Opening the Terminal</Typography>
          <Typography>
            How to open terminal on KOOMPI:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Press <code>Ctrl + Alt + T</code></li>
            <li>Or search for "Terminal" in applications</li>
          </ul>
          <Typography>
            When you open the terminal, you see a <strong>prompt</strong>:
          </Typography>
          <CodeBlock language="bash">{`username@koompi:~$`}</CodeBlock>
          <Typography>
            This shows:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li><code>username</code> — Your user name</li>
            <li><code>koompi</code> — Your computer's name</li>
            <li><code>~</code> — Your current location (home directory)</li>
            <li><code>$</code> — Ready for your command</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Basic Navigation Commands</Typography>
          <Typography variant="h3">Your File System is a Tree</Typography>
          <Typography>
            Think of your files as a tree structure:
          </Typography>
          <CodeBlock language="text">{`/                    (root - the top)
├── home/            (home directories)
│   └── student/     (your home folder)
│       ├── Documents/
│       ├── Downloads/
│       ├── Desktop/
│       └── projects/
├── etc/             (system configuration)
├── usr/             (user programs)
└── var/             (logs and data)`}</CodeBlock>

          <Typography variant="h3">Navigation Commands</Typography>
          
          <Typography variant="h4"><code>pwd</code> — Print Working Directory</Typography>
          <Typography>
            Shows where you currently are.
          </Typography>
          <CodeBlock language="bash">{`$ pwd
/home/student`}</CodeBlock>
          <Typography>
            <strong>Remember</strong>: pwd = "Present Working Directory"
          </Typography>

          <Typography variant="h4"><code>ls</code> — List</Typography>
          <Typography>
            Shows what's in the current directory.
          </Typography>
          <CodeBlock language="bash">{`$ ls
Desktop Documents Downloads Music Pictures projects`}</CodeBlock>

          <Typography variant="h3">Useful variations of <code>ls</code>:</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Command</TableHead>
                <TableHead>What it does</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><code>ls</code></TableCell>
                <TableCell>List files and folders</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>ls -l</code></TableCell>
                <TableCell>Long format (details)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>ls -a</code></TableCell>
                <TableCell>Show hidden files (starting with .)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>ls -la</code></TableCell>
                <TableCell>Both long format and hidden files</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="h4"><code>cd</code> — Change Directory</Typography>
          <Typography>Move to a different folder.</Typography>
          <CodeBlock language="bash">{`cd Documents # Go into Documents folder
cd .. # Go up one level (parent folder)
cd ~ # Go to your home folder
cd / # Go to the root of the system`}</CodeBlock>

          <Typography variant="h3">Path Types</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Example</TableHead>
                <TableHead>Meaning</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><strong>Absolute</strong></TableCell>
                <TableCell><code>/home/student/Documents</code></TableCell>
                <TableCell>Full path from root</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Relative</strong></TableCell>
                <TableCell><code>Documents</code></TableCell>
                <TableCell>Path from where you are now</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>..</code></TableCell>
                <TableCell><code>cd ..</code></TableCell>
                <TableCell>Parent directory</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>~</code></TableCell>
                <TableCell><code>cd ~</code></TableCell>
                <TableCell>Home directory</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Working with Files and Folders</Typography>
          
          <Typography variant="h3">Creating Directories</Typography>
          <Typography variant="h4"><code>mkdir</code> — Make Directory</Typography>
          <CodeBlock language="bash">{`mkdir my_project # Create a folder called "my_project"
mkdir -p projects/web/css # Create nested folders`}</CodeBlock>

          <Typography variant="h3">Creating Files</Typography>
          <Typography variant="h4"><code>touch</code> — Create Empty File</Typography>
          <CodeBlock language="bash">{`touch index.html # Create an empty file
touch style.css script.js # Create multiple files`}</CodeBlock>

          <Typography variant="h3">Viewing File Contents</Typography>
          <Typography variant="h4"><code>cat</code> — Concatenate (Display File)</Typography>
          <CodeBlock language="bash">{`cat index.html # Show file contents`}</CodeBlock>
          <Typography variant="h4"><code>less</code> — View Long Files</Typography>
          <Typography>Scroll through long files (press Q to exit).</Typography>
          <CodeBlock language="bash">{`less long_file.txt`}</CodeBlock>

          <Typography variant="h3">Copying, Moving, Removing</Typography>
          
          <Typography variant="h4"><code>cp</code> — Copy</Typography>
          <CodeBlock language="bash">{`cp file.txt backup.txt # Copy file
cp -r folder1 folder2 # Copy folder (recursive)`}</CodeBlock>

          <Typography variant="h4"><code>mv</code> — Move (also Rename)</Typography>
          <CodeBlock language="bash">{`mv old_name.txt new_name.txt # Rename a file
mv file.txt Documents/ # Move file to Documents`}</CodeBlock>

          <Typography variant="h4"><code>rm</code> — Remove (Delete)</Typography>
          <CodeBlock language="bash">{`rm file.txt # Delete a file
rm -r folder # Delete a folder and contents`}</CodeBlock>
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
            <Typography className="text-red-500 font-bold mb-0">
              WARNING: There is NO undo for rm! Deleted files are gone forever.
            </Typography>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Shortcuts & Speed</Typography>
          <Typography variant="h3">Tab Completion — Your Best Friend</Typography>
          <Typography>
            Press <strong>Tab</strong> to auto-complete folder and file names:
          </Typography>
          <CodeBlock language="bash">{`cd Doc[TAB] # Completes to: cd Documents/`}</CodeBlock>
          
          <Typography variant="h3">Common Shortcuts</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shortcut</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><code>Ctrl + C</code></TableCell>
                <TableCell>Cancel current command</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>Ctrl + L</code></TableCell>
                <TableCell>Clear screen</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>Up / Down Arrows</code></TableCell>
                <TableCell>Navigate command history</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="lesson-section">
        <div className="lesson-content">
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
                  <TableCell>Terminal</TableCell>
                  <TableCell>ភិរម្យ (Terminal)</TableCell>
                  <TableCell>Text-based interface to control computer</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shell</TableCell>
                  <TableCell>សែល (Shell)</TableCell>
                  <TableCell>The program that interprets your commands</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Directory</TableCell>
                  <TableCell>ថត (Directory)</TableCell>
                  <TableCell>Another word for folder</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Path</TableCell>
                  <TableCell>ផ្លូវ (Path)</TableCell>
                  <TableCell>The location of a file or folder</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Typography variant="h3">What You Learned</Typography>
            <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
              <li>How the terminal differs from a GUI</li>
              <li>Navigating the system with <code>cd</code>, <code>ls</code>, and <code>pwd</code></li>
              <li>Creating and managing files/folders with <code>mkdir</code>, <code>touch</code>, <code>cp</code>, <code>mv</code>, and <code>rm</code></li>
              <li>Using shortcuts like Tab completion to work faster</li>
            </ul>
            <div className="mt-12 p-8 glass-panel rounded-3xl text-center border border-white/5">
              <Typography variant="h4" className="text-primary">Coming Next</Typography>
              <Typography variant="lead" className="italic">Module 03 - File Management & Organization</Typography>
              <Typography>You will learn best practices for organizing your files like a pro!</Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
