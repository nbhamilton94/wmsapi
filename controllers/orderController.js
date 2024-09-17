const orderModel = require('../models/orderModel'); // Import the order model

// Controller function to handle GET /orders
exports.getOrders = async (req, res) => {
    try {
        const orders = await orderModel.getAllOrders(); // Fetch orders using the model
        res.status(200).json(orders); // Send the order data as a JSON response
    } catch (err) {
        res.status(500).json({err: 'Error fetching orders' });
    }
};

// Controller function to handle POST /orders (create a new order)
exports.createOrders = async (req, res) => {
    try {
        const orderData = req.body; // Get the order data from the request body
        const newOrder = await orderModel.createOrders(orderData); //Use the model to create a new order
        res.status(201).json({message: 'Order created succesfully', order: newOrder });
    } catch(err) {
        res.status(500).json({error: 'Error creating user'});
    }
};