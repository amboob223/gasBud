// server/server.js

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express app
const app = express();

// Set up body-parser middleware to parse JSON data
app.use(bodyParser.json());

// Import the App class (assuming it's defined in app.js)
const { App } = require('./app');

// Create an instance of the App class
const gasBudApp = new App();

// Endpoint to add a new user
app.post('/users', (req, res) => {
    const { name, location, photo, gasPay } = req.body;
    gasBudApp.addUser(name, location, photo, gasPay);
    res.json({ message: 'User added successfully' });
});

// Endpoint to add a new gasser
app.post('/gassers', (req, res) => {
    const { name, location, photo, bank } = req.body;
    gasBudApp.addGasser(name, location, photo, bank);
    res.json({ message: 'Gasser added successfully' });
});

// Endpoint to sort gassers based on user location (optional)
app.post('/sort-gassers', (req, res) => {
    const { location } = req.body;
    const sortedGassers = gasBudApp.sortGassersByDistance(location);
    res.json({ gassers: sortedGassers });
});

// Endpoint for the user to pay the gasser
app.post('/pay-gasser', (req, res) => {
    const { gasserName, amount } = req.body;
    const gasser = gasBudApp.gassers.find((g) => g.name === gasserName);
    if (gasser) {
        gasBudApp.payGasser(gasser, amount);
        res.json({ message: `Paid ${gasserName} $${amount}` });
    } else {
        res.status(404).json({ error: 'Gasser not found' });
    }
});

// Endpoint for the user to request a gasser
app.post('/request-gasser', (req, res) => {
    const { userName } = req.body;
    const user = gasBudApp.users.find((u) => u.name === userName);
    if (user) {
        gasBudApp.requestGasser(user);
        res.json({ message: `${userName} requested a gasser` });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
