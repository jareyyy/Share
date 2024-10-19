const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Endpoint to handle spam share requests
app.post('/api/spamshare', async (req, res) => {
    const { state, url, quantity, delay } = req.body;

    // Validate input
    if (!state || !url || !quantity || !delay) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Call the external API
        const response = await axios.post('https://rest-api.joshuaapostol.site/spamshare', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.response ? error.response.data : error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
