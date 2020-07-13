// in this file we are exporting a simple function log
// that just logs a message 
// well after that we want to raise an event
// then later in the app module we will listen for that event and do something

const EventEmitter = require('events');

let url = 'http://mylogger.io/log';

// now that logger is extending EventEmitter it now 
// has all of the capabilites that it's parent has
// we got rid of the emitter variable so we can use keyword 'this'

class Logger extends EventEmitter {
    log(message) {
        // send http request
        console.log(message);

        // Raise Event 
        this.emit('messageLogged', {
            id: 1,
            url: 'http://'
        });
    }

}

module.exports = Logger;

// Quick Recap:
// if we want to raise events in our apps to signal that something happened
// we need to create a class that extends EventEmitter
// with this that class will have all the functionality defined in 
// EventEmitter but we can add additional functionality
// in this case we have the ability to log a message
// then inside of the class whenever we want to raise an event you
// use the keyword 'this.emit' because 'this' reference the logger class itself
// which extends EventEmitter, so all the methods defined in EventEmitter 
// will be part of this class