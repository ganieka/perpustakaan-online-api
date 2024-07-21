const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust as per your requirement
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'perpustakaan'
});

// Export the pool so it can be used in other modules
module.exports = pool;
