
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module02ComponentsProps() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Components &amp; Props</Typography>
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
            <li>Understand the component hierarchy</li>
            <li>Pass data with props</li>
            <li>Use destructuring for props</li>
            <li>Create reusable components</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Understanding Props</Typography>
          <Typography variant="h3">What Are Props?</Typography>
          <Typography>
            Props = Properties. Data passed from parent to child component.
          </Typography>
          <CodeBlock language="jsx">{`// Parent passes data
<Greeting name="Sokha" age={22} />
// Child receives data
function Greeting(props) {
 return <h1>Hello, {props.name}! You are {props.age}.</h1>;
}`}</CodeBlock>
          <Typography variant="h3">Props Flow</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>DATA FLOW IN REACT</li>
            <li>App (Parent)</li>
            <li>name=&quot;Sokha&quot; age={22}</li>
            <li>props</li>
            <li>Greeting (Child)</li>
            <li>props.name, props.age</li>
            <li>Data flows DOWN (parent → child)</li>
            <li>Never UP (child cannot modify parent props)</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Using Props</Typography>
          <Typography variant="h3">Passing Different Types</Typography>
          <CodeBlock language="jsx">{`function App() {
 return (
 <UserCard
 name="Sokha" // String
 age={22} // Number
 isStudent={true} // Boolean
 skills={["React", "CSS"]} // Array
 address={{ city: "PP" }} // Object
 onClick={handleClick} // Function
 />
 );
}`}</CodeBlock>
          <Typography variant="h3">Receiving Props</Typography>
          <CodeBlock language="jsx">{`// Method 1: props object
function UserCard(props) {
 return (
 <div>
 <h2>{props.name}</h2>
 <p>Age: {props.age}</p>
 <p>Student: {props.isStudent ? "Yes" : "No"}</p>
 </div>
 );
}
// Method 2: Destructuring (preferred)
function UserCard({ name, age, isStudent }) {
 return (
 <div>
 <h2>{name}</h2>
 <p>Age: {age}</p>
 <p>Student: {isStudent ? "Yes" : "No"}</p>
 </div>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Default Props</Typography>
          <Typography variant="h3">Setting Defaults</Typography>
          <CodeBlock language="jsx">{`// Method 1: Default parameters
function Button({ text = "Click me", color = "blue" }) {
 return (
 <button style={{ backgroundColor: color }}>
 {text}
 </button>
 );
}
// Usage
<Button /> // Uses defaults
<Button text="Submit" /> // Custom text, default color
<Button text="Delete" color="red" /> // Custom both`}</CodeBlock>
          <Typography variant="h3">With Object Destructuring</Typography>
          <CodeBlock language="jsx">{`function Card({ 
 title = "Untitled",
 description = "No description",
 imageUrl = "/placeholder.jpg"
}) {
 return (
 <div className="card">
 <img src={imageUrl} alt={title} />
 <h3>{title}</h3>
 <p>{description}</p>
 </div>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: The Children Prop</Typography>
          <Typography variant="h3">What is children?</Typography>
          <Typography>
            Content between component tags:
          </Typography>
          <CodeBlock language="jsx">{`// Parent
<Card>
 <h2>Title</h2>
 <p>This content is passed as children</p>
</Card>
// Card component
function Card({ children }) {
 return (
 <div className="card">
 {children}
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Flexible Layouts</Typography>
          <CodeBlock language="jsx">{`function Container({ children, className }) {
 return (
 <div className={\`container \${className}\`}>
 {children}
 </div>
 );
}
// Usage
<Container className="main-content">
 <Header />
 <ArticleList />
 <Footer />
</Container>`}</CodeBlock>
          <Typography variant="h3">Button Example</Typography>
          <CodeBlock language="jsx">{`function Button({ children, onClick, variant = "primary" }) {
 return (
 <button className={\`btn btn-\${variant}\`} onClick={onClick}>
 {children}
 </button>
 );
}
// Usage
<Button onClick={handleSave}>
 Save
</Button>
<Button variant="danger" onClick={handleDelete}>
 Delete
</Button>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Component Composition</Typography>
          <Typography variant="h3">Building from Small Parts</Typography>
          <CodeBlock language="jsx">{`// Small, focused components
function Avatar({ src, alt }) {
 return <img className="avatar" src={src} alt={alt} />;
}
function UserInfo({ name, role }) {
 return (
 <div className="user-info">
 <h4>{name}</h4>
 <p>{role}</p>
 </div>
 );
}
// Composed component
function UserCard({ user }) {
 return (
 <div className="user-card">
 <Avatar src={user.avatar} alt={user.name} />
 <UserInfo name={user.name} role={user.role} />
 </div>
 );
}
// Usage
<UserCard user={{
 name: "Sokha",
 role: "Developer",
 avatar: "/sokha.jpg"
}} />`}</CodeBlock>
          <Typography variant="h3">Card System</Typography>
          <CodeBlock language="jsx">{`function Card({ children }) {
 return <div className="card">{children}</div>;
}
function CardHeader({ children }) {
 return <div className="card-header">{children}</div>;
}
function CardBody({ children }) {
 return <div className="card-body">{children}</div>;
}
function CardFooter({ children }) {
 return <div className="card-footer">{children}</div>;
}
// Usage
<Card>
 <CardHeader>
 <h3>Product Title</h3>
 </CardHeader>
 <CardBody>
 <p>Product description goes here.</p>
 </CardBody>
 <CardFooter>
 <Button>Buy Now</Button>
 </CardFooter>
</Card>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Props Best Practices</Typography>
          <Typography variant="h3">Keep Props Simple</Typography>
          <CodeBlock language="jsx">{`// Too many props
<UserCard
 firstName="Sokha"
 lastName="Meas"
 email="sokha@email.com"
 phone="012345678"
 street="123 Main St"
 city="Phnom Penh"
 country="Cambodia"
/>
// Pass an object
<UserCard user={userData} />
function UserCard({ user }) {
 return (
 <div>
 <h2>{user.firstName} {user.lastName}</h2>
 <p>{user.email}</p>
 <p>{user.city}, {user.country}</p>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Destructure Early</Typography>
          <CodeBlock language="jsx">{`// Clean and clear
function ProductCard({ product }) {
 const { name, price, description, imageUrl } = product;
 return (
 <div className="product-card">
 <img src={imageUrl} alt={name} />
 <h3>{name}</h3>
 <p>{description}</p>
 <span className="price">\${price}</span>
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Spread Props When Needed</Typography>
          <CodeBlock language="jsx">{`// Pass all props to child
function Button({ children, ...rest }) {
 return (
 <button className="btn" {...rest}>
 {children}
 </button>
 );
}
// All these work:
<Button onClick={fn}>Click</Button>
<Button disabled>Can't Click</Button>
<Button type="submit">Submit</Button>`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Practical Examples</Typography>
          <Typography variant="h3">Product List</Typography>
          <CodeBlock language="jsx">{`// Data
const products = [
 { id: 1, name: "Laptop", price: 299, image: "/laptop.jpg" },
 { id: 2, name: "Mouse", price: 25, image: "/mouse.jpg" },
 { id: 3, name: "Keyboard", price: 45, image: "/keyboard.jpg" },
];
// ProductCard component
function ProductCard({ product }) {
 const { name, price, image } = product;
 return (
 <div className="product-card">
 <img src={image} alt={name} />
 <h3>{name}</h3>
 <p className="price">\${price}</p>
 <button>Add to Cart</button>
 </div>
 );
}
// ProductList component
function ProductList({ products }) {
 return (
 <div className="product-grid">
 {products.map(product => (
 <ProductCard key={product.id} product={product} />
 ))}
 </div>
 );
}
// App
function App() {
 return (
 <div>
 <h1>Our Products</h1>
 <ProductList products={products} />
 </div>
 );
}`}</CodeBlock>
          <Typography variant="h3">Navigation</Typography>
          <CodeBlock language="jsx">{`function NavLink({ to, children, isActive = false }) {
 return (
 <a 
 href={to} 
 className={\`nav-link \${isActive ? 'active' : ''}\`}
 >
 {children}
 </a>
 );
}
function Navigation({ links, currentPath }) {
 return (
 <nav>
 {links.map(link => (
 <NavLink 
 key={link.to}
 to={link.to}
 isActive={currentPath === link.to}
 >
 {link.label}
 </NavLink>
 ))}
 </nav>
 );
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Greeting Component</Typography>
          <Typography>
            Create a Greeting component that takes name and timeOfDay props.
          </Typography>
          <Typography variant="h3">Exercise 2: Card Component</Typography>
          <Typography>
            Create a reusable Card component with title, description, and children props.
          </Typography>
          <Typography variant="h3">Exercise 3: Button Variants</Typography>
          <Typography>
            Create a Button component with variant prop (primary, secondary, danger).
          </Typography>
          <Typography variant="h3">Exercise 4: User List</Typography>
          <Typography>
            Create components to display a list of users with their info.
          </Typography>
          <Typography variant="h3">Exercise 5: Product Grid</Typography>
          <Typography>
            Build a product grid with reusable ProductCard components.
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
                <TableCell>Props</TableCell>
                <TableCell>Data passed parent → child</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Destructuring</TableCell>
                <TableCell>Extract props cleanly</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Default props</TableCell>
                <TableCell>Fallback values</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>children</TableCell>
                <TableCell>Content between tags</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Composition</TableCell>
                <TableCell>Build from small parts</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 04 - State &amp; Events
          </Typography>
          <Typography>
            You will learn to make components interactive!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Props power your components!
          </Typography>
          <Typography>
            Data flows down, components stay pure.
          </Typography>
        </div>
      </section>
    </div>
  );
}
