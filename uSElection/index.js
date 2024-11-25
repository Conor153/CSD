var express = require("express");
var bodyParser = require("body-parser");
var _ = require('underscore');
var cors = require("cors");

var pres_votes = require('./model/pres_votes');

var states = require("./model/states");

var candidates = require("./model/candidates");

var resultData = require("./model/results");

var users = require("./model/users");

var navData = require("./public/nav.js");
var footerData = require("./public/footer.js");


var app = express();
app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/pres_votes", function(req,res){
	pres_votes.getPres_votes(req,res);
});

app.get("/states", function(req,res){
	states.getStates(req,res);
});

app.get("/candidates", function(req,res){
	candidates.getCandidates(req,res);
});

app.get("/users", function(req,res){
	users.getUsers(req,res);
});

app.get("/nav", function(req,res){
	res.send(navData);
});

app.get("/footer", function(req,res){
	res.send(footerData);
});


app.get("/results/:year?", function(req,res){
	resultData.getResults(req,res);
});


// var year = req.params.year;
//resultData.getResults(req,res);
// var filteredResults = _.filter(resultData.results, function(result)
  // {
// 	return result.year == year;
  // });
  // res.send(filteredResults);


var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});