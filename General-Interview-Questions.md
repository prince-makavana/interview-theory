1. # What is nodejs?
ANS. Node.js is an open-source JavaScript runtime environment that allows developers to build and run JavaScript code on the server side.

#  What is event driven programming?
ANS. It means as soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for event to occur. It is the one of the reason why Node. js is pretty fast compared to other similar technologies.

2. # How nodejs works?
ANS. Node.js works by using an event-driven, non-blocking architecture. using a single-threaded event loop to handle multiple concurrent connections efficiently. This enables the creation of scalable and high-performance applications

1. # What is event loop and how it works with nodejs?
ANS. In Node.js, the event loop is a crucial part of its architecture that allows non-blocking, asynchronous execution of code. The event loop is responsible for handling and processing events in a single-threaded environment. It enables Node.js to efficiently handle concurrent operations without the need for multiple threads.

Here's a high-level overview of how the event loop works in Node.js:

Event Queue: Node.js applications receive events continuously. These events could be I/O operations, timers, or other asynchronous operations.

Event Loop: The event loop constantly checks the event queue for new events to process. It runs indefinitely as long as there are events in the queue.

Event Handlers: When an event is detected, the associated event handler (callback function) is executed. Event handlers are functions that handle the completion of asynchronous tasks.

Non-blocking I/O: Node.js uses non-blocking I/O operations, meaning that while waiting for a particular operation (like reading from a file or making a network request) to complete, the event loop can continue processing other events rather than being blocked.

4. # What is REPL in nodejs and purpose of it?
ANS. REPL stands for Read Evaluate Print Loop, and it is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution

5. # What is middleware?
ANS. The middleware in node.js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function

6. # What is callback hell and how to avoid it?
ANS. Callback hell is nested callback functions its called callback function and every callback depends/waits for the previous callback

7. # What is Promises?
ANS. In JavaScript, a Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed

8. # What is async await?
ANS. "async and await make promises easier to write" async makes a function return a Promise. await makes a function wait for a Promise resolved.

9. # What is Thread?
ANS. A thread is the smallest unit of execution within a process in a computing system

10. # Lexical scope?
ANS. Lexical scope is the ability for a function scope to access variables from the parent scope.

11. # What is hoisting?
ANS. In JavaScript, hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution

12. # How to avoid hoisting?
ANS. declares all variables at the beginning of the scope

13. # Is nodejs single threaded?
ANS. Yes nodejs single threaded,
Doing async processing on single threads could provide more performance and scalability
under typical web loads.

14. # Create nodejs server?
ANS.
const http = require(‘http’)
http.createServer(function (req, res) {
res.end(‘Hello world’)
}).listen(3000)

15. # What is temporal dead zone?
ANS.
The temporal dead zone (TDZ) is a specific period in the execution of JavaScript code where variables declared with let and const exist but cannot be accessed or assigned any value.

16. # What is IIFE?
ANS. 
IIFE means Initiate invoke functional expression, a function that is called immediately after it is defined 
(function () {
 console.log('Hello World');
})();

17. # What is closure?
- Function bind together with its lexical environment, its called a closure. 
- JavaScript closure is a feature that allows inner functions to access the outer scope of a function.
- A closure is the combination of a function bundled(enclosed) together with its lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables, functions and other data even after the outer function has finished its execution.
    The closure has three scope chains.

    - Own scope where variables defined between its curly brackets
    - Outer function's variables
    - Global variables

18. # What is Call, Bind and Apply?

19. # What is PassByValue?
ANS. In Pass by value, the function is called by directly passing the value of the variable as an argument. So any changes made inside the function do not affect the original value.

20. # What is PassByReference?
ANS. In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument. So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.

21. # What is Higher order function?
ANS. We can pass function as a param in function and we can do optimaize our code.

22. # What is clustering?
- Clustering in Node. js involves creating multiple worker processes that share the incoming workload. Each worker process runs in its own event loop, utilizing the available CPU cores. The master process manages the worker processes, distributes incoming requests, and handles process failures
- Clustering is a technique used to horizontally scale a Node. js server on a single machine by spawning child processes (workers) that run concurrently and share a single port

23. # What is parallel programming?
ANS. Parallelism refers to the execution of multiple tasks simultaneously, utilizing multiple system resources to maximize performance. In Node. js, parallelism can be achieved by distributing tasks across multiple threads or processes

24. # What is the difference between APIs and REST APIs?
ANS. REST APIs support JSON, XML, and other formats, while Web APIs only support XML

26. # What is serverless?
ANS. Serverless is a cloud-native development model that allows developers to build and run applications without having to manage servers.

27. # Why we are using AWS?
ANS.

28. # What is API gateway?
ANS. Where we can deploy our APIs

29. # What is Encapsulation?
ANS. Hiding the internal details of an object from other objects and code. In JavaScript, encapsulation is achieved by using closures and access modifiers, such as the private and public keywords.

30. # What is Abstraction?
ANS. Hiding the implementation details of an object and exposing only the essential features to the user, In JavaScript, abstraction is achieved by using abstract classes and interfaces.

31. # What is Polymorphism?
ANS. 

32. # What is Inheritance?
ANS.

40. # How to avoid callback hell?
ANS. Using async, await and promises.

41. # What is the difference between JSON and BSON?
ANS. BSON is binary encoded format and JSON is text based format.

42. # What is the difference between package.json and package.lock.json?
ANS. 
package.json: This file is primarily used for managing and documenting metadata about the project, including its name, version, author, dependencies, scripts, and other configuration details. It acts as a manifest for the project.

package-lock.json: This file is generated and updated automatically by npm when installing or updating packages. It is used to lock the exact versions of dependencies installed in the project, ensuring reproducibility and consistent installations across different environments.

43. # what is presign url in s3 bucket?
ANS. 

44. # Explain what scaffolding is in Express.js.
ANS. 

45. # What Is AWS S3 Replication?
ANS.

- Prevent ddos attack – rate limit
- Deep copy and shalow copy
- Vertical scaling and horizontal scaling
- How to optimize query

- Fibonacci series
- Put and patch diff
- Normalization
- Caching use in nodejs

- Advantages and disadvantages of nodejs?
- Why we need to use nodejs with compare to another language?

- How to create apis only using nodejs
- Create database design for one to one chat app

- what is event emmiter?
- what is spawn and fork?
- what is closure?
- what is hoisting?
- use of ~
- use of ^
- jwt token
  - parts of jwt token
    - Header
    - Payload
    - Verify Signature

1.  DRY and KISS principle
    - Dont Repeat Yourself
    - Keep It Simple, Stupid
      - Avoid complexity in code and other developer can easy to debug and understand the code.

2.  Streams four types
    1.  Writable - Streams to which data can be written
    2.  Readable - Streams from which data can be read
    3.  Duplex - Strems that are both can do readable and writable
    4.  transform - Duplex streams that can be modify or transform the data