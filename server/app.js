var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

var db = mongojs('collection_users', 
		[
		 	'collection_videos',
		 	'collection_tag_center_login',
		 	'collection_sponsor_login',
		 	'collection_uploaded_logos',
		]
	);

app.use(express.static('../client'));
app.use(express.static('../server/uploads'));
app.use(bodyParser.json());  
app.listen('3000', function(){
    console.log('running on 3000...');
});
require('./collection_videos.js')(app, db);
require('./collection_tag_center_login.js')(app, db);
require('./collection_session.js')(app, db);
require('./collection_sponsor_login.js')(app, db);
require('./collection_image_upload_to_server.js')(app, db);
