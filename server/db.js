const mysql = require('mysql2/promise');
require('dotenv').config();

// Create the connection pool using environment variables so
// credentials are not hard-coded in the repository.
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'ductless',
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;