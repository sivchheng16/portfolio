
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module02AsyncJavaScript() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Asynchronous JavaScript</Typography>
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
            <li>Understand synchronous vs asynchronous code</li>
            <li>Use callbacks and understand callback hell</li>
            <li>Work with Promises</li>
            <li>Master async/await syntax</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Sync vs Async</Typography>
          <Typography variant="h3">Synchronous Code</Typography>
          <Typography>
            Runs line by line, each waits for the previous:
          </Typography>
          <CodeBlock language="javascript">{`console.log("First");
console.log("Second");
console.log("Third");
// Output:
// First
// Second
// Third`}</CodeBlock>
          <Typography variant="h3">Asynchronous Code</Typography>
          <Typography>
            Some operations don&apos;t wait:
          </Typography>
          <CodeBlock language="javascript">{`console.log("First");
setTimeout(() => {
 console.log("Second");
}, 2000);
console.log("Third");
// Output:
// First
// Third
// Second (after 2 seconds)`}</CodeBlock>
          <Typography variant="h3">Why Async Matters</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>ASYNC IS ESSENTIAL FOR:</li>
            <li>• Fetching data from servers</li>
            <li>• Reading/writing files</li>
            <li>• User interactions</li>
            <li>• Timers and animations</li>
            <li>• Database operations</li>
            <li>Without async, your app would FREEZE during these operations!</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Callbacks</Typography>
          <Typography variant="h3">What is a Callback?</Typography>
          <Typography>
            A function passed to another function to be called later:
          </Typography>
          <CodeBlock language="javascript">{`function greet(name, callback) {
 console.log(\`Hello, \${name}!\`);
 callback();
}
function sayGoodbye() {
 console.log("Goodbye!");
}
greet("Sokha", sayGoodbye);
// Hello, Sokha!
// Goodbye!`}</CodeBlock>
          <Typography variant="h3">Async Callbacks</Typography>
          <CodeBlock language="javascript">{`function fetchUser(userId, callback) {
 setTimeout(() => {
 const user = { id: userId, name: "Sokha" };
 callback(user);
 }, 1000);
}
fetchUser(1, (user) => {
 console.log(user); // { id: 1, name: "Sokha" }
});`}</CodeBlock>
          <Typography variant="h3">Callback Hell</Typography>
          <Typography>
            Nested callbacks become unreadable:
          </Typography>
          <CodeBlock language="javascript">{`getUser(userId, (user) => {
 getPosts(user.id, (posts) => {
 getComments(posts[0].id, (comments) => {
 getLikes(comments[0].id, (likes) => {
 // This is callback hell!
 console.log(likes);
 });
 });
 });
});`}</CodeBlock>
          <Typography>
            This is why we have Promises!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Promises</Typography>
          <Typography variant="h3">What is a Promise?</Typography>
          <Typography>
            A Promise represents a value that may be available now, later, or never.
          </Typography>
          <CodeBlock language="javascript">{`const promise = new Promise((resolve, reject) => {
 // Async operation
 setTimeout(() => {
 const success = true;
 if (success) {
 resolve("Data loaded!");
 } else {
 reject("Error loading data");
 }
 }, 1000);
});`}</CodeBlock>
          <Typography variant="h3">Promise States</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>PROMISE STATES</li>
            <li>PENDING ► FULFILLED (resolved with value)</li>
            <li>(waiting)</li>
            <li>► REJECTED (rejected with error)</li>
            <li>Once settled (fulfilled or rejected), cannot change</li>
          </ul>
          <Typography variant="h3">Using Promises</Typography>
          <CodeBlock language="javascript">{`const promise = fetchData();
promise
 .then(data => {
 console.log("Success:", data);
 })
 .catch(error => {
 console.log("Error:", error);
 })
 .finally(() => {
 console.log("Done (success or fail)");
 });`}</CodeBlock>
          <Typography variant="h3">Chaining Promises</Typography>
          <CodeBlock language="javascript">{`fetchUser(1)
 .then(user => {
 console.log(user);
 return fetchPosts(user.id);
 })
 .then(posts => {
 console.log(posts);
 return fetchComments(posts[0].id);
 })
 .then(comments => {
 console.log(comments);
 })
 .catch(error => {
 console.log("Error:", error);
 });`}</CodeBlock>
          <Typography>
            Much cleaner than callback hell!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Creating Promises</Typography>
          <Typography variant="h3">Basic Promise</Typography>
          <CodeBlock language="javascript">{`function delay(ms) {
 return new Promise(resolve => {
 setTimeout(resolve, ms);
 });
}
delay(2000).then(() => {
 console.log("2 seconds passed!");
});`}</CodeBlock>
          <Typography variant="h3">Promise with Data</Typography>
          <CodeBlock language="javascript">{`function fetchUser(id) {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 if (id > 0) {
 resolve({ id, name: "Sokha" });
 } else {
 reject("Invalid ID");
 }
 }, 1000);
 });
}
fetchUser(1)
 .then(user => console.log(user))
 .catch(err => console.log(err));`}</CodeBlock>
          <Typography variant="h3">Promise.all</Typography>
          <Typography>
            Wait for multiple promises:
          </Typography>
          <CodeBlock language="javascript">{`const promise1 = fetchUser(1);
const promise2 = fetchUser(2);
const promise3 = fetchUser(3);
Promise.all([promise1, promise2, promise3])
 .then(users => {
 console.log(users); // Array of all users
 })
 .catch(error => {
 console.log("One failed:", error);
 });`}</CodeBlock>
          <Typography variant="h3">Promise.race</Typography>
          <Typography>
            First to complete wins:
          </Typography>
          <CodeBlock language="javascript">{`Promise.race([
 fetchFromServer1(),
 fetchFromServer2()
])
.then(result => {
 console.log("First result:", result);
});`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Async/Await</Typography>
          <Typography variant="h3">The Modern Way</Typography>
          <Typography>
            Async/await makes async code look synchronous:
          </Typography>
          <CodeBlock language="javascript">{`// With Promises
function getData() {
 return fetchUser(1)
 .then(user => fetchPosts(user.id))
 .then(posts => console.log(posts));
}
// With async/await
async function getData() {
 const user = await fetchUser(1);
 const posts = await fetchPosts(user.id);
 console.log(posts);
}`}</CodeBlock>
          <Typography variant="h3">async Keyword</Typography>
          <Typography>
            Makes a function return a Promise:
          </Typography>
          <CodeBlock language="javascript">{`async function greet() {
 return "Hello!";
}
greet().then(message => console.log(message)); // "Hello!"`}</CodeBlock>
          <Typography variant="h3">await Keyword</Typography>
          <Typography>
            Pauses execution until Promise resolves:
          </Typography>
          <CodeBlock language="javascript">{`async function loadData() {
 console.log("Loading...");
 const data = await fetchData(); // Waits here
 console.log("Data:", data);
 return data;
}`}</CodeBlock>
          <Typography variant="h3">Error Handling with try/catch</Typography>
          <CodeBlock language="javascript">{`async function loadUser(id) {
 try {
 const user = await fetchUser(id);
 const posts = await fetchPosts(user.id);
 return { user, posts };
 } catch (error) {
 console.error("Failed:", error);
 throw error; // Re-throw if needed
 }
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Practical Examples</Typography>
          <Typography variant="h3">Sequential vs Parallel</Typography>
          <CodeBlock language="javascript">{`// Sequential - one after another (slower)
async function sequential() {
 const user1 = await fetchUser(1); // Wait 1s
 const user2 = await fetchUser(2); // Wait 1s
 const user3 = await fetchUser(3); // Wait 1s
 // Total: 3 seconds
}
// Parallel - all at once (faster)
async function parallel() {
 const [user1, user2, user3] = await Promise.all([
 fetchUser(1),
 fetchUser(2),
 fetchUser(3)
 ]);
 // Total: 1 second (all run together)
}`}</CodeBlock>
          <Typography variant="h3">Loading Indicator</Typography>
          <CodeBlock language="javascript">{`async function loadDataWithUI() {
 const loadingDiv = document.getElementById("loading");
 const contentDiv = document.getElementById("content");
 try {
 loadingDiv.style.display = "block";
 contentDiv.style.display = "none";
 const data = await fetchData();
 contentDiv.innerHTML = renderData(data);
 contentDiv.style.display = "block";
 } catch (error) {
 contentDiv.innerHTML = \`<p class="error">\${error.message}</p>\`;
 contentDiv.style.display = "block";
 } finally {
 loadingDiv.style.display = "none";
 }
}`}</CodeBlock>
          <Typography variant="h3">Retry Logic</Typography>
          <CodeBlock language="javascript">{`async function fetchWithRetry(url, maxRetries = 3) {
 for (let i = 0; i < maxRetries; i++) {
 try {
 const response = await fetch(url);
 return await response.json();
 } catch (error) {
 console.log(\`Attempt \${i + 1} failed\`);
 if (i === maxRetries - 1) throw error;
 await delay(1000); // Wait before retry
 }
 }
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Common Patterns</Typography>
          <Typography variant="h3">Async in Array Methods</Typography>
          <CodeBlock language="javascript">{`// WRONG - forEach doesn't wait
urls.forEach(async url => {
 await fetch(url); // These run in parallel, not sequential
});
// RIGHT - for...of for sequential
for (const url of urls) {
 await fetch(url);
}
// RIGHT - Promise.all for parallel
await Promise.all(urls.map(url => fetch(url)));`}</CodeBlock>
          <Typography variant="h3">Immediately Invoked Async Function</Typography>
          <CodeBlock language="javascript">{`(async () => {
 const data = await fetchData();
 console.log(data);
})();`}</CodeBlock>
          <Typography variant="h3">Top-Level Await (ES2022+)</Typography>
          <Typography>
            In modules, you can use await at the top level:
          </Typography>
          <CodeBlock language="javascript">{`// In a module file
const data = await fetchData();
export { data };`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Convert Callback to Promise</Typography>
          <Typography>
            Convert this callback-based function to return a Promise:
          </Typography>
          <CodeBlock language="javascript">{`function loadData(callback) {
 setTimeout(() => {
 callback({ name: "Data" });
 }, 1000);
}`}</CodeBlock>
          <Typography variant="h3">Exercise 2: Promise Chain</Typography>
          <Typography>
            Create a promise chain that:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Fetches a user</li>
            <li>Fetches their posts</li>
            <li>Fetches comments on first post</li>
            <li>Logs the comments</li>
          </ul>
          <Typography variant="h3">Exercise 3: Async/Await Conversion</Typography>
          <Typography>
            Convert the promise chain from Exercise 2 to async/await.
          </Typography>
          <Typography variant="h3">Exercise 4: Parallel Loading</Typography>
          <Typography>
            Load 3 different data sources in parallel using Promise.all.
          </Typography>
          <Typography variant="h3">Exercise 5: Error Handling</Typography>
          <Typography>
            Add proper error handling to the async function with user feedback.
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
                <TableHead>Syntax</TableHead>
                <TableHead>Use Case</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Callback</TableCell>
                <TableCell>fn(callback)</TableCell>
                <TableCell>Legacy, simple cases</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Promise</TableCell>
                <TableCell>.then().catch()</TableCell>
                <TableCell>Chained async</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>async/await</TableCell>
                <TableCell>async/await</TableCell>
                <TableCell>Modern, readable</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Promise.all</TableCell>
                <TableCell>Promise.all([])</TableCell>
                <TableCell>Parallel execution</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 04 - Working with APIs
          </Typography>
          <Typography>
            You will learn to fetch real data from web APIs!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Async unlocks the web!
          </Typography>
          <Typography>
            Almost everything interesting is asynchronous.
          </Typography>
        </div>
      </section>
    </div>
  );
}
