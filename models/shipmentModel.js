const pool = require('../config/db'); //Database connection

// Get all Shipments from the database
exports.getAllShipments = async () => {
    const result = await pool.query('SELECT * FROM Shipments');
    return result.rows; // Return all Shipments records
};

// Create Shipments in the database.
exports.createShipments = async (shipmentData) => {
    const { order_id, status, shipment_status } = shipmentData;
    const result = await pool.query(
        'INSERT INTO Shipments (order_id, tracking_number, shipment_status) VALUES ($1, $2, $3) RETURNING *',
        [order_id, tracking_number, shipment_status]
    );

    return result.rows[0]; // Return the newly created row
}