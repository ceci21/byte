import $ from 'jquery';

var spoonacularTrivia = function(callback) {
    $.ajax({
       url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/trivia/random",
       type: "GET",
       headers: {
         'X-Mashape-Key': process.env.REACT_APP_SPOONACULAR_API_KEY
       },
       success: function(data) {
         callback(data);
       },
       error: function(err) {
         console.log('The following error occured while retrieving your trivia from Spoonacular: ', err);
       }
    });
}

export {spoonacularTrivia};
