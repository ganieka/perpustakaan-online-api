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

function getBooksByFilter(data, callback) {
  console.log(data)
  var query = `
    SELECT * 
      FROM buku
    where 
      kategori_id in (
        SELECT id FROM kategori where nama like '%${data.kategori}%'
      )
      and nama like '%${data.nama}%'
  `
  pool.query(query, (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
}

function getBooksById(data, callback) {
  console.log(data)
  var query = `
    SELECT * 
      FROM buku
    where 
      id = ${data.id}
  `
  pool.query(query, (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
}

module.exports = {
  getAllBooks,
  getHighestRating,
  getBooksByFilter,
  getBooksById
};