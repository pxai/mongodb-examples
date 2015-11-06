/**
 * Simple update multiple
 * Pello Altadill
 */
// in this case we want to unset a field
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var query = { };
   var operator = { '$unset' : { 'date_returned' : '' } };
   var options = { 'multi' : true };

   db.collection('marks').update(query, operator, options, function(err, updated) {
       if(err) throw err;

       console.dir('Updated: ' + updated + 'documents');

       return db.close();
   });
});




