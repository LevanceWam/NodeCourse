const debug = require('debug');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require("joi");
const logger = require("./logger");
const auth = require("./auth");
const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use(helmet());

// Configuration
console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);
console.log(`Mail password: ${config.get('mail.password')}`);

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enable');
}

app.use(logger);
app.use(auth);

const courses = [{
        id: 1,
        name: "course1",
    },
    {
        id: 2,
        name: "course2",
    },
    {
        id: 3,
        name: "course3",
    },
];

app.get("/", (req, res) => res.render('index', {
    title: 'My Express app',
    message: 'Hello'
}));

app.get("/api/courses", (req, res) => res.send(courses));

app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(
        (course) => course.id === parseInt(req.params.id)
    );
    if (!course) return res.status(404).send("Invalid ID");
    res.send(course);
});

app.post("/api/courses", (req, res) => {
    const {
        error
    } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message());

    const course = {
        id: courses.length + 1,
        name: req.body,
    };
    courses.push(course);
    res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
    const course = courses.find(
        (course) => course.id === parseInt(req.params.id)
    );
    if (!course) return res.status(404).send("Invalid ID");

    const {
        error
    } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message());

    course.name = req.body.name;
    res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
    const course = courses.find(
        (course) => course.id === parseInt(req.params.id)
    );
    if (!course) return res.status(404).send("Invalid ID");

    const position = courses.findIndex(course);
    courses.splice(position, 1);
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required(),
    };
    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));