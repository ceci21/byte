import $ from 'jquery';

var apiKey = null;
var getUrl = null;

var searchSpoonacular = function(options, callback) {
  var query = options.ingredients.toString();
  console.log("Query: ", query);
    $.ajax({
       url: getUrl,
       type: "GET",
       data: {
         ingredients: query,
         fillIngredients: true,
         ranking: 2,
         number: 100,
         onlyOpenLicense: false
       },
       headers: {'X-Mashape-Key': apiKey},
       success: function(data) {
         console.log('Data: ', data);
         callback(data);
       },
       error: function(err) {
         console.log('Error: ', err);
       }
    });
}

export {searchSpoonacular};
