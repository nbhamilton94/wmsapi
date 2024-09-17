const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to get all products
router.get('/products', productController.getProducts);

// Route to create a new product
router.post('/products', productController.createProducts);

module.exports = router;