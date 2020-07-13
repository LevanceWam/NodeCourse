// We are going to learn how to get information from the current operating system
// we can accomplish this with the os module

const os = require('os');

let totalMem = os.totalmem();
let freeMem = os.freemem();

// we can simplify this expression using a template string 
console.log('Total Memory: ' + totalMem);

// Template string
// ES6

console.log(`Free Memory: ${freeMem}`); // this returns the amount free amount of memory o 
console.log(`Total Memory: ${totalMem}`); // this returns the amount I used 

// run this in terminal by using node nameOfFile.js

// what is interesting is that before node we could never get this kind
// of information using javascript

// JS use to run inside of a browser and we could only work
// inside of the window or document objects we couldn't get 
// information about the operating system 

// but when using node our js code is executed outside of the browser
// or as some people like to say on the server
// with this we can get information about the operating system
// we can work with files, with the network