'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<h1>Home</h1>');
});

app.get('/user', function (req, res) {
    res.send('User');
});

app.get('/arroz', function (req, res) {
    res.send('Arroz');
});

app.listen(3000);