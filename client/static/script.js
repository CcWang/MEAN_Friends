var friends_app = angular.module('friends_app',[]);

friends_app.factory('FriendFactory',function($http){
	var factory ={};
	var friends = [];
	factory.index = function(cb){
		$http.get('/friends').success(function(output){
			friends = output;
			cb(friends);
		})
	}

	factory.create = function(info){
		$http.post('/friend',info).success(function(output){
			friends.push({name:output.name,age:output.age})
		})
	}

	return factory;
});

friends_app.controller('FriendsController', function ($scope, FriendFactory) {
	// body...
	FriendFactory.index(function(data){
		$scope.friends=data;
	});
	$scope.addfriend = function(){
		FriendFactory.create($scope.new_friend);
			$scope.new_friend = {};
	}
})