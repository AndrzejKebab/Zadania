const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.set('views', './src/views');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send("Strona Działa! POG");
    res.render('index', {
        pageTitle: 'Strona Główna'
    });
});

app.get('/omnie', (req, res) => {
    //res.send("Informatyk weekendowy");
    res.render('omnie', {
        pageTitle: 'O mnie'
    });
});

app.get('/kontakt', (req, res) => {
    //res.send("Kontak 225 333 695");
    res.render('kontakt', {
        pageTitle: 'Kontatk'
    });
});

app.listen(5000, () => {
    console.log("Serwer Działa! AuAu");
}); 