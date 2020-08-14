const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playgrond')
    .then(() => console.log('Connected to the Database'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
});

const Course = mongoose.model('course', courseSchema);
const course = new Course({
    name: 'Node course',
    author: 'vance',
    tags: ['node', 'backend'],
    isPublished: true
});