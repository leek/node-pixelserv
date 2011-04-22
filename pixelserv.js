var http = require('http');

// Defaults
config = {
	host: '0.0.0.0',
	port: 8080,
	imageData: "R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
}

// Handle commandline arguments
process.argv.forEach(function (val, index, array) {
	switch (val) {
		case '--port':
			config.port = array[++index];
			break;
	}
});

// Store imageData buffer
buffer = new Buffer(config.imageData, encoding='base64');

// Create/Start server
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'image/gif'});
	response.write(buffer.toString('binary'), 'binary');
	response.end();
}).listen(config.port, config.host);

console.log('pixelserv.js started on port: ' + config.port);