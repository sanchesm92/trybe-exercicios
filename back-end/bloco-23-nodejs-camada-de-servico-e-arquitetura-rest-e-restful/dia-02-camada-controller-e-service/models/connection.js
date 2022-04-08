const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'felipe',
  password: '95370856',
  database: process.env.model_example
});

module.exports = connection;