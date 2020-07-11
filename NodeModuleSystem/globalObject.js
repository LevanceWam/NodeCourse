console.log(); // this is called a global object
// it is apart of the global scope so we can access it anywhere in any files

// we have a bunch of other objects and functions that 
// are also globally available in node for example we have:

setTimeout(); // We use this to call a function after a delay like a couple of seconds
// this is a part of standard JS we can use this on the client, browser, or node

// We also have:
clearTimeout();

setInterval(); // we use this to repeatedly call a function after a delay
clearInterval(); // we use it to stop the function with setInterval

// These are the global objects in JS

// Now in Node we have a couple other global objects that we're going to 
// learn later on

// in browsers we have a window object that represents our global scope
// so all of the variables and functions that are defined globally we can access them via this window object

window.console.log(); // this is basically console.log

// the js engine will prefix console.log with window because thats where this object is defined.
// similarly all the objects written above belong to the the window object.

// by the same token when we declare a variable 
var message = '';

// that variable is also available via the window object
window.message;

// but remember in node we do not have a window object instead 
// we have another object called global
// so all of the functions and objects we have here is accessible via the global object 
// so we can do 

global.console.log();
global.setTimeout();

// of course it is easier t