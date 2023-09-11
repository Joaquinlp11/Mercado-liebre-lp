const express = require('express');

const app = express();

const path = require('path');

const rutaPublic = path.resolve(__dirname, './public');

app.use(express.static(rutaPublic));

app.listen(3000, () => console.log('funcionando '));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

