
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module05Deployment() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Deployment</Typography>
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
            <li>Deploy to Vercel (recommended)</li>
            <li>Deploy to alternative platforms</li>
            <li>Configure environment variables</li>
            <li>Set up custom domains</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Preparing for Deployment</Typography>
          <Typography variant="h3">Pre-deployment Checklist</Typography>
          <CodeBlock language="text">{`□ Build succeeds locally (npm run build)
□ All tests pass
□ Environment variables documented
□ Images optimized
□ No console errors in production mode
□ SEO metadata configured
□ Error pages customized (404, 500)
□ Performance acceptable`}</CodeBlock>
          <Typography variant="h3">Build Locally First</Typography>
          <CodeBlock language="bash">{`# Build production version
npm run build
# Test production build locally
npm start`}</CodeBlock>
          <Typography>
            Fix any build errors before deploying.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Deploy to Vercel</Typography>
          <Typography variant="h3">Why Vercel?</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Created by Next.js team</li>
            <li>Zero configuration</li>
            <li>Automatic CI/CD</li>
            <li>Free tier available</li>
            <li>Edge network</li>
            <li>Analytics</li>
          </ul>
          <Typography variant="h3">Method 1: GitHub Integration</Typography>
          <CodeBlock language="bash">{`# 1. Push your code to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/my-app.git
git push -u origin main`}</CodeBlock>
          <Typography>
            Then:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Go to vercel.com</li>
            <li>Sign up with GitHub</li>
            <li>Click &quot;Import Project&quot;</li>
            <li>Select your repository</li>
            <li>Click &quot;Deploy&quot;</li>
          </ul>
          <Typography variant="h3">Method 2: Vercel CLI</Typography>
          <CodeBlock language="bash">{`# Install Vercel CLI
npm i -g vercel
# Login
vercel login
# Deploy
vercel
# Follow the prompts`}</CodeBlock>
          <Typography variant="h3">Automatic Deployments</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Every push to main → Production deploy</li>
            <li>Every push to other branches → Preview deploy</li>
            <li>Each PR gets its own preview URL</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Environment Variables</Typography>
          <Typography variant="h3">Local Development</Typography>
          <CodeBlock language="bash">{`# .env.local (DO NOT commit this file)
DATABASE_URL=mongodb://localhost:27017/myapp
API_KEY=your-secret-key
NEXT_PUBLIC_API_URL=http://localhost:3000/api`}</CodeBlock>
          <Typography variant="h3">Naming Convention</Typography>
          <CodeBlock language="text">{`NEXT_PUBLIC_* → Available in browser (be careful!)
Other → Server-only (secure)`}</CodeBlock>
          <Typography variant="h3">In Vercel Dashboard</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Go to your project</li>
            <li>Settings → Environment Variables</li>
            <li>Add each variable</li>
            <li>Choose environments (Production, Preview, Development)</li>
          </ul>
          <Typography variant="h3">Using Environment Variables</Typography>
          <CodeBlock language="jsx">{`// Server-side (API routes, Server Components)
const dbUrl = process.env.DATABASE_URL;
// Client-side (only NEXT_PUBLIC_ prefix)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Alternative Platforms</Typography>
          <Typography variant="h3">Netlify</Typography>
          <CodeBlock language="bash">{`# Install Netlify CLI
npm i -g netlify-cli
# Login
netlify login
# Deploy
netlify deploy --prod`}</CodeBlock>
          <Typography>
            Create netlify.toml:
          </Typography>
          <CodeBlock language="toml">{`[build]
 command = "npm run build"
 publish = ".next"
[[plugins]]
 package = "@netlify/plugin-nextjs"`}</CodeBlock>
          <Typography variant="h3">Railway</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Go to railway.app</li>
            <li>Connect GitHub</li>
            <li>Select repository</li>
            <li>Railway auto-detects Next.js</li>
          </ul>
          <Typography variant="h3">Docker</Typography>
          <CodeBlock language="dockerfile">{`# Dockerfile
FROM node:18-alpine AS base
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]`}</CodeBlock>
          <CodeBlock language="bash">{`docker build -t my-app .
docker run -p 3000:3000 my-app`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Custom Domain</Typography>
          <Typography variant="h3">In Vercel</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Go to project Settings → Domains</li>
            <li>Add your domain (e.g., myapp.com)</li>
            <li>Add DNS records at your registrar:</li>
          </ul>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>A record: 76.76.21.21</li>
            <li>CNAME for www: cname.vercel-dns.com</li>
          </ul>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Wait for SSL certificate (automatic)</li>
          </ul>
          <Typography variant="h3">With Subdomain</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>app.yourdomain.com → Your Next.js app</li>
            <li>CNAME record pointing to cname.vercel-dns.com</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Optimization</Typography>
          <Typography variant="h3">Image Optimization</Typography>
          <CodeBlock language="jsx">{`import Image from 'next/image';
export default function Hero() {
 return (
 <Image
 src="/hero.jpg"
 alt="Hero image"
 width={1200}
 height={600}
 priority // Load immediately
 placeholder="blur" // Show blur while loading
 blurDataURL="..." // Base64 blur image
 />
 );
}`}</CodeBlock>
          <Typography variant="h3">Font Optimization</Typography>
          <CodeBlock language="jsx">{`// app/layout.js
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({ children }) {
 return (
 <html lang="en" className={inter.className}>
 <body>{children}</body>
 </html>
 );
}`}</CodeBlock>
          <Typography variant="h3">Bundle Analysis</Typography>
          <CodeBlock language="bash">{`# Install analyzer
npm install @next/bundle-analyzer
# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
 enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
 // your config
});
# Run analysis
ANALYZE=true npm run build`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Monitoring &amp; Analytics</Typography>
          <Typography variant="h3">Vercel Analytics</Typography>
          <CodeBlock language="jsx">{`// app/layout.js
import { Analytics } from '@vercel/analytics/react';
export default function RootLayout({ children }) {
 return (
 <html lang="en">
 <body>
 {children}
 <Analytics />
 </body>
 </html>
 );
}`}</CodeBlock>
          <Typography variant="h3">Vercel Speed Insights</Typography>
          <CodeBlock language="jsx">{`import { SpeedInsights } from '@vercel/speed-insights/next';
export default function RootLayout({ children }) {
 return (
 <html lang="en">
 <body>
 {children}
 <SpeedInsights />
 </body>
 </html>
 );
}`}</CodeBlock>
          <Typography variant="h3">Error Monitoring</Typography>
          <Typography>
            Consider services like:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Sentry</li>
            <li>LogRocket</li>
            <li>Bugsnag</li>
          </ul>
          <CodeBlock language="bash">{`npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Local Build</Typography>
          <Typography>
            Run npm run build and fix any errors.
          </Typography>
          <Typography variant="h3">Exercise 2: Deploy to Vercel</Typography>
          <Typography>
            Deploy your Next.js app to Vercel via GitHub.
          </Typography>
          <Typography variant="h3">Exercise 3: Environment Variables</Typography>
          <Typography>
            Set up environment variables in Vercel.
          </Typography>
          <Typography variant="h3">Exercise 4: Custom Domain</Typography>
          <Typography>
            Configure a custom domain (or subdomain).
          </Typography>
          <Typography variant="h3">Exercise 5: Analytics</Typography>
          <Typography>
            Add Vercel Analytics to your app.
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Summary</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Topic</TableHead>
                <TableHead>Key Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Vercel</TableCell>
                <TableCell>Best for Next.js, zero config</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Env Vars</TableCell>
                <TableCell>NEXT_PUBLIC_ for client</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Domains</TableCell>
                <TableCell>Add in Vercel, configure DNS</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Optimization</TableCell>
                <TableCell>Images, fonts, bundles</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Monitoring</TableCell>
                <TableCell>Analytics, Speed Insights</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Deployment Commands:
          </Typography>
          <CodeBlock language="bash">{`npm run build # Build locally
vercel # Deploy to Vercel
vercel --prod # Deploy to production`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 07 - Project: E-commerce Store
          </Typography>
          <Typography>
            You will build a complete full-stack application!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Your app is live!
          </Typography>
          <Typography>
            From localhost to the world.
          </Typography>
        </div>
      </section>
    </div>
  );
}
