var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
module.exports = {
	index:function (req,res) {
		// body...
		Friend.find({}, function(err,results){
			if (err) {
				console.log('errors',err);
			}else{
				res.json(results);
			}
		});
	},
	add:function(req,res){
		Friend.create(req.body,function(err,results){
			if (err) {
				console.log('errors',err);
			}else{
				res.json(results)
			}
		})
	}
}