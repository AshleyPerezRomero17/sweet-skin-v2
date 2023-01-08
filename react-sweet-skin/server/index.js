// first we're importing the express package
const express = require("express");
// then storing it in a var called app
const app = express();

// parse application/json, we expect to parse json bc of the .json() 
app.use(bodyParser.json());
// Add database connection
// using get request method we're going to show the tasks when we call the index page
app.get(`/`, (req, res) => {
});

app.listen(3001);
