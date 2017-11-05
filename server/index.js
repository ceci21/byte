var express = require('express');
var bodyParser = require('body-parser');

var pantry = require('../database-mysql');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/users', function (req, res) {
  pantry.getUsers(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/recipes', function(req, res) {
  pantry.getRecipes(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  })
});

app.get('/users_recipes', function(req, res) {
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
