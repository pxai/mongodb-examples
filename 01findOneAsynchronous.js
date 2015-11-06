/**
 * Simple findOne example
 * Pello Altadill
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var query = { 'student_id' : 2 };

   db.collection('marks').findOne(query, function(err, doc) {
       if(err) throw err; // If there are errors, just leave

       console.dir(doc);

       db.close();
   });
});

