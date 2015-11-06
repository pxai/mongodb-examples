/**
 * Simple Dot Notation example
 * Pello Altadill
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var query = { 'student_id' : 4 };

   var projection = { 'media.oembed.url' : 1, '_id' : 0 };

   db.collection('reddit_front').find(query, projection).each(function(err, doc
) {
       if(err) throw err;

       if(doc == null) {
           return db.close();
       }

       console.dir(doc);
   });
});



