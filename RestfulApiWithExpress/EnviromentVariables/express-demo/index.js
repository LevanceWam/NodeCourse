const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World Pie'));

app.get('/api/courses', (req, res) => res.send([1, 3, 4]));

// PORT
// process is a global object 
// it has a property called env (environment variables)
// after that we add the name of our environment variable in this case port
// so if the environment variable is set we will use that if not we will use 3000
const port = process.env.PORT || 3000;

// now we change the hard coded value to port and we make a slight change to the console log
app.listen(port, () => console.log(`Listening on ${port}`))
// lets run the app using nodemon (go to notes)