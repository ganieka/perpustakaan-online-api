require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Import controllers
const kategoriController = require('./controllers/kategori.controller');
const bukuController = require('./controllers/buku.controller');
const { uploadImage, getImageBase64 } = require('./controllers/convert.controller');


// Routes
app.get('/api/kategori', kategoriController.getAllCategories);
app.get('/api/buku', bukuController.getAllBooks);
app.get('/api/buku/highest-rating', bukuController.getHighestRating);
app.post('/api/buku/filter', bukuController.getBooksByFilter);
app.post('/api/buku/id', bukuController.getBooksById);
app.post('/api/image', uploadImage, getImageBase64);
// app.use('/api/image', imageRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
