var Users = {};

var knex = require('./knexSetup')

Users.getUsers = (data) => {
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

Users.getRecipes = (data) => {
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

module.exports = Users;
