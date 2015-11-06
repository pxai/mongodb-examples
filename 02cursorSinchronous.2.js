/**
 * Simple synchronous example
 * Pello Altadill
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var query = { 'class_id' : 1 };

   var cursor = db.collection('marks').find(query);

   console.log('Class 1');
   // Now get data one by one
   cursor.each(function(err, doc) {
       if(err) throw err;

       if(doc == null) {
           return db.close();
       }

       console.log('Student ID: ' + doc.student_id);
   });
});
