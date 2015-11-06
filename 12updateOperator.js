/**
 * Simple update single
 * Pello Altadill
 */
//two queries, not very efficient
// just one query
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var query = { 'assignment' : 'hw1' };
   var operator = { '$set' : { 'date_returned' : new Date() } };

   db.collection('marks').update(query, operator, function(err, updated) {
       if(err) throw err;

       console.dir("Successfully updated " + updated + " document!");

       return db.close();
   });
});





