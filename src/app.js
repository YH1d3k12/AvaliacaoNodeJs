const express = require('express'); // Import the Express library
const cors = require('cors'); // Import the cors package
const routerExample = require('./routes/example.js'); // Import the router from the routes folder
const routerCalculator = require('./routes/calculator.js');


const app = express(); // Create an instance of an Express application
const PORT = process.env.PORT || 3000; // Choose a port for your server

//Middleware which allows the request of json files
app.use(express.json());

// Enable CORS for all routes, This allows other ports to send requests
app.use(cors());

app.use('/example', routerExample);
app.use('/', routerCalculator);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});