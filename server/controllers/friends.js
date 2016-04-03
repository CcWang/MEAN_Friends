module.exports = {
	index:function (req,res) {
		// body...
		res.json([{name:'Andrew',age:24},
			{name:'Michael',age:35}]);
	}
}