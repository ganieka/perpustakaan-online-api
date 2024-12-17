const multer = require('multer');
const Convert = require('../models/convert.model');

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Function to convert buffer to base64
const bufferToBase64 = (buffer, mimeType) => {
  return `data:${mimeType};base64,${buffer.toString('base64')}`;
};

// Controller function to handle file upload and convert to base64
const getImageBase64 = (req, res) => {
  // res.header('Content-Type', "multipart/form-data")
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const mimeType = req.file.mimetype;
  const base64Image = bufferToBase64(req.file.buffer, mimeType);

  // res.send(base64Image);
  const data = {};
  data.id = req.body.id
  data.image = base64Image
  // console.log(req)
  Convert.updateImage(data, (error, results) => {
    if (error) {
      console.error('Error fetching books:', error);
      return res.status(500).json({ error: 'Error fetching books' });
    }
    console.log('Fetched books:', results);
    res.json(results);
  });
};

// Middleware to handle file upload
const uploadImage = upload.single('file');

module.exports = {
  uploadImage,
  getImageBase64
};

