// To load a module we use the require function
// this is one of the functions in Node we don't have this in browsers
// it takes one argument and thats the name or path of the target module you want to load
// the require function returns the object that is exported from this target module

// const logger = require('./creatingAModule');
const log = require('./creatingAModule');

// now that we put the object in a variable we can call the
// method we made in the createAModule.js file

// logger.log('message');

// when we run this in the terminal we will get the message we define in the logger.log

// in recent JS we have the ability to define constant so as best practice
// when loading a module using the require function its better to 
// to store the result in a constant

// this is just to make sure we don't change the value of logger by accident 

// by the way we have tools out there that check our JS code for errors
// so by using these constructs properly we can prevent these errors
// from happening at runtime

// one of these popular tools is called jshint

// in the terminal we can run 'jshint nameOfFile.js'
// it will return any errors if any in the file

// so with tools like js hint we can scan all of our js code for errors like that 

// so in the future we may want to just export a single function instead of 
// exporting a object
// a object would be useful if we were exporting 
// multiple methods or properties 

// in the createAmodule.js I made the changes to the export so we can 
// just export the function needed for this file

// now we can call log directly from the module instead of an object

log('messaage');