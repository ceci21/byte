var Recipes = {};

var knex = require('./knexSetup')

Recipes.getRecipes = (data) => {
	console.log('Now we in recipes.getrecipes', data);
  return knex('recipes').where({
  	user_id: data
  }).select('recipe')
}

Recipes.addRecipe = (data) => {
	console.log('Recipes.addRecipe being called', data.recipe);
	var strData = JSON.stringify(data.recipe);
	console.log('strData is ', strData);
  return knex('recipes').insert({recipe: strData, user_id: data.user_id})
  	.catch(err => {
  		console.error(err);
  	});
}

module.exports = Recipes;


// knex('users').where({
//   first_name: 'Test',
//   last_name:  'User'
// }).select('id')
