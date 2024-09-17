const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to get all orders
router.get('/orders', orderController.getOrders);

// Route to create a new order
router.post('/orders', orderController.createOrders);

module.exports = router;