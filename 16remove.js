/**
 * Simple remove simple
 * Pello Altadill
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var query = { 'student_id' : 4 };

   db.collection('marks').remove(query, function(err, removed) {
       if(err) throw err;

       console.dir('Removed: ' + removed + ' students');

       return db.close();
   });
});




