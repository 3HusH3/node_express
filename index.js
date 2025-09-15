//inicjujemy prosty serwer http za pomoca express.js
const express = require('express');
//tworzymy aplikacje express - instancje
const app = express();
//definiujemy prosta trase get na sciezce "/"
app.get('/', (req, res) => {
    res.send('Hello world');
});
//uruchamiamy serwer na porcie 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});