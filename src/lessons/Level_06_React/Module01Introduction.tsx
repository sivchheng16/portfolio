
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module01Introduction() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Introduction to React</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 06: React Fundamentals</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Objectives</Typography>
          <Typography>
            By the end of this module, you will be able to:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Understand what React is and why it&apos;s popular</li>
            <li>Set up a React development environment</li>
            <li>Understand JSX syntax</li>
            <li>Create your first React component</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What is React?</Typography>
          <Typography variant="h3">React Defined</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>WHAT IS REACT?</li>
            <li>React is a JavaScript LIBRARY for building user interfaces.</li>
            <li>Created by: Facebook (2013)</li>
            <li>Used by: Instagram, Facebook, Netflix, Airbnb, Discord, Notion</li>
            <li>KEY CONCEPTS:</li>
            <li>COMPONENTS</li>
            <li>Build UI from small, reusable pieces</li>
            <li>DECLARATIVE</li>
            <li>Describe WHAT you want, not HOW to do it</li>
            <li>VIRTUAL DOM</li>
            <li>Only updates what changed (fast!)</li>
            <li>ONE-WAY DATA FLOW</li>
            <li>Data flows from parent to child</li>
          </ul>
          <Typography variant="h3">Why React?</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Benefit</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Component-Based</TableCell>
                <TableCell>Break UI into reusable pieces</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fast Updates</TableCell>
                <TableCell>Virtual DOM minimizes real DOM changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Large Ecosystem</TableCell>
                <TableCell>Tons of libraries and tools</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Job Market</TableCell>
                <TableCell>#1 most wanted frontend skill</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Learn Once</TableCell>
                <TableCell>Use for web, mobile (React Native)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Setting Up</Typography>
          <Typography variant="h3">Create a React App with Vite</Typography>
          <Typography>
            Vite is fast and modern:
          </Typography>
          <CodeBlock language="bash">{`# Create new project
npm create vite@latest my-react-app -- --template react
# Navigate to project
cd my-react-app
# Install dependencies
npm install
# Start development server
npm run dev`}</CodeBlock>
          <Typography variant="h3">Project Structure</Typography>
          <CodeBlock language="text">{`my-react-app/
├── node_modules/
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ ├── App.css
│ ├── App.jsx ← Main component
│ ├── index.css
│ └── main.jsx ← Entry point
├── index.html
├── package.json
└── vite.config.js`}</CodeBlock>
          <Typography variant="h3">Key Files</Typography>
          <Typography>
            main.jsx - Entry point:
          </Typography>
          <CodeBlock language="jsx">{`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
 <App />
 </React.StrictMode>,
)`}</CodeBlock>
          <Typography>
            App.jsx - Main component:
          </Typography>
          <CodeBlock language="jsx">{`function App() {
 return (
 <div>
 <h1>Hello React!</h1>
 </div>
 )
}
export default App`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Understanding JSX</Typography>
          <Typography variant="h3">What is JSX?</Typography>
          <Typography>
            JSX = JavaScript XML
          </Typography>
          <Typography>
            It lets you write HTML-like code in JavaScript:
          </Typography>
          <CodeBlock language="jsx">{`// This is JSX
const element = <h1>Hello, World!</h1>;
// It compiles to:
const element = React.createElement('h1', null, 'Hello, World!');`}</CodeBlock>
          <Typography variant="h3">JSX Rules</Typography>
          <CodeBlock language="jsx">{`// 1. Single Root Element
// Wrong
return (
 <h1>Title</h1>
 <p>Content</p>
)
// Correct
return (
 <div>
 <h1>Title</h1>
 <p>Content</p>
 </div>
)
// Or use Fragment
return (
 <>
 <h1>Title</h1>
 <p>Content</p>
 </>
)`}</CodeBlock>
          <CodeBlock language="jsx">{`// 2. Close All Tags
<br /> // Self-closing
<img /> // Self-closing
<div></div> // Paired`}</CodeBlock>
          <CodeBlock language="jsx">{`// 3. className instead of class
<div className="container"> // 
<div class="container"> // `}</CodeBlock>
          <CodeBlock language="jsx">{`// 4. camelCase for attributes
<button onClick={handleClick}> // 
<button onclick={handleClick}> // 
<label htmlFor="email"> // 
<label for="email"> // `}</CodeBlock>
          <Typography variant="h3">JavaScript in JSX</Typography>
          <Typography>
            Use curly braces {} for JavaScript:
          </Typography>
          <CodeBlock language="jsx">{`const name = "Sokha";
const items = ["Apple", "Banana", "Orange"];
function App() {
 return (
 <div>
 {/* Variables */}
 <h1>Hello, {name}!</h1>
 {/* Expressions */}
 <p>2 + 2 = {2 + 2}</p>
 {/* Function calls */}
 <p>Uppercase: {name.toUpperCase()}</p>
 {/* Ternary */}
 <p>{name ? \`Welcome, \${name}\` : 'Please log in'}</p>
 {/* Lists */}
 <ul>
 {items.map(item => <li key={item}>{item}</li>)}
 </ul>
 </div>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Creating Components</Typography>
          <Typography variant="h3">Function Components</Typography>
          <CodeBlock language="jsx">{`// Simple component
function Welcome() {
 return <h1>Welcome to React!</h1>;
}
// With arrow function
const Welcome = () => {
 return <h1>Welcome to React!</h1>;
};
// Shorthand (implicit return)
const Welcome = () => <h1>Welcome to React!</h1>;`}</CodeBlock>
          <Typography variant="h3">Using Components</Typography>
          <CodeBlock language="jsx">{`function App() {
 return (
 <div>
 <Welcome />
 <Welcome />
 <Welcome />
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Component with Logic</Typography>
          <CodeBlock language="jsx">{`function Greeting() {
 const hour = new Date().getHours();
 let greeting;
 if (hour < 12) {
 greeting = "Good morning";
 } else if (hour < 18) {
 greeting = "Good afternoon";
 } else {
 greeting = "Good evening";
 }
 return <h1>{greeting}!</h1>;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Component Organization</Typography>
          <Typography variant="h3">One Component Per File</Typography>
          <CodeBlock language="jsx">{`// components/Header.jsx
function Header() {
 return (
 <header>
 <h1>My App</h1>
 <nav>
 <a href="/">Home</a>
 <a href="/about">About</a>
 </nav>
 </header>
 );
}
export default Header;`}</CodeBlock>
          <CodeBlock language="jsx">{`// components/Footer.jsx
function Footer() {
 return (
 <footer>
 <p>&copy; 2024 KOOMPI</p>
 </footer>
 );
}
export default Footer;`}</CodeBlock>
          <CodeBlock language="jsx">{`// App.jsx
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
 return (
 <div>
 <Header />
 <main>
 <p>Main content here</p>
 </main>
 <Footer />
 </div>
 );
}
export default App;`}</CodeBlock>
          <Typography variant="h3">Project Structure</Typography>
          <CodeBlock language="text">{`src/
├── components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── Button.jsx
│ └── Card.jsx
├── pages/
│ ├── Home.jsx
│ └── About.jsx
├── App.jsx
└── main.jsx`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Styling Components</Typography>
          <Typography variant="h3">CSS Files</Typography>
          <CodeBlock language="jsx">{`// Button.jsx
import './Button.css';
function Button({ children }) {
 return <button className="btn">{children}</button>;
}`}</CodeBlock>
          <CodeBlock language="css">{`/* Button.css */
.btn {
 padding: 10px 20px;
 background: #3498db;
 color: white;
 border: none;
 border-radius: 5px;
 cursor: pointer;
}
.btn:hover {
 background: #2980b9;
}`}</CodeBlock>
          <Typography variant="h3">Inline Styles</Typography>
          <CodeBlock language="jsx">{`function Card() {
 const cardStyle = {
 backgroundColor: 'white',
 padding: '20px',
 borderRadius: '10px',
 boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
 };
 return (
 <div style={cardStyle}>
 <h2>Card Title</h2>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">CSS Modules</Typography>
          <CodeBlock language="jsx">{`// Button.module.css
.button {
 padding: 10px 20px;
}
// Button.jsx
import styles from './Button.module.css';
function Button() {
 return <button className={styles.button}>Click</button>;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Your First React App</Typography>
          <Typography variant="h3">Create a Simple Greeting App</Typography>
          <CodeBlock language="jsx">{`// App.jsx
import './App.css';
function Header() {
 return (
 <header className="header">
 <h1> Welcome to Cambodia</h1>
 </header>
 );
}
function Greeting() {
 const name = "KOOMPI Apprentice";
 const hour = new Date().getHours();
 let timeGreeting;
 if (hour < 12) timeGreeting = "Good morning";
 else if (hour < 18) timeGreeting = "Good afternoon";
 else timeGreeting = "Good evening";
 return (
 <div className="greeting">
 <h2>{timeGreeting}, {name}!</h2>
 <p>Welcome to your React journey.</p>
 </div>
 );
}
function Features() {
 const features = [
 "Component-based architecture",
 "Virtual DOM for fast updates",
 "Rich ecosystem",
 "Great developer experience"
 ];
 return (
 <div className="features">
 <h3>Why React?</h3>
 <ul>
 {features.map((feature, index) => (
 <li key={index}>{feature}</li>
 ))}
 </ul>
 </div>
 );
}
function Footer() {
 return (
 <footer className="footer">
 <p>Built with React </p>
 </footer>
 );
}
function App() {
 return (
 <div className="app">
 <Header />
 <main>
 <Greeting />
 <Features />
 </main>
 <Footer />
 </div>
 );
}
export default App;`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Setup</Typography>
          <Typography>
            Create a new React project with Vite and run it.
          </Typography>
          <Typography variant="h3">Exercise 2: JSX Practice</Typography>
          <Typography>
            Create a component that displays:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Your name</li>
            <li>A list of 3 hobbies</li>
            <li>The current date</li>
          </ul>
          <Typography variant="h3">Exercise 3: Multiple Components</Typography>
          <Typography>
            Create these components in separate files:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Header.jsx</li>
            <li>Main.jsx</li>
            <li>Footer.jsx</li>
          </ul>
          <Typography>
            Import and use them in App.jsx.
          </Typography>
          <Typography variant="h3">Exercise 4: Styling</Typography>
          <Typography>
            Add CSS to make your components look nice.
          </Typography>
          <Typography variant="h3">Exercise 5: Dynamic Content</Typography>
          <Typography>
            Create a component that shows different content based on the time of day.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Concept</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>React</TableCell>
                <TableCell>Library for building UIs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Component</TableCell>
                <TableCell>Reusable piece of UI</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>JSX</TableCell>
                <TableCell>HTML-like syntax in JavaScript</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Vite</TableCell>
                <TableCell>Fast build tool</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{}</TableCell>
                <TableCell>JavaScript expressions in JSX</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 03 - Components &amp; Props
          </Typography>
          <Typography>
            You will learn to pass data between components!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            You&apos;re now a React developer!
          </Typography>
          <Typography>
            Components are the building blocks.
          </Typography>
        </div>
      </section>
    </div>
  );
}
