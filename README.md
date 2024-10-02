# README

# Salesforce integration with a warehouse management system.

Concepts Demonstrated:
* Integration between Salesforce and a REST API
* Testing LWC and Javascript with JEST
* Asynchronous Apex
* Building Lightning Web Components
* Building an API with Node and Express
* CI/CD with Render - https://render.com/
* Build and Seed a Postgres database using ChatGPT
* Salesforce Data Modeling
* Writing Apex Test Classes

This will be the first of 2+ iterations of this concept. In this particular iteration, I'm working with a relatively simple object structure. In this data model, we have the **Product**, **Order**, and **Shipment** object. 

Product has a lookup relationship with Order where Order is the child object..

Shipment has a lookup relationship with Order where Shipment is the child object.

<a href="https://ibb.co/w0cQx0k"><img src="https://i.ibb.co/4m1S5mq/Project-Diagram.jpg" alt="Project-Diagram" border="0" /></a>

The app in this repo is deployed at [https://express.onrender.com](https://express.onrender.com).

## Deployment

See https://render.com/docs/deploy-node-express-app or follow the steps below:

Create a new web service with the following values:
  * Build Command: `yarn`
  * Start Command: `node app.js`

That's it! Your web service will be live on your Render URL as soon as the build finishes.
