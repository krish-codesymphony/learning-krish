import express from 'express';
import bodyParser from 'body-parser';
import { pool } from './dbConfig.js';

const app = express();
app.use(bodyParser.json());
const PORT = 8081;
let query = "SELECT u.username, u.role, ed.department, ed.designation, ed.salary, ed.dateJoined, CONCAT(pd.firstName, ' ', pd.lastName) AS 'FullName', pd.gender, pd.dob, pd.email, pd.phone, pd.address, pd.city, pd.state, pd.country, u.isActive FROM theoffice.users AS u JOIN theoffice.employmentdetails AS ed JOIN theoffice.personaldetails AS pd ON ed.userId = u.userId AND pd.userId = u.userId WHERE 1";

app.get("/", (req, res) => {
    res.send("welcome");
});

app.get("/all", (req, res) => {
    const { isActive, gender, city, state } = req.query;
    if (isActive) {
        query += ` AND u.isActive = ${Boolean(isActive)}`;
    }
    if (gender) {
        query += ` AND pd.gender = '${gender}'`;
    }
    if (city) {
        query += ` AND pd.city = '${city}'`;
    }
    if (state) {
        query += ` AND pd.state = '${state}'`;
    }
    pool.query(query).then((data) => res.send(data[0]))
});

app.get("/users", (req, res) => {
    pool.execute("SELECT * FROM users")
        .then(result => res.send(result[0]))
        .catch(err => res.send(err));
});

app.get("/employmentDetails", (req, res) => {
    pool.execute("SELECT * FROM employmentDetails")
        .then(result => res.send(result[0]))
        .catch(err => res.send(err));
});

app.get("/personalDetails", (req, res) => {
    pool.execute("SELECT * FROM personalDetails")
        .then(result => res.send(result[0]))
        .catch(err => res.send(err));
});


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));