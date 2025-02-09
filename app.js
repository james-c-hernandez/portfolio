// alt shift F
const express = require('express');
const app = express();
const path = require('path');
var port = process.env.port || 3000;

app.listen(port);
console.log ("listen port is %s", port);

/* var server = app.listen(3000, "127.0.0.1", function() {
   console.log("inside app.listen's callback function.");
   var host= server.address().address;
   var port= server.address().port;
   console.log('app listening at http://%s:%s', host, port);
});
 */


//register view engine
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/portfolio', require('./routes/portfolio'));

const name = 'james';
console.log(name);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/index2', (req,res) => {
    res.render('index2');
})

app.get('/contact', (req,res) => {
    res.render('contact2')
})

app.get('/contact2', (req,res) => {
    res.render('contact2')
})

app.get('/threejsparticles', (req,res) => {
    res.render('threejsparticles')
})

app.get('/threejstiefighter', (req,res) => {
    res.render('threejstiefighter')
})

app.get('/threejsshadermoon',(req,res) => {
    res.render('threejsshadermoon')
})

app.get('/portfolio', (req,res) => {
    res.render('../portfolio/index');
})

app.get('/hero', (req, res) => {
    res.render('hero');
})

app.get('/graphs', (req, res) => {
    res.render('graphs');
})

app.get('/particles', (req, res) => {
    res.render('particles');
})

app.get('/particles2', (req, res) => {
    res.render('particles_in_card_img');
})

