// We are gonna look at how to use the path module

// the argument that we gave to the require function
// Node assumes it is a built in module 
// if there is not a built in module by the name specified here
// then node looks for the existence of a relative path to a file in this application

// if we had ./ or ../ then Node would assume that it is a file in the application 

const path = require('path');

// this is a object with a lot of useful methods 
// the method we are going to use is the parse() method

// lets pass one of the module wrapper functions arguments in and see what is returned

const pathObj = path.parse(__filename);

console.log(pathObj);
// lets run this in the terminal
// this returns the path to this file in the terminal