const express = require('express');
const router = express.Router();
const shipmentController = require('../controllers/shipmentController');

// Route to get all shipments
router.get('/shipments', shipmentController.getShipments);

// Route to create a new shipment
router.post('/shipments', shipmentController.createShipments);

module.exports = router;