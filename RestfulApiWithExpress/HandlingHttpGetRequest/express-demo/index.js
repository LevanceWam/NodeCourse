const express = require('express');
const app = express();

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



app.get('/', (req, res) => res.send('Hello mortals'));

// we are going to set this so it will list all the courses in the array
app.get('/api/courses', (req, res) => res.send(courses));

app.get('/api/courses/:id', (req, res) => {
    // we need to write some logic in order to look for the course with the given id
    // let's use the array method find
    // this req.params.id returns a string so in order to make sure 
    //  it'll work properly we will use parseInt to convert the string into a integer
    const course = courses.find(course => course.id === parseInt(req.params.id));

    // if we don't find a course with a given id by convention we should return a responde with the http status code 404 status not found
    if (!course) res.status(404).send('The Course with the given ID was not found');
    res.send(course);
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}..`));