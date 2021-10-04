var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://grzegorz:qwerty123@teb.iufo4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});