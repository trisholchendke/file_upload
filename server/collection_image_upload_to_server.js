(function () {	'use strict';

module.exports = function(app, db){
	
var multer = require('multer');
var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, '../client/uploads/upload_images');
    },
    filename: function (req, file, cb) {
//    	console.log(req.body);
    	console.log(file);
//    	console.log(cb);
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
//        console.log(file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        file['image_url'] = 'uploads/upload_images/' + file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];
        db.collection_uploaded_logos.insert(file, function(err, doc) {
//		    console.log(doc);
//		    cb.json(doc);
        });
    }
});

var upload = multer({ //multer settings
                storage: storage
}).single('file');

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/upload', function(req, res) {
//	console.log(req);
	upload(req,res,function(err){
	    if(err){
	         res.json({error_code:1,err_desc:err});
	         return;
	    }
	     res.json({error_code:0,err_desc:null});
	});
});
app.get('/get_uploaded_logos_from_collection_uploaded_logos', function(req, res) {
//	db.collection_uploaded_logos.remove({});
	db.collection_uploaded_logos.find(function (err, docs) {
	    res.json(docs);
 });
});

}

})();