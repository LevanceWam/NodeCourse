// Quite often when we want to raise an event we also want
// to send some data about that event
// For Example:
// in the looger module when we when we log a message perhaps our remote login service will
// generate an id for that message. perhaps we want to return that ID to the client  
// or it may give us a URL to access the logged message directly 


const EventEmitter = require('events');
const emitter = new EventEmitter();


// Register listener
// now when registering a listener here we can also use the event argument
// when passing the parameter we can call it whatever we want 
// but the common name is arg, or e for event, or eventArg
emitter.on('messageLogged', (arg) => {
    console.log('calling listener', arg);
});



// raise an event
// so here when raising an event we can add additional agruments which we refer to as event argument
// so we can add an event ID like 1 and a url
// but instead of having magic values lets encapsulate them into values 
// so lets create an object and give it a couple of properties 

// we refer to this as event argument
emitter.emit('messageLogged', {
    id: 1,
    url: 'http://'
});

// if we run this in the terminal now with 'node nameOfFile.js'
// the arg in the listener will display the objects in the event we are raising

// lets try to make these functions simpler with the arrow functions we learned in ES6
// all we have to do is remove the keyword function and after the parameter just add the big arrow