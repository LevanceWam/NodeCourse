// here we are going to learn how node makes everything in its file private 
// in the terminal we was supposed to recieve an error 
// and this function is returned
// (function (exports, require, module, __filename, __dirname) {
// so in node, Node isn't actually executing the code below directly
// it wraps it inside of a function. the function above

// so at run time the code is going to be converted into something like the function above
// so what needs to be taken away here is that node does not execute code directly 
// it will always wraps the code inside of each module inside if this function

// lets take a look at the arguments 

// remember the require function
// it appears to be global but it is not
// it is local to each module. so in every module require is one of the 
// arguments that is passed to this function

// this function is known as the module wrapper function

// lets take a look at the exports argument
// exports is a shortcut to module.exports
// so go to the exports at the bottom of the page to see what I mean

// next we also have filename and dirname which represents the name of this file and the path

console.log(__filename);
console.log(__dirname);


// var x = ; // the error we needed 

var url = 'http://mylogger.io/log';

function log(message) {
    // Send HTTP request
    console.log(message);
}

module.exports = log;

// // we can write:
// module.exports.log = log;

// // but we can also write it as 
// exports.log = log;

// // but we can not reset this exports like how we did module.exports = log;
// // so this would not work:
// exports = log; // reference to module.exports
// // this is because this is a reference to module.exports
// // we can not change that reference 
// })