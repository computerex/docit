var express = require('express');
var bodyParser = require("body-parser");
var request = require('request');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));

function similar_documents(id, callback, starting){
	if (starting == null){
		starting = 0;
	}
	console.log('similar docs: ' + id);
	console.log('starting from: ' + starting);
	request({
				"method": "POST", 
				"uri":'http://localhost:9200/documents/ocr/_search', 
				"json":{   
				    "size": 100,
				    "from": starting * 100,
				    "query" : {
				        "more_like_this" : {
				            "fields" : ["text"],
				            "like" : [
				            {
				                "_index" : "documents",
				                "_type" : "ocr",
				                "_id" : id
				            }]
				        }
				    },
				    "highlight" : {
				        "fields" : {
				            "text" : {}
				        }
				    }
				}
	}, function (error, response, body) {
	  callback(error, response, body);
	});
}

function search_documents(phrase, callback, starting){
	if (starting == null){
		starting = 0;
	}
	console.log('searching for: ' + phrase);
	console.log('starting from: ' + starting);
	request({
				"method": "POST", 
				"uri":'http://localhost:9200/documents/ocr/_search', 
				"json":{   
				    "size": 100,
				    "from": starting * 100,
				    "query" : {
				        "match_phrase" : {
				            "text" : phrase
				        }
				    },
				    "highlight" : {
				        "fields" : {
				            "text" : {}
				        }
				    }
				}
	}, function (error, response, body) {
	  callback(error, response, body);
	});
}

function get_document(id, callback) {
	request({
				"method": "GET", 
				"uri":'http://localhost:9200/documents/ocr/' + id, 
	}, function (error, response, body) {
	  callback(error, response, body);
	});
}

app.get('/api/document/:id', function(req, res){
	console.log('GET document: ');
	console.log(req.params.id);
	get_document(req.params.id, function(error, response, body){
		if (!error && response.statusCode == 200) {
			res.send(body);
		}else{
			res.send(response);
		}
	});
});

app.post('/api/docsearch/similar', function(req, res){
	similar_documents(req.body.id, function(error, response, body){
		if (!error && response.statusCode == 200) {
			res.send(body);
		}else {
			res.send(response);
		}
	}, req.body.from);
});

app.post('/api/docsearch/search', function(req, res){
	console.log("search was called");
	search_documents(req.body.phrase, function(error, response, body){
		if (!error && response.statusCode == 200) {
			res.send(body);
		}else {
			res.send(response);
		}
	}, req.body.from);
});

app.get('/', function(req,res) {
  res.sendfile('index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
