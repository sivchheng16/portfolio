
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module05ReactRouter() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">React Router</Typography>
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
            <li>Add routing to a React application</li>
            <li>Create navigation between pages</li>
            <li>Handle dynamic routes</li>
            <li>Implement protected routes</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What is Routing?</Typography>
          <Typography variant="h3">Single Page Applications (SPA)</Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────────────────────┐
│ SPA ROUTING │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ TRADITIONAL SPA (React) │
│ ═══════════ ════════════ │
│ │
│ /home → Load page.html /home → Show <Home /> │
│ /about → Load about.html /about → Show <About /> │
│ /contact → Load contact.html /contact → Show <Contact /> │
│ │
│ Full page reload each time Same page, different component │
│ Slow, jarring Fast, smooth │
│ │
│ React Router handles URL changes without page reloads │
│ │
└─────────────────────────────────────────────────────────────────────────────┘`}</CodeBlock>
          <Typography variant="h3">Installation</Typography>
          <CodeBlock language="bash">{`npm install react-router-dom`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Basic Setup</Typography>
          <Typography variant="h3">BrowserRouter</Typography>
          <Typography>
            Wrap your app:
          </Typography>
          <CodeBlock language="jsx">{`// main.jsx
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <App />
 </BrowserRouter>
);`}</CodeBlock>
          <Typography variant="h3">Routes and Route</Typography>
          <CodeBlock language="jsx">{`// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
 return (
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/contact" element={<Contact />} />
 </Routes>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Navigation</Typography>
          <Typography variant="h3">Link Component</Typography>
          <CodeBlock language="jsx">{`import { Link } from 'react-router-dom';
function Navigation() {
 return (
 <nav>
 <Link to="/">Home</Link>
 <Link to="/about">About</Link>
 <Link to="/contact">Contact</Link>
 </nav>
 );
}`}</CodeBlock>
          <Typography variant="h3">NavLink for Active Styling</Typography>
          <CodeBlock language="jsx">{`import { NavLink } from 'react-router-dom';
function Navigation() {
 return (
 <nav>
 <NavLink 
 to="/"
 className={({ isActive }) => isActive ? 'active' : ''}
 >
 Home
 </NavLink>
 <NavLink 
 to="/about"
 className={({ isActive }) => isActive ? 'active' : ''}
 >
 About
 </NavLink>
 </nav>
 );
}`}</CodeBlock>
          <Typography variant="h3">Programmatic Navigation</Typography>
          <CodeBlock language="jsx">{`import { useNavigate } from 'react-router-dom';
function LoginForm() {
 const navigate = useNavigate();
 const handleSubmit = async (e) => {
 e.preventDefault();
 // ... login logic
 navigate('/dashboard'); // Redirect after login
 };
 return (
 <form onSubmit={handleSubmit}>
 {/* form fields */}
 </form>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Dynamic Routes</Typography>
          <Typography variant="h3">URL Parameters</Typography>
          <CodeBlock language="jsx">{`// App.jsx
<Routes>
 <Route path="/users/:userId" element={<UserProfile />} />
 <Route path="/products/:productId" element={<ProductDetail />} />
</Routes>`}</CodeBlock>
          <Typography variant="h3">useParams Hook</Typography>
          <CodeBlock language="jsx">{`import { useParams } from 'react-router-dom';
function UserProfile() {
 const { userId } = useParams();
 const [user, setUser] = useState(null);
 useEffect(() => {
 fetch(\`/api/users/\${userId}\`)
 .then(res => res.json())
 .then(data => setUser(data));
 }, [userId]);
 if (!user) return <p>Loading...</p>;
 return (
 <div>
 <h1>{user.name}</h1>
 <p>{user.email}</p>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Linking to Dynamic Routes</Typography>
          <CodeBlock language="jsx">{`function UserList({ users }) {
 return (
 <ul>
 {users.map(user => (
 <li key={user.id}>
 <Link to={\`/users/\${user.id}\`}>{user.name}</Link>
 </li>
 ))}
 </ul>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Nested Routes</Typography>
          <Typography variant="h3">Layout with Outlet</Typography>
          <CodeBlock language="jsx">{`// Layout.jsx
import { Outlet, Link } from 'react-router-dom';
function Layout() {
 return (
 <div>
 <header>
 <nav>
 <Link to="/">Home</Link>
 <Link to="/about">About</Link>
 </nav>
 </header>
 <main>
 <Outlet /> {/* Child routes render here */}
 </main>
 <footer>
 <p>&copy; 2024 My App</p>
 </footer>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Nested Route Configuration</Typography>
          <CodeBlock language="jsx">{`// App.jsx
function App() {
 return (
 <Routes>
 <Route path="/" element={<Layout />}>
 <Route index element={<Home />} />
 <Route path="about" element={<About />} />
 <Route path="contact" element={<Contact />} />
 <Route path="users" element={<Users />}>
 <Route index element={<UserList />} />
 <Route path=":userId" element={<UserProfile />} />
 </Route>
 </Route>
 </Routes>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Error and Loading States</Typography>
          <Typography variant="h3">404 Not Found</Typography>
          <CodeBlock language="jsx">{`function App() {
 return (
 <Routes>
 <Route path="/" element={<Layout />}>
 <Route index element={<Home />} />
 <Route path="about" element={<About />} />
 <Route path="*" element={<NotFound />} />
 </Route>
 </Routes>
 );
}
function NotFound() {
 return (
 <div className="not-found">
 <h1>404</h1>
 <p>Page not found</p>
 <Link to="/">Go Home</Link>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Loading States</Typography>
          <CodeBlock language="jsx">{`import { Suspense, lazy } from 'react';
// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
function App() {
 return (
 <Suspense fallback={<Loading />}>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 </Routes>
 </Suspense>
 );
}
function Loading() {
 return <div className="loading">Loading...</div>;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Protected Routes</Typography>
          <Typography variant="h3">Auth Check</Typography>
          <CodeBlock language="jsx">{`import { Navigate } from 'react-router-dom';
function ProtectedRoute({ children }) {
 const isAuthenticated = checkAuth(); // Your auth logic
 if (!isAuthenticated) {
 return <Navigate to="/login" replace />;
 }
 return children;
}
// Usage in routes
function App() {
 return (
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/login" element={<Login />} />
 <Route 
 path="/dashboard" 
 element={
 <ProtectedRoute>
 <Dashboard />
 </ProtectedRoute>
 } 
 />
 </Routes>
 );
}`}</CodeBlock>
          <Typography variant="h3">Complete Auth Example</Typography>
          <CodeBlock language="jsx">{`// AuthContext.jsx
import { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
export function AuthProvider({ children }) {
 const [user, setUser] = useState(null);
 const login = (userData) => setUser(userData);
 const logout = () => setUser(null);
 return (
 <AuthContext.Provider value={{ user, login, logout }}>
 {children}
 </AuthContext.Provider>
 );
}
export const useAuth = () => useContext(AuthContext);
// ProtectedRoute.jsx
function ProtectedRoute({ children }) {
 const { user } = useAuth();
 if (!user) {
 return <Navigate to="/login" replace />;
 }
 return children;
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Basic Routes</Typography>
          <Typography>
            Create an app with Home, About, and Contact pages with navigation.
          </Typography>
          <Typography variant="h3">Exercise 2: Dynamic Route</Typography>
          <Typography>
            Create a product list with links to individual product detail pages.
          </Typography>
          <Typography variant="h3">Exercise 3: Nested Layout</Typography>
          <Typography>
            Create a dashboard layout with nested routes for different sections.
          </Typography>
          <Typography variant="h3">Exercise 4: 404 Page</Typography>
          <Typography>
            Add a custom 404 page for undefined routes.
          </Typography>
          <Typography variant="h3">Exercise 5: Protected Route</Typography>
          <Typography>
            Create login functionality with a protected dashboard page.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component/Hook</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>BrowserRouter</TableCell>
                <TableCell>Enable routing</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Routes</TableCell>
                <TableCell>Container for routes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Route</TableCell>
                <TableCell>Define a route</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Link</TableCell>
                <TableCell>Navigate between pages</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>NavLink</TableCell>
                <TableCell>Link with active styling</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>useNavigate</TableCell>
                <TableCell>Programmatic navigation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>useParams</TableCell>
                <TableCell>Access URL parameters</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Outlet</TableCell>
                <TableCell>Render nested routes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 07 - Project: Task Manager
          </Typography>
          <Typography>
            You will build a complete React application!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Navigation makes apps complete!
          </Typography>
          <Typography>
            Routes connect your pages.
          </Typography>
        </div>
      </section>
    </div>
  );
}
