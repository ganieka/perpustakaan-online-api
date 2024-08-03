// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Enable CORS for all routes
app.use(cors());

// Import controllers
const kategoriController = require('./controllers/kategori.controller');
const bukuController = require('./controllers/buku.controller');
const imageRoutes = require('./routes/image.routes');

// Routes
app.get('/api/kategori', kategoriController.getAllCategories);
app.get('/api/buku', bukuController.getAllBooks);
app.get('/api/buku/highest-rating', bukuController.getHighestRating);

app.use('/api/image', imageRoutes);
// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
