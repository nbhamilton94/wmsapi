const pool = require('../config/db'); //Database connection

exports.getAllOrders = async () => {
    const result = await pool.query('SELECT * FROM orders');
    return result.rows; // Return all user records
};

// Create orders in the database.
exports.createOrders = async (orderData) => {
    const { quantityOrdered, status, productId } = orderData;
    const result = await pool.query(
        'INSERT INTO orders (quantityOrdered, status, productId) VALUES ($1, $2, $3) RETURNING *',
        [quantityOrdered, status, productId]
    );

    return result.rows[0]; // Return the newly created row
}