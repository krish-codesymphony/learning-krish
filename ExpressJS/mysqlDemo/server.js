const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./dbPool').pool;

const app = express();
app.use(bodyParser.json());
const PORT = 8081;

// display
app.get("/employees", (req, res) => {
    pool.query("SELECT * FROM employee;")
        .then(data => res.send(data[0]))
        .catch(err => res.send(err));
});

// insert
app.post("/employees", (req, res) => {
    const { id, firstName, lastName, email, streetAddress, roles, isActive } = req.body;

    const values = [id, firstName, lastName, email, streetAddress, roles, isActive.toString()]

    pool.query("INSERT INTO employee (id, firstName, lastName, email, streetAddress, roles, isActive) VALUES (?,?,?,?,?,?,?);", values).then((result) => {
        res.send(result);
    }).catch(err => {
        console.log('Error :>> ', err);
        res.sendStatus(400);
    })
});

// update
app.put("/employees/:id", (req, res) => {
    const { firstName, lastName, email, streetAddress, roles, isActive } = req.body;

    const values = [firstName, lastName, email, streetAddress, roles, isActive.toString(), Number(req.params.id)]

    pool.query("UPDATE employee SET firstName=?, lastName=?, email=?, streetAddress=?, roles=?, isActive=? WHERE id = ?;", values).then((result) => {
        res.send(result);
    }).catch(err => {
        console.log('Error :>> ', err);
        res.sendStatus(400);
    })
});

// delete
app.delete("/employees/:id", (req, res) => {
    const id = req.params.id;
    pool.query("DELETE FROM employee WHERE id = ?", [Number(id)]).then((result) => {
        res.send(result);
    }).catch(err => {
        console.log('Error :>> ', err);
        res.sendStatus(400);
    })
});
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));