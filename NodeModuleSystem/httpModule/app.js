// one of the powerful building blocks of node 
// is the httpModule that we use for creating networking apps

// for example we can create a web server that listens for http request on a given port
// with this we can easily create a backend service for our client applications
// like a web app we build with react, angular
// or a mobile application on a mobile device

// lets load the http server

const http = require('http');

// with this we can create a web server
// whats cool is that this server is a EventEmitter
// so it has all of the capabilites of EventEmitter that we saw previously

// so what we would commonly do is pass a callback function for the create server method 
const server = http.createServer((req, res) => {
    // now with this function, instead of working with a socket
    // we can work with actual request or response object
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    // now if we wanted to build a backend for web or mobile apps we need
    // to handle various routes example:
    // we wanted to return a list of courses
    if (req.url === '/courses') {
        // here we would want to return an array of objects
        // using json, so we use JSON.stringify
        // for simplicity we are just gonna return an array of number this time
        // so we pass the array through json.stringify which will 
        // convert this array into a string using json syntax and then we'll write it to the 
        // response
        res.write(JSON.stringify([1, 3, 5]));
        res.end();

        // now in the real world we're not going to use this http 
        // module to build a backend service for our apps 
        // the reason is because as we add more routes the code
        // gets more complex

        // as we add more of them in a linear way inside this callback function
        // so instead we use a framework called express which gives our app
        // a clean stucture to handle various routes
        // internally the expressframe work is built on top of the http module in Node

    }
});

// // so before listening we want to register a listener
// server.on('connection', (socket) => {
//     console.log('New connection...');
// });

// lets give our server a port
server.listen(3000);

console.log('listening on port 3000 ....');

// so when we run this application this server will listen on
// port 3000

// like we learned before everytime there is a new connection
// or request this server raises a event 

// now we see that this server object raises differernt kinds of events that you can respond too 
// in real world applications we are not going to respond to the connection event
// to build an http service this example is very low level

// so we are going to comment out the server on section
// an do it a different way

// we can run the app with node nameOfFile.js
// to stop the server control c
// later we will automate this so when ever we make changes it will update 