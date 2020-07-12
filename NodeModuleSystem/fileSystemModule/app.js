// we are going to learn how to work with files in node
// using the file system module

const fs = require('fs');

// when we do (fs.) we see all of the methods defined in 2 forms
// it is sychronous/blocking and asynchronous/non-blocking
// for example we have access which is a asynchronous method 
// then we have access sync which is the synchronous method

// now even though we have these synchronous methods here we should
// try to avoid using them they are her purely for simplicity
// in a real world application we should use asynchronous methods
// because these are non-blocking 

// we are only using the synchronous form because it is easier to understand
// for the first argument we need to specify the path, this will return 
// all of the files and folders in the current folder
const files = fs.readdirSync('./'); // files will now be a string array
console.log(files); // this returns a array with the name of files in the folder

// let's take a look at the asynchronous form of this method
// just like the synchronous version the first agrument is the path
// all of these asynchronous methods take a function as their last argument 
// node will call this function when that asynchronous operation complete
// we call this function a callback 

// NOTE the little floating box in the IDE that tells you what a method or property does is called Intellisence

// in the intellisence the second parameter is a callback and this 
// is a function with 2 parameters, an error and result which in this case a string array
fs.readdir('./', function (err, files) {
    // NOTE this is not how we handle errors in real world apps later on we will learn how to properly deal with them
    if (err) console.log('Error', err);
    else console.log('Results', files); // this returns the same string array as the synchronous method
});

// Recap
// in order to work with files and directories in Node 
// first we need to require the fs module and then use one or more of the methods defined in this module
// all the methods comes in pairs asynchronous and synchronous 
// always prefer to use asynchronous methods.