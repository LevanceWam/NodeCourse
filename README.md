<h1 id='home'>NodeCourse</h1>

<h4>Installing node</h4>

<p>https://nodejs.org/en/</p>

<p>To check current version</p>
```
node --version
```

<p>To run Node program in terminal make sure to be in the same folder as the file</p>

```
node nameOfFile.js
```

<p>Welcome to my Node.js tutorial here I will be learning everything I can about Node.js.</p>

<h3>What is Node:</h3>

<p>Node.js or node is a open source and cross platform runtime enviroment for executing Javascript code outside of a browser. We often use node to build backend services, also called API (Application Programming Interfaces). These are the services that power our client applications. Like a web app running inside of a browser or a mobile app running on a mobile device. These client apps are what the user sees and interacts with, they're just the surface. They need to talk to some services sitting on the server or the cloud to store data, send emails, push notifications, key cuff work flows and so on.</p>

<p>Before Node we use to use Javascript only to build applications that run inside of the browser. So every browser out there has a JS Engine that converts our  Javascript code to Machine code. Examples like Edge uses Chakra, FireFox uses Spider Monkey and Chrome use V8 because of this variety of engines sometimes Javascript code can behave differently in different browsers. Browsers provide a runtime enviroment for Javascript code. For example in browsers we have the window or document object these objects allow us to work with the enviroment in which our code is running.</p>

<p>Up to 2009 the only way to execute javascript code was inside of a browser. It was the same year that Ryan Dahl the creator of Node came up with an idea. He thought it would be great to execute Javascript outside of a browser. He took Google's V8 engine which is the fastest Javascript engine out there and imbedded it inside of a C++ program and called it Node. So similar to the browser Node is a runtime enviroment for Javascript code. It contains a Javascript engine that can execute our Javascript code. But, it also has certain objects that provide a for our Javascript code. These objects however are different from the enviroment objects we have in the browser. For example we don't have the document object, instead we have other objects that gives us more interesting capabilities like we can work with file system(fs) listen to request on a given port and so on. Things like those are not capable inside of a browser. In essense Node is a program that includes a V8 Javascript engine + some additional modules that give us capabilities not available inside browsers. Both Chrome and Node share the same Javascript engine but they provide different runtime enviroments for Javascript.</p>

<p>Node is not a programming language and Node is also not a framework. Node is a runtime enviroment for executing Javascript code.</p>

<p>Node is ideal for building highly-scalable,data-intensive and real time back end services that power our client applications.</p>

<p>Node is easy to get started and can be used for prototyping and agile development. It can also be used for building super fast and highly scaleable services. It's used in production by large companies such as Paypal, Uber, Netflix, Walmart and plenty more. Fun Fact at Paypal they rebuilt one of their Java and spring based applications using node and found that the node application was built twice as fast with fewer people, in 33% fewer lines of code and 40% fewer files and more importantly they double the number of request served per secong while decreasing the aversage response time by 35%. Node is an excellent choice for building highly scaleable services.</p>

<p>Another reason to be using Node is that in Node applications we use Javascript so if you're a front end developer and know Javascript. You can reuse your Javascript skills and transitions to be a fullstack developer and get a better job with better pay. With this we can use javascript on the frontend and the back end and the source code will be cleaner anf more consistent. This allows us to use the same naming conventions, tools, and best practices. </p>

<p>Final reason to be using node is because it has the largest ecosystem of open-sourced libraries available to you. So for pretty much any features or building blocks you want to add to the application there is a free open source library out there that we can use. So we don't need to build everything from scratch.</p>

<h3>How Node Works:</h3>

<p>The reason why Node applications are highly-scalabe is because of the non-blocking or asychronous nature of Node. What does this mean take a look at the following metaphor. A waiter takes your order and gives it to the kitchen. They then move to another table while the kitchen is cooking your food. This allows the waiter to serve different tables while the kitchen cooks. So now the waiter doesn't have to wait on the kitchen to make a meal before making another order. This is what we call non-blocking asynchronous architecture and thats how Node applications work. The waiter is like a thread allocated to handle a request. So a single thread is used to handle multiple request.</p>

<p>In contrast to non-blocking asychronous architecure we have blocking or synchronous architecture. So going back to the restuarant example. Imagine if we go to another restuarant and here at this restuarant a waiter is allocated to you. They take your order and give it to the kitchen now they are sitting in the kicthen waiting for them to prepare your meal. At this time they are not doing anything to prepare the meal. They are waiting not doing anything else. They are not going to take a order from another table until your meal is ready. This is what we call blocking or synchronous architecture and this is how applications with frameworks like ASP.NET or rails work out of the box. So when we recieve a request on the server a thread is allocated to handle that request. As part of handling that request it is likely that we are going to query a database and it sometimes may take a while until the result is ready. When the database is executing the query that thread is sitting there waiting. It can't be used to serve another client. So, we need a new thread to serve another client now imagine what would happen if we have a large number if concurrent clients at some point we are going to run out of threads to serve these clients. So new clients have to wait until 3 threads are availiable or if we don't want them to wait we need to add more hardware. So with this kind of architecture we are not utilizing our resources efficiently. This is the problem with blocking or synchronous architecture.</p>

<p>Node Applications are asynchronous by default. We have a single thread to handle all request. When a request arrives that single thread is used to handle that request. If we need to query a database, our thread doesn't have to wait for the database to return the data. While the database is executing our query that thread will be used to serve another client. When the database prepares the results it puts the message in what we call a event queue. Node is consistently monitor this queue in the background. When it finds an event in this queue it will take it out and process it. This kind of architecture makes Node ideal for building applications that include a lot of disk or network access. We can serve more clients without the need to throw in more hardwareand that's why Node applications are highly scaleable.</p>

<p>Node should not be used for CPU-instensive like video encoding or an image manipulation service. In these kind of applications we have a lot of calculations that should be done by CPU and few operations that touch the file system or the network. Since Node applications are single threaded when performing the calculations to server one client, other clients have to wait and that's why node shouldn't be used for CPU intensive applications. It should only be used for building data intensive and real time applications.</p>

<h2>Table of Contents</h2>
<li><a href='#section1'>Node Module System</a></li>



<h2 id=section1>Node Module System</h2>

