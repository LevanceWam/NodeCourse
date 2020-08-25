const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('connected to the database'))
    .catch(err => console.error('Could not connect to MongoDB', err));

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

const Course = mongoose.model('course', courseSchema);

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
    const pageNumber = 2;
    const pageSize = 10;

    const courses = await Course
        .find({
            author: 'vance',
            isPublished: true
        })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({
            name: 1
        })
        .select({
            name: 1,
            tags: 1
        });
    console.log(courses);
}

async function updateCourse(id) {
    const result = await Course.update({
        _id: id
    }, {
        $set: {
            author: 'Vance',
            isPublished: false
        }
    }, {
        new: true // this will show the updated content
    });
    console.log(result);
}

async function deleteCourse(id) {
    const result = await Course.deleteOne({
        _id: id
    });
    console.log(result);
}

removeCourse('5f3ac5176079562894e61933');