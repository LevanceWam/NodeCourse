const Joi = require("joi");
const logger = require("./logger");
const auth = require("./auth");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true // notes line 34
}));
app.use(express.static('public'));

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

app.get("/", (req, res) => res.send("helloWorld"));

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