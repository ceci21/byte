var Ingredients = {};

var knex = require('./knexSetup')
var UserIngredients = require('./knexUsersIngredients.js')

Ingredients.addIngredient = (data) => {
  console.log('Ingredient Data: ', data);
  // UserIngredients.addUserIngredient(data)
  // .then( (data) => {
  //   console.log('successful usersIngredients add');
  // })
  // .catch( (err) => {
  //   console.log('Usrs_Ingredients Error: ', err);
  // })
  return knex('ingredients').insert({ingredient:data.ingredient})
}

Ingredients.getIngredientByUser = (data) => {
  console.log('IN INGEDIENTS DB');
  return knex('ingredients').where({user_id: data.userid}).select('ingredient')
}


module.exports = Ingredients;
