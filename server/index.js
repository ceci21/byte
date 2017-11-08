var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

var Recipes = require('../database-mysql/knexRecipes.js')
var Users = require('../database-mysql/knexUsers.js')
var UsersRecipes = require('../database-mysql/knexUsersRecipes.js')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));

app.use(session({
  secret: 'keyboard cat'
}));

app.get('/', function(req, res) {
  console.log(req.session);//currently the HTML for index.html
  res.end();
});

app.get('/users', function (req, res) {
  Users.getUsers()
    .then((data) => {//data is an array of users and their passwords
      console.log('THIS is the USER data: ', data);
      res.json(data)
    })
    .catch((err) => {
      console.log('Something went wrong: ', err)
      res.status(500).end()
    })
});

app.get('/recipes', function(req, res) {
  Recipes.getRecipes()
    .then((data) => {
      console.log('RECIPES: ', data);
      res.json(data)
    })
    .catch( (err) => {
      console.log('Recipes error: ', err);
      res.status(500).end()
    })
});

app.get('/users_recipes', function(req, res) {
  UsersRecipes.getUsersRecipes()
  .then((data) => {
    res.json(data)
  })
  .catch( (err) => {
    console.log('User_Recipes error: ', err);
    res.status(500).end()
  })
});

app.get('/favorites', function(req, res) {
  // Get users favorites
  UsersRecipes.getFavorites()
});

app.post('/login', function(req, res, next) {
  console.log('POST: login');
  console.log(req.body);
  Users.getUser(req.body)
    .then((data) => {
      res.send(data).status(201);
    })
    .catch( (err) => {
      console.log('USER DB ERROR: ', err);
      res.status(500).end();
    })
  // req.session.username = req.body.username;
  // req.session.password = req.body.password;
  // res.send(req.session.username);
  //201 is successfull post request

});

app.post('/signup', function(req, res) {
  console.log("SIGNUP post: ", req.body);
  Users.addUser(req.body)
    .then((data) => {
      res.send(data).status(201)
    })
    .catch((err) => {
      console.log('SIGN UP error: ', err);
      res.status(500).end()
    })
  res.end();
});

app.post('/favorite', function(req, res, next) {
  console.log('POST: favorite');
  console.log(req.body);
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
