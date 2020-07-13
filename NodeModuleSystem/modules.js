//  remeber in the last sectioln that we learned that in the client side
//  Javascript that we run inside browsers 
// when we declare a variable or a function that it is added to the global scope 
// for example

var sayHello = function () {
    // this function is added to the global scope and it's available 
    // via the window object 
}

// however there is a problem with this behavior 
// in a real world application we often split our javascript code into mulitple files
// so its possible that we have 2 files and in both those files we define the function above 
// with the same exact name 
// hecause this function is added to the global scope when we define this function in another file 
// the new definition is going to override the previous definition 
// this is the problem with the global scope 
window.sayHello();

// in order to build reliable and maintainable applications we 
// should avoid defining variables and functions in the global scope 
// instead we need modularity we need to create small building blocks or modules where we define 
// our variables and functions 
// so two variables and functions with the same name don't override a variable or function defined somewhere else
// they would be encapsulated inside of that module

// now at the core of node we have this concept called module
// every file in a node application is considered a module 
// the variables and functions defined in that function or module are a scope to that file 
// In OOP we say that they are private they are not available outside that
// container, outside that module if you want to use a variable or a function defined in a module
// outside of that module you need to explicity export it and make it public (we'll take a look at that in the next lecture)

// What we need to take away from this lecture is that every Node application has at least onefile or one module 
// which we call the main module 

// so in this case this modules.js is our main module

// lets take a look at this module 

// so this module object here may appear to be global
// so we may think we can access it via global object 
// but it is not global and we will find out why soon

// so when we log this in node terminal 
console.log(module);

// we get a object module its a json object with key value pairs 
// we have ID every module has a ID or a unique identifier

// we have exports, parents, file name which is the complete path to that file 
// loaded which is a boolean that determines if this module loaded or not 
// we have children and paths 

// so remember in node every file is a module and the variables and functions defined 
// and in that file are a scope to that module they are not available outside of that module 