const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'public/index.html'), 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error loading Home');
        res.send(data);
    });
});

app.get('/about', (req, res) => {
    fs.readFile(path.join(__dirname, 'public/about.html'), 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error loading About');
        res.send(data);
    });
});

app.get('/contact', (req, res) => {
    fs.readFile(path.join(__dirname, 'public/contact.html'), 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error loading Contact');
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});