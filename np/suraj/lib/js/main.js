var app = angular.module('myApp', ['ngRoute'])
app.config(function ($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: './Suraj/Home.html'
                    })
                    .when('/Blog', {
                        templateUrl: './Suraj/Blog.html'
                    })
                    .when('/Form', {
                        templateUrl: './Suraj/Form.html'
                    })
                    .when('/Diet', {
                        templateUrl: './Suraj/Diet.html'
                    })
                    .when('/Aboutus', {
                        templateUrl: './Suraj/Aboutus.html'
                    })
                    .when('/docprofile', {
                        templateUrl: './Suraj/docprofile.html'
                    })
                    .when('/Contactus', {
                        templateUrl: './Suraj/Contactus.html'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            });