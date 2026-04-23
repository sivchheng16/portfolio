
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module04APIRoutes() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">API Routes</Typography>
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
            <li>Create API endpoints in Next.js</li>
            <li>Handle different HTTP methods</li>
            <li>Connect to databases</li>
            <li>Build a complete CRUD API</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What are API Routes?</Typography>
          <Typography variant="h3">Full-Stack in One Project</Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────────────────────┐
│ NEXT.JS = FRONTEND + BACKEND │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ TRADITIONAL: NEXT.JS: │
│ ════════════ ════════ │
│ │
│ Frontend (React) ←──→ Backend (Express) │
│ Separate project Separate project │
│ Different deploy Different deploy │
│ │
│ Frontend (React) │
│ + │
│ Backend (API Routes) │
│ ───────────────────── │
│ ONE project, ONE deploy │
│ │
└─────────────────────────────────────────────────────────────────────────────┘`}</CodeBlock>
          <Typography variant="h3">API Route Location</Typography>
          <CodeBlock language="text">{`app/
├── api/
│ ├── hello/
│ │ └── route.js → GET /api/hello
│ ├── users/
│ │ ├── route.js → /api/users
│ │ └── [id]/
│ │ └── route.js → /api/users/123
│ └── products/
│ └── route.js → /api/products`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Basic API Route</Typography>
          <Typography variant="h3">Simple GET Endpoint</Typography>
          <CodeBlock language="jsx">{`// app/api/hello/route.js
import { NextResponse } from 'next/server';
export async function GET() {
 return NextResponse.json({ message: 'Hello, World!' });
}`}</CodeBlock>
          <Typography>
            Test it: http://localhost:3000/api/hello
          </Typography>
          <Typography variant="h3">With Dynamic Data</Typography>
          <CodeBlock language="jsx">{`// app/api/time/route.js
import { NextResponse } from 'next/server';
export async function GET() {
 return NextResponse.json({
 time: new Date().toISOString(),
 timezone: 'Asia/Phnom_Penh'
 });
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: HTTP Methods</Typography>
          <Typography variant="h3">All Methods in One File</Typography>
          <CodeBlock language="jsx">{`// app/api/products/route.js
import { NextResponse } from 'next/server';
// Simulated database
let products = [
 { id: 1, name: 'Laptop', price: 299 },
 { id: 2, name: 'Mouse', price: 25 },
];
// GET - List all products
export async function GET() {
 return NextResponse.json(products);
}
// POST - Create new product
export async function POST(request) {
 const body = await request.json();
 const newProduct = {
 id: products.length + 1,
 name: body.name,
 price: body.price
 };
 products.push(newProduct);
 return NextResponse.json(newProduct, { status: 201 });
}`}</CodeBlock>
          <Typography variant="h3">Dynamic Route Methods</Typography>
          <CodeBlock language="jsx">{`// app/api/products/[id]/route.js
import { NextResponse } from 'next/server';
// GET single product
export async function GET(request, { params }) {
 const id = parseInt(params.id);
 const product = products.find(p => p.id === id);
 if (!product) {
 return NextResponse.json(
 { error: 'Product not found' },
 { status: 404 }
 );
 }
 return NextResponse.json(product);
}
// PUT - Update product
export async function PUT(request, { params }) {
 const id = parseInt(params.id);
 const body = await request.json();
 const index = products.findIndex(p => p.id === id);
 if (index === -1) {
 return NextResponse.json(
 { error: 'Product not found' },
 { status: 404 }
 );
 }
 products[index] = { ...products[index], ...body };
 return NextResponse.json(products[index]);
}
// DELETE - Remove product
export async function DELETE(request, { params }) {
 const id = parseInt(params.id);
 const index = products.findIndex(p => p.id === id);
 if (index === -1) {
 return NextResponse.json(
 { error: 'Product not found' },
 { status: 404 }
 );
 }
 products.splice(index, 1);
 return NextResponse.json({ success: true });
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Request &amp; Response</Typography>
          <Typography variant="h3">Reading Request Data</Typography>
          <CodeBlock language="jsx">{`export async function POST(request) {
 // JSON body
 const body = await request.json();
 // URL search params
 const { searchParams } = new URL(request.url);
 const query = searchParams.get('q');
 // Headers
 const authHeader = request.headers.get('authorization');
 // Cookies
 const cookies = request.cookies;
 const token = cookies.get('token');
 return NextResponse.json({ body, query, authHeader });
}`}</CodeBlock>
          <Typography variant="h3">Response Options</Typography>
          <CodeBlock language="jsx">{`// JSON response
return NextResponse.json(data);
// With status code
return NextResponse.json(data, { status: 201 });
// With headers
return NextResponse.json(data, {
 headers: {
 'Cache-Control': 'max-age=3600'
 }
});
// Redirect
return NextResponse.redirect(new URL('/login', request.url));
// Error response
return NextResponse.json(
 { error: 'Not Found' },
 { status: 404 }
);`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Database Connection</Typography>
          <Typography variant="h3">Using a JSON File (Simple)</Typography>
          <CodeBlock language="jsx">{`// lib/db.js
import fs from 'fs/promises';
import path from 'path';
const dbPath = path.join(process.cwd(), 'data', 'db.json');
export async function readDB() {
 const data = await fs.readFile(dbPath, 'utf8');
 return JSON.parse(data);
}
export async function writeDB(data) {
 await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}`}</CodeBlock>
          <Typography variant="h3">Using with API Route</Typography>
          <CodeBlock language="jsx">{`// app/api/todos/route.js
import { NextResponse } from 'next/server';
import { readDB, writeDB } from '@/lib/db';
export async function GET() {
 const db = await readDB();
 return NextResponse.json(db.todos);
}
export async function POST(request) {
 const body = await request.json();
 const db = await readDB();
 const newTodo = {
 id: Date.now(),
 text: body.text,
 completed: false
 };
 db.todos.push(newTodo);
 await writeDB(db);
 return NextResponse.json(newTodo, { status: 201 });
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Authentication Example</Typography>
          <Typography variant="h3">Login Endpoint</Typography>
          <CodeBlock language="jsx">{`// app/api/auth/login/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
// In real app, use proper auth library and database
const users = [
 { id: 1, email: 'sokha@example.com', password: 'password123' }
];
export async function POST(request) {
 const { email, password } = await request.json();
 // Find user
 const user = users.find(u => u.email === email && u.password === password);
 if (!user) {
 return NextResponse.json(
 { error: 'Invalid credentials' },
 { status: 401 }
 );
 }
 // Set cookie (in real app, use proper JWT)
 cookies().set('session', user.id.toString(), {
 httpOnly: true,
 secure: process.env.NODE_ENV === 'production',
 maxAge: 60 * 60 * 24 * 7 // 1 week
 });
 return NextResponse.json({
 user: { id: user.id, email: user.email }
 });
}`}</CodeBlock>
          <Typography variant="h3">Protected Route</Typography>
          <CodeBlock language="jsx">{`// app/api/profile/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
export async function GET() {
 const session = cookies().get('session');
 if (!session) {
 return NextResponse.json(
 { error: 'Unauthorized' },
 { status: 401 }
 );
 }
 // Fetch user by session
 // ... 
 return NextResponse.json({ user: { /* user data */ } });
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Complete CRUD Example</Typography>
          <Typography variant="h3">Task Manager API</Typography>
          <CodeBlock language="jsx">{`// data/db.json
{
 "tasks": []
}`}</CodeBlock>
          <CodeBlock language="jsx">{`// app/api/tasks/route.js
import { NextResponse } from 'next/server';
import { readDB, writeDB } from '@/lib/db';
// GET all tasks
export async function GET() {
 try {
 const db = await readDB();
 return NextResponse.json(db.tasks);
 } catch (error) {
 return NextResponse.json(
 { error: 'Failed to fetch tasks' },
 { status: 500 }
 );
 }
}
// POST new task
export async function POST(request) {
 try {
 const body = await request.json();
 if (!body.title) {
 return NextResponse.json(
 { error: 'Title is required' },
 { status: 400 }
 );
 }
 const db = await readDB();
 const newTask = {
 id: Date.now().toString(),
 title: body.title,
 description: body.description || '',
 completed: false,
 createdAt: new Date().toISOString()
 };
 db.tasks.push(newTask);
 await writeDB(db);
 return NextResponse.json(newTask, { status: 201 });
 } catch (error) {
 return NextResponse.json(
 { error: 'Failed to create task' },
 { status: 500 }
 );
 }
}`}</CodeBlock>
          <CodeBlock language="jsx">{`// app/api/tasks/[id]/route.js
import { NextResponse } from 'next/server';
import { readDB, writeDB } from '@/lib/db';
// GET single task
export async function GET(request, { params }) {
 try {
 const db = await readDB();
 const task = db.tasks.find(t => t.id === params.id);
 if (!task) {
 return NextResponse.json(
 { error: 'Task not found' },
 { status: 404 }
 );
 }
 return NextResponse.json(task);
 } catch (error) {
 return NextResponse.json(
 { error: 'Failed to fetch task' },
 { status: 500 }
 );
 }
}
// PUT update task
export async function PUT(request, { params }) {
 try {
 const body = await request.json();
 const db = await readDB();
 const index = db.tasks.findIndex(t => t.id === params.id);
 if (index === -1) {
 return NextResponse.json(
 { error: 'Task not found' },
 { status: 404 }
 );
 }
 db.tasks[index] = {
 ...db.tasks[index],
 ...body,
 updatedAt: new Date().toISOString()
 };
 await writeDB(db);
 return NextResponse.json(db.tasks[index]);
 } catch (error) {
 return NextResponse.json(
 { error: 'Failed to update task' },
 { status: 500 }
 );
 }
}
// DELETE task
export async function DELETE(request, { params }) {
 try {
 const db = await readDB();
 const index = db.tasks.findIndex(t => t.id === params.id);
 if (index === -1) {
 return NextResponse.json(
 { error: 'Task not found' },
 { status: 404 }
 );
 }
 db.tasks.splice(index, 1);
 await writeDB(db);
 return NextResponse.json({ success: true });
 } catch (error) {
 return NextResponse.json(
 { error: 'Failed to delete task' },
 { status: 500 }
 );
 }
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Hello API</Typography>
          <Typography>
            Create a simple /api/hello endpoint.
          </Typography>
          <Typography variant="h3">Exercise 2: CRUD API</Typography>
          <Typography>
            Create a complete CRUD API for a notes app.
          </Typography>
          <Typography variant="h3">Exercise 3: Query Parameters</Typography>
          <Typography>
            Create an endpoint that filters data based on query params.
          </Typography>
          <Typography variant="h3">Exercise 4: Error Handling</Typography>
          <Typography>
            Add proper error handling to your API routes.
          </Typography>
          <Typography variant="h3">Exercise 5: Protected Endpoint</Typography>
          <Typography>
            Create an endpoint that requires authentication.
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
                <TableCell>route.js</TableCell>
                <TableCell>API endpoint file</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>GET, POST, etc.</TableCell>
                <TableCell>Export functions for methods</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>NextResponse.json()</TableCell>
                <TableCell>Return JSON response</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>request.json()</TableCell>
                <TableCell>Read request body</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>params</TableCell>
                <TableCell>URL parameters</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>cookies()</TableCell>
                <TableCell>Access cookies</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 06 - Deployment
          </Typography>
          <Typography>
            You will learn to deploy your Next.js app!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Full-stack development!
          </Typography>
          <Typography>
            Backend and frontend in harmony.
          </Typography>
        </div>
      </section>
    </div>
  );
}
