const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
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

async function createCourse() {
    const course = new Course({
        name: 'Cactus Care',
        author: 'Jack',
        tags: ['watering', 'soil'],
        isPublished: true,
        price: 15
    });

    try {
        const result = await course.save();
        console.log(result);
    } catch (ex) {
        console.log(ex.message);
    }
}

async function getCourses() {
    return await Course
        .find({
            author: /.*jack*/i,
            isPublished: true
        })
        .limit()
        .sort({
            name: 1
        })
        .select({
            name: 1,
            tags: 1
        });
}

async function updateCourse(id) {
    const result = await Course.update({
        _id: id
    }, {
        $set: {
            author: 'Bob',
            isPublished: false
        }
    }, {
        new: true
    });
    console.log(result);
}

async function removeCourse(id) {
    const result = await Course.deleteOne({
        _id: id
    });
    console.log(result);
}