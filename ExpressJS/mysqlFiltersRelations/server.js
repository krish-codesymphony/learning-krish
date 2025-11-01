const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./dbPool').pool;

const app = express();
app.use(bodyParser.json());
const PORT = 8081;

app.get("/", (req, res) => {
    res.send("welcome");
});

app.get("/users", (req, res) => {
    pool.query("SELECT * FROM users")
        .then(result => res.send(result[0]))
        .catch(err => res.send(err));
});

app.get("/employementDetails", (req, res) => {
    pool.query("SELECT * FROM employementDetails")
        .then(result => res.send(result[0]))
        .catch(err => res.send(err));
});

app.get("/personalDetails", (req, res) => {
    pool.query("SELECT * FROM personalDetails")
        .then(result => res.send(result[0]))
        .catch(err => res.send(err));
});

 
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));