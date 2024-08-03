// test.js
const Buku = require('./models/buku.model');

Buku.getAllBooks((error, results) => {
  if (error) {
    return console.error('Error fetching books:', error);
  }
  console.log('Books:', results);
});
