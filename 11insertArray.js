/**
 * Simple Dot Notation example
 * Pello Altadill
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var doc = { 'student' : 'Calvin', 'age' : 6 };

   db.collection('students').insert(doc, function(err, inserted) {
       if(err) throw err;

       console.dir('Student: ' + JSON.stringify(inserted) + 'Successfully inserted');

       return db.close();
   });
});



