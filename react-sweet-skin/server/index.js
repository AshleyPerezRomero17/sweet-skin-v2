const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

let mysql = require("mysql");

const connection = mysql.createConnection({
  host: "database-sweet-skin.c2c2iwesvmcx.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Ap200310173!",
  database: "sys",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error connecting to mysql: " + err.message);
  }
});

app.get(`/`, (req, res) => {
  connection.query("SELECT * FROM Products", function (err, result) {
    if (err) {
      return console.error("error: " + err.message);
    }

    res.json(result);
  });
});

app.listen(3001);
