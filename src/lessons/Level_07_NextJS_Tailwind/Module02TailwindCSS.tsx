
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module02TailwindCSS() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Tailwind CSS Fundamentals</Typography>
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
            <li>Understand utility-first CSS</li>
            <li>Use Tailwind classes effectively</li>
            <li>Build responsive designs</li>
            <li>Customize Tailwind configuration</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What is Tailwind CSS?</Typography>
          <Typography variant="h3">Utility-First CSS</Typography>
          <CodeBlock language="text">{`┌─────────────────────────────────────────────────────────────────────────────┐
│ TRADITIONAL CSS vs TAILWIND │
├─────────────────────────────────────────────────────────────────────────────┤
│ │
│ TRADITIONAL CSS: TAILWIND CSS: │
│ ════════════════ ═══════════════ │
│ │
│ .card { <div class="bg-white │
│ background: white; rounded-lg │
│ border-radius: 8px; shadow-md │
│ box-shadow: 0 2px 4px rgba(); p-6"> │
│ padding: 24px; Content │
│ } </div> │
│ │
│ <div class="card"> No CSS file needed! │
│ Content Styles right in HTML │
│ </div> │
│ │
│ + Separate files + Rapid development │
│ + Reusable classes + No naming struggles │
│ - Naming is hard + Consistent design │
│ - Growing CSS files - Long class lists │
│ │
└─────────────────────────────────────────────────────────────────────────────┘`}</CodeBlock>
          <Typography variant="h3">Why Tailwind?</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Benefit</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Speed</TableCell>
                <TableCell>Style without leaving HTML</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Consistency</TableCell>
                <TableCell>Pre-defined design system</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>No Dead CSS</TableCell>
                <TableCell>Only used classes in bundle</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Responsive</TableCell>
                <TableCell>Built-in breakpoints</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Customizable</TableCell>
                <TableCell>Extend or modify anything</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Core Concepts</Typography>
          <Typography variant="h3">Spacing</Typography>
          <CodeBlock language="html">{`<!-- Padding -->
<div class="p-4">All sides padding</div>
<div class="px-4">Horizontal padding</div>
<div class="py-4">Vertical padding</div>
<div class="pt-4">Top padding</div>
<div class="pb-4">Bottom padding</div>
<div class="pl-4">Left padding</div>
<div class="pr-4">Right padding</div>
<!-- Margin (same pattern) -->
<div class="m-4">All sides margin</div>
<div class="mx-auto">Center horizontally</div>
<div class="mt-8">Top margin</div>`}</CodeBlock>
          <Typography>
            Spacing Scale:
          </Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Class</TableHead>
                <TableHead>Size</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>0.25rem (4px)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>0.5rem (8px)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>1rem (16px)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6</TableCell>
                <TableCell>1.5rem (24px)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>8</TableCell>
                <TableCell>2rem (32px)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>12</TableCell>
                <TableCell>3rem (48px)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>16</TableCell>
                <TableCell>4rem (64px)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Sizing</Typography>
          <CodeBlock language="html">{`<!-- Width -->
<div class="w-full">100% width</div>
<div class="w-1/2">50% width</div>
<div class="w-64">256px width</div>
<div class="w-screen">100vw</div>
<!-- Height -->
<div class="h-screen">100vh</div>
<div class="h-full">100% height</div>
<div class="min-h-screen">Min 100vh</div>
<!-- Max width -->
<div class="max-w-md">Max 28rem</div>
<div class="max-w-4xl">Max 56rem</div>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Colors</Typography>
          <Typography variant="h3">Text Colors</Typography>
          <CodeBlock language="html">{`<p class="text-black">Black text</p>
<p class="text-white">White text</p>
<p class="text-gray-500">Gray text</p>
<p class="text-red-500">Red text</p>
<p class="text-blue-600">Blue text</p>
<p class="text-green-500">Green text</p>`}</CodeBlock>
          <Typography variant="h3">Background Colors</Typography>
          <CodeBlock language="html">{`<div class="bg-white">White background</div>
<div class="bg-gray-100">Light gray</div>
<div class="bg-blue-500">Blue background</div>
<div class="bg-gradient-to-r from-blue-500 to-purple-500">Gradient</div>`}</CodeBlock>
          <Typography variant="h3">Color Scale</Typography>
          <Typography>
            Each color has shades from 50-950:
          </Typography>
          <CodeBlock language="html">{`<div class="bg-blue-50">Lightest</div>
<div class="bg-blue-100">...</div>
<div class="bg-blue-500">Medium</div>
<div class="bg-blue-900">Dark</div>
<div class="bg-blue-950">Darkest</div>`}</CodeBlock>
          <Typography variant="h3">Opacity</Typography>
          <CodeBlock language="html">{`<div class="bg-black/50">50% opacity black</div>
<div class="text-white/75">75% opacity white text</div>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Typography</Typography>
          <Typography variant="h3">Font Size</Typography>
          <CodeBlock language="html">{`<p class="text-xs">Extra small</p>
<p class="text-sm">Small</p>
<p class="text-base">Base (16px)</p>
<p class="text-lg">Large</p>
<p class="text-xl">Extra large</p>
<p class="text-2xl">2x large</p>
<p class="text-4xl">4x large</p>`}</CodeBlock>
          <Typography variant="h3">Font Weight</Typography>
          <CodeBlock language="html">{`<p class="font-thin">Thin</p>
<p class="font-normal">Normal</p>
<p class="font-medium">Medium</p>
<p class="font-semibold">Semibold</p>
<p class="font-bold">Bold</p>`}</CodeBlock>
          <Typography variant="h3">Text Alignment &amp; Decoration</Typography>
          <CodeBlock language="html">{`<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
<p class="underline">Underlined</p>
<p class="line-through">Strikethrough</p>
<p class="uppercase">UPPERCASE</p>
<p class="capitalize">Capitalize Each Word</p>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Layout with Flexbox &amp; Grid</Typography>
          <Typography variant="h3">Flexbox</Typography>
          <CodeBlock language="html">{`<!-- Basic flex container -->
<div class="flex">
 <div>Item 1</div>
 <div>Item 2</div>
</div>
<!-- Direction -->
<div class="flex flex-col">Vertical</div>
<div class="flex flex-row">Horizontal (default)</div>
<!-- Justify (main axis) -->
<div class="flex justify-start">Start</div>
<div class="flex justify-center">Center</div>
<div class="flex justify-end">End</div>
<div class="flex justify-between">Space between</div>
<div class="flex justify-around">Space around</div>
<!-- Align (cross axis) -->
<div class="flex items-start">Top</div>
<div class="flex items-center">Center</div>
<div class="flex items-end">Bottom</div>
<!-- Gap -->
<div class="flex gap-4">Gap between items</div>
<!-- Wrap -->
<div class="flex flex-wrap">Wrap items</div>`}</CodeBlock>
          <Typography variant="h3">Grid</Typography>
          <CodeBlock language="html">{`<!-- Basic grid -->
<div class="grid grid-cols-3 gap-4">
 <div>1</div>
 <div>2</div>
 <div>3</div>
</div>
<!-- Responsive columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
 <!-- 1 col on mobile, 2 on tablet, 4 on desktop -->
</div>
<!-- Column span -->
<div class="grid grid-cols-4">
 <div class="col-span-2">Spans 2 columns</div>
 <div>Normal</div>
 <div>Normal</div>
</div>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Responsive Design</Typography>
          <Typography variant="h3">Breakpoints</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prefix</TableHead>
                <TableHead>Min-width</TableHead>
                <TableHead>CSS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>sm:</TableCell>
                <TableCell>640px</TableCell>
                <TableCell>@media (min-width: 640px)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>md:</TableCell>
                <TableCell>768px</TableCell>
                <TableCell>@media (min-width: 768px)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>lg:</TableCell>
                <TableCell>1024px</TableCell>
                <TableCell>@media (min-width: 1024px)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>xl:</TableCell>
                <TableCell>1280px</TableCell>
                <TableCell>@media (min-width: 1280px)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2xl:</TableCell>
                <TableCell>1536px</TableCell>
                <TableCell>@media (min-width: 1536px)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">Mobile-First Approach</Typography>
          <CodeBlock language="html">{`<!-- Mobile first, then add larger screen styles -->
<div class="
 text-sm /* Mobile: small text */
 md:text-base /* Tablet: base text */
 lg:text-lg /* Desktop: large text */
">
 Responsive text
</div>
<div class="
 flex flex-col /* Mobile: stack vertically */
 md:flex-row /* Tablet+: side by side */
">
 <div>Sidebar</div>
 <div>Content</div>
</div>
<div class="
 p-4 /* Mobile: small padding */
 md:p-8 /* Tablet: medium padding */
 lg:p-12 /* Desktop: large padding */
">
 Responsive padding
</div>`}</CodeBlock>
          <Typography variant="h3">Hide/Show at Breakpoints</Typography>
          <CodeBlock language="html">{`<div class="hidden md:block">
 Only visible on tablet and up
</div>
<div class="block md:hidden">
 Only visible on mobile
</div>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Common Components</Typography>
          <Typography variant="h3">Card Component</Typography>
          <CodeBlock language="html">{`<div class="bg-white rounded-lg shadow-md overflow-hidden">
 <img src="/image.jpg" alt="Product" class="w-full h-48 object-cover" />
 <div class="p-6">
 <h3 class="text-xl font-semibold mb-2">Product Name</h3>
 <p class="text-gray-600 mb-4">Product description goes here.</p>
 <div class="flex justify-between items-center">
 <span class="text-2xl font-bold text-blue-600">\$99</span>
 <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
 Add to Cart
 </button>
 </div>
 </div>
</div>`}</CodeBlock>
          <Typography variant="h3">Button Variants</Typography>
          <CodeBlock language="html">{`<!-- Primary -->
<button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
 Primary
</button>
<!-- Secondary -->
<button class="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition">
 Secondary
</button>
<!-- Outline -->
<button class="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
 Outline
</button>
<!-- Danger -->
<button class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
 Danger
</button>`}</CodeBlock>
          <Typography variant="h3">Navigation Bar</Typography>
          <CodeBlock language="html">{`<nav class="bg-white shadow-md">
 <div class="max-w-6xl mx-auto px-4">
 <div class="flex justify-between items-center h-16">
 <!-- Logo -->
 <a href="/" class="text-xl font-bold text-blue-600">
 KOOMPI
 </a>
 <!-- Desktop Nav -->
 <div class="hidden md:flex space-x-8">
 <a href="/" class="text-gray-600 hover:text-blue-600">Home</a>
 <a href="/products" class="text-gray-600 hover:text-blue-600">Products</a>
 <a href="/about" class="text-gray-600 hover:text-blue-600">About</a>
 <a href="/contact" class="text-gray-600 hover:text-blue-600">Contact</a>
 </div>
 <!-- Mobile menu button -->
 <button class="md:hidden">
 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
 </svg>
 </button>
 </div>
 </div>
</nav>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Button Styles</Typography>
          <Typography>
            Create 4 different button styles using Tailwind.
          </Typography>
          <Typography variant="h3">Exercise 2: Responsive Grid</Typography>
          <Typography>
            Create a grid that&apos;s 1 column on mobile, 2 on tablet, 4 on desktop.
          </Typography>
          <Typography variant="h3">Exercise 3: Card Component</Typography>
          <Typography>
            Build a product card with image, title, description, price, and button.
          </Typography>
          <Typography variant="h3">Exercise 4: Navigation</Typography>
          <Typography>
            Create a responsive navigation bar.
          </Typography>
          <Typography variant="h3">Exercise 5: Hero Section</Typography>
          <Typography>
            Build a full-width hero section with centered text and call-to-action.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Common Classes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Spacing</TableCell>
                <TableCell>p-4, m-4, px-6, my-8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Colors</TableCell>
                <TableCell>text-blue-600, bg-gray-100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Typography</TableCell>
                <TableCell>text-xl, font-bold</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Layout</TableCell>
                <TableCell>flex, grid, justify-center</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Responsive</TableCell>
                <TableCell>md:flex, lg:grid-cols-4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Effects</TableCell>
                <TableCell>shadow-md, rounded-lg, hover:</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 04 - Data Fetching
          </Typography>
          <Typography>
            You will learn to fetch and display data in Next.js!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Style at the speed of thought!
          </Typography>
          <Typography>
            Utility classes = rapid development
          </Typography>
        </div>
      </section>
    </div>
  );
}
