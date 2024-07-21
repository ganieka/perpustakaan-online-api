const pool = require('../db');

// Example model function to get all books
function getAllBooks(callback) {
  pool.query('SELECT * FROM buku', (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
}

module.exports = {
  getAllBooks
};