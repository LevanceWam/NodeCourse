const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

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
            isPublished: true,
        })
        .or([{
                price: {
                    $gte: 15
                }
            },
            {
                name: /.*by*/i
            }
        ])
        .sort({
            price: -1
        })
        .select({
            name: 1,
            author: 1,
            price: 1
        });
}
async function displayCourse() {
    const courses = await getCourses();
    console.log(courses);
}

displayCourse();