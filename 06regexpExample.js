/**
 * Simple $regex example
 * Pello Altadill
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var query = { 'title' : { '$regex' : 'Microsoft' } };

   var projection = { 'title' : 1, '_id' : 0 };

   db.collection('marks').find(query, projection).each(function(err, doc) {
       if(err) throw err;

       if(doc == null) {
           return db.close();
       }

       console.dir(doc.title);
   });
});



