// alt shift F
const express = require('express');
const app = express();
app.listen(3000);

//register view engine
app.set('view engine', 'ejs');

const name = 'james';
console.log(name);

app.use(express.static('public'));

app.get('/', (req, res) => {
    //res.sendFile('./views/index.js', { root: __dirname })
    res.render('particles3');
})

app.get('/hero', (req, res) => {
    //res.sendFile('./views/index.js', { root: __dirname })
    res.render('hero');
})

app.get('/graphs', (req, res) => {
    //res.sendFile('./views/index.js', { root: __dirname })
    res.render('graphs');
})

app.get('/particles', (req, res) => {
    //res.sendFile('./views/index.js', { root: __dirname })
    res.render('particles');
})

app.get('/particles2', (req, res) => {
    //res.sendFile('./views/index.js', { root: __dirname })
    res.render('particles2');
})

app.get('/particles3', (req, res) => {
    //res.sendFile('./views/index.js', { root: __dirname })
    res.render('particles3');
})