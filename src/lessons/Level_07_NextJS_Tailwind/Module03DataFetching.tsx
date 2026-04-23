
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module03DataFetching() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Data Fetching in Next.js</Typography>
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
            <li>Fetch data in Server Components</li>
            <li>Understand SSR, SSG, and ISR</li>
            <li>Handle loading and error states</li>
            <li>Cache and revalidate data</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Data Fetching Basics</Typography>
          <Typography variant="h3">Server Components Can Fetch Directly</Typography>
          <CodeBlock language="jsx">{`// app/products/page.js
// This is a Server Component - can use async/await directly!
async function getProducts() {
 const res = await fetch('https://api.example.com/products');
 if (!res.ok) {
 throw new Error('Failed to fetch products');
 }
 return res.json();
}
export default async function ProductsPage() {
 const products = await getProducts();
 return (
 <div>
 <h1>Products</h1>
 <ul>
 {products.map(product => (
 <li key={product.id}>{product.name}</li>
 ))}
 </ul>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Benefits of Server Fetching</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Benefit</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>No client JS</TableCell>
                <TableCell>Data fetched before HTML sent</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Secure</TableCell>
                <TableCell>API keys stay on server</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fast</TableCell>
                <TableCell>Closer to data source</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SEO</TableCell>
                <TableCell>Content in initial HTML</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Rendering Strategies</Typography>
          <Typography variant="h3">Static Generation (SSG)</Typography>
          <Typography>
            Default behavior - generated at build time:
          </Typography>
          <CodeBlock language="jsx">{`// Fetched at build time, cached indefinitely
async function getData() {
 const res = await fetch('https://api.example.com/data');
 return res.json();
}`}</CodeBlock>
          <Typography variant="h3">Server-Side Rendering (SSR)</Typography>
          <Typography>
            Fetch fresh data on every request:
          </Typography>
          <CodeBlock language="jsx">{`// Fetched on every request
async function getData() {
 const res = await fetch('https://api.example.com/data', {
 cache: 'no-store' // Don't cache
 });
 return res.json();
}`}</CodeBlock>
          <Typography variant="h3">Incremental Static Regeneration (ISR)</Typography>
          <Typography>
            Revalidate after a time period:
          </Typography>
          <CodeBlock language="jsx">{`// Revalidate every 60 seconds
async function getData() {
 const res = await fetch('https://api.example.com/data', {
 next: { revalidate: 60 } // Revalidate every 60 seconds
 });
 return res.json();
}`}</CodeBlock>
          <Typography variant="h3">Comparison</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Strategy</TableHead>
                <TableHead>When to Use</TableHead>
                <TableHead>Cache</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>SSG</TableCell>
                <TableCell>Data rarely changes</TableCell>
                <TableCell>Forever (until rebuild)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ISR</TableCell>
                <TableCell>Data changes periodically</TableCell>
                <TableCell>Revalidate after time</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SSR</TableCell>
                <TableCell>Data changes frequently</TableCell>
                <TableCell>No cache</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Dynamic Routes with Data</Typography>
          <Typography variant="h3">Fetching by Parameter</Typography>
          <CodeBlock language="jsx">{`// app/products/[id]/page.js
async function getProduct(id) {
 const res = await fetch(\`https://api.example.com/products/\${id}\`);
 if (!res.ok) {
 throw new Error('Product not found');
 }
 return res.json();
}
export default async function ProductPage({ params }) {
 const product = await getProduct(params.id);
 return (
 <div>
 <h1>{product.name}</h1>
 <p>{product.description}</p>
 <p className="text-2xl font-bold">\${product.price}</p>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Generate Static Params</Typography>
          <Typography>
            Pre-generate pages for known IDs:
          </Typography>
          <CodeBlock language="jsx">{`// app/products/[id]/page.js
export async function generateStaticParams() {
 const products = await fetch('https://api.example.com/products')
 .then(res => res.json());
 return products.map(product => ({
 id: product.id.toString()
 }));
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Loading States</Typography>
          <Typography variant="h3">loading.js File</Typography>
          <CodeBlock language="jsx">{`// app/products/loading.js
export default function Loading() {
 return (
 <div className="flex justify-center items-center min-h-screen">
 <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Skeleton Loading</Typography>
          <CodeBlock language="jsx">{`// app/products/loading.js
export default function Loading() {
 return (
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {[1, 2, 3, 4, 5, 6].map(i => (
 <div key={i} className="bg-white rounded-lg p-4 animate-pulse">
 <div className="bg-gray-300 h-48 rounded mb-4"></div>
 <div className="bg-gray-300 h-6 rounded mb-2"></div>
 <div className="bg-gray-300 h-4 rounded w-2/3"></div>
 </div>
 ))}
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Suspense for Specific Components</Typography>
          <CodeBlock language="jsx">{`import { Suspense } from 'react';
export default function Page() {
 return (
 <div>
 <h1>Dashboard</h1>
 <Suspense fallback={<StatsLoading />}>
 <Stats />
 </Suspense>
 <Suspense fallback={<ChartLoading />}>
 <Chart />
 </Suspense>
 </div>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Error Handling</Typography>
          <Typography variant="h3">error.js File</Typography>
          <CodeBlock language="jsx">{`'use client'; // Error components must be Client Components
// app/products/error.js
export default function Error({ error, reset }) {
 return (
 <div className="text-center py-10">
 <h2 className="text-2xl font-bold text-red-600 mb-4">
 Something went wrong!
 </h2>
 <p className="text-gray-600 mb-4">{error.message}</p>
 <button
 onClick={() => reset()}
 className="bg-blue-600 text-white px-6 py-2 rounded-lg"
 >
 Try again
 </button>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Not Found</Typography>
          <CodeBlock language="jsx">{`// app/products/[id]/not-found.js
import Link from 'next/link';
export default function NotFound() {
 return (
 <div className="text-center py-20">
 <h1 className="text-4xl font-bold mb-4">404</h1>
 <p className="text-gray-600 mb-8">Product not found</p>
 <Link 
 href="/products"
 className="bg-blue-600 text-white px-6 py-2 rounded-lg"
 >
 Back to Products
 </Link>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Using notFound()</Typography>
          <CodeBlock language="jsx">{`import { notFound } from 'next/navigation';
async function getProduct(id) {
 const res = await fetch(\`https://api.example.com/products/\${id}\`);
 if (!res.ok) {
 notFound(); // Triggers not-found.js
 }
 return res.json();
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Practical Example</Typography>
          <Typography variant="h3">Product Listing Page</Typography>
          <CodeBlock language="jsx">{`// app/products/page.js
import Link from 'next/link';
import Image from 'next/image';
async function getProducts() {
 const res = await fetch('https://fakestoreapi.com/products', {
 next: { revalidate: 3600 } // Revalidate every hour
 });
 return res.json();
}
export default async function ProductsPage() {
 const products = await getProducts();
 return (
 <div className="max-w-6xl mx-auto px-4 py-8">
 <h1 className="text-3xl font-bold mb-8">Our Products</h1>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {products.map(product => (
 <Link 
 key={product.id}
 href={\`/products/\${product.id}\`}
 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
 >
 <div className="relative h-48">
 <Image
 src={product.image}
 alt={product.title}
 fill
 className="object-contain p-4"
 />
 </div>
 <div className="p-4">
 <h2 className="font-semibold mb-2 line-clamp-1">
 {product.title}
 </h2>
 <p className="text-xl font-bold text-blue-600">
 \${product.price}
 </p>
 </div>
 </Link>
 ))}
 </div>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Product Detail Page</Typography>
          <CodeBlock language="jsx">{`// app/products/[id]/page.js
import Image from 'next/image';
import { notFound } from 'next/navigation';
async function getProduct(id) {
 const res = await fetch(\`https://fakestoreapi.com/products/\${id}\`);
 if (!res.ok) {
 notFound();
 }
 return res.json();
}
export default async function ProductPage({ params }) {
 const product = await getProduct(params.id);
 return (
 <div className="max-w-4xl mx-auto px-4 py-8">
 <div className="grid md:grid-cols-2 gap-8">
 <div className="relative h-96">
 <Image
 src={product.image}
 alt={product.title}
 fill
 className="object-contain"
 />
 </div>
 <div>
 <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
 <p className="text-gray-600 mb-4">{product.description}</p>
 <p className="text-3xl font-bold text-blue-600 mb-6">
 \${product.price}
 </p>
 <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
 Add to Cart
 </button>
 </div>
 </div>
 </div>
 );
}
export async function generateStaticParams() {
 const products = await fetch('https://fakestoreapi.com/products')
 .then(res => res.json());
 return products.map(product => ({
 id: product.id.toString()
 }));
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Metadata for SEO</Typography>
          <Typography variant="h3">Static Metadata</Typography>
          <CodeBlock language="jsx">{`// app/products/page.js
export const metadata = {
 title: 'Products | My Store',
 description: 'Browse our collection of products',
};`}</CodeBlock>
          <Typography variant="h3">Dynamic Metadata</Typography>
          <CodeBlock language="jsx">{`// app/products/[id]/page.js
export async function generateMetadata({ params }) {
 const product = await getProduct(params.id);
 return {
 title: \`\${product.title} | My Store\`,
 description: product.description,
 openGraph: {
 images: [product.image],
 },
 };
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Basic Fetch</Typography>
          <Typography>
            Create a page that fetches and displays a list of posts.
          </Typography>
          <Typography variant="h3">Exercise 2: Dynamic Route</Typography>
          <Typography>
            Create a post detail page with dynamic routing.
          </Typography>
          <Typography variant="h3">Exercise 3: Loading State</Typography>
          <Typography>
            Add a skeleton loading state for the posts page.
          </Typography>
          <Typography variant="h3">Exercise 4: Error Handling</Typography>
          <Typography>
            Add error handling with a custom error component.
          </Typography>
          <Typography variant="h3">Exercise 5: Metadata</Typography>
          <Typography>
            Add appropriate SEO metadata to your pages.
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
                <TableCell>Server Components</TableCell>
                <TableCell>Fetch data directly, no client JS</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SSG</TableCell>
                <TableCell>Static, built at compile time</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SSR</TableCell>
                <TableCell>Fresh data every request</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ISR</TableCell>
                <TableCell>Revalidate periodically</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>loading.js</TableCell>
                <TableCell>Loading UI</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>error.js</TableCell>
                <TableCell>Error boundary</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>notFound()</TableCell>
                <TableCell>Trigger 404 page</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 05 - API Routes
          </Typography>
          <Typography>
            You will learn to build backend endpoints!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Data powers your app!
          </Typography>
          <Typography>
            Fetch smart, render fast.
          </Typography>
        </div>
      </section>
    </div>
  );
}
