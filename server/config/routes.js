var navBar = require(__dirname + "/navBar.js");
console.log(navBar);
module.exports = function(app){
	app.get('/', function(req, res){
    res.render("index.ejs", {navBar: navBar.generate("home")});
	});

	app.get('/about', function(req, res){
	res.render("about.ejs", {navBar: navBar.generate("about")});
	});

	app.get('/contact', function(req, res){
	res.render("contact.ejs", {navBar: navBar.generate("contact")});
	});

	app.get('/skills', function(req, res){
	res.render("skills.ejs", {navBar: navBar.generate("skills")});
	});

	app.get('/portfolio', function(req, res){
	res.render("port.ejs", {navBar: navBar.generate("portfolio")});
	});
}
