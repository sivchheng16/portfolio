
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module06ProjectEcommerce() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Project - E-commerce Store</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 07: Next.js &amp; Tailwind</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Overview</Typography>
          <Typography>
            Build a complete E-commerce Store with Next.js and Tailwind CSS!
          </Typography>
          <Typography>
            This is your capstone project for the Web Development track.
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
                <TableCell>Product listing page</TableCell>
                <TableCell>Data fetching, SSG/ISR</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product detail pages</TableCell>
                <TableCell>Dynamic routes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Shopping cart</TableCell>
                <TableCell>State management</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Category filtering</TableCell>
                <TableCell>Server/client components</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Responsive design</TableCell>
                <TableCell>Tailwind CSS</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>API routes</TableCell>
                <TableCell>Backend development</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Deployed on Vercel</TableCell>
                <TableCell>Deployment</TableCell>
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
                <TableCell>Search functionality</TableCell>
                <TableCell>Query handling</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>User authentication</TableCell>
                <TableCell>Auth flow</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Checkout process</TableCell>
                <TableCell>Forms, validation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Order history</TableCell>
                <TableCell>Database</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Admin dashboard</TableCell>
                <TableCell>Protected routes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Project Structure</Typography>
          <CodeBlock language="text">{`ecommerce-store/
├── src/
│ ├── app/
│ │ ├── layout.js
│ │ ├── page.js (Home)
│ │ ├── globals.css
│ │ ├── products/
│ │ │ ├── page.js (Product list)
│ │ │ └── [id]/
│ │ │ └── page.js (Product detail)
│ │ ├── cart/
│ │ │ └── page.js (Cart page)
│ │ └── api/
│ │ ├── products/
│ │ │ └── route.js
│ │ └── cart/
│ │ └── route.js
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── ProductCard.jsx
│ │ ├── CartItem.jsx
│ │ └── CartProvider.jsx
│ └── lib/
│ └── products.js
├── public/
│ └── images/
├── data/
│ └── products.json
└── package.json`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 1: Setup</Typography>
          <CodeBlock language="bash">{`npx create-next-app@latest ecommerce-store
# Select: Tailwind CSS, App Router, src/ directory
cd ecommerce-store
npm run dev`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 2: Product Data</Typography>
          <CodeBlock language="json">{`// data/products.json
{
 "products": [
 {
 "id": "1",
 "name": "KOOMPI E13",
 "description": "Lightweight laptop with 13-inch display, perfect for students and developers.",
 "price": 299,
 "category": "laptops",
 "image": "/images/koompi-e13.jpg",
 "rating": 4.5,
 "inStock": true
 },
 {
 "id": "2",
 "name": "Wireless Mouse",
 "description": "Ergonomic wireless mouse with long battery life.",
 "price": 25,
 "category": "accessories",
 "image": "/images/mouse.jpg",
 "rating": 4.2,
 "inStock": true
 },
 {
 "id": "3",
 "name": "Mechanical Keyboard",
 "description": "RGB mechanical keyboard with blue switches.",
 "price": 65,
 "category": "accessories",
 "image": "/images/keyboard.jpg",
 "rating": 4.7,
 "inStock": true
 },
 {
 "id": "4",
 "name": "USB-C Hub",
 "description": "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader.",
 "price": 45,
 "category": "accessories",
 "image": "/images/usb-hub.jpg",
 "rating": 4.4,
 "inStock": false
 }
 ]
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 3: Cart Context</Typography>
          <CodeBlock language="jsx">{`// src/components/CartProvider.jsx
'use client';
import { createContext, useContext, useState, useEffect } from 'react';
const CartContext = createContext();
export function CartProvider({ children }) {
 const [cart, setCart] = useState([]);
 // Load cart from localStorage
 useEffect(() => {
 const saved = localStorage.getItem('cart');
 if (saved) setCart(JSON.parse(saved));
 }, []);
 // Save cart to localStorage
 useEffect(() => {
 localStorage.setItem('cart', JSON.stringify(cart));
 }, [cart]);
 const addToCart = (product) => {
 setCart(prev => {
 const existing = prev.find(item => item.id === product.id);
 if (existing) {
 return prev.map(item =>
 item.id === product.id
 ? { ...item, quantity: item.quantity + 1 }
 : item
 );
 }
 return [...prev, { ...product, quantity: 1 }];
 });
 };
 const removeFromCart = (productId) => {
 setCart(prev => prev.filter(item => item.id !== productId));
 };
 const updateQuantity = (productId, quantity) => {
 if (quantity <= 0) {
 removeFromCart(productId);
 return;
 }
 setCart(prev =>
 prev.map(item =>
 item.id === productId ? { ...item, quantity } : item
 )
 );
 };
 const clearCart = () => setCart([]);
 const total = cart.reduce(
 (sum, item) => sum + item.price * item.quantity, 0
 );
 const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
 return (
 <CartContext.Provider value={{
 cart,
 addToCart,
 removeFromCart,
 updateQuantity,
 clearCart,
 total,
 itemCount
 }}>
 {children}
 </CartContext.Provider>
 );
}
export const useCart = () => useContext(CartContext);`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 4: Layout</Typography>
          <CodeBlock language="jsx">{`// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/components/CartProvider';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
 title: 'KOOMPI Store',
 description: 'Your one-stop shop for tech products',
};
export default function RootLayout({ children }) {
 return (
 <html lang="en">
 <body className={inter.className}>
 <CartProvider>
 <div className="min-h-screen flex flex-col">
 <Header />
 <main className="flex-1">
 {children}
 </main>
 <Footer />
 </div>
 </CartProvider>
 </body>
 </html>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 5: Header Component</Typography>
          <CodeBlock language="jsx">{`// src/components/Header.jsx
'use client';
import Link from 'next/link';
import { useCart } from './CartProvider';
export default function Header() {
 const { itemCount } = useCart();
 return (
 <header className="bg-white shadow-sm sticky top-0 z-50">
 <div className="max-w-6xl mx-auto px-4">
 <div className="flex justify-between items-center h-16">
 <Link href="/" className="text-2xl font-bold text-blue-600">
 KOOMPI Store
 </Link>
 <nav className="hidden md:flex space-x-8">
 <Link href="/products" className="text-gray-600 hover:text-blue-600">
 Products
 </Link>
 <Link href="/products?category=laptops" className="text-gray-600 hover:text-blue-600">
 Laptops
 </Link>
 <Link href="/products?category=accessories" className="text-gray-600 hover:text-blue-600">
 Accessories
 </Link>
 </nav>
 <Link 
 href="/cart" 
 className="relative bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
 >
 Cart
 {itemCount > 0 && (
 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
 {itemCount}
 </span>
 )}
 </Link>
 </div>
 </div>
 </header>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 6: Product Card</Typography>
          <CodeBlock language="jsx">{`// src/components/ProductCard.jsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartProvider';
export default function ProductCard({ product }) {
 const { addToCart } = useCart();
 return (
 <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
 <Link href={\`/products/\${product.id}\`}>
 <div className="relative h-48 bg-gray-100">
 <Image
 src={product.image}
 alt={product.name}
 fill
 className="object-contain p-4 group-hover:scale-105 transition"
 />
 </div>
 </Link>
 <div className="p-4">
 <div className="flex justify-between items-start mb-2">
 <Link href={\`/products/\${product.id}\`}>
 <h3 className="font-semibold text-lg hover:text-blue-600">
 {product.name}
 </h3>
 </Link>
 <span className="text-yellow-500"> {product.rating}</span>
 </div>
 <p className="text-gray-600 text-sm mb-4 line-clamp-2">
 {product.description}
 </p>
 <div className="flex justify-between items-center">
 <span className="text-2xl font-bold text-blue-600">
 \${product.price}
 </span>
 <button
 onClick={() => addToCart(product)}
 disabled={!product.inStock}
 className={\`px-4 py-2 rounded-lg transition \${
 product.inStock
 ? 'bg-blue-600 text-white hover:bg-blue-700'
 : 'bg-gray-300 text-gray-500 cursor-not-allowed'
 }\`}
 >
 {product.inStock ? 'Add to Cart' : 'Out of Stock'}
 </button>
 </div>
 </div>
 </div>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 7: Products Page</Typography>
          <CodeBlock language="jsx">{`// src/app/products/page.js
import ProductCard from '@/components/ProductCard';
import products from '@/../data/products.json';
export default function ProductsPage({ searchParams }) {
 const category = searchParams?.category;
 const filteredProducts = category
 ? products.products.filter(p => p.category === category)
 : products.products;
 return (
 <div className="max-w-6xl mx-auto px-4 py-8">
 <div className="flex justify-between items-center mb-8">
 <h1 className="text-3xl font-bold">
 {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products'}
 </h1>
 <p className="text-gray-600">{filteredProducts.length} products</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {filteredProducts.map(product => (
 <ProductCard key={product.id} product={product} />
 ))}
 </div>
 </div>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Step 8: Cart Page</Typography>
          <CodeBlock language="jsx">{`// src/app/cart/page.js
'use client';
import { useCart } from '@/components/CartProvider';
import Image from 'next/image';
import Link from 'next/link';
export default function CartPage() {
 const { cart, updateQuantity, removeFromCart, total, clearCart } = useCart();
 if (cart.length === 0) {
 return (
 <div className="max-w-4xl mx-auto px-4 py-16 text-center">
 <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
 <p className="text-gray-600 mb-8">Add some products to get started!</p>
 <Link
 href="/products"
 className="bg-blue-600 text-white px-8 py-3 rounded-lg inline-block hover:bg-blue-700"
 >
 Browse Products
 </Link>
 </div>
 );
 }
 return (
 <div className="max-w-4xl mx-auto px-4 py-8">
 <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
 <div className="space-y-4 mb-8">
 {cart.map(item => (
 <div key={item.id} className="bg-white rounded-lg shadow p-4 flex gap-4">
 <div className="relative w-24 h-24 bg-gray-100 rounded">
 <Image
 src={item.image}
 alt={item.name}
 fill
 className="object-contain p-2"
 />
 </div>
 <div className="flex-1">
 <h3 className="font-semibold">{item.name}</h3>
 <p className="text-blue-600 font-bold">\${item.price}</p>
 </div>
 <div className="flex items-center gap-2">
 <button
 onClick={() => updateQuantity(item.id, item.quantity - 1)}
 className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300"
 >
 -
 </button>
 <span className="w-8 text-center">{item.quantity}</span>
 <button
 onClick={() => updateQuantity(item.id, item.quantity + 1)}
 className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300"
 >
 +
 </button>
 </div>
 <div className="text-right">
 <p className="font-bold">\${item.price * item.quantity}</p>
 <button
 onClick={() => removeFromCart(item.id)}
 className="text-red-500 text-sm hover:underline"
 >
 Remove
 </button>
 </div>
 </div>
 ))}
 </div>
 <div className="bg-white rounded-lg shadow p-6">
 <div className="flex justify-between text-xl font-bold mb-6">
 <span>Total:</span>
 <span className="text-blue-600">\${total.toFixed(2)}</span>
 </div>
 <div className="flex gap-4">
 <button
 onClick={clearCart}
 className="flex-1 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
 >
 Clear Cart
 </button>
 <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
 Checkout
 </button>
 </div>
 </div>
 </div>
 );
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
                <TableCell>Product display works</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cart add/remove works</TableCell>
                <TableCell>15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Filtering works</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Persistence works</TableCell>
                <TableCell>5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Code Quality (25)</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Clean components</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Next.js best practices</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TypeScript (optional)</TableCell>
                <TableCell>5</TableCell>
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
                <TableCell>Deployment (15)</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Deployed to Vercel</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>No errors</TableCell>
                <TableCell>5</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track Complete</Typography>
          <Typography>
            Upon completing this project:
          </Typography>
          <Typography>
            Full-Stack Apprentice Badge earned
Next.js &amp; Tailwind Badge earned
Track 02: Web Development COMPLETE!
Ready for KOOMPI Software Engineer Capstone
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            You built a complete e-commerce store!
          </Typography>
          <Typography>
            Full-stack development unlocked.
          </Typography>
          <Typography>
            You are now a Full-Stack Apprentice!
          </Typography>
        </div>
      </section>
    </div>
  );
}
