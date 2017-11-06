var searchYummly = (options, callback) => {
  $.get('http://api.yummly.com/v1/api/recipes/_app_id=6dc42c37&_app_key=4c35e386c8a9c936f0c5c16e72eb841a')//,{
      q: 'soup',
      allowedIngredient: 'tomato'
    })
    .done(data) => {
        callback(data);
      }
    })
    .fail( function(error){
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    })
}
searchYummly('nothing', function (data) {
  console.log('DATA: ', data);
})

http://api.yummly.com/v1/api/recipes?_app_id=6dc42c37&_app_key=4c35e386c8a9c936f0c5c16e72eb841a&q=soup
window.searchYummly = searchYummly;


// $.ajax({
//   type: 'GET',
//   url: 'https://www.googleapis.com/youtube/v3/search',
//   data: options,
//   contentType: 'video',
//   success: function(data) {
//       console.log('success')
//       return callback(data.results);
//   },
//   failure: function(error){
//     console.error('Failed request: ', error)
//   }
// });
