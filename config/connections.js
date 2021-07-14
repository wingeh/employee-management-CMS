const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: process.env.PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
    
  module.exports = connection;