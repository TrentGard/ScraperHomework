var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var request = require("request");
var axios = require("axios");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/scraperHomework", {
	useMongoClient: true
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

//handlbars to setup initial exphbs
//express-handlebars
//set up api routes
//