import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Introduction() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Introduction: Next.js &amp; Tailwind</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 07: Next.js &amp; Tailwind</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Level Overview</Typography>
          <Typography>
            Learn production-ready technologies! Next.js is a React framework for building full-stack applications, and Tailwind CSS is a utility-first CSS framework.
          </Typography>
          <Typography>
            Duration: 4-6 weeks
          </Typography>
          <Typography>
            Modules in this Level:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Introduction to Next.js</li>
            <li>Tailwind CSS Fundamentals</li>
            <li>Routing &amp; Navigation</li>
            <li>Data Fetching</li>
            <li>API Routes</li>
            <li>Project: Full-Stack Application</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Prerequisites</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Completed React Fundamentals</li>
            <li>Git &amp; GitHub proficiency</li>
            <li>Understanding of APIs</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Why Next.js + Tailwind?</Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────────────────────┐
│ NEXT.JS + TAILWIND CSS │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ NEXT.JS BENEFITS TAILWIND BENEFITS │
│ ════════════════ ═════════════════ │
│ │
│ File-based routing Rapid styling │
│ Server-side rendering No CSS files to manage │
│ API routes built-in Consistent design system │
│ Automatic optimization Responsive made easy │
│ Easy deployment Highly customizable │
│ │
│ USED BY │
│ ═══════ │
│ Netflix, TikTok, Nike, Hulu, Twitch, The Washington Post │
│ │
│ PERFECT FOR │
│ ═══════════ │
│ Production apps, E-commerce, Dashboards, SaaS products │
│ │
└─────────────────────────────────────────────────────────────────────────────┘`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">What You&apos;ll Build</Typography>
          <Typography>
            A Full-Stack E-commerce Product Catalog:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>KOOMPI SHOP [Products] [About] [Cart (3)]</li>
            <li>HERO: Discover Amazing Tech Products</li>
            <li>[Shop Now]</li>
            <li>Featured Products</li>
            <li>[Image] [Image] [Image] [Image]</li>
            <li>KOOMPI E13 USB-C Hub Webcam Keyboard</li>
            <li>$299 $45 $65 $55</li>
            <li>[Add Cart] [Add Cart] [Add Cart] [Add Cart]</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Index</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Module</TableHead>
                <TableHead>Topic</TableHead>
                <TableHead>Key Concepts</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>01</TableCell>
                <TableCell>Introduction</TableCell>
                <TableCell>Level overview, objectives, and prerequisites</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>02</TableCell>
                <TableCell>Introduction to Next.js</TableCell>
                <TableCell>App router, SSR, SSG</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>03</TableCell>
                <TableCell>Tailwind CSS</TableCell>
                <TableCell>Utility-first styling</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>04</TableCell>
                <TableCell>Data Fetching</TableCell>
                <TableCell>Server components, API calls</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>05</TableCell>
                <TableCell>API Routes</TableCell>
                <TableCell>Backend endpoints in Next.js</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>06</TableCell>
                <TableCell>Deployment</TableCell>
                <TableCell>Vercel, CI/CD</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>07</TableCell>
                <TableCell>Project</TableCell>
                <TableCell>Full-stack E-commerce store</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Code Preview</Typography>
          <Typography variant="h3">Next.js Page</Typography>
          <CodeBlock language="jsx">{`// app/products/page.jsx
import ProductCard from '@/components/ProductCard';
async function getProducts() {
 const res = await fetch('https://api.example.com/products');
 return res.json();
}
export default async function ProductsPage() {
 const products = await getProducts();
 return (
 <div className="container mx-auto px-4 py-8">
 <h1 className="text-3xl font-bold mb-8">Our Products</h1>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {products.map(product => (
 <ProductCard key={product.id} product={product} />
 ))}
 </div>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Tailwind Component</Typography>
          <CodeBlock language="jsx">{`function ProductCard({ product }) {
 return (
 <div className="bg-white rounded-lg shadow-md overflow-hidden 
 hover:shadow-xl transition-shadow duration-300">
 <img 
 src={product.image} 
 alt={product.name}
 className="w-full h-48 object-cover"
 />
 <div className="p-4">
 <h3 className="text-lg font-semibold mb-2">
 {product.name}
 </h3>
 <p className="text-gray-600 mb-4">
 \${product.price}
 </p>
 <button className="w-full bg-blue-600 text-white py-2 
 rounded-lg hover:bg-blue-700 
 transition-colors">
 Add to Cart
 </button>
 </div>
 </div>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Setup</Typography>
          <CodeBlock language="bash">{`# Create Next.js app with Tailwind
npx create-next-app@latest my-shop
# Select: Yes to Tailwind CSS
# Select: Yes to App Router
cd my-shop
npm run dev`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track Completion</Typography>
          <Typography>
            To complete Track 07:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>All 6 modules studied</li>
            <li>Next.js routing mastered</li>
            <li>Tailwind CSS proficiency</li>
            <li>API routes working</li>
            <li>Full-stack project deployed</li>
            <li>Next.js &amp; Tailwind Badge earned</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track Complete</Typography>
          <Typography>
            After completing Track 07, you have finished Track 07: Next.js &amp; Tailwind!
          </Typography>
          <Typography>
            You are now a Full-Stack Apprentice with skills in:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>HTML, CSS, JavaScript</li>
            <li>React &amp; Next.js</li>
            <li>Git &amp; GitHub</li>
            <li>API Development</li>
            <li>Deployment</li>
          </ul>
          <Typography>
            Ready for your Capstone Project!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Production-ready skills!
          </Typography>
          <Typography>
            You can now build real-world applications.
          </Typography>
        </div>
      </section>
    </div>
  );
}
