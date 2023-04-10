// Import the necessary dependencies
const express = require('express');
const connection = require('./config/db');
const cors = require('cors');
require('dotenv').config;


// Create anew instance of the Express application
const app = express();

// Use CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server on the specified port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
