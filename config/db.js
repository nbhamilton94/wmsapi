const { Pool } = require("pg").native;
require('dotenv').config(); // Load environment variables from .env file

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    connectionString: process.env.PG_CONNECTIONSTRING,
    max: 1,   // Maximum number of connections in the pool
    connectionTimeoutMillis: 300000
});

module.exports = pool; // Export the pool for use in other files