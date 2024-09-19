const request = require('supertest');
const app = require('./app.js');
const pool = require('./config/db.js');

jest.mock('./config/db.js', () => ({
    query: jest.fn(),
}));

/* 
To mock a datbase interaction in /api/orders, we want to mock the database calls (pool.query) 
so that we can isolate the controller logic from the actual database. This is to simulate what 
the database would return without making real database queries during the tests.

1. Mock the database call
2. Ensure Pool.query is being Mocked Properly
3. Running the test
*/

// specify the things I actually need to test for the endpoint
describe("GET /api/orders", () => {

    // when things go right
    describe("given a request to retreive orders from the database", () => {
        // the server should return a list of orders
        // should return a json object containing the orders from the database

        test("should return a server status code of 200", async () => {
            // mock the database result that would be returned by the GET call
            const orders = {
                quantity_ordered: 3,
                status: 'Pending',
                product_id: 2
            };

            const mockRetreivedOrders = { id: 1, ...orders };

            pool.query.mockResolvedValueOnce({ rows: mockRetreivedOrders }); 

            // make a GET request to /api/orders
            const response = await request(app).get("/api/orders");

            expect(response.body).toEqual(mockRetreivedOrders);
            expect(response.statusCode).toBe(200); 
        })

        test("should specify json in the content-type header", async () => {
            const response = await request(app).get("/api/orders");

            expect(response.headers["content-type"]).toMatch(/json/);
        })
    })

})

describe("POST /api/orders", () => {

    describe("given a list of orders to create", () => {
        test("the server should create the orders in the database", async () => {
            // mock the order data we want to insert
            const newOrder = {
                quantity_ordered: 5,
                status: 'Pending',
                product_id: 2
            };

            // mock the database result that would be returned by the INSERT query
            const mockCreatedOrder = { id: 1, ...newOrder} 
            /*three dots ...newOrder is a spread operator in ES6. 
            allows you to "spread" the elements or properties of an array or object into another array or object.
            in the context above, it's used to merge the properties of the newOrder with the additoinal property id:1.*/

            // mock the pool.query method to simulate an insert query in the database
            pool.query.mockResolvedValueOnce({ rows: [mockCreatedOrder] });

            // Make a post request to /api/orders
            const response = await request(app).post('/api/orders').send(newOrder).set('Accept', 'application/json'); // Send the new order data in the request body

            // check the response status and body
            expect(response.statusCode).toBe(201); // check if the status code is 201 (created)
            expect(response.body).toEqual({
                message: "Order created successfully",
                order: mockCreatedOrder
            }); // check if the response contains the created order


        })
        // should return a json object containing the records created in the database
        // should return a server status code of 200
    })

    describe("when the incorrect amount of arguments is provided", () => {
        // the server should not create anything in the database and return an error
        // should return a server status code of 400
    })

})