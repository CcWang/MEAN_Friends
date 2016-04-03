var friends = require('./../controllers/friends.js')
module.exports = function (app) {
	// body...
	app.get('/friends', function(req,res){
		friends.index(req,res);
	});
	app.post('/friend', function(req,res){
		friends.add(req,res);
	})
};

