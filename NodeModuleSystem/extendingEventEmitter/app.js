// In real world applications it would be rare that we 
// would work with the EventEmitter object directly
// Instead we would want to create a class that has all 
// of the capabilities of the EventEmitter and then you would use that class in your code

const EventEmitter = require('events');

// so far the raised event has been moved to the logger module inside of the log function
// now we are going to import that log function

// now when we run the application
// we are going to only see the message because the event listener won't be catch
// const log = require('./logger');
// log('message');

// so in terminal run 'node nameOfFile.js'
// right now it is only printing message
// the reason for this is because we are working with 2 eventemitters

const Logger = require('./logger');
const logger = new Logger();

// Register Listener
logger.on('messageLogged', (args) => {
    console.log('called listener with class', args);
});

logger.log('message');

// Quick Recap:
// instead of using a instance of EventEmitter we will 
// use a instance of the custom class that we defined 
// that extends EventEmitter