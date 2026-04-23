
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module06ProjectTaskManager() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Project - Task Manager</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 06: React Fundamentals</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Overview</Typography>
          <Typography>
            Build a complete Task Manager application using everything you&apos;ve learned in React!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Requirements</Typography>
          <Typography variant="h3">Must Have (Required)</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Skills Demonstrated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Add new tasks</TableCell>
                <TableCell>Forms, state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mark tasks complete</TableCell>
                <TableCell>Events, state updates</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Delete tasks</TableCell>
                <TableCell>Array state manipulation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Filter tasks</TableCell>
                <TableCell>Derived state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Task count display</TableCell>
                <TableCell>Props, calculations</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Persist to localStorage</TableCell>
                <TableCell>useEffect</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Responsive design</TableCell>
                <TableCell>CSS</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Nice to Have (Bonus)</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Skills Shown</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Edit tasks</TableCell>
                <TableCell>Complex state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Due dates</TableCell>
                <TableCell>Date handling</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Priority levels</TableCell>
                <TableCell>Object state</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Categories/tags</TableCell>
                <TableCell>Filtering</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Drag and drop</TableCell>
                <TableCell>Advanced events</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Structure</Typography>
          <CodeBlock language="text">{`task-manager/
├── src/
│ ├── components/
│ │ ├── TaskForm.jsx
│ │ ├── TaskList.jsx
│ │ ├── TaskItem.jsx
│ │ ├── TaskFilter.jsx
│ │ └── Header.jsx
│ ├── hooks/
│ │ └── useLocalStorage.js
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
├── index.html
└── package.json`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 1: Setup</Typography>
          <CodeBlock language="bash">{`npm create vite@latest task-manager -- --template react
cd task-manager
npm install
npm run dev`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 2: Custom Hook</Typography>
          <CodeBlock language="jsx">{`// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';
export function useLocalStorage(key, initialValue) {
 const [value, setValue] = useState(() => {
 try {
 const item = localStorage.getItem(key);
 return item ? JSON.parse(item) : initialValue;
 } catch {
 return initialValue;
 }
 });
 useEffect(() => {
 localStorage.setItem(key, JSON.stringify(value));
 }, [key, value]);
 return [value, setValue];
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 3: Components</Typography>
          <Typography variant="h3">Header.jsx</Typography>
          <CodeBlock language="jsx">{`// src/components/Header.jsx
export function Header({ taskCount, completedCount }) {
 return (
 <header className="header">
 <h1> Task Manager</h1>
 <p className="stats">
 <span>{taskCount} tasks</span>
 <span>{completedCount} completed</span>
 </p>
 </header>
 );
}`}</CodeBlock>
          <Typography variant="h3">TaskForm.jsx</Typography>
          <CodeBlock language="jsx">{`// src/components/TaskForm.jsx
import { useState } from 'react';
export function TaskForm({ onAddTask }) {
 const [text, setText] = useState('');
 const [priority, setPriority] = useState('medium');
 const handleSubmit = (e) => {
 e.preventDefault();
 if (!text.trim()) return;
 onAddTask({
 id: Date.now(),
 text: text.trim(),
 priority,
 completed: false,
 createdAt: new Date().toISOString()
 });
 setText('');
 setPriority('medium');
 };
 return (
 <form className="task-form" onSubmit={handleSubmit}>
 <input
 type="text"
 value={text}
 onChange={(e) => setText(e.target.value)}
 placeholder="What needs to be done?"
 className="task-input"
 />
 <select
 value={priority}
 onChange={(e) => setPriority(e.target.value)}
 className="priority-select"
 >
 <option value="low">Low</option>
 <option value="medium">Medium</option>
 <option value="high">High</option>
 </select>
 <button type="submit" className="add-btn">
 Add Task
 </button>
 </form>
 );
}`}</CodeBlock>
          <Typography variant="h3">TaskFilter.jsx</Typography>
          <CodeBlock language="jsx">{`// src/components/TaskFilter.jsx
export function TaskFilter({ filter, onFilterChange }) {
 const filters = ['all', 'active', 'completed'];
 return (
 <div className="task-filter">
 {filters.map(f => (
 <button
 key={f}
 className={\`filter-btn \${filter === f ? 'active' : ''}\`}
 onClick={() => onFilterChange(f)}
 >
 {f.charAt(0).toUpperCase() + f.slice(1)}
 </button>
 ))}
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">TaskItem.jsx</Typography>
          <CodeBlock language="jsx">{`// src/components/TaskItem.jsx
export function TaskItem({ task, onToggle, onDelete }) {
 const priorityColors = {
 low: '#10b981',
 medium: '#f59e0b',
 high: '#ef4444'
 };
 return (
 <div className={\`task-item \${task.completed ? 'completed' : ''}\`}>
 <div className="task-content">
 <input
 type="checkbox"
 checked={task.completed}
 onChange={() => onToggle(task.id)}
 className="task-checkbox"
 />
 <span className="task-text">{task.text}</span>
 <span 
 className="priority-badge"
 style={{ backgroundColor: priorityColors[task.priority] }}
 >
 {task.priority}
 </span>
 </div>
 <button 
 className="delete-btn"
 onClick={() => onDelete(task.id)}
 >
 </button>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">TaskList.jsx</Typography>
          <CodeBlock language="jsx">{`// src/components/TaskList.jsx
import { TaskItem } from './TaskItem';
export function TaskList({ tasks, onToggle, onDelete }) {
 if (tasks.length === 0) {
 return (
 <div className="empty-state">
 <p>No tasks yet. Add one above!</p>
 </div>
 );
 }
 return (
 <div className="task-list">
 {tasks.map(task => (
 <TaskItem
 key={task.id}
 task={task}
 onToggle={onToggle}
 onDelete={onDelete}
 />
 ))}
 </div>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 4: Main App</Typography>
          <CodeBlock language="jsx">{`// src/App.jsx
import { useState, useMemo } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskFilter } from './components/TaskFilter';
import { TaskList } from './components/TaskList';
import './App.css';
function App() {
 const [tasks, setTasks] = useLocalStorage('tasks', []);
 const [filter, setFilter] = useState('all');
 // Derived state
 const filteredTasks = useMemo(() => {
 switch (filter) {
 case 'active':
 return tasks.filter(t => !t.completed);
 case 'completed':
 return tasks.filter(t => t.completed);
 default:
 return tasks;
 }
 }, [tasks, filter]);
 const completedCount = tasks.filter(t => t.completed).length;
 // Handlers
 const addTask = (task) => {
 setTasks([task, ...tasks]);
 };
 const toggleTask = (id) => {
 setTasks(tasks.map(task =>
 task.id === id ? { ...task, completed: !task.completed } : task
 ));
 };
 const deleteTask = (id) => {
 setTasks(tasks.filter(task => task.id !== id));
 };
 const clearCompleted = () => {
 setTasks(tasks.filter(task => !task.completed));
 };
 return (
 <div className="app">
 <div className="container">
 <Header 
 taskCount={tasks.length} 
 completedCount={completedCount} 
 />
 <TaskForm onAddTask={addTask} />
 <TaskFilter 
 filter={filter} 
 onFilterChange={setFilter} 
 />
 <TaskList
 tasks={filteredTasks}
 onToggle={toggleTask}
 onDelete={deleteTask}
 />
 {completedCount > 0 && (
 <button 
 className="clear-btn"
 onClick={clearCompleted}
 >
 Clear Completed ({completedCount})
 </button>
 )}
 </div>
 </div>
 );
}
export default App;`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 5: Styling</Typography>
          <CodeBlock language="css">{`/* src/App.css */
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
:root {
 --primary: #6366f1;
 --primary-dark: #4f46e5;
 --bg: #f8fafc;
 --card-bg: #ffffff;
 --text: #1e293b;
 --text-light: #64748b;
 --border: #e2e8f0;
 --success: #10b981;
 --danger: #ef4444;
}
body {
 font-family: 'Segoe UI', sans-serif;
 background: var(--bg);
 color: var(--text);
}
.app {
 min-height: 100vh;
 padding: 40px 20px;
}
.container {
 max-width: 600px;
 margin: 0 auto;
}
/* Header */
.header {
 text-align: center;
 margin-bottom: 30px;
}
.header h1 {
 font-size: 2rem;
 margin-bottom: 10px;
}
.stats {
 color: var(--text-light);
}
.stats span {
 margin: 0 10px;
}
/* Task Form */
.task-form {
 display: flex;
 gap: 10px;
 margin-bottom: 20px;
 flex-wrap: wrap;
}
.task-input {
 flex: 1;
 min-width: 200px;
 padding: 12px 16px;
 border: 2px solid var(--border);
 border-radius: 8px;
 font-size: 1rem;
}
.task-input:focus {
 outline: none;
 border-color: var(--primary);
}
.priority-select {
 padding: 12px;
 border: 2px solid var(--border);
 border-radius: 8px;
}
.add-btn {
 padding: 12px 24px;
 background: var(--primary);
 color: white;
 border: none;
 border-radius: 8px;
 font-size: 1rem;
 cursor: pointer;
 transition: background 0.2s;
}
.add-btn:hover {
 background: var(--primary-dark);
}
/* Filter */
.task-filter {
 display: flex;
 gap: 10px;
 margin-bottom: 20px;
}
.filter-btn {
 padding: 8px 16px;
 background: var(--card-bg);
 border: 2px solid var(--border);
 border-radius: 20px;
 cursor: pointer;
 transition: all 0.2s;
}
.filter-btn.active {
 background: var(--primary);
 border-color: var(--primary);
 color: white;
}
/* Task List */
.task-list {
 display: flex;
 flex-direction: column;
 gap: 10px;
}
.empty-state {
 text-align: center;
 padding: 40px;
 color: var(--text-light);
}
/* Task Item */
.task-item {
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 15px;
 background: var(--card-bg);
 border-radius: 10px;
 box-shadow: 0 2px 5px rgba(0,0,0,0.05);
 transition: all 0.2s;
}
.task-item:hover {
 box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.task-item.completed .task-text {
 text-decoration: line-through;
 color: var(--text-light);
}
.task-content {
 display: flex;
 align-items: center;
 gap: 12px;
 flex: 1;
}
.task-checkbox {
 width: 20px;
 height: 20px;
 cursor: pointer;
}
.task-text {
 flex: 1;
}
.priority-badge {
 padding: 4px 8px;
 border-radius: 12px;
 font-size: 0.75rem;
 color: white;
 text-transform: uppercase;
}
.delete-btn {
 background: none;
 border: none;
 font-size: 1.2rem;
 cursor: pointer;
 opacity: 0.5;
 transition: opacity 0.2s;
}
.delete-btn:hover {
 opacity: 1;
}
/* Clear Button */
.clear-btn {
 display: block;
 width: 100%;
 padding: 12px;
 margin-top: 20px;
 background: none;
 border: 2px solid var(--danger);
 color: var(--danger);
 border-radius: 8px;
 cursor: pointer;
 transition: all 0.2s;
}
.clear-btn:hover {
 background: var(--danger);
 color: white;
}
/* Responsive */
@media (max-width: 480px) {
 .task-form {
 flex-direction: column;
 }
 .task-input,
 .priority-select,
 .add-btn {
 width: 100%;
 }
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Evaluation Criteria</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Criteria</TableHead>
                <TableHead>Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Functionality (40)</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Add tasks works</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Complete/delete works</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Filter works</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>localStorage works</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Code Quality (30)</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Clean components</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Proper state management</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Custom hooks</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Design (20)</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Visual appeal</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Responsive</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bonus Features (10)</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Extra features</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Level Complete</Typography>
          <Typography>
            Upon completing this project:
          </Typography>
          <Typography>
            React Fundamentals Badge earned
Ready for Track 07: Next.js &amp; Tailwind
Ready for Capstone Project
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            You built a complete React app!
          </Typography>
          <Typography>
            Components, state, hooks, it all comes together.
          </Typography>
        </div>
      </section>
    </div>
  );
}
