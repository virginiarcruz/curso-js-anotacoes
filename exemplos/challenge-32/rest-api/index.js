// import { userInfo } from 'os';

'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();


// var users = {
//     joao : {
//         username: 'Joao',
//         age: 30
//     },
//     maria : {
//         username: 'Maria',
//         age: 35
//     },
//     francis : {
//         username: 'Francis',
//         age: 37
//     },
// }

var users = [{
    username: 'joao',
    name: 'joao',
    age: 35
}, {
    username: 'maria ',
    name: 'Maria',
    age: 22  
}];

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get('/', function (req, res) {
    res.send('<h1>Home</h1>');
});

app.get('/user', function (req, res) {
    res.send('User');
});

// app.get('/user/:username', function(req, res){
//     var username = req.params.username;
//     if(users[username]) {
//         return res.json(users[username]);
//     }
//     res.status(404).json({erro: 'usuário nao cadastrado'});
// });


app.get('/user/:username', function(req, res){
    var username = req.params.username;
    var hasUser = users.some(function (user) {
        return user.username === username;
    });

    if(hasUser) {
        return res.json(users.filter(function (user) {
            return user.username === username;
        })[0]);
    }
    res.status(404).json({error: 'user nao cadastrado'});
});

app.post('/user', function (req, res) {
    var username = req.body.username;
    var age = req.body.age;
    var user = req.body.user;

    var hasUser = users.some(function (user) {
        return user.username === username;
    });

    if(!hasUser) {
        users.push({
            username: username,
            age: age,
            user: user
        });
    }

    res.json(users);
});

app.listen(3000);