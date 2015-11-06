/**
 * Simple Dot Notation example
 * Pello Altadill
 */
//Here we give an _id field
// If you try to enter another one it will fail
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var doc = { '_id' : 'Chus', 'age' : 18 };

   db.collection('students').insert(doc, function(err, inserted) {
       if(err) throw err;

       console.dir('Successfully inserted: ' + JSON.stringify(inserted));

       return db.close();
   });
});




