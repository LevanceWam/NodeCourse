const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/playground")
    .then(() => console.log('Connected to the database'))
    .error(err => console.error('Could not connect to MongoDB', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now()
    },
    isPublished: Boolean
});

const Course = mongoose.Model('course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Cactus Care',
        author: 'Jack',
        tags: ['watering', 'soil'],
        isPublished: true
    });
    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const courses = await Course
        // .find({
        //     author: 'vance',
        //     isPublished: true
        // })
        .find()
        .or([{
            author: 'vance'
        }, {
            isPublished: true
        }])
        .and([]) // this is similar to line 33
        .limit(10)
        .sort({
            name: 1,
            tags: 1
        })
        .select({
            name: 1,
            tags: 1
        });
    console.log(courses);
}

getCourses()