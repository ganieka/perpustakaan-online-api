const pool = require('../db');

// Example model function to get all categories
function getAllCategories(callback) {
  pool.query('SELECT * FROM kategori', (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
}

module.exports = {
  getAllCategories
};