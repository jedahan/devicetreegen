var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
	console.log("Requested:" + req.url);
	if (req.url == '/bone.js') {
		getFile(res,'bone.js');
	}

	else if (req.url == '/template.txt') {
		getFile(res,'template.txt');
	}

	else if (req.url == '/index.html' || '/') {
		getFile(res,'index.html');
	}
	else {
		console.log("No route for that file!");
	}

}).listen(8080);

function getFile(res,filename) {
	fs.readFile(__dirname +"/"+filename,function(err,data) {
			if(err) {
				res.writeHead(500);
				return res.end("error loading page");
			}
			console.log("Ok, loading file:",filename);
			res.writeHead(200);
			res.end(data);
	});
}