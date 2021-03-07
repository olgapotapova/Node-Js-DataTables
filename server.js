const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
require('./models/db');
const homePage = require('./routes/main');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.use(homePage, );
app.use('/form', homePage);

app.listen(process.env.PORT || 3000, function () {
    console.log("Server has started.");
});