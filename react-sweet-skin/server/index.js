const express = require("express");  // This imports the express module
const app = express();  // This creates an Express application

const cors = require('cors');  // This imports the cors module
app.use(cors({
    origin: '*'  // This sets the origin of the CORS policy to '*' (i.e., any origin is allowed to access the server)
}));

let mysql = require("mysql");  // This imports the mysql module

// This creates a MySQL connection with the specified host, user, password, and database
const connection = mysql.createConnection({
  host: "database-sweet-skin.c2c2iwesvmcx.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: process.env['DATABASE_PASSWORD'],
  database: "sys",
});

// This connects to the MySQL server
connection.connect(function (err) {
  if (err) {
    return console.error("error connecting to mysql: " + err.message);  // This logs an error message if there is an error connecting to the MySQL server
  }
});

// This creates a GET route that retrieves all products from the 'Products' table in the MySQL database and sends the result as a JSON response
app.get(`/`, (req, res) => {
  connection.query("SELECT * FROM Products", function (err, result) {
    if (err) {
      return console.error("error: " + err.message);  // This logs an error message if there is an error executing the MySQL query
    }

    res.json(result);  // This sends the result of the MySQL query as a JSON response
  });
});

app.listen(3001);  // This starts the Express server on port 3001
