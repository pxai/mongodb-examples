/**
 * Simple find example
 * Pello Altadill
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var query = {};

   db.collection('marks').find(query).toArray(function(err, docs) {
       if(err) throw err; // If there are errors, just leave

       console.dir(docs);

       db.close();
   });
});
