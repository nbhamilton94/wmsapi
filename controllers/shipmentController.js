const shipmentModel = require('../models/shipmentModel'); // Import the shipment model

// Controller function to handle GET /shipments
exports.getShipments = async (req, res) => {
    try {
        const shipments = await shipmentModel.getAllShipments(); // Fetch shipments using the model
        res.status(200).json(shipments); // Send the shipment data as a JSON response
    } catch (err) {
        res.status(500).json({err: 'Error fetching shipments' });
    }
};

// Controller function to handle POST /shipments (create a new shipment)
exports.createShipments = async (req, res) => {
    try {
        const shipmentData = req.body; // Get the shipment data from the request body
        const newShipment = await shipmentModel.createShipments(shipmentData); //Use the model to create a new shipment
        res.status(201).json({message: 'shipment created succesfully', shipment: newShipment });
    } catch(err) {
        res.status(500).json({error: 'Error creating shipment'});
    }
};