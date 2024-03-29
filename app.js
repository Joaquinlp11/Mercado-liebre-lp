const express = require('express');
const app = express();
const path = require('path');

const rutaPublic = path.resolve(__dirname, './public');

app.use(express.static(rutaPublic));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('funcionando en el puerto: ' + port));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get ('/register', ( req, res ) => {
    res.sendFile(path.join (__dirname, '/views/register.html'));
});

app.get ('/login', ( req, res ) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});