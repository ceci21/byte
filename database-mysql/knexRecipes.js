var Recipes = {};

var knex = require('./knexSetup')

Recipes.getRecipes = (data) => {
  return knex.select().from('recipes')
}

module.exports = Recipes;
