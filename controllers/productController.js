const productModel = require('../models/productModel'); // Import the product model

// Controller function to handle GET /Products
exports.getProducts = async (req, res) => {
    try {
        const products = await productModel.getAllProducts(); // Fetch products using the model
        res.status(200).json(products); // Send the order data as a JSON response
    } catch (err) {
        res.status(500).json({err: 'Error fetching Products' });
    }
};

// Controller function to handle POST /Products (create a new order)
exports.createProducts = async (req, res) => {
    try {
        const productData = req.body; // Get the product data from the request body
        const newProduct = await productModel.createProducts(productData); //Use the model to create a new order
        res.status(201).json({message: 'Product created succesfully', product: newProduct });
    } catch(err) {
        res.status(500).json({error: 'Error creating product'});
    }
};