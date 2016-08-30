angular.module("swapi-ui")
.controller("loginController", ['$scope', 'UserService', function($scope, UserService ){
	$scope.signupData = {};
	$scope.signup = function(){
		console.log($scope.signupData);
		UserService.signup($scope.signupData, function(response){
			console.log(response)
		});
	}
}])