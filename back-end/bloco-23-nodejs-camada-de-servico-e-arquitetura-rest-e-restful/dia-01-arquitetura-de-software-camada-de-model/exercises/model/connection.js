// models/connection.js
const mysql = require('mysql2/promise');
const connection = mysql.createPool({
host: 'localhost',
user: 'felipe',
password: '95370856',
database: 'exercise_23_1' });

module.exports = connection;