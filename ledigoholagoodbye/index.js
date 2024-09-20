const express = require('express');
const { haxballBot } = require('./examples/script');

const app = express();

app.get('/start/script1', (req, res) => {
    haxballBot;
    res.send('script1.js iniciado');
});

app.listen(3000, () => {
    console.log('Servidor Express escuchando en http://localhost:3000');
});
