<h1 id='home'>NodeCourse</h1>

<h3>IMPORTANT</h3>

<p>There is a slight change in my file structure going forward while learning node. The title of the skill I wll be learning is going to be the name of the folder. This is so that the files can match the name of the one's I see in the tutorial and when I come back to reference the skill it will be easier to find. The first 5 videos of the first section does not follow this will go back to fix at a later time.</p>

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
<li><a href='#section2'>Node Package Manager</a></li>
<li><a href='#section3'>Building RESTful API's with Express</a></li>



<h2 id=section1>Node Module System</h2>

<h4>Global Object</h4>

<p>In Node we do not have a window object. The global object in node is called global. Unlike browser applications, variables we define are not added to global. This is because all the variables and objects we defined are not added to the global object they are only a scope to this file. So they are not available outside of this file and this is because of Node's modular system.</p>

<h4>Modules</h4>

<a href='https://nodejs.org/docs/latest-v12.x/api/'>Node Docs</a>

<p>Here is a link to the modules that we covered in this section. We can find all of the methods, properties and classes in this section.</p>

<p>Every file in a Node application is a module. Node automatically wraps the code in each file with an IIFE (Immediately-invoked Function Expression) to create scope. So, variables and functions defined in one file are only scoped to that file and not visible to other files unless explicitly exported.</p>

<p>To export a variable or a function from a module we have to module.exports like this:</p>

```
module.exports.sayHello = sayHello;
```

<p>To load a module, use the require function. This function returns the module.exports object exported from the target module: </p>

```
const logger = require(‘./logger’);
```
<a href="#home">Top</a>

<h2 id=section2>Node Package Manager</h2>

<h4>NPM</h4>

<a href="https://www.npmjs.com/package/check-node-version">npmjs.com</a>

<p>Node Package Mananger (NPM) is a command line tool as well as a registry of third party libraries that we can add to our Node Applications. Pretty much any kind of functionality we want to add to an application there is most likely a free open sourced library or package or Node module on NPM registry.</p>

<h4>Package.json</h4>

<p>Package.json is a json file that includes some basic information about your application or our project. Things like the name, version, authors, address of the git repository, it's dependencies and so on. Basically a bunch of metadata about the application. All Node applications by standard have a package.json.</p>

<p>So before adding any node packages to our application. We have to create a package.json file</p>

<p>To create a package.json file we run this command:</p>

```
npm init
```

<p>There is a shorter way to create a package.json:</p>

```
npm init --yes
```

<p>By adding this yes flag this allows us to skip the basic questions about our project. This gives us a package.json with default values.</p>

<h4>Installing Packages</h4>

<p>To install third party packages we would run this in the terminal:</p>

```
npm i nameOfPackage
```

<p>If we go on npmjs.com we can search and find the package that is best for our project. Once we find the package we would click on it and it will show us the correct way to install it. Along with the documenation and source site.</p>

<p>All the installed packages and their dependencies are stored under node_modules folders. This folder should be excluded from the source control.</p>

<p>After installing packages we need to be able to use them. Some packages are able to be used in files. Others can be used in terminal, so when installing a package please read the documentation to properly learn how to use them.</p>

<h4>SemVer</h4>

<p>Node packages follow semantic versioning: major.minor.patch. Example: "mongoose": "^4.13.6".</p>

<h5>Major</h5>

<p>The first number '4' is what we call the major version. The major version is when we add a new feature that can potentially break the exisiting applications that depend upon mongoose then they will increase the major version to 5.0.0. The minor and the patch are set to 0 because in this version no new minor or patch updates have been added or found.</p>

<h5>Minor</h5>

<p>The second number '13' is what we call the minor version. The minor version is used for adding minor features that won't the existing API so if the mongoose team add a new feature with out breaking the exisiting API they would increase the minor version to 4.14.0. 0 beacuse in this version they haven't found a bug yet so that version could be unstable and as they find and fix the bugs they will increase the patch version.</p>

<h5>Patch</h5>

<p>The third number '6' is what we call the patch version/release this is used for bug fixes. So if in the future the developers of mongoose find a bug in the current version they will fix the bug and release a new version and that version would be 4.13.7, So when ever a bug is fixed they will increase the patch version.</p>

<p>We have 2 characters that are very important in semantic versioning caret '^' and tilda '~'. The Caret character tells npm that we're interested in any version of a package as long as the major version nmber matches the one we have so if there is a newer minor or patch version available it will be interested in that package as well. Another syntax that does the same thing without the caret character is like this 4.x this is equal or the same to ^4.13.6. Next is Tilda, Tilda tells npm we are interested in any version as long as the major version and the minor version matches what we have installed the alternative syntax to specify this version is like this 4.13.x so if there is a newer patch release we will be interested in this version as well. The caret and tilda characters help us kep the applications up to date with the latest releases of these dependencies.</p>

<p>However, this can sometimes cause an issue in the real world. For example lets say mongoose releases a version ~4.13.7 they fixed a bug but they may break something else this can interfere with our application. In that case  we want to make sure that we are using the exact same version. So if someone checks out this code from the repo in the future we want to make sure that we have the exact same version of mongoose that we used on day one. To do this all we have to do is remove the caret or tilda character like this: 4.13.6, So the next time we install we get the exact version.</p>

<h4>Node_Modules Folder</h4>

<p>Our node_modules folder in real life projects overtime will gain a lot of folders and files over time. When pushing our code to a repositry we want to avoid sending this up because everytime someone looks at our code or pulls it they are going to get those files. This is where our dependencies come to help us out. So if we look inside of our package.json we will see that our dependencies are stored here with npm along with the dependencies we can restore the versions of the dependencies on any machine. If someone wanted to download the application or if we deleted the node_modules folder all we have to do to get them back is to run npm install. It will look at our dependencies and install everything.</p>

<p>This means we need to include a .gitignore in our project that way we don't send up all of the node_modules up.</p>

<h4>DevDependencies</h4>

<p>Dependencies that are only used for developments. These dependecies are development dependecies and they should not go in a production enviroment where we deploy our application. We have tools for running a unit test, tools for doing static analysis on our code we have tools for bundling our JS code and so on. </p>

```
<!-- To save a dev dependency -->
npm install NameOfPackage --save-dev
```

<h4>Useful npm Commands</h4>

```
 <!-- Install a package -->
 npm i NameOfPackage
 
 <!-- Install a specific version of a package  -->
 npm i NameOfPackage@version
 
 <!-- Install a package as a development dependency -->
 npm i NameOfPackage —save-dev
 
 <!-- Uninstall a package -->
 npm un NameOfPackage
 
 <!-- List installed packages  -->
 npm list —depth=0
 
 <!-- View outdated packages -->
 npm outdated
 
 <!-- Update packages  -->
 npm update 
 
 -To install/uninstall packages globally, use -g flag. 
 ```

<a href="#home">Top</a>

<h2 id=section3>Building RESTful API's with Express</h2>

<h4>Express</h4>

```
 npm install express
```

<p>Express is a lightweight framework for building web applications</p>

<h4>RESTful Services</h4>

<p>RESTful services also called RESTful API's</p>

<h4>Client Server Architecture</h4>

<p>Most applications we use these days follow this architecture. The app itself is the client or the front-end part. Under the hood it needs to talk to the server or the backend to get or save the data. This communication happens using the http protocol. The same protocol that powers our app. So on the server we expose a bunch of services that are accessible via the http protocol. The client can then directly call these services by sending http request.</p>

<p> Now this is where REST comes in. REST Is short for Represential State Transfer. This was introduced by a PhD student as part of his thesis. But theory aside REST is basically a convention for building these http services. So we use simple http protocol prinicples to provide support to Create, Read, Update, and Delete data. We refer to these operation all together as CRUD.</p>

<p> Here's a Real world example let's say we have a company vidly for renting out movies. We have a client app where we manage the lists of our customers. On the server we should expose a service and an endpoint like this: vidly.com/api/customers. So the client can send http request to this endpoint to talk to our service. There are somethings we need to know about the endpoint.</p>

 <p> First, the address can start with http, or https. It depends on the application and it's requirements. If we wanted the data to be exchanged on a secure channel, we would use https. After that we have the domain of the application. Next we have /api this is not compulsory, but you see a lot of companies follow this convention to expose their RESTful services. They include the word API somewhere in the address. It can be after the domain or it can be subdomain like api.vidly.com. After that we have /customers that refers to the collection of customers in our application. In the REST world we refer to this part as a resource. We can expose our resources such as customers, movies, rentals and other endpoints So this is the endpoint to work with the customers such as updating a customer this would be done by sending an http request to this endpoint.</p>

 <p>The type of http request determines the kind of operation. so every http request has what we call a verb or a method that determines its type of intention.</p>

 <p>Here are the standard http methods: </p>

<ul>
 <li>GET // Gets data</li>
 <li>POST // Creating data</li>
 <li>PUT // For updating data</li>
 <li>DELETE // for deleting data</li>
</ul>

<p>Let's Explore each of these using our customer example.</p>

<h5>GET</h5>

<p>To get a list of all the customers we should send a http GET request to our address (GET /api/customers) note: the full name customer here. It indicates a list of customers. So when we send an http get request to this endpoint, our service will send us something like an array of customer objects. If we want a single customer, we should include the ID of the customer like this: (GET /api/customers/1) then the server will respond with the customer object.</p>

<h5>UPDATE</h5>

<p>To update a customer we should send a http put request like this: (PUT /api/customers/1). Note again here we are specifying the ID of the customer to the data. But also we should note that the customer object in the body of the request. So this is a complete representation of the customer object with updated properties. They send this to the server and the server updates the customer with a given ID according to these values.</p>

<h5>DELETE</h5>

<p>To delete a customer, we should send an http delete request to this endpoint: (DELETE /api/customers/1). Here we don't need to include the customer object in the body of the request, because all we need to delete the customer is the ID.</p>

<h5>POST</h5>

<p>To create a customer we need to send a http post request to this endpoint: (POST /api/customers). Note that since we are adding a new customer we are not dealing with a specific customer, So we don't have an ID in the address we are woring with a collection of customers, so we are posting a new customer to this collection. This is why we should include the customer object in the body of the request. The server gets this object and creates the customer for us.</p>

<p>This is the RESTful convention, we expose our resources such as customer using a simple,meaningful address and support various operations around them, such as creating or updating them using standard http methods.</p>

<h4>Nodemon</h4>

```
sudo npm i -g nodemon

<!-- Run a app with nodemon -->
nodemon nameOfPackage
```

<p>We use Nodemon to watch for changes in files and automatically restart the node process. This allows us to stop the tediuos process of having to start and close the server with node. </p>

<h4>Environment Variables </h4>

<p>An environment variable is basically a variable that is part of the environment in which a process runs. It's value is set from outside this application. We can use environment variables to store various settings for an application. To read an environment variable, we use process.env.</p>

```
const port = process.env.PORT || 3000;
app.listen(port);
```
<a href="#home">Top</a>