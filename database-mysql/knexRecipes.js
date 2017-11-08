var Recipes = {};

var knex = require('./knexSetup')

Recipes.getUsers = (data) => {
  return knex.select().from('users')
}

Recipes.getRecipes = (data) => {
  return knex.select().from('recipes')
}

module.exports = Recipes;
