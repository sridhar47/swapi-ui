angular.module("swapi-ui")
.service("UserService", function($http, $q){
	var baseUrl = 'http://localhost:1337/';
    this.login = function(data){
        var url =  baseUrl + "login";
        return $http({
            url: url,
            method: "POST",
            body: data
        })
    }
    this.signup = function(data){
        var url =  baseUrl + "signup";
        return $http({
            url: url,
            method: "POST",
            body: data
        })
    }
})