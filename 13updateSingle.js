/**
 * Simple update simple
 * Pello Altadill
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var query = { 'assignment' : 'Simple task' };

   db.collection('marks').findOne(query, function(err, doc) {
       if(err) throw err;
       if(!doc) {
           console.log('No documents for assignment ' + query.assignment + ' found!');
           return db.close();
       }

       query['_id'] = doc['_id'];
       doc['date_returned'] = new Date();

       db.collection('grades').update(query, doc, function(err, updated) {
           if(err) throw err;

           console.dir('Updated: ' + updated + ' documents');

           return db.close();
       });
   });
});




