const pool = require('../db');

function getAllBooks(callback) {
  var query = "SELECT * FROM buku"
  pool.query(query, (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
}

function getHighestRating(callback) {
  var query = "SELECT * FROM buku order by rating desc limit 1"
  pool.query(query, (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
}

module.exports = {
  getAllBooks,
  getHighestRating
};