const Buku = require('../models/buku.model');

function getAllBooks(req, res) {
  console.log('Received request to fetch all books');
  Buku.getAllBooks((error, results) => {
    if (error) {
      console.error('Error fetching books:', error);
      return res.status(500).json({ error: 'Error fetching books' });
    }
    console.log('Fetched books:', results);
    res.json(results);
  });
}

function getHighestRating(req, res) {
  console.log('Received request to fetch all books');
  Buku.getHighestRating((error, results) => {
    if (error) {
      console.error('Error fetching books:', error);
      return res.status(500).json({ error: 'Error fetching books' });
    }
    console.log('Fetched books:', results);
    res.json(results);
  });
}

module.exports = {
  getAllBooks,
  getHighestRating
};