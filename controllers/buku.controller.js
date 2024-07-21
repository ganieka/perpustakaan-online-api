const Buku = require('../models/buku.model');

// Example controller function to get all books
function getAllBooks(req, res) {
  Buku.getAllBooks((error, results) => {
    if (error) {
      console.error('Error fetching books:', error);
      return res.status(500).json({ error: 'Error fetching books' });
    }
    res.json(results);
  });
}

module.exports = {
  getAllBooks
};