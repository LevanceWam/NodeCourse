// this is a file from an earlier section NodeModuleSystem/httpModule
const http = require('http');

// here we have a callback function that takes 2 parameters request and response
const server = http.createServer((res, req) => {
    // with this request object we can check the url of the incoming request
    // with this we can define various routes in our application

    // the thing about this approach is that although it works 
    // it is not very maintiable because as we define more routes for our app
    // we'll need to add more if blocks in this callback function

    // This is when the framework comes into the picture.
    // A framework gives our application a proper stucture so we can easiy add
    // more routes while keeping our application code maintiable.

    // *NOTE* there are plenty of frameworks for building web apps and web servers on top of node

    // Let's take a look at express 
    // first we go to npmjs to look up the package
    // we will continue note taking over in express-demo

    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }

    if (req.url === '/api/course') {
        res.write(JSON.stringify([1, 3, 5]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000....');