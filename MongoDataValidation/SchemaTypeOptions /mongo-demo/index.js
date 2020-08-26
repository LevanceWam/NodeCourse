const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        // match: /pattern/
    },
    catergory: {
        type: String,
        required: true,
        enum: ['web', 'mobile'],
        lowercase: true,
        // uppercase: true,
        trim: true
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function (v, callback) {
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result);
                }, 4000);
            },
            message: 'A course should have at least one tag'
        }
    },
    date: {
        type: Date,
        default: Date.now()
    },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () {
            return this.isPublished;
        },
        min: 5,
        max: 200,
        get: v => Math.round(v),
        set: v => math.round(v)
    }
});

const Course = mongoose.model('course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Cactus family ',
        catergory: 'Web',
        author: 'Huncho',
        tags: ['watering', 'soil'],
        isPublished: true,
        price: 12.5
    });

    try {
        const result = await course.save();
        console.log(result);
    } catch (ex) {
        for (field in errors)
            console.log(ex.errors[field].message())
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

createCourse();