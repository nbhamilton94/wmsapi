const pool = require('../config/db'); //Database connection

// Get all Products from the database
exports.getAllProducts = async () => {
    const result = await pool.query('SELECT * FROM Products');
    return result.rows; // Return all Products records
};

// Create Products in the database.
exports.createProducts = async (productData) => {
    const { name, sku, quanitity, warehouse_location } = productData;
    const result = await pool.query(
        'INSERT INTO Products (name, sku, quantity, warehouse_location) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, sku, quantity, warehouse_location]
    );

    return result.rows[0]; // Return the newly created row
}