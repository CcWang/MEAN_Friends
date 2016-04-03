var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'./client')));

app.listen(8000,function () {
	// body...
	console.log('listening on 8000 -- friends');
})

require('./server/config/routes.js')(app);