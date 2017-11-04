var searchYummly = (options, callback) => {
  $.get('http://api.yummly.com/v1/api/recipes',{
    X-Yummly-App-ID:app-id,
    X-Yummly-App-Key:app-key,
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
        callback(items);
      }
    })
    .fail( function(error){
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    })
}

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
