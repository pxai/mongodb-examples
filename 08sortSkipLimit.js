/**
 * Simple Sort Skip Limit example
 * Pello Altadill
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
   if(err) throw err;

   var grades = db.collection('marks');

   var cursor = grades.find({});
   cursor.skip(1);
   cursor.limit(4);
   cursor.sort('grade', 1);

   //cursor.sort([['grade', 1], ['student', -1]]);

   cursor.each(function(err, doc) {
       if(err) throw err;
       if(doc == null) {
           return db.close();
       }
      console.dir(doc);
   });
});

