var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var pantry = require('../database-mysql');

var app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  cookie: { secure: true }
}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/', function(req, res) {
  req.session.username = 'John Smith';
});

app.get('/users', function (req, res) {
  console.log('On users endpoint.');
  console.log(req.session.username);
  console.log(req.session);
  pantry.getUsers(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/recipes', function(req, res) {
  console.log('On recipes endpoint.');
  console.log(req.session.username);
  pantry.getRecipes(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  })
});

app.get('/users_recipes', function(req, res) {
  console.log('On users_recipes endpoint.');
  pantry.getUsersRecipes(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
