// *NOTE* don't forget to look at the notes 
// first we want to load the express module
const express = require('express'); // this returns a function
const app = express(); // this returns an object of type express by convention we call this object app

// the constant app is used to represent our application
// for this lecture we are going to use .get enpoint 
// this method takes 2 arguments
// the first argument is the path to the url  
// / represents the root of the website
// the second argument is a call back function
// this is the function that will be called when we have a http request to this endpoint
// the callback will have 2 arguments (request, respond)
app.get('/', (req, res) => {
    // the req object has a lot of useful properties and uses info about the incoming request (look to notes for something related to this)
    // when we get the http request to the root of the website let's
    // respond with hello world

    // this is how we define a route 
    res.send('Hello World1');
});

// let's make another route
app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
    // since we are using express we don't have to use json.stringify for this part at least
})

// now all we need to do is listen for the port
// optionally we can pass the function that will be called 
// when the application starts listening on the given port
app.listen(3000, () => {
    console.log('Listening on port 3000....');
});

// in terminal run node nameOfFile
// to stop listening type control + c

// things to pay attention to:
// we don't have those if blocks they define by calling app.get 
// with this stucture as our app grows we can move some of these around to different files
// for example  we can move all the routes related to courses to a seperate file like courses.js

// express gives our application a skeleton, a stucture.