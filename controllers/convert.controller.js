const multer = require('multer');

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Function to convert buffer to base64
const bufferToBase64 = (buffer, mimeType) => {
  return `data:${mimeType};base64,${buffer.toString('base64')}`;
};

// Controller function to handle file upload and convert to base64
const getImageBase64 = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const mimeType = req.file.mimetype;
  const base64Image = bufferToBase64(req.file.buffer, mimeType);

  res.send(base64Image);
};

// Middleware to handle file upload
const uploadImage = upload.single('file');

module.exports = {
  uploadImage,
  getImageBase64
};

