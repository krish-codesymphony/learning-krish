const mysql = require('mysql2/promise');

exports.pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "kp@mysql",
    database: "theoffice",
    connectionLimit: 10,
});