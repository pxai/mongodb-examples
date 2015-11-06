/**
 * Simple projection example
 * Pello Altadill
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var query = { 'student_id' : 6 };

   var projection = { 'student_id' : 1, 'class_id' : 1, '_id' : 0 };

   db.collection('marks').find(query, projection).toArray(function(err, docs) 
{
       if(err) throw err;

       docs.forEach(function (doc) {
           console.dir(doc);
           console.dir(doc.class_id);
       });

       db.close();
   });
});

