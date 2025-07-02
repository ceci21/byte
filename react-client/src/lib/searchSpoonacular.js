import $ from 'jquery';

var searchSpoonacular = function(options, callback) {
  var query = options.ingredients.toString();
  $.ajax({
    url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients",
    type: "GET",
    data: {
      ingredients: query,
      fillIngredients: true,
      ranking: 2,
      number: 100,
      onlyOpenLicense: false
    },
    headers: {
      'X-Mashape-Key': process.env.REACT_APP_SPOONACULAR_API_KEY
    },
    success: function(data) {
      callback(data);
    },
    error: function(err) {
      console.log('The following error occured while retrieving your recipes from Spoonacular: ', err);
    }
  });
}

export {searchSpoonacular};
