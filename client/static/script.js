var friends_app = angular.module('friends_app',[]);

friends_app.factory('FriendFactory',function(){
	var factory ={};
	var friends = [];
	factory.index = function(){
		return friends;
	}

	factory.create = function(info, cb){
		friends.push({name:info.name,age:info.age});
		cb(friends);
	}

	return factory;
});

friends_app.controller('FriendsController', function ($scope, FriendFactory) {
	// body...
	$scope.friends = FriendFactory.index();
	$scope.addfriend = function(){
		FriendFactory.create($scope.new_friend, function(){
			$scope.friends = FriendFactory.index();
			$scope.new_friend = {};
		});
	}
})