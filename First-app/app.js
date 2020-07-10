// With node we can write regular JS 
// Just like the JS we would write for browsers

function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Vance');

// to run this in the terminal we go to the current folder and run:
// 'node nameOfFile.js'

// remember that node is a c++ program it includes 
// chrome's V8 Js engine so the file we are going to pass
// to node, Node is going to give it to v8 for execution

// check this out

console.log(window);
// this will return a error window is not defined
// in node we do not have window or document objects these are part of the run time 
// enviroments that we get with browsers

// in node we have other objects to work with files to the 
// operating systems to the network and so on 