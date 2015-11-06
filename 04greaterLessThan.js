/**
 * Simple $gt $lt example
 * Pello Altadill
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var query = { 'student_id' : 6, 'scores.score' : { '$gt' : 90, '$lt' : 100 } };

   db.collection('marks').find(query).each(function(err, doc) {
       if(err) throw err;

       if(doc == null) {
           return db.close();
       }

       console.dir(doc);
   });
});


