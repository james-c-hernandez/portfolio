// alt shift F
const express = require('express');
const app = express();
app.listen(3000);

//register view engine
app.set('view engine', 'ejs');

const name = 'james';
console.log(name);

app.get('/', (req, res) => {
    //res.sendFile('./views/index.js', { root: __dirname })
    res.render('index');
})