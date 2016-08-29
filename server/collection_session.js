(function () {	'use strict';

module.exports = function(app, db){
	var session = require('express-session');
	var bodyParser = require('body-parser');

	app
	.set('views', __dirname + '/views')
	.engine('html', require('ejs').renderFile)
	.use(session({ secret: 'keyboard cat', cookie: { maxAge: 0.5*60*1000 }, resave: true, saveUninitialized: true })) //5 minutes

	var session_object;

	app.get('/',function(req,res){
		session_object = req.session;
		//Session set when user Request our app via URL
		if(session_object.email) {
			/*
			* This line check Session existence.
			* If it existed will do some action.
			*/
			    res.redirect('/admin');
		}
		else {
		    res.render('index.html');
		}
	});

	app.post('/login', callback_login);
	function callback_login(req,res){
		  session_object = req.session;
		//In this we are assigning email to session_object.email variable.
		//email comes from HTML page.
		  session_object.email=req.body.email;
		  res.end('done');
	}

	app.get('/admin',function(req,res){
		session_object = req.session;
		if(session_object.email) {
			res.write('<h1>Hello '+session_object.email+'</h1>');
			res.end('<a href="/logout">Logout</a>');
		//	res.render('logout.html');
		} 
		else {
		    res.write('<h1>Please login first.</h1>');
		    res.end('<a href="/login">Login</a>');
		}
	});

	app.get('/logout',function(req,res){
		req.session.destroy(callback_logout);
		function callback_logout(err) {
			  if(err) {
			    console.log(err);
			  } else {
			    res.redirect('/');
			  }
			}

	});

}

})();


