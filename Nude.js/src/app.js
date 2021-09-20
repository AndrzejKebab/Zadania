const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Strona Działa! POG");
});

app.get('/omnie', (req, res) => {
    res.send("Informatyk weekendowy");
});

app.get('/kontakt', (req, res) => {
    res.send("Kontak 225 333 695");
});

app.listen(5000, () => {
    console.log("Serwer Działa! AuAu");
});