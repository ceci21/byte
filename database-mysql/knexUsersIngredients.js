var UsersIngredients = {};

var knex = require('./knexSetup')

UsersIngredients.addUserIngredient = (data) => {
  console.log('UsersIngredients: ', data);
  return knex('users_ingredients').insert({user_id:1, ingredient_id:1})
}


module.exports = UsersIngredients;
