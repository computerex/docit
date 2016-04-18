var request = require('request');

function update_document(id, fields, callback) {
	var url = 'http://localhost:9200/documents/ocr/' + id + '/_update';

	request({
		"method": "POST",
		"uri": url,
		"json": {
			"doc": fields
		}
	}, function(error, response, body){
		callback(error, response, body);
	});
}

function search_documents(phrase, callback){
	console.log('searching for: ' + phrase);
	request({
				"method": "POST", 
				"uri":'http://localhost:9200/documents/ocr/_search', 
				"json":{   
				    "size": 10000,
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

function replaceAll(str, find, replace) {
	var searchMask = find;
	var regEx = new RegExp(searchMask, "ig");
	var replaceMask = replace;
	return str.replace(regEx, replaceMask);
}

function replaceInDocuments(phrase, replace) {
	search_documents(phrase, function(error, response, body){
		if ( body.hits != null && body.hits.total > 0){
			for(var k = 0; k < body.hits.hits.length; k++){
				var hit = body.hits.hits[k];
				update_document(hit._id, {"text": replaceAll(hit._source.text, phrase, replace)}, function(error, resp, body){
			  	});
			}
			replaceInDocuments(phrase, replace);
		}
	});
}


// search_documents("foobar", function(error, response, body){
// 	for(var k = 0; k < body.hits.hits.length; k++){
// 		var hit = body.hits.hits[k];
// 		console.log(hit._source.name);
// 		console.log(hit._source.text);
// 	}
// });
