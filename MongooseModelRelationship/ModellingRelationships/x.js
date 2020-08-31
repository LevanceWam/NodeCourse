// trade off between query performance vs consistently 

// Using Reference (Normalization) -> consistently 
let author = {
    name: 'cactus'
}

let course = {
    author: 'id'
}

// Using Embedded Documents (Denormalization) -> Performance

let courses = {
    author: {
        name: 'misf'
    }
}

// Hybrid 
let authors = {
    name: 'yfb'
    // 50 properties
}

let cours = {
    author: {
        id: 'ref',
        name: 'hsh'
    }
}