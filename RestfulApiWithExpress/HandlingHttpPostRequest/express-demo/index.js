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

app.get('/', (req, res) => res.send('HEY THERE'));

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    // the reason we are using this url is because we are posting to the collection of courses
    const course = {
        // go to notes line 14
        id: courses.length + 1,

        // go to notes line 19
        name: req.body.name
    };
    courses.push(course);
    // go to notes line 37
    res.send(course);
    // go to notes line 42
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Sorry but this ID does not exist');
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to port ${port}...`));