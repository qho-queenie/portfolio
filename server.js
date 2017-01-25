//modules
var express = require("express");
var path = require("path");
var app = express();
var port = 5000;


app.use(express.static(path.join(__dirname, '/client')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');


console.log(__dirname + '/client');


require('./server/config/routes.js')(app);

var server = app.listen(port, function()
{
	console.log("listening on port", port);
});
