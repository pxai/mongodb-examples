/**
 * Insert an array
 * Pello Altadill
 */
// Here we insert more than one document
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
   if(err) throw err;

   var docs = [ { 'student' : 'Chus', 'age' : 18 },
                { 'student' : 'Leonardo', 'age' : 19 } ];

   db.collection('students').insert(docs, function(err, inserted) {
       if(err) throw err;

       console.dir("Successfully inserted: " + JSON.stringify(inserted));

       return db.close();
   });
});

