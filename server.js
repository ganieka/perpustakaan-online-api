const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Import controllers
const kategoriController = require('./controllers/kategori.controller');
const bukuController = require('./controllers/buku.controller');

// Routes
app.get('/api/kategori', kategoriController.getAllCategories);
app.get('/api/buku', bukuController.getAllBooks);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});