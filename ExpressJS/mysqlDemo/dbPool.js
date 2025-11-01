const mysql = require('mysql2/promise');

exports.pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "kp@mysql",
    database: "projectusers",
    connectionLimit: 10,
});

// exports.pool = pool;