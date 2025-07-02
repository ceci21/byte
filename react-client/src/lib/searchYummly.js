import $ from 'jquery';

var searchYummly = (options, callback) => {
  $.get(`http://api.yummly.com/v1/api/recipes?_app_id=${process.env.REACT_APP_YUMMLY_APP_ID}&_app_key=${process.env.REACT_APP_YUMMLY_APP_KEY}`,
    {
      q: '',
      allowedIngredient: options.ingredients,
      maxResult: 100,
      excludedIngredient: '*'
      // facetField: ['jelly']
    })
    .done((data) => {
        console.log('App ID: ', process.env.REACT_APP_YUMMLY_APP_ID);
        callback(data.matches);
      }
    )
    .fail(function(error) {
        console.error(error);
    })
}

var getRecipe = (recipeId, callback) => {
  var query = `http://api.yummly.com/v1/api/recipe/${recipeId}?_app_id=${process.env.REACT_APP_YUMMLY_APP_ID}&_app_key=${process.env.REACT_APP_YUMMLY_APP_KEY}`;
  $.get(query)
    .done((data) => {
      callback(data);
    })
    .fail(function(error) {
        console.error(error);
    })
}

export {searchYummly};
export {getRecipe};

// q: This is the search phrase. Use space to separate words (url-encoded as either + or %20).
// To search for “Onion Soup” recipes append &q=onion+soup or &q=onion%20soup
// For example: http://api.yummly.com/v1/api/recipes?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY&q=onion+soup
