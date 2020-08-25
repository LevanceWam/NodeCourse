const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to the Database'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now()
    },
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('course', courseSchema);

async function getCourses() {
    return await Course
        .find({
            tags: 'backend',
            isPublished: true
        })
        .sort({
            name: 1
        })
        .select({
            name: 1,
            author: 1
        });
}

async function displayCourses() {
    // the reason this function is created is because it is not the job of the 
    // getCourses function to display the courses its only function is to get the courses
    const courses = await getCourses();
    console.log(courses);
}

displayCourses();