
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module03WorkingAPIs() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Working with APIs</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Track 04: JavaScript Advanced</Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Module Objectives</Typography>
          <Typography>
            By the end of this module, you will be able to:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Understand what APIs are and how they work</li>
            <li>Use the Fetch API to make HTTP requests</li>
            <li>Handle JSON data</li>
            <li>Work with REST APIs</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: What is an API?</Typography>
          <Typography variant="h3">API Defined</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>WHAT IS AN API?</li>
            <li>API = Application Programming Interface</li>
            <li>Think of it as a waiter in a restaurant:</li>
            <li>YOU (Client) WAITER (API) KITCHEN (Server)</li>
            <li>&quot;I want pizza&quot; ► Takes order ► Makes pizza</li>
            <li>Eats pizza ◄ Delivers food ◄ Prepares dish</li>
            <li>You don&apos;t need to know HOW the kitchen works.</li>
            <li>The waiter handles the communication.</li>
          </ul>
          <Typography variant="h3">Web APIs</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Weather API → Get weather data</li>
            <li>Maps API → Get location data</li>
            <li>Social Media APIs → Get posts, profiles</li>
            <li>Payment APIs → Process payments</li>
            <li>Your own API → Your app&apos;s data</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: HTTP Basics</Typography>
          <Typography variant="h3">HTTP Methods</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Method</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>GET</TableCell>
                <TableCell>Read data</TableCell>
                <TableCell>Get list of users</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>POST</TableCell>
                <TableCell>Create data</TableCell>
                <TableCell>Create new user</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>PUT</TableCell>
                <TableCell>Update data (replace)</TableCell>
                <TableCell>Update entire user</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>PATCH</TableCell>
                <TableCell>Update data (partial)</TableCell>
                <TableCell>Update user&apos;s email</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>DELETE</TableCell>
                <TableCell>Remove data</TableCell>
                <TableCell>Delete user</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h3">HTTP Status Codes</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Meaning</TableHead>
                <TableHead>When</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>200</TableCell>
                <TableCell>OK</TableCell>
                <TableCell>Request succeeded</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>201</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>New resource created</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>400</TableCell>
                <TableCell>Bad Request</TableCell>
                <TableCell>Invalid request data</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>401</TableCell>
                <TableCell>Unauthorized</TableCell>
                <TableCell>Need to log in</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>403</TableCell>
                <TableCell>Forbidden</TableCell>
                <TableCell>Don&apos;t have permission</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>404</TableCell>
                <TableCell>Not Found</TableCell>
                <TableCell>Resource doesn&apos;t exist</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>500</TableCell>
                <TableCell>Server Error</TableCell>
                <TableCell>Server problem</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: The Fetch API</Typography>
          <Typography variant="h3">Basic GET Request</Typography>
          <CodeBlock language="javascript">{`fetch('https://api.example.com/users')
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error('Error:', error));`}</CodeBlock>
          <Typography variant="h3">With Async/Await</Typography>
          <CodeBlock language="javascript">{`async function getUsers() {
 try {
 const response = await fetch('https://api.example.com/users');
 const data = await response.json();
 console.log(data);
 return data;
 } catch (error) {
 console.error('Error:', error);
 }
}`}</CodeBlock>
          <Typography variant="h3">Checking Response</Typography>
          <CodeBlock language="javascript">{`async function fetchData(url) {
 const response = await fetch(url);
 if (!response.ok) {
 throw new Error(\`HTTP error! Status: \${response.status}\`);
 }
 return response.json();
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Request Options</Typography>
          <Typography variant="h3">POST Request</Typography>
          <CodeBlock language="javascript">{`async function createUser(userData) {
 const response = await fetch('https://api.example.com/users', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json'
 },
 body: JSON.stringify(userData)
 });
 return response.json();
}
// Usage
createUser({ name: 'Sokha', email: 'sokha@email.com' });`}</CodeBlock>
          <Typography variant="h3">PUT Request</Typography>
          <CodeBlock language="javascript">{`async function updateUser(id, userData) {
 const response = await fetch(\`https://api.example.com/users/\${id}\`, {
 method: 'PUT',
 headers: {
 'Content-Type': 'application/json'
 },
 body: JSON.stringify(userData)
 });
 return response.json();
}`}</CodeBlock>
          <Typography variant="h3">DELETE Request</Typography>
          <CodeBlock language="javascript">{`async function deleteUser(id) {
 const response = await fetch(\`https://api.example.com/users/\${id}\`, {
 method: 'DELETE'
 });
 return response.ok;
}`}</CodeBlock>
          <Typography variant="h3">With Authentication</Typography>
          <CodeBlock language="javascript">{`async function fetchProtectedData() {
 const token = 'your-auth-token';
 const response = await fetch('https://api.example.com/protected', {
 headers: {
 'Authorization': \`Bearer \${token}\`,
 'Content-Type': 'application/json'
 }
 });
 return response.json();
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Working with JSON</Typography>
          <Typography variant="h3">What is JSON?</Typography>
          <CodeBlock language="javascript">{`// JSON = JavaScript Object Notation
// A text format for storing and transmitting data
{
 "name": "Sokha",
 "age": 22,
 "isStudent": true,
 "skills": ["HTML", "CSS", "JavaScript"],
 "address": {
 "city": "Phnom Penh",
 "country": "Cambodia"
 }
}`}</CodeBlock>
          <Typography variant="h3">Parsing JSON</Typography>
          <CodeBlock language="javascript">{`// String to Object
const jsonString = '{"name": "Sokha", "age": 22}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "Sokha"
// Object to String
const data = { name: "Dara", age: 25 };
const json = JSON.stringify(data);
console.log(json); // '{"name":"Dara","age":25}'
// Pretty print
const prettyJson = JSON.stringify(data, null, 2);`}</CodeBlock>
          <Typography variant="h3">Handling API Response</Typography>
          <CodeBlock language="javascript">{`async function displayUsers() {
 try {
 const response = await fetch('https://jsonplaceholder.typicode.com/users');
 const users = await response.json();
 users.forEach(user => {
 console.log(\`\${user.name} - \${user.email}\`);
 });
 } catch (error) {
 console.error('Failed to load users:', error);
 }
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Real API Examples</Typography>
          <Typography variant="h3">JSONPlaceholder (Practice API)</Typography>
          <CodeBlock language="javascript">{`// Free fake API for testing
const API_URL = 'https://jsonplaceholder.typicode.com';
// Get posts
async function getPosts() {
 const response = await fetch(\`\${API_URL}/posts\`);
 return response.json();
}
// Get single post
async function getPost(id) {
 const response = await fetch(\`\${API_URL}/posts/\${id}\`);
 return response.json();
}
// Get post's comments
async function getPostComments(postId) {
 const response = await fetch(\`\${API_URL}/posts/\${postId}/comments\`);
 return response.json();
}`}</CodeBlock>
          <Typography variant="h3">Weather API Example</Typography>
          <CodeBlock language="javascript">{`const API_KEY = 'your-api-key';
async function getWeather(city) {
 const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}&units=metric\`;
 try {
 const response = await fetch(url);
 if (!response.ok) {
 throw new Error('City not found');
 }
 const data = await response.json();
 return {
 city: data.name,
 temp: data.main.temp,
 description: data.weather[0].description,
 humidity: data.main.humidity
 };
 } catch (error) {
 console.error('Weather fetch failed:', error);
 throw error;
 }
}
// Usage
const weather = await getWeather('Phnom Penh');
console.log(\`\${weather.city}: \${weather.temp}°C, \${weather.description}\`);`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Building an API Client</Typography>
          <Typography variant="h3">Reusable API Class</Typography>
          <CodeBlock language="javascript">{`class ApiClient {
 constructor(baseURL) {
 this.baseURL = baseURL;
 }
 async request(endpoint, options = {}) {
 const url = \`\${this.baseURL}\${endpoint}\`;
 const config = {
 headers: {
 'Content-Type': 'application/json',
 ...options.headers
 },
 ...options
 };
 if (config.body) {
 config.body = JSON.stringify(config.body);
 }
 const response = await fetch(url, config);
 if (!response.ok) {
 const error = await response.json();
 throw new Error(error.message || 'Request failed');
 }
 return response.json();
 }
 get(endpoint) {
 return this.request(endpoint);
 }
 post(endpoint, data) {
 return this.request(endpoint, {
 method: 'POST',
 body: data
 });
 }
 put(endpoint, data) {
 return this.request(endpoint, {
 method: 'PUT',
 body: data
 });
 }
 delete(endpoint) {
 return this.request(endpoint, {
 method: 'DELETE'
 });
 }
}
// Usage
const api = new ApiClient('https://api.example.com');
const users = await api.get('/users');
const newUser = await api.post('/users', { name: 'Sokha' });
await api.delete('/users/1');`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Fetch Users</Typography>
          <Typography>
            Fetch users from JSONPlaceholder and display their names.
          </Typography>
          <Typography variant="h3">Exercise 2: Create Post</Typography>
          <Typography>
            Create a new post using the POST method.
          </Typography>
          <Typography variant="h3">Exercise 3: Search Users</Typography>
          <Typography>
            Create a function that searches users by name.
          </Typography>
          <Typography variant="h3">Exercise 4: Error Handling</Typography>
          <Typography>
            Add proper error handling to display user-friendly messages.
          </Typography>
          <Typography variant="h3">Exercise 5: Weather Widget</Typography>
          <Typography>
            Create a simple weather widget that:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Has an input for city name</li>
            <li>Fetches weather data</li>
            <li>Displays temperature and conditions</li>
          </ul>
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
                <TableCell>API</TableCell>
                <TableCell>Interface to get/send data</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>REST</TableCell>
                <TableCell>Standard for web APIs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fetch</TableCell>
                <TableCell>Browser API for HTTP requests</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>JSON</TableCell>
                <TableCell>Data format for APIs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Methods</TableCell>
                <TableCell>GET, POST, PUT, DELETE</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>
            Common Fetch Pattern:
          </Typography>
          <CodeBlock language="javascript">{`async function fetchData(url) {
 try {
 const response = await fetch(url);
 if (!response.ok) throw new Error('Failed');
 return await response.json();
 } catch (error) {
 console.error(error);
 throw error;
 }
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 05 - Error Handling &amp; Debugging
          </Typography>
          <Typography>
            You will learn to handle errors gracefully and debug effectively!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            APIs connect you to the world!
          </Typography>
          <Typography>
            Every modern app uses APIs.
          </Typography>
        </div>
      </section>
    </div>
  );
}
