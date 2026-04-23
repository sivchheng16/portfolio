
import React from 'react';
import { Typography } from '../../components/ui/Typography';
import { CodeBlock } from '../../components/ui/CodeBlock';
import { Table, TableHead, TableBody, TableHeader, TableRow, TableCell } from '../../components/ui/table';
export default function Module04ErrorHandling() {
  return (
    <div className="module-container">
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h1">Error Handling &amp; Debugging</Typography>
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
            <li>Handle errors gracefully with try/catch</li>
            <li>Create custom error types</li>
            <li>Debug code effectively</li>
            <li>Use browser developer tools</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 1: Types of Errors</Typography>
          <Typography variant="h3">JavaScript Error Types</Typography>
          <CodeBlock language="javascript">{`// SyntaxError - Invalid code structure
const x = ; // Unexpected token
// ReferenceError - Using undefined variable
console.log(undefinedVar);
// TypeError - Wrong type operation
null.toString();
const notFunc = 5;
notFunc();
// RangeError - Number out of range
const arr = new Array(-1);
// URIError - Invalid URI
decodeURI('%');`}</CodeBlock>
          <Typography variant="h3">Runtime vs Syntax Errors</Typography>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>When</TableHead>
                <TableHead>Can Catch?</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Syntax Error</TableCell>
                <TableCell>Before running</TableCell>
                <TableCell>No (fix code)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Runtime Error</TableCell>
                <TableCell>While running</TableCell>
                <TableCell>Yes (try/catch)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Logic Error</TableCell>
                <TableCell>While running</TableCell>
                <TableCell>No (wrong results)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 2: Try/Catch/Finally</Typography>
          <Typography variant="h3">Basic Try/Catch</Typography>
          <CodeBlock language="javascript">{`try {
 // Code that might fail
 const result = riskyOperation();
 console.log(result);
} catch (error) {
 // Handle the error
 console.error('Something went wrong:', error.message);
}`}</CodeBlock>
          <Typography variant="h3">The Finally Block</Typography>
          <Typography>
            Runs whether success or failure:
          </Typography>
          <CodeBlock language="javascript">{`try {
 const data = await fetchData();
 displayData(data);
} catch (error) {
 showErrorMessage(error);
} finally {
 // Always runs
 hideLoadingSpinner();
}`}</CodeBlock>
          <Typography variant="h3">Error Object Properties</Typography>
          <CodeBlock language="javascript">{`try {
 throw new Error('Something failed');
} catch (error) {
 console.log(error.name); // "Error"
 console.log(error.message); // "Something failed"
 console.log(error.stack); // Stack trace
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 3: Throwing Errors</Typography>
          <Typography variant="h3">Throw Statement</Typography>
          <CodeBlock language="javascript">{`function divide(a, b) {
 if (b === 0) {
 throw new Error('Cannot divide by zero');
 }
 return a / b;
}
try {
 const result = divide(10, 0);
} catch (error) {
 console.log(error.message); // "Cannot divide by zero"
}`}</CodeBlock>
          <Typography variant="h3">Throwing Different Types</Typography>
          <CodeBlock language="javascript">{`// Throw error object
throw new Error('Generic error');
// Throw specific error type
throw new TypeError('Expected a number');
throw new RangeError('Value out of range');
// Throw custom object
throw {
 code: 'VALIDATION_ERROR',
 message: 'Invalid email format',
 field: 'email'
};`}</CodeBlock>
          <Typography variant="h3">Re-throwing Errors</Typography>
          <CodeBlock language="javascript">{`try {
 processData();
} catch (error) {
 if (error.code === 'NETWORK_ERROR') {
 // Handle network error
 showOfflineMessage();
 } else {
 // Re-throw others
 throw error;
 }
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 4: Custom Error Classes</Typography>
          <Typography variant="h3">Creating Custom Errors</Typography>
          <CodeBlock language="javascript">{`class ValidationError extends Error {
 constructor(message, field) {
 super(message);
 this.name = 'ValidationError';
 this.field = field;
 }
}
class NetworkError extends Error {
 constructor(message, statusCode) {
 super(message);
 this.name = 'NetworkError';
 this.statusCode = statusCode;
 }
}
// Usage
function validateEmail(email) {
 if (!email.includes('@')) {
 throw new ValidationError('Invalid email format', 'email');
 }
}
try {
 validateEmail('invalid-email');
} catch (error) {
 if (error instanceof ValidationError) {
 console.log(\`Field \${error.field}: \${error.message}\`);
 }
}`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 5: Async Error Handling</Typography>
          <Typography variant="h3">With Promises</Typography>
          <CodeBlock language="javascript">{`fetchData()
 .then(data => process(data))
 .then(result => display(result))
 .catch(error => {
 // Catches error from any .then()
 console.error('Pipeline failed:', error);
 });`}</CodeBlock>
          <Typography variant="h3">With Async/Await</Typography>
          <CodeBlock language="javascript">{`async function loadData() {
 try {
 const response = await fetch(url);
 if (!response.ok) {
 throw new NetworkError('Request failed', response.status);
 }
 const data = await response.json();
 return data;
 } catch (error) {
 if (error instanceof NetworkError) {
 showNetworkError(error);
 } else {
 showGenericError(error);
 }
 throw error; // Re-throw if caller needs to know
 }
}`}</CodeBlock>
          <Typography variant="h3">Error Boundaries Pattern</Typography>
          <CodeBlock language="javascript">{`async function safeOperation(operation, fallback) {
 try {
 return await operation();
 } catch (error) {
 console.error('Operation failed:', error);
 return fallback;
 }
}
// Usage
const users = await safeOperation(
 () => fetchUsers(),
 [] // Fallback to empty array
);`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 6: Debugging Techniques</Typography>
          <Typography variant="h3">Console Methods</Typography>
          <CodeBlock language="javascript">{`console.log('Basic message');
console.error('Error message');
console.warn('Warning message');
console.info('Info message');
// Table for arrays/objects
console.table([
 { name: 'Sokha', age: 22 },
 { name: 'Dara', age: 25 }
]);
// Grouping
console.group('User Details');
console.log('Name: Sokha');
console.log('Age: 22');
console.groupEnd();
// Timing
console.time('operation');
// ... code to measure
console.timeEnd('operation'); // operation: 123.45ms
// Counting
console.count('clicked'); // clicked: 1
console.count('clicked'); // clicked: 2
// Assert
console.assert(1 === 2, 'This will show because condition is false');`}</CodeBlock>
          <Typography variant="h3">Debugger Statement</Typography>
          <CodeBlock language="javascript">{`function calculateTotal(items) {
 let total = 0;
 for (const item of items) {
 debugger; // Browser pauses here
 total += item.price * item.quantity;
 }
 return total;
}`}</CodeBlock>
          <Typography variant="h3">Browser DevTools</Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>DEVTOOLS FEATURES</li>
            <li>CONSOLE TAB</li>
            <li>• View logs and errors</li>
            <li>• Execute JavaScript</li>
            <li>• Test expressions</li>
            <li>SOURCES TAB</li>
            <li>• Set breakpoints</li>
            <li>• Step through code</li>
            <li>• Watch variables</li>
            <li>• View call stack</li>
            <li>NETWORK TAB</li>
            <li>• See all requests</li>
            <li>• Check response data</li>
            <li>• Debug API calls</li>
            <li>ELEMENTS TAB</li>
            <li>• Inspect DOM</li>
            <li>• See computed styles</li>
            <li>• Debug layout</li>
          </ul>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Lesson 7: Best Practices</Typography>
          <Typography variant="h3">Error Handling Patterns</Typography>
          <CodeBlock language="javascript">{`// 1. Always handle async errors
async function fetchData() {
 try {
 const data = await api.get('/data');
 return { success: true, data };
 } catch (error) {
 return { success: false, error: error.message };
 }
}
// 2. Provide user-friendly messages
function getUserMessage(error) {
 const messages = {
 NETWORK_ERROR: 'Please check your internet connection',
 NOT_FOUND: 'The requested item was not found',
 UNAUTHORIZED: 'Please log in to continue',
 DEFAULT: 'Something went wrong. Please try again.'
 };
 return messages[error.code] || messages.DEFAULT;
}
// 3. Log errors for debugging
function handleError(error, context) {
 console.error(\`Error in \${context}:\`, error);
 // In production, send to error tracking service
 if (window.errorTracker) {
 window.errorTracker.capture(error, { context });
 }
}
// 4. Fail gracefully
function renderData(data) {
 if (!data || !Array.isArray(data)) {
 return '<p>No data available</p>';
 }
 return data.map(item => \`<div>\${item.name}</div>\`).join('');
}`}</CodeBlock>
          <Typography variant="h3">Debugging Checklist</Typography>
          <CodeBlock language="text">{`□ Read the error message carefully
□ Check the line number in the stack trace
□ Verify variable values with console.log
□ Check for typos
□ Verify data types
□ Check API response format
□ Test with simple inputs first
□ Use browser DevTools breakpoints
□ Check network tab for failed requests
□ Google the exact error message`}</CodeBlock>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Self-Check Exercises</Typography>
          <Typography variant="h3">Exercise 1: Try/Catch Practice</Typography>
          <Typography>
            Wrap a fetch call in try/catch with proper error handling.
          </Typography>
          <Typography variant="h3">Exercise 2: Custom Error</Typography>
          <Typography>
            Create a AuthenticationError class with properties for code and message.
          </Typography>
          <Typography variant="h3">Exercise 3: Debug a Bug</Typography>
          <Typography>
            Find and fix the bug:
          </Typography>
          <CodeBlock language="javascript">{`function sumArray(numbers) {
 let total;
 for (let i = 0; i <= numbers.length; i++) {
 total += numbers[i];
 }
 return total;
}`}</CodeBlock>
          <Typography variant="h3">Exercise 4: Error Boundary</Typography>
          <Typography>
            Create a function that safely parses JSON with a fallback value.
          </Typography>
          <Typography variant="h3">Exercise 5: Full Error Handling</Typography>
          <Typography>
            Create a user registration form with:
          </Typography>
          <ul className="list-disc pl-8 mb-6 space-y-2 text-text-secondary">
            <li>Validation errors</li>
            <li>Network error handling</li>
            <li>User-friendly error messages</li>
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
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>try/catch</TableCell>
                <TableCell>Catch runtime errors</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>finally</TableCell>
                <TableCell>Always execute cleanup</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>throw</TableCell>
                <TableCell>Create errors intentionally</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Custom errors</TableCell>
                <TableCell>Specific error types</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>console</TableCell>
                <TableCell>Debug output</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>debugger</TableCell>
                <TableCell>Pause execution</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography variant="h2">Next Steps</Typography>
          <Typography>
            Coming Next: Module 06 - Project: Weather Dashboard
          </Typography>
          <Typography>
            You will build a complete application using everything learned!
          </Typography>
        </div>
      </section>
      <section className="lesson-section">
        <div className="lesson-content">
          <Typography>
            Errors are information!
          </Typography>
          <Typography>
            Good error handling makes great apps.
          </Typography>
        </div>
      </section>
    </div>
  );
}
