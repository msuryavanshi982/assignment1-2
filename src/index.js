//Receive data from JSON POST and insert into MongoDB

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var db;

//Establish Connection
MongoClient.connect('mongodb+srv://ManjushaRaut:D1NNvookajCHUeKG@cluster0.3qd4bit.mongodb.net/CSV?retryWrites=true&w=majority', function (err, database) {
   if (err) 
   	throw err
   else
   {
	db = database;
	console.log('Connected to MongoDB');
	//Start app only after connection is ready
	app.listen(3000);
   }
 });

app.use(bodyParser.json())



app.post('/authors',  function(req, res) {
   // Insert JSON straight into MongoDB
   var dbo = db.db("CSV")
   var output=require('../authors.json')
   dbo.collection("authorDB").insertMany(output, function (err, result) {
      if (err)
         res.send('Error');
      else
        res.send('Success');

  });
});



app.post('/books',  function(req, res) {
   // Insert JSON straight into MongoDB
   var dbo = db.db("CSV")
   var output=require('../books.json')
   dbo.collection("bookDB").insertMany(output, function (err, result) {
      if (err)
         res.send('Error');
      else
        res.send('Success');

  });
});


app.post('/magazines',  function(req, res) {
   // Insert JSON straight into MongoDB
   var dbo = db.db("CSV")
   var output=require('../Magazines.json')
   dbo.collection("magazineDB").insertMany(output, function (err, result) {
      if (err)
         res.send('Error');
      else
        res.send('Success');

  });
});




