const pool = require('../config/db'); //Database connection

// Get all orders from the database
exports.getAllOrders = async () => {
    const result = await pool.query('SELECT * FROM orders');
    return result.rows; // Return all orders records
};

// Create orders in the database.
exports.createOrders = async (orderData) => {
    const { quantity_ordered, status, product_id } = orderData;
    const result = await pool.query(
        'INSERT INTO orders (quantity_ordered, status, product_id) VALUES ($1, $2, $3) RETURNING *',
        [quantity_ordered, status, product_id]
    );

    return result.rows[0]; // Return the newly created row
}