const express = require('express');
const bodyParser = require('body-parser');

const masterDoManager = require('./src/MasterDoManager.js');

const app = express();
app.use(bodyParser.json());

const PORT = 8080;

/**
 * Get single item endpoint
 */
app.get('/item/:id', (req, res) => {
    const data = req.params.id;
    masterDoManager.get(data).then(data => res.send(data));
});

/**
 * Get all items endpoint
 */
app.get('/', (req, res) => {
    masterDoManager.getAll().then(data => res.send(data));
});

/**
 * Post endpoint
 */
app.post('/', (req, res) => {
    const data = req.body;
    masterDoManager.add(data).then(response => res.send(response));
});

/**
 * Put endpoint
 */
app.put('/', (req, res) => {
    const data = req.body;
    masterDoManager.update(data.id, data.masterdo).then(response => res.send(response));
});

/**
 * Delete endpoint
 */
app.delete('/', (req, res) => {
    const data = req.body;
    masterDoManager.remove(data.id).then(data => res.send(data));
});

app.listen(PORT)