var app = angular.module('boarBotApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/main', {
                templateUrl: 'app/modules/main/views/main.tpl.htm',
                controller: 'app/modules/main/controllers/MainCtrl'
            }).
            when('/create-presentation', {
                templateUrl: 'app/modules/create-presentation/views/create-presentation.tpl.htm',
                controller: 'app/modules/create-presentation/controllers/CreatePresentationCtrl'
            }).
            otherwise({
                redirectTo: '/main'
            });
    }]);

//App run
app.run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {
    
  }]);