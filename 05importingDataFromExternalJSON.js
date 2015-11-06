/**
 * Simple import from it-ebooks example
 * Pello Altadill
 */
var MongoClient = require('mongodb').MongoClient
 , request = require('request');

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   request('http://it-ebooks-api.info/v1/search/node.js', function (error, response, body) {
       
       if (!error && response.statusCode == 200) {
    // convert json text to javascript object
           var obj = JSON.parse(body);
// applies this function with every element of the array
           var books = obj.data.children.map(function (book) { return book.
data; });

           db.collection('books').insert(books, function (err, data) {
                   if(err) throw err;

                   console.dir(data);

                   db.close();
           });
       }
   });
});


