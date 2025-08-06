
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/chat', (req, res) => {
    res.send({ message: "Dark chatbot API coming soon." });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
