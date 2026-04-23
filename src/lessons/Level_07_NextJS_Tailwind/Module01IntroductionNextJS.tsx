
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module01IntroductionNextJS() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Introduction to Next.js</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 07: Next.js &amp; Tailwind</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Objectives</Typography>
          <Typography>
            By the end of this module, you will be able to:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Understand what Next.js is and its benefits</li>
            <li>Set up a Next.js project</li>
            <li>Understand the App Router structure</li>
            <li>Create your first pages</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What is Next.js?</Typography>
          <Typography variant="h3">Next.js Defined</Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────────────────────┐
│ NEXT.JS = REACT + SUPERPOWERS │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ React alone: Next.js adds: │
│ ════════════ ════════════ │
│ │
│ • Client-side only • Server-side rendering (SSR) │
│ • Manual routing setup • File-based routing │
│ • No built-in API • API routes built-in │
│ • Complex deployment • Easy deployment (Vercel) │
│ • Manual optimization • Automatic optimization │
│ │
│ Next.js is a FRAMEWORK built on top of React. │
│ It provides structure and features out of the box. │
│ │
│ USED BY: Netflix, TikTok, Nike, Hulu, Notion, Twitch │
│ │
└─────────────────────────────────────────────────────────────────────────────┘`}</CodeBlock>
          <Typography variant="h3">Key Features</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>File-based Routing</TableCell>
                <TableCell>Folder structure = URL structure</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Server Components</TableCell>
                <TableCell>React components that run on server</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Server-side Rendering</TableCell>
                <TableCell>HTML generated on server</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Static Generation</TableCell>
                <TableCell>Pre-built pages at build time</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>API Routes</TableCell>
                <TableCell>Backend endpoints in same project</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Automatic Optimization</TableCell>
                <TableCell>Images, fonts, scripts</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Built-in CSS Support</TableCell>
                <TableCell>CSS Modules, Tailwind ready</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Setting Up</Typography>
          <Typography variant="h3">Create Next.js App</Typography>
          <CodeBlock language="bash">{`npx create-next-app@latest my-nextjs-app`}</CodeBlock>
          <Typography>
            Prompts (recommended answers):
          </Typography>
          <CodeBlock language="text">{`Would you like to use TypeScript? › No
Would you like to use ESLint? › Yes 
Would you like to use Tailwind CSS? › Yes
Would you like to use \`src/\` directory? › Yes
Would you like to use App Router? › Yes
Would you like to customize the default import alias? › No`}</CodeBlock>
          <Typography variant="h3">Start Development</Typography>
          <CodeBlock language="bash">{`cd my-nextjs-app
npm run dev`}</CodeBlock>
          <Typography>
            Open http://localhost:3000
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Project Structure</Typography>
          <Typography variant="h3">App Router Structure</Typography>
          <CodeBlock language="text">{`my-nextjs-app/
├── src/
│ └── app/
│ ├── layout.js ← Root layout (wraps all pages)
│ ├── page.js ← Home page (/)
│ ├── globals.css ← Global styles
│ ├── about/
│ │ └── page.js ← About page (/about)
│ ├── products/
│ │ ├── page.js ← Products list (/products)
│ │ └── [id]/
│ │ └── page.js ← Product detail (/products/123)
│ └── api/
│ └── hello/
│ └── route.js ← API endpoint (/api/hello)
├── public/ ← Static files
├── package.json
├── next.config.js
└── tailwind.config.js`}</CodeBlock>
          <Typography variant="h3">File Naming Convention</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>page.js</TableCell>
                <TableCell>UI for a route</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>layout.js</TableCell>
                <TableCell>Shared UI for segment</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>loading.js</TableCell>
                <TableCell>Loading UI</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>error.js</TableCell>
                <TableCell>Error UI</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>not-found.js</TableCell>
                <TableCell>404 UI</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>route.js</TableCell>
                <TableCell>API endpoint</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Pages and Routing</Typography>
          <Typography variant="h3">Creating Pages</Typography>
          <CodeBlock language="jsx">{`// src/app/page.js (Home - /)
export default function HomePage() {
 return (
 <main>
 <h1>Welcome to My App</h1>
 <p>This is the home page.</p>
 </main>
 );
}`}</CodeBlock>
          <CodeBlock language="jsx">{`// src/app/about/page.js (/about)
export default function AboutPage() {
 return (
 <main>
 <h1>About Us</h1>
 <p>Learn more about our company.</p>
 </main>
 );
}`}</CodeBlock>
          <CodeBlock language="jsx">{`// src/app/contact/page.js (/contact)
export default function ContactPage() {
 return (
 <main>
 <h1>Contact Us</h1>
 <form>
 <input type="email" placeholder="Email" />
 <textarea placeholder="Message"></textarea>
 <button type="submit">Send</button>
 </form>
 </main>
 );
}`}</CodeBlock>
          <Typography variant="h3">URL Mapping</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Path</TableHead>
                <TableHead>URL</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>app/page.js</TableCell>
                <TableCell>/</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>app/about/page.js</TableCell>
                <TableCell>/about</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>app/blog/page.js</TableCell>
                <TableCell>/blog</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>app/blog/[slug]/page.js</TableCell>
                <TableCell>/blog/my-post</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Layouts</Typography>
          <Typography variant="h3">Root Layout</Typography>
          <Typography>
            Every app needs a root layout:
          </Typography>
          <CodeBlock language="jsx">{`// src/app/layout.js
import './globals.css';
export const metadata = {
 title: 'My Next.js App',
 description: 'Built with Next.js',
};
export default function RootLayout({ children }) {
 return (
 <html lang="en">
 <body>
 <header>
 <nav>
 <a href="/">Home</a>
 <a href="/about">About</a>
 <a href="/contact">Contact</a>
 </nav>
 </header>
 <main>{children}</main>
 <footer>
 <p>&copy; 2024 My App</p>
 </footer>
 </body>
 </html>
 );
}`}</CodeBlock>
          <Typography variant="h3">Nested Layouts</Typography>
          <CodeBlock language="jsx">{`// src/app/dashboard/layout.js
export default function DashboardLayout({ children }) {
 return (
 <div className="dashboard">
 <aside className="sidebar">
 <nav>
 <a href="/dashboard">Overview</a>
 <a href="/dashboard/settings">Settings</a>
 </nav>
 </aside>
 <div className="content">
 {children}
 </div>
 </div>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Navigation</Typography>
          <Typography variant="h3">Link Component</Typography>
          <CodeBlock language="jsx">{`import Link from 'next/link';
export default function Navigation() {
 return (
 <nav>
 <Link href="/">Home</Link>
 <Link href="/about">About</Link>
 <Link href="/products">Products</Link>
 <Link href="/contact">Contact</Link>
 </nav>
 );
}`}</CodeBlock>
          <Typography variant="h3">Dynamic Links</Typography>
          <CodeBlock language="jsx">{`function ProductList({ products }) {
 return (
 <ul>
 {products.map(product => (
 <li key={product.id}>
 <Link href={\`/products/\${product.id}\`}>
 {product.name}
 </Link>
 </li>
 ))}
 </ul>
 );
}`}</CodeBlock>
          <Typography variant="h3">Programmatic Navigation</Typography>
          <CodeBlock language="jsx">{`'use client';
import { useRouter } from 'next/navigation';
export default function SearchForm() {
 const router = useRouter();
 const handleSearch = (e) => {
 e.preventDefault();
 const query = e.target.search.value;
 router.push(\`/search?q=\${query}\`);
 };
 return (
 <form onSubmit={handleSearch}>
 <input name="search" placeholder="Search..." />
 <button type="submit">Search</button>
 </form>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Server vs Client Components</Typography>
          <Typography variant="h3">Server Components (Default)</Typography>
          <CodeBlock language="jsx">{`// This is a Server Component (default)
// Runs on the server, can fetch data directly
async function ProductList() {
 const products = await fetch('https://api.example.com/products')
 .then(res => res.json());
 return (
 <ul>
 {products.map(p => <li key={p.id}>{p.name}</li>)}
 </ul>
 );
}`}</CodeBlock>
          <Typography variant="h3">Client Components</Typography>
          <CodeBlock language="jsx">{`'use client'; // This directive makes it a Client Component
import { useState } from 'react';
export default function Counter() {
 const [count, setCount] = useState(0);
 return (
 <div>
 <p>Count: {count}</p>
 <button onClick={() => setCount(count + 1)}>+</button>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">When to Use Each</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Server Component</TableHead>
                <TableHead>Client Component</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Fetch data</TableCell>
                <TableCell>useState, useEffect</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Access backend resources</TableCell>
                <TableCell>Event listeners (onClick)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Keep secrets secure</TableCell>
                <TableCell>Browser APIs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Reduce client JS</TableCell>
                <TableCell>Interactivity</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Setup</Typography>
          <Typography>
            Create a new Next.js app with Tailwind CSS.
          </Typography>
          <Typography variant="h3">Exercise 2: Three Pages</Typography>
          <Typography>
            Create Home, About, and Contact pages.
          </Typography>
          <Typography variant="h3">Exercise 3: Navigation</Typography>
          <Typography>
            Add a navigation bar to the layout.
          </Typography>
          <Typography variant="h3">Exercise 4: Nested Layout</Typography>
          <Typography>
            Create a dashboard section with its own layout.
          </Typography>
          <Typography variant="h3">Exercise 5: Dynamic Route</Typography>
          <Typography>
            Create a /blog/[slug] route that displays the slug.
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
                <TableCell>Next.js</TableCell>
                <TableCell>React framework with SSR</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>App Router</TableCell>
                <TableCell>File-based routing system</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>page.js</TableCell>
                <TableCell>Defines a route&apos;s UI</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>layout.js</TableCell>
                <TableCell>Shared wrapper component</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Server Component</TableCell>
                <TableCell>Default, runs on server</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Client Component</TableCell>
                <TableCell>&apos;use client&apos;, interactive</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 03 - Tailwind CSS Fundamentals
          </Typography>
          <Typography>
            You will learn rapid styling with utility classes!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Next.js powers production apps!
          </Typography>
          <Typography>
            React + Structure + Performance
          </Typography>
        </div>
      </section>
    </div>
  );
}
