var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var express=require('express');

eobj=express();
port=7080;

// eobj.listen(port,function(){console.log("Espress server connected and listening...");});

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/BMS_Database", function (err, db) {
    var db1=db.db('admin');
    db.collection('admin', function (err, collection) {
        db.collection('admin').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });

    db.close();
                
});

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello Ravi and gautam welcome to Online Mini Bank Server Facilitycd!'); //write a response to the client
//   res.end(); //end the response
// }).listen(7070); //the server object listens on port 8080