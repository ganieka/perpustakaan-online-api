const Kategori = require('../models/kategori.model');

// Example controller function to get all categories
function getAllCategories(req, res) {
  Kategori.getAllCategories((error, results) => {
    if (error) {
      console.error('Error fetching categories:', error);
      return res.status(500).json({ error: 'Error fetching categories' });
    }
    res.json(results);
  });
}

module.exports = {
  getAllCategories
};