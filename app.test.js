const request = require('supertest');
const app = require('./app.js');
//import app from './app.js';

//specify the things I actually need to test for the endpoint
describe("GET /api/orders", () => {

    //when things go right
    describe("given a request to retreive orders from the database", () => {
        //the server should return a list of orders
        //should return a json object containing the orders from the database

        test("should return a server status code of 200", async () => {
            const response = await request(app).get("/api/orders");

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
        //the server should create the orders in the database
        //should return a json object containing the records created in the database
        //should return a server status code of 200
    })

    describe("when the incorrect amount of arguments is provided", () => {
        //the server should not create anything in the database and return an error
        //should return a server status code of 400
    })

})