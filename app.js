angular.module("swapi-ui", ['ngRoute','ngResource','ui.bootstrap', 'ngAnimate'])
	.config(function($routeProvider, $locationProvider){
		var resolve = {
            auth: (['$q', '$location', function ($q, $location) {
                var defer = $q.defer();
                if (localStorage.getItem('userDetails')) {
                    defer.resolve({
                        user: function( ) {
                            return JSON.parse(localStorage.getItem("userDetails"));
                        }
                    });
                } else {
                    defer.reject();
                    $location.path("/login");
                }
                return defer.promise;
            }])
        };

        $routeProvider
        .when("/", {
        	resolve: resolve
        })
        .when("/login", {
			templateUrl: "views/login.html",
			controller: "loginController"
		})
		.when("/signup", {
			templateUrl: "views/signup.html",
			controller: "signupController"
		})
        .otherwise({
            redirectTo: "/"
        })
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });
	})