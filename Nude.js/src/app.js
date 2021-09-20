const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.set('views', './src/views');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send("Strona Działa! POG");
    res.render('index', {});
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