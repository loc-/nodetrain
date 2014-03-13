var FeedParser = require('feedparser');
var request = require('request');
var fs = require('fs');

var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;


var db = new Db('FeedReaderDB', new Server('localhost', 27017), { w: 1 });
var collection = db.collection('feeds', { w: 1 });
var newscollection = db.collection('newscollection', {w: 1});


//var feeds = fs.readFileSync('feed-reader-server-settings.json');
var parsedJSON = require('./feed-reader-server-settings.json');
//var cache = JSON.parse(feeds);
console.log(parsedJSON);
