const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const courses = [{
        id: 1,
        name: 'course1'
    },
    {
        id: 2,
        name: 'course2'
    },
    {
        id: 3,
        name: 'course3'
    }
];

app.get('/', (req, res) => res.send('NANI!'));

app.get('/api/courses', (req, res) => res.send(courses));

app.post('/api/courses', (req, res) => {
    const {
        error
    } = validateCourse(req.body); // result.error 

    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    // go to notes line 11
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) res.status(404).send('ID is non-existent');

    // this is called object destructing 
    // with object destructing when declaring a variable or constant we use {} and then add the property of the object
    const {
        error
    } = validateCourse(req.body); // result.error 

    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    // instead of validating req.body lets validate the agrument being passed through the method
    return Joi.validate(course, schema);
}

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) res.status(404).send('ID does not exist');
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))