const express = require('express');
const router = express.Router();
const { uploadImage, getImageBase64 } = require('../controllers/convert.controller');

// Route to handle file upload and convert to base64
router.post('/', uploadImage, getImageBase64);

module.exports = router;