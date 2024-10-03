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

exports.getOrderById = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        console.log(orderId);
        const order = await orderModel.getOrderById(orderId); // Fetch orders using the model given an id

        res.status(200).json(order); // Send the order data as a JSON response
    } catch (err) {
        res.status(500).json({error: 'Error fetching order'});
    }
}

// Controller function to handle POST /orders (create a new order)
exports.createOrders = async (req, res) => {
    try {
        const orderData = req.body; // Get the order data from the request body
        const newOrder = await orderModel.createOrders(orderData); //Use the model to create a new order
        res.status(201).json({message: 'Order created successfully', order: newOrder });
    } catch(err) {
        res.status(500).json({error: 'Error creating order'});
    }
};