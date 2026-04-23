
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module06TablesForms() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Tables &amp; Forms</Typography>
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
            <li>Create properly structured tables for data display</li>
            <li>Build accessible tables with headers and captions</li>
            <li>Create user input forms</li>
            <li>Use various form input types</li>
            <li>Understand form structure and submission</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Part 1: Tables</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Basic Table Structure</Typography>
          <Typography variant="h3">When to Use Tables</Typography>
          <Typography>
            Use tables for tabular data — information that naturally fits in rows and columns.
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Good Use</TableHead>
                <TableHead>Bad Use</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Student grades</TableCell>
                <TableCell>Page layout</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product specifications</TableCell>
                <TableCell>Visual design</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Schedules</TableCell>
                <TableCell>Navigation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Statistics</TableCell>
                <TableCell>Positioning content</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Basic Table Elements</Typography>
          <CodeBlock language="html">{`<table>
 <tr>
 <th>Name</th>
 <th>Age</th>
 <th>Country</th>
 </tr>
 <tr>
 <td>Sokha</td>
 <td>22</td>
 <td>Cambodia</td>
 </tr>
 <tr>
 <td>Dara</td>
 <td>25</td>
 <td>Cambodia</td>
 </tr>
</table>`}</CodeBlock>
          <Typography variant="h3">Table Element Reference</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>&lt;table&gt;</TableCell>
                <TableCell>Table</TableCell>
                <TableCell>Container for entire table</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;tr&gt;</TableCell>
                <TableCell>Table Row</TableCell>
                <TableCell>A row of cells</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;th&gt;</TableCell>
                <TableCell>Table Header</TableCell>
                <TableCell>Header cell (bold, centered)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;td&gt;</TableCell>
                <TableCell>Table Data</TableCell>
                <TableCell>Regular data cell</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">How It Looks</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Name Age Country ← Header row (&lt;th&gt;)</li>
            <li>Sokha 22 Cambodia ← Data row (&lt;td&gt;)</li>
            <li>Dara 25 Cambodia ← Data row (&lt;td&gt;)</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Semantic Table Sections</Typography>
          <Typography variant="h3">Organizing Table Parts</Typography>
          <CodeBlock language="html">{`<table>
 <caption>KOOMPI Apprentice Enrollment 2024</caption>
 <thead>
 <tr>
 <th>Name</th>
 <th>Track</th>
 <th>Start Date</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Sokha</td>
 <td>Web Development</td>
 <td>January 2024</td>
 </tr>
 <tr>
 <td>Dara</td>
 <td>Web Development</td>
 <td>February 2024</td>
 </tr>
 </tbody>
 <tfoot>
 <tr>
 <td colspan="3">Total: 2 apprentices</td>
 </tr>
 </tfoot>
</table>`}</CodeBlock>
          <Typography variant="h3">Table Section Elements</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>&lt;caption&gt;</TableCell>
                <TableCell>Table title/description</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;thead&gt;</TableCell>
                <TableCell>Groups header rows</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;tbody&gt;</TableCell>
                <TableCell>Groups body rows</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;tfoot&gt;</TableCell>
                <TableCell>Groups footer rows</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Spanning Rows and Columns</Typography>
          <Typography variant="h3">Column Spanning</Typography>
          <Typography>
            Use colspan to make a cell span multiple columns:
          </Typography>
          <CodeBlock language="html">{`<table>
 <tr>
 <th colspan="2">Contact Information</th>
 </tr>
 <tr>
 <td>Email</td>
 <td>info@koompi.com</td>
 </tr>
 <tr>
 <td>Phone</td>
 <td>+855 12 345 678</td>
 </tr>
</table>`}</CodeBlock>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Contact Information ← spans 2 columns</li>
            <li>Email info@koompi.com</li>
            <li>Phone +855 12 345 678</li>
          </ul>
          <Typography variant="h3">Row Spanning</Typography>
          <Typography>
            Use rowspan to make a cell span multiple rows:
          </Typography>
          <CodeBlock language="html">{`<table>
 <tr>
 <th rowspan="2">Housing</th>
 <td>Rent</td>
 <td>\$500</td>
 </tr>
 <tr>
 <td>Utilities</td>
 <td>\$100</td>
 </tr>
 <tr>
 <th rowspan="2">Transport</th>
 <td>Gas</td>
 <td>\$80</td>
 </tr>
 <tr>
 <td>Insurance</td>
 <td>\$50</td>
 </tr>
</table>`}</CodeBlock>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Rent $500</li>
            <li>Housing</li>
            <li>Utilities $100</li>
            <li>Gas $80</li>
            <li>Transport</li>
            <li>Insurance $50</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Table Accessibility</Typography>
          <Typography variant="h3">Using Scope for Headers</Typography>
          <CodeBlock language="html">{`<table>
 <tr>
 <th scope="col">Product</th>
 <th scope="col">Price</th>
 <th scope="col">Stock</th>
 </tr>
 <tr>
 <th scope="row">KOOMPI E13</th>
 <td>\$299</td>
 <td>In Stock</td>
 </tr>
 <tr>
 <th scope="row">KOOMPI E15</th>
 <td>\$399</td>
 <td>Low Stock</td>
 </tr>
</table>`}</CodeBlock>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Scope Value</TableHead>
                <TableHead>Meaning</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>col</TableCell>
                <TableCell>Header for column below</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>row</TableCell>
                <TableCell>Header for row to the right</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>colgroup</TableCell>
                <TableCell>Header for group of columns</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>rowgroup</TableCell>
                <TableCell>Header for group of rows</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Part 2: Forms</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Form Basics</Typography>
          <Typography variant="h3">The Form Element</Typography>
          <Typography>
            Forms collect user input and send it somewhere:
          </Typography>
          <CodeBlock language="html">{`<form action="/submit" method="POST">
 <!-- Form inputs go here -->
</form>`}</CodeBlock>
          <Typography variant="h3">Form Attributes</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Attribute</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>action</TableCell>
                <TableCell>Where to send data</TableCell>
                <TableCell>/submit, process.php</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>method</TableCell>
                <TableCell>How to send data</TableCell>
                <TableCell>POST (secure) or GET</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Form Methods</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Method</TableHead>
                <TableHead>When to Use</TableHead>
                <TableHead>Data Visible?</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>GET</TableCell>
                <TableCell>Searches, filters</TableCell>
                <TableCell>Yes (in URL)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>POST</TableCell>
                <TableCell>Logins, signups, sensitive data</TableCell>
                <TableCell>No (hidden)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Form Input Types</Typography>
          <Typography variant="h3">Text Inputs</Typography>
          <CodeBlock language="html">{`<form>
 <!-- Simple text -->
 <input type="text" name="username" placeholder="Enter username">
 <!-- Email (validates email format) -->
 <input type="email" name="email" placeholder="your@email.com">
 <!-- Password (hides characters) -->
 <input type="password" name="password" placeholder="Enter password">
 <!-- Phone number -->
 <input type="tel" name="phone" placeholder="Phone number">
 <!-- Website URL -->
 <input type="url" name="website" placeholder="https://...">
</form>`}</CodeBlock>
          <Typography variant="h3">Number Inputs</Typography>
          <CodeBlock language="html">{`<form>
 <!-- Any number -->
 <input type="number" name="quantity" min="1" max="100">
 <!-- Range slider -->
 <input type="range" name="volume" min="0" max="100" value="50">
</form>`}</CodeBlock>
          <Typography variant="h3">Date and Time Inputs</Typography>
          <CodeBlock language="html">{`<form>
 <!-- Date picker -->
 <input type="date" name="birthday">
 <!-- Time picker -->
 <input type="time" name="appointment">
 <!-- Date and time -->
 <input type="datetime-local" name="meeting">
</form>`}</CodeBlock>
          <Typography variant="h3">Choice Inputs</Typography>
          <CodeBlock language="html">{`<form>
 <!-- Checkboxes (multiple selections) -->
 <input type="checkbox" name="skills" value="html"> HTML
 <input type="checkbox" name="skills" value="css"> CSS
 <input type="checkbox" name="skills" value="js"> JavaScript
 <!-- Radio buttons (single selection) -->
 <input type="radio" name="level" value="beginner"> Beginner
 <input type="radio" name="level" value="intermediate"> Intermediate
 <input type="radio" name="level" value="expert"> Expert
</form>`}</CodeBlock>
          <Typography variant="h3">Special Inputs</Typography>
          <CodeBlock language="html">{`<form>
 <!-- Color picker -->
 <input type="color" name="favorite_color" value="#ff0000">
 <!-- File upload -->
 <input type="file" name="resume" accept=".pdf,.doc">
 <!-- Hidden field -->
 <input type="hidden" name="form_id" value="contact_form">
</form>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Labels and Form Structure</Typography>
          <Typography variant="h3">Why Labels Matter</Typography>
          <Typography>
            Labels tell users what each input is for. They also help accessibility.
          </Typography>
          <CodeBlock language="html">{`<!-- Method 1: Wrap input with label -->
<label>
 Username:
 <input type="text" name="username">
</label>
<!-- Method 2: Use "for" and "id" -->
<label for="email">Email Address:</label>
<input type="email" name="email" id="email">`}</CodeBlock>
          <Typography>
            Important: Always use labels! Screen readers need them.
          </Typography>
          <Typography variant="h3">Complete Form Example</Typography>
          <CodeBlock language="html">{`<form action="/register" method="POST">
 <h2>KOOMPI Apprenticeship Application</h2>
 <!-- Text fields -->
 <div>
 <label for="name">Full Name:</label>
 <input type="text" id="name" name="name" required>
 </div>
 <div>
 <label for="email">Email:</label>
 <input type="email" id="email" name="email" required>
 </div>
 <div>
 <label for="phone">Phone Number:</label>
 <input type="tel" id="phone" name="phone">
 </div>
 <!-- Selection -->
 <div>
 <label for="track">Preferred Track:</label>
 <select id="track" name="track">
 <option value="">Select a track</option>
 <option value="web">Web Development</option>
 <option value="english">English</option>
 <option value="business">Business</option>
 </select>
 </div>
 <!-- Radio buttons -->
 <fieldset>
 <legend>Experience Level:</legend>
 <label>
 <input type="radio" name="level" value="beginner" checked>
 Beginner
 </label>
 <label>
 <input type="radio" name="level" value="some">
 Some Experience
 </label>
 <label>
 <input type="radio" name="level" value="experienced">
 Experienced
 </label>
 </fieldset>
 <!-- Checkboxes -->
 <fieldset>
 <legend>Skills (select all that apply):</legend>
 <label>
 <input type="checkbox" name="skills" value="typing">
 Typing
 </label>
 <label>
 <input type="checkbox" name="skills" value="english">
 Basic English
 </label>
 <label>
 <input type="checkbox" name="skills" value="computer">
 Computer Basics
 </label>
 </fieldset>
 <!-- Textarea -->
 <div>
 <label for="about">Tell us about yourself:</label>
 <textarea id="about" name="about" rows="5" cols="40"></textarea>
 </div>
 <!-- Submit button -->
 <button type="submit">Submit Application</button>
</form>`}</CodeBlock>
          <Typography variant="h3">Form Structure Elements</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>&lt;form&gt;</TableCell>
                <TableCell>Container for all inputs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;label&gt;</TableCell>
                <TableCell>Describes an input</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;input&gt;</TableCell>
                <TableCell>User&apos;s input data</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;select&gt;</TableCell>
                <TableCell>Dropdown menu</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;option&gt;</TableCell>
                <TableCell>Option in dropdown</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;textarea&gt;</TableCell>
                <TableCell>Multi-line text input</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;button&gt;</TableCell>
                <TableCell>Submit or action button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;fieldset&gt;</TableCell>
                <TableCell>Groups related inputs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;legend&gt;</TableCell>
                <TableCell>Title for fieldset</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 8: Input Attributes</Typography>
          <Typography variant="h3">Common Attributes</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Attribute</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>required</TableCell>
                <TableCell>Must be filled</TableCell>
                <TableCell>&lt;input required&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>placeholder</TableCell>
                <TableCell>Hint text</TableCell>
                <TableCell>placeholder=&quot;Enter name&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>value</TableCell>
                <TableCell>Default value</TableCell>
                <TableCell>value=&quot;default&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>Can&apos;t interact</TableCell>
                <TableCell>&lt;input disabled&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>readonly</TableCell>
                <TableCell>Can&apos;t edit</TableCell>
                <TableCell>&lt;input readonly&gt;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>maxlength</TableCell>
                <TableCell>Max characters</TableCell>
                <TableCell>maxlength=&quot;100&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>min, max</TableCell>
                <TableCell>Number range</TableCell>
                <TableCell>min=&quot;1&quot; max=&quot;10&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>pattern</TableCell>
                <TableCell>Regex validation</TableCell>
                <TableCell>pattern=&quot;[0-9]{3}&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>autofocus</TableCell>
                <TableCell>Focus on load</TableCell>
                <TableCell>&lt;input autofocus&gt;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Validation Example</Typography>
          <CodeBlock language="html">{`<form>
 <!-- Required field -->
 <label for="name">Name (required):</label>
 <input type="text" id="name" name="name" required>
 <!-- Length limits -->
 <label for="username">Username (5-20 characters):</label>
 <input type="text" id="username" name="username" 
 minlength="5" maxlength="20" required>
 <!-- Number range -->
 <label for="age">Age (16-100):</label>
 <input type="number" id="age" name="age" 
 min="16" max="100" required>
 <!-- Pattern (phone number) -->
 <label for="phone">Phone (format: 012-345-678):</label>
 <input type="tel" id="phone" name="phone" 
 pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
 placeholder="012-345-678">
 <button type="submit">Submit</button>
</form>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Create a Data Table</Typography>
          <Typography>
            Create a table showing:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>5 Cambodian provinces</li>
            <li>Their population</li>
            <li>Their area (km²)</li>
          </ul>
          <Typography>
            Include caption, thead, tbody, and proper header scope.
          </Typography>
          <Typography variant="h3">Exercise 2: Spanning Practice</Typography>
          <Typography>
            Create a schedule table with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Days of the week as columns</li>
            <li>Time slots as rows</li>
            <li>Some classes that span 2 hours (rowspan)</li>
            <li>A lunch break that spans all days (colspan)</li>
          </ul>
          <Typography variant="h3">Exercise 3: Contact Form</Typography>
          <Typography>
            Build a contact form with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Name (required)</li>
            <li>Email (required, validates email)</li>
            <li>Phone (optional)</li>
            <li>Subject dropdown (3-4 options)</li>
            <li>Message textarea</li>
            <li>Submit button</li>
          </ul>
          <Typography variant="h3">Exercise 4: Registration Form</Typography>
          <Typography>
            Create a KOOMPI Apprentice registration form:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Personal information section</li>
            <li>Educational background</li>
            <li>Track preference (radio buttons)</li>
            <li>Available skills (checkboxes)</li>
            <li>Why do you want to join? (textarea)</li>
            <li>Submit button</li>
          </ul>
          <Typography variant="h3">Exercise 5: Survey Form</Typography>
          <Typography>
            Create a survey form with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>All different input types you learned</li>
            <li>Proper labels for everything</li>
            <li>At least one fieldset with legend</li>
            <li>Required and optional fields</li>
            <li>Form validation (required, min/max, etc.)</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Typography>
            Table Elements
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
                <TableCell>&lt;table&gt;</TableCell>
                <TableCell>Table container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;caption&gt;</TableCell>
                <TableCell>Table title</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;</TableCell>
                <TableCell>Table sections</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;tr&gt;</TableCell>
                <TableCell>Table row</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;th&gt;</TableCell>
                <TableCell>Header cell</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;td&gt;</TableCell>
                <TableCell>Data cell</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>colspan, rowspan</TableCell>
                <TableCell>Cell spanning</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Form Elements
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
                <TableCell>&lt;form&gt;</TableCell>
                <TableCell>Form container</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;input&gt;</TableCell>
                <TableCell>User input (many types)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;label&gt;</TableCell>
                <TableCell>Input description</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;select&gt;, &lt;option&gt;</TableCell>
                <TableCell>Dropdown</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;textarea&gt;</TableCell>
                <TableCell>Multi-line text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;button&gt;</TableCell>
                <TableCell>Action button</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>&lt;fieldset&gt;, &lt;legend&gt;</TableCell>
                <TableCell>Group inputs</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Before moving to Module 08:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Create province table</li>
            <li>Build schedule with spanning</li>
            <li>Complete contact form</li>
            <li>Create registration form</li>
            <li>Get mentor verification</li>
          </ul>
          <Typography>
            Coming Next: Module 08 - Personal Bio Page Project
          </Typography>
          <Typography>
            You will combine everything to build your first complete website!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Tables organize, forms connect!
          </Typography>
          <Typography>
            Now you can display data and collect user input.
          </Typography>
        </div>
      </section>
    </div>
  );
}
