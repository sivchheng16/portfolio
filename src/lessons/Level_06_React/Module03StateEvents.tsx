
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module03StateEvents() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">State &amp; Events</Typography>
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
            <li>Understand state vs props</li>
            <li>Use the useState hook</li>
            <li>Handle user events</li>
            <li>Build interactive components</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Understanding State</Typography>
          <Typography variant="h3">Props vs State</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>PROPS vs STATE</li>
            <li>PROPS STATE</li>
            <li>• Passed from parent • Managed internally</li>
            <li>• Read-only • Can be changed</li>
            <li>• Component doesn&apos;t own • Component owns</li>
            <li>• Used for configuration • Used for interactivity</li>
            <li>Example: Example:</li>
            <li>&lt;Button color=&quot;blue&quot;&gt; Button tracks if clicked</li>
            <li>(parent decides color) (manages own state)</li>
          </ul>
          <Typography variant="h3">When to Use State</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Form input values</li>
            <li>Toggle switches (on/off)</li>
            <li>Modal open/closed</li>
            <li>Counter values</li>
            <li>Selected items</li>
            <li>Loading states</li>
            <li>Error messages</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: useState Hook</Typography>
          <Typography variant="h3">Basic Syntax</Typography>
          <CodeBlock language="jsx">{`import { useState } from 'react';
function Counter() {
 // Declare state: [currentValue, setterFunction]
 const [count, setCount] = useState(0);
 // ↑ initial value
 return (
 <div>
 <p>Count: {count}</p>
 <button onClick={() => setCount(count + 1)}>
 Increment
 </button>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">How useState Works</Typography>
          <CodeBlock language="jsx">{`const [value, setValue] = useState(initialValue);
// ↑ ↑ ↑
// | | └── Starting value
// | └── Function to update value
// └── Current value`}</CodeBlock>
          <Typography variant="h3">Multiple State Variables</Typography>
          <CodeBlock language="jsx">{`function UserForm() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [age, setAge] = useState(0);
 const [isSubscribed, setIsSubscribed] = useState(false);
 return (
 <form>
 <input 
 value={name}
 onChange={e => setName(e.target.value)}
 placeholder="Name"
 />
 <input 
 value={email}
 onChange={e => setEmail(e.target.value)}
 placeholder="Email"
 />
 {/* ... */}
 </form>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Handling Events</Typography>
          <Typography variant="h3">Event Syntax</Typography>
          <CodeBlock language="jsx">{`// HTML
<button onclick="handleClick()">
// React (camelCase, function reference)
<button onClick={handleClick}>`}</CodeBlock>
          <Typography variant="h3">Common Events</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>When Triggered</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>onClick</TableCell>
                <TableCell>Element clicked</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onChange</TableCell>
                <TableCell>Input value changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onSubmit</TableCell>
                <TableCell>Form submitted</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onFocus</TableCell>
                <TableCell>Element focused</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onBlur</TableCell>
                <TableCell>Element loses focus</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onMouseEnter</TableCell>
                <TableCell>Mouse enters element</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onMouseLeave</TableCell>
                <TableCell>Mouse leaves element</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onKeyDown</TableCell>
                <TableCell>Key pressed</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Event Handler Functions</Typography>
          <CodeBlock language="jsx">{`function Button() {
 // Define handler function
 const handleClick = () => {
 console.log("Button clicked!");
 };
 return <button onClick={handleClick}>Click Me</button>;
}
// Or inline
function Button() {
 return (
 <button onClick={() => console.log("Clicked!")}>
 Click Me
 </button>
 );
}`}</CodeBlock>
          <Typography variant="h3">Event Object</Typography>
          <CodeBlock language="jsx">{`function Input() {
 const handleChange = (event) => {
 console.log(event.target.value);
 };
 return <input onChange={handleChange} />;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: State with Events</Typography>
          <Typography variant="h3">Counter Example</Typography>
          <CodeBlock language="jsx">{`import { useState } from 'react';
function Counter() {
 const [count, setCount] = useState(0);
 const increment = () => setCount(count + 1);
 const decrement = () => setCount(count - 1);
 const reset = () => setCount(0);
 return (
 <div className="counter">
 <h2>Count: {count}</h2>
 <button onClick={decrement}>-</button>
 <button onClick={reset}>Reset</button>
 <button onClick={increment}>+</button>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Toggle Example</Typography>
          <CodeBlock language="jsx">{`function Toggle() {
 const [isOn, setIsOn] = useState(false);
 const toggle = () => setIsOn(!isOn);
 return (
 <div>
 <p>Status: {isOn ? "ON" : "OFF"}</p>
 <button onClick={toggle}>
 Turn {isOn ? "OFF" : "ON"}
 </button>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Input Example</Typography>
          <CodeBlock language="jsx">{`function NameInput() {
 const [name, setName] = useState("");
 return (
 <div>
 <input
 type="text"
 value={name}
 onChange={(e) => setName(e.target.value)}
 placeholder="Enter your name"
 />
 <p>Hello, {name || "stranger"}!</p>
 </div>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Forms in React</Typography>
          <Typography variant="h3">Controlled Components</Typography>
          <Typography>
            React controls the input value:
          </Typography>
          <CodeBlock language="jsx">{`function LoginForm() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const handleSubmit = (e) => {
 e.preventDefault();
 console.log("Login:", { email, password });
 // Submit to API
 };
 return (
 <form onSubmit={handleSubmit}>
 <input
 type="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder="Email"
 />
 <input
 type="password"
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 placeholder="Password"
 />
 <button type="submit">Login</button>
 </form>
 );
}`}</CodeBlock>
          <Typography variant="h3">Form with Object State</Typography>
          <CodeBlock language="jsx">{`function SignupForm() {
 const [formData, setFormData] = useState({
 name: "",
 email: "",
 password: ""
 });
 const handleChange = (e) => {
 const { name, value } = e.target;
 setFormData(prev => ({
 ...prev,
 [name]: value
 }));
 };
 const handleSubmit = (e) => {
 e.preventDefault();
 console.log(formData);
 };
 return (
 <form onSubmit={handleSubmit}>
 <input
 name="name"
 value={formData.name}
 onChange={handleChange}
 placeholder="Name"
 />
 <input
 name="email"
 value={formData.email}
 onChange={handleChange}
 placeholder="Email"
 />
 <input
 name="password"
 type="password"
 value={formData.password}
 onChange={handleChange}
 placeholder="Password"
 />
 <button type="submit">Sign Up</button>
 </form>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Updating State Correctly</Typography>
          <Typography variant="h3">State Updates are Asynchronous</Typography>
          <CodeBlock language="jsx">{`// Wrong: Reading state immediately after setting
const handleClick = () => {
 setCount(count + 1);
 console.log(count); // Still old value!
};
// Use functional update for derived state
const handleClick = () => {
 setCount(prevCount => prevCount + 1);
};`}</CodeBlock>
          <Typography variant="h3">Functional Updates</Typography>
          <Typography>
            Use when new state depends on previous:
          </Typography>
          <CodeBlock language="jsx">{`// Multiple increments
const incrementThree = () => {
 // Wrong: Only increments by 1
 setCount(count + 1);
 setCount(count + 1);
 setCount(count + 1);
 // Correct: Increments by 3
 setCount(prev => prev + 1);
 setCount(prev => prev + 1);
 setCount(prev => prev + 1);
};`}</CodeBlock>
          <Typography variant="h3">Updating Objects in State</Typography>
          <CodeBlock language="jsx">{`const [user, setUser] = useState({ name: "Sokha", age: 22 });
// Wrong: Mutating state directly
user.age = 23;
// Correct: Create new object
setUser({ ...user, age: 23 });
// Or with functional update
setUser(prev => ({ ...prev, age: prev.age + 1 }));`}</CodeBlock>
          <Typography variant="h3">Updating Arrays in State</Typography>
          <CodeBlock language="jsx">{`const [items, setItems] = useState(["Apple", "Banana"]);
// Add item
setItems([...items, "Orange"]);
// Remove item
setItems(items.filter(item => item !== "Banana"));
// Update item
setItems(items.map(item => 
 item === "Apple" ? "Red Apple" : item
));`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Practical Examples</Typography>
          <Typography variant="h3">Todo Item</Typography>
          <CodeBlock language="jsx">{`function TodoItem({ todo, onToggle, onDelete }) {
 return (
 <div className={\`todo \${todo.completed ? 'completed' : ''}\`}>
 <input
 type="checkbox"
 checked={todo.completed}
 onChange={() => onToggle(todo.id)}
 />
 <span>{todo.text}</span>
 <button onClick={() => onDelete(todo.id)}>Delete</button>
 </div>
 );
}
function TodoList() {
 const [todos, setTodos] = useState([
 { id: 1, text: "Learn React", completed: false },
 { id: 2, text: "Build project", completed: false }
 ]);
 const [newTodo, setNewTodo] = useState("");
 const addTodo = (e) => {
 e.preventDefault();
 if (!newTodo.trim()) return;
 setTodos([
 ...todos,
 { id: Date.now(), text: newTodo, completed: false }
 ]);
 setNewTodo("");
 };
 const toggleTodo = (id) => {
 setTodos(todos.map(todo =>
 todo.id === id ? { ...todo, completed: !todo.completed } : todo
 ));
 };
 const deleteTodo = (id) => {
 setTodos(todos.filter(todo => todo.id !== id));
 };
 return (
 <div>
 <form onSubmit={addTodo}>
 <input
 value={newTodo}
 onChange={(e) => setNewTodo(e.target.value)}
 placeholder="New todo..."
 />
 <button type="submit">Add</button>
 </form>
 {todos.map(todo => (
 <TodoItem
 key={todo.id}
 todo={todo}
 onToggle={toggleTodo}
 onDelete={deleteTodo}
 />
 ))}
 </div>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Counter</Typography>
          <Typography>
            Create a counter with increment, decrement, and reset buttons.
          </Typography>
          <Typography variant="h3">Exercise 2: Toggle Theme</Typography>
          <Typography>
            Create a dark/light mode toggle.
          </Typography>
          <Typography variant="h3">Exercise 3: Character Counter</Typography>
          <Typography>
            Create an input that shows remaining characters (max 100).
          </Typography>
          <Typography variant="h3">Exercise 4: Login Form</Typography>
          <Typography>
            Create a login form with email and password validation.
          </Typography>
          <Typography variant="h3">Exercise 5: Shopping Cart</Typography>
          <Typography>
            Create a simple list where you can add/remove items.
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
                <TableCell>State</TableCell>
                <TableCell>Component&apos;s internal data</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>useState</TableCell>
                <TableCell>Hook to add state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Events</TableCell>
                <TableCell>Handle user interactions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Controlled inputs</TableCell>
                <TableCell>React controls form values</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Functional updates</TableCell>
                <TableCell>Update based on previous state</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 05 - Hooks (useEffect)
          </Typography>
          <Typography>
            You will learn to handle side effects!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            State makes React interactive!
          </Typography>
          <Typography>
            User actions → State changes → UI updates
          </Typography>
        </div>
      </section>
    </div>
  );
}
