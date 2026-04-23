
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module04Hooks() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">React Hooks</Typography>
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
            <li>Use useEffect for side effects</li>
            <li>Understand the useEffect lifecycle</li>
            <li>Create custom hooks</li>
            <li>Use other common hooks</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What are Side Effects?</Typography>
          <Typography variant="h3">Side Effects Explained</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>SIDE EFFECTS</li>
            <li>Anything that affects something outside the component:</li>
            <li>• Fetching data from an API</li>
            <li>• Updating the document title</li>
            <li>• Setting up subscriptions</li>
            <li>• Manually changing the DOM</li>
            <li>• Setting timers</li>
            <li>• Logging</li>
            <li>• Saving to localStorage</li>
            <li>These are NOT pure rendering → they need useEffect</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: useEffect Basics</Typography>
          <Typography variant="h3">Basic Syntax</Typography>
          <CodeBlock language="jsx">{`import { useEffect } from 'react';
function Component() {
 useEffect(() => {
 // Side effect code here
 console.log("Effect ran!");
 });
 return <div>Hello</div>;
}`}</CodeBlock>
          <Typography variant="h3">The Dependency Array</Typography>
          <CodeBlock language="jsx">{`// Runs after EVERY render
useEffect(() => {
 console.log("Every render");
});
// Runs only ONCE (on mount)
useEffect(() => {
 console.log("Only once");
}, []); // Empty array
// Runs when 'count' changes
useEffect(() => {
 console.log("Count changed:", count);
}, [count]);
// Runs when 'name' OR 'age' changes
useEffect(() => {
 console.log("Name or age changed");
}, [name, age]);`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Common useEffect Patterns</Typography>
          <Typography variant="h3">Document Title</Typography>
          <CodeBlock language="jsx">{`function PageTitle({ title }) {
 useEffect(() => {
 document.title = title;
 }, [title]);
 return <h1>{title}</h1>;
}`}</CodeBlock>
          <Typography variant="h3">Fetching Data</Typography>
          <CodeBlock language="jsx">{`function UserProfile({ userId }) {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 useEffect(() => {
 const fetchUser = async () => {
 try {
 setLoading(true);
 const response = await fetch(\`/api/users/\${userId}\`);
 const data = await response.json();
 setUser(data);
 } catch (err) {
 setError(err.message);
 } finally {
 setLoading(false);
 }
 };
 fetchUser();
 }, [userId]); // Re-fetch when userId changes
 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error}</p>;
 if (!user) return null;
 return (
 <div>
 <h2>{user.name}</h2>
 <p>{user.email}</p>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">localStorage Sync</Typography>
          <CodeBlock language="jsx">{`function ThemeToggle() {
 const [isDark, setIsDark] = useState(() => {
 // Initialize from localStorage
 const saved = localStorage.getItem('darkMode');
 return saved ? JSON.parse(saved) : false;
 });
 useEffect(() => {
 // Save to localStorage when changed
 localStorage.setItem('darkMode', JSON.stringify(isDark));
 // Apply to document
 document.body.classList.toggle('dark-mode', isDark);
 }, [isDark]);
 return (
 <button onClick={() => setIsDark(!isDark)}>
 {isDark ? ' Light' : ' Dark'}
 </button>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Cleanup Function</Typography>
          <Typography variant="h3">Why Cleanup?</Typography>
          <Typography>
            Prevent memory leaks and stale operations:
          </Typography>
          <CodeBlock language="jsx">{`useEffect(() => {
 // Setup
 const subscription = subscribeToData();
 // Cleanup function (runs before next effect or unmount)
 return () => {
 subscription.unsubscribe();
 };
}, []);`}</CodeBlock>
          <Typography variant="h3">Timer Cleanup</Typography>
          <CodeBlock language="jsx">{`function Timer() {
 const [seconds, setSeconds] = useState(0);
 useEffect(() => {
 const interval = setInterval(() => {
 setSeconds(prev => prev + 1);
 }, 1000);
 // Cleanup: clear interval when component unmounts
 return () => clearInterval(interval);
 }, []);
 return <p>Time: {seconds}s</p>;
}`}</CodeBlock>
          <Typography variant="h3">Event Listener Cleanup</Typography>
          <CodeBlock language="jsx">{`function WindowSize() {
 const [size, setSize] = useState({
 width: window.innerWidth,
 height: window.innerHeight
 });
 useEffect(() => {
 const handleResize = () => {
 setSize({
 width: window.innerWidth,
 height: window.innerHeight
 });
 };
 window.addEventListener('resize', handleResize);
 // Cleanup
 return () => window.removeEventListener('resize', handleResize);
 }, []);
 return <p>Window: {size.width} x {size.height}</p>;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Other Hooks</Typography>
          <Typography variant="h3">useRef</Typography>
          <Typography>
            Reference to DOM elements or mutable values:
          </Typography>
          <CodeBlock language="jsx">{`import { useRef } from 'react';
function TextInput() {
 const inputRef = useRef(null);
 const focusInput = () => {
 inputRef.current.focus();
 };
 return (
 <div>
 <input ref={inputRef} type="text" />
 <button onClick={focusInput}>Focus Input</button>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">useRef for Persistent Values</Typography>
          <CodeBlock language="jsx">{`function Counter() {
 const [count, setCount] = useState(0);
 const renderCount = useRef(0);
 useEffect(() => {
 renderCount.current += 1;
 });
 return (
 <div>
 <p>Count: {count}</p>
 <p>Renders: {renderCount.current}</p>
 <button onClick={() => setCount(count + 1)}>+</button>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">useMemo</Typography>
          <Typography>
            Memoize expensive calculations:
          </Typography>
          <CodeBlock language="jsx">{`import { useMemo } from 'react';
function ExpensiveList({ items, filter }) {
 const filteredItems = useMemo(() => {
 console.log("Filtering...");
 return items.filter(item => item.includes(filter));
 }, [items, filter]);
 return (
 <ul>
 {filteredItems.map(item => <li key={item}>{item}</li>)}
 </ul>
 );
}`}</CodeBlock>
          <Typography variant="h3">useCallback</Typography>
          <Typography>
            Memoize functions:
          </Typography>
          <CodeBlock language="jsx">{`import { useCallback } from 'react';
function Parent() {
 const [count, setCount] = useState(0);
 const handleClick = useCallback(() => {
 console.log("Clicked!");
 }, []); // Function identity stays stable
 return (
 <div>
 <Child onClick={handleClick} />
 <button onClick={() => setCount(count + 1)}>
 Count: {count}
 </button>
 </div>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Custom Hooks</Typography>
          <Typography variant="h3">Creating Custom Hooks</Typography>
          <Typography>
            Extract reusable logic:
          </Typography>
          <CodeBlock language="jsx">{`// useLocalStorage.js
function useLocalStorage(key, initialValue) {
 const [value, setValue] = useState(() => {
 const saved = localStorage.getItem(key);
 return saved ? JSON.parse(saved) : initialValue;
 });
 useEffect(() => {
 localStorage.setItem(key, JSON.stringify(value));
 }, [key, value]);
 return [value, setValue];
}
// Usage
function App() {
 const [name, setName] = useLocalStorage('name', '');
 return (
 <input
 value={name}
 onChange={e => setName(e.target.value)}
 />
 );
}`}</CodeBlock>
          <Typography variant="h3">useFetch Hook</Typography>
          <CodeBlock language="jsx">{`function useFetch(url) {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 useEffect(() => {
 const fetchData = async () => {
 try {
 setLoading(true);
 const response = await fetch(url);
 if (!response.ok) throw new Error('Failed');
 const json = await response.json();
 setData(json);
 } catch (err) {
 setError(err.message);
 } finally {
 setLoading(false);
 }
 };
 fetchData();
 }, [url]);
 return { data, loading, error };
}
// Usage
function UserList() {
 const { data: users, loading, error } = useFetch('/api/users');
 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error}</p>;
 return (
 <ul>
 {users.map(user => <li key={user.id}>{user.name}</li>)}
 </ul>
 );
}`}</CodeBlock>
          <Typography variant="h3">useToggle Hook</Typography>
          <CodeBlock language="jsx">{`function useToggle(initialValue = false) {
 const [value, setValue] = useState(initialValue);
 const toggle = useCallback(() => {
 setValue(v => !v);
 }, []);
 return [value, toggle];
}
// Usage
function Modal() {
 const [isOpen, toggleOpen] = useToggle();
 return (
 <div>
 <button onClick={toggleOpen}>Open Modal</button>
 {isOpen && (
 <div className="modal">
 <p>Modal content</p>
 <button onClick={toggleOpen}>Close</button>
 </div>
 )}
 </div>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Rules of Hooks</Typography>
          <Typography variant="h3">The Rules</Typography>
          <CodeBlock language="jsx">{`// Rule 1: Only call hooks at the top level
function Component() {
 const [count, setCount] = useState(0); // Top level
 // Wrong: Inside condition
 if (count > 0) {
 const [name, setName] = useState(""); // 
 }
 // Wrong: Inside loop
 for (let i = 0; i < 3; i++) {
 useEffect(() => {}); // 
 }
}
// Rule 2: Only call hooks in React functions
function MyComponent() {
 useState(); // React component
}
function useMyHook() {
 useState(); // Custom hook (starts with "use")
}
function regularFunction() {
 useState(); // Regular function
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Document Title</Typography>
          <Typography>
            Create a component that updates the page title based on a prop.
          </Typography>
          <Typography variant="h3">Exercise 2: Fetch Data</Typography>
          <Typography>
            Create a component that fetches and displays user data.
          </Typography>
          <Typography variant="h3">Exercise 3: Timer</Typography>
          <Typography>
            Create a stopwatch with start, stop, and reset.
          </Typography>
          <Typography variant="h3">Exercise 4: Custom Hook</Typography>
          <Typography>
            Create a useWindowSize hook that returns window dimensions.
          </Typography>
          <Typography variant="h3">Exercise 5: Debounce</Typography>
          <Typography>
            Create a search input that debounces API calls.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hook</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>useEffect</TableCell>
                <TableCell>Handle side effects</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>useRef</TableCell>
                <TableCell>DOM refs &amp; mutable values</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>useMemo</TableCell>
                <TableCell>Memoize values</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>useCallback</TableCell>
                <TableCell>Memoize functions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Custom hooks</TableCell>
                <TableCell>Reusable logic</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            useEffect Patterns:
          </Typography>
          <CodeBlock language="jsx">{`useEffect(() => {}, []); // Run once
useEffect(() => {}, [dep]); // Run on dep change
useEffect(() => { return cleanup; }, []); // With cleanup`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 06 - React Router
          </Typography>
          <Typography>
            You will learn to add navigation to your app!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Hooks power modern React!
          </Typography>
          <Typography>
            Side effects under control.
          </Typography>
        </div>
      </section>
    </div>
  );
}
