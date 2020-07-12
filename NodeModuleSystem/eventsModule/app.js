// One of the core concepts in node is the concept of events
// in fact a lot of node's core functionality is based on this concept of events

// An event is basically a signal that indicates that something
// has happened in our application
// for example in Node we have a class called http that
// we can use a class called http that we can use to build a web server
// so we listen on a given port and everytime we recieve a request on that port
// that http class raises an event now our job is to respond to that event
// which basically involves reading that request and returning the right response

// lets try working with the Event module

// notice that here in the naming that the first letter of each word
// is uppercase this is a convention that indicates that this event emitter is a class
// it is not a function it's not a simple value its a class

// A class is a container for properties and methods 
// another definition, a container for a bunch of related methods and properties 

// in order to start using the EventEmitter first we need to create an instance of this class 
const EventEmitter = require('events');
// here the emitter is an object
// to tell the difference between a class and object here is a metaphor

// a class is like human
// an object is an actual person 

// a class defines the properties and behaviors of a concept of a human
// An object is an actual instance of that class

// so the first EventEmitter is a class the blueprint that defines what EventEmitter can do

// but the second emitter below is an actual object this is the one that we're going to use in the application
// emitter has a lot of methods 
const emitter = new EventEmitter();

// even though we have a lot of methods most of the time we only use 2
// first is emit, we use this to raise an event 

// register a listener
// normally we can use the addListener method but we have an alias we can use and that is (on() )
// on and addListener are the samething
// this method takes 2 arguments
// the first is the name of the of the event 
// second is a callback function for the actual listener
emitter.on('messagedLogged', function () {
    // this will be called when the event is raised.
    console.log('listener called again');
});

//Raise an event 
emitter.emit('messagedLogged'); // if we run this now nothing is going to happen
// the reason why is because we raised an event here but nowhere in our application we have a registered listener
// that is interested in the event

// a listener is a function that will be called when that event is raised 

// lets make a listener 
// please go before the emitter to declare a listener 