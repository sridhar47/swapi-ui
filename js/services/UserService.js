angular.module("swapi-ui")
.service("UserService", function($http, $q){
	var baseUrl = 'http://localhost:1337/';
    this.login = function(data){
        var url =  baseUrl + "user/login";
        return $http({
            url: url,
            method: "POST",
            data: data
        })
    }
    this.signup = function(data, cb){
        var url =  baseUrl + "user/signup";
        return $http({
            url: url,
            method: "POST",
            data: data
        }).then(function mySucces(response) {
            cb(response)
        }, function myError(response) {
            cb(response)
        });
    }
})