// create and raise an event called logging 
// while raising this event we want to send some data
// that will be the message that we are going to log 

const EventEmitt = require('events');
const logging = new EventEmitt();

// Register the listener
logging.on('Logged', (e) => {
    console.log('Logging', e);
});


// Raise the event
logging.emit('Logged', {
    data: 'message'
});