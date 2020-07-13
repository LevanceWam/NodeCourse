// now we are going to add a new module to this application
// we will refer to this file as logger like in the video

// this module is going to be for login messages and we are going to reuse 
// this module in various part of the application or potentially in other applictions

// lets imagine that we have to use remote login services for logging our messages

// like the websites out there that provides login as a service 
// they give us a url and we can send a http request to that url to log messages in the cloud


// this is implementation detail no other modules need to know about this 
var url = 'http://mylogger.io/log'; // this is made up
// we are going to send a http request to this endpoint to this url

//we need a function to take a message and in this function were going to send
// the http request

// to keep it simple we are going to focus just on the modularity we don't want to 
// get distracted with all the detals of sending http request 


function log(message) {
    // send http request 
    console.log(message);
}

// both the variable and log function is scoped to this module 
// they are private they're not visible from the outside

// however in module js our main module we want to use this logger module 
// we want to be able to call it from module.js 
// so we are going to make this public make it visible from the outside

// here we are going to use commonjs to export the object making it public

// so here we are adding the method log to the export object
// then we are simply setting it to this log function we have defined 

// module.exports.log = log;

// we can also export the url
// we can change the name of what is being exported to the outside
// so below we are going to url as endPointUrl

// In this case we do not need to export the url because this is purely implemenation detail
// so in real world applications every module might have several variables and functions 
// we only want to export a subset of these members to the outside because we want to keep this module easy to use 

// Time for a metaphor, think of a DVD player
// A DVD player has a few buttons on the outside and these are 
// the buttons or objects that we interact with 
// so these objects represent the public interface of a DVD player 

// but on the inside are the complex objects we dont need to know anything about these objects
// they're implementation detail and they can change significantly from one model to another
// but what we see on the outside is almost stable or static across different models 

// module.exports.endPoint = url;

// due to a later video we learned that we do not 
// have to export a object if we need the singler function
// we can just export the function to make it easier on us

module.exports = log;