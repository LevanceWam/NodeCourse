const Joi = require('joi'); // this returns a class
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

app.get('/', (req, res) => res.send('HELLO HOW ARE YOU TODAY'));

app.get('/api/courses', (req, res) => res.send(courses));

app.post('/api/courses', (req, res) => {
    // define the schema
    // we set it to an object this is the shape of our course object
    const schema = {
        // so here we want to have the name property and set it to 
        name: Joi.string().min(3).required(),
    };
    // Now that we have a schema
    // now we call:
    const result = Joi.validate(req.body, schema); // this returns an object

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    // if (!req.body.name || req.body.name.length < 3) {
    //     // go to notes line 11
    //     res.status(400).send('Name is required and should be a minimum 3 characters');
    //     return; // add the return because we do not want the rest of the function to be executed
    //     // go to notes line 18
    // }

    const course = {
        id: courses.length + 1,

        name: req.body.name
    };
    courses.push(course);

    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Sorry ID does not exist');
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}...`));