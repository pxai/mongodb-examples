/**
 * Simple update simple
 * Pello Altadill
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var query = { 'name' : 'comments' };
   var sort = [];
   var operator = { '$inc' : { 'counter' : 1 } };
   var options = { 'new' : true };

   db.collection('marks').findAndModify(query, sort, operator, options, function(err, doc) {
       if(err) throw err;

       if (!doc) {
           console.log('No counter found documents.');
       }
       else {
           console.log('Total: ' + doc.counter + ' documents');
       }

       return db.close();
   });
});


