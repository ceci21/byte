var Recipes = {};

var knex = require('./knexSetup')

Recipes.getUsers = (data) => {
  return knex.select().from('users')
}

// var getRecipes = function(callback) {
//   connection.query('SELECT * FROM recipes', function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

Recipes.getRecipes = (data) => {
  return knex.select().from('recipes')
}
// var getUsersRecipes = function(callback) {
//   connection.query('SELECT * FROM users_recipes', function(err, results, fields) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

Recipes.getUsersRecipes = (data) => {
  return knex.select().from('user_recipes');
}

module.exports = Recipes;
