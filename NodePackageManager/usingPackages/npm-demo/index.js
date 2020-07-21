// let's practice using our package
// first lets use require to load the module

var _ = require('underscore');

// lets explain how the require function is working here
// so when we supplied the module name require assumes the module is a core module
// since we do not have a core module name underscore the require function thinks 
// maybe this underscore is a file or a folder in the project
// but in this case that is not happening because we aren't searching through folders with ./ 
// the next step it will assume this module we have specified here exists in the node_modules folder

// That is how the required function resolves a model

// now that we loaded it lets use it 
// we will head to underscorejs.org to look at the documentation on how to use the module

// we are going to use the contains method 
// this is how it works 
// we pass 2 arguments the first is an array and the second one is the value we are looking for in the array

var result = _.contains([1, 2, 3], 2);
console.log(result);

// now we run node index.js to get our result