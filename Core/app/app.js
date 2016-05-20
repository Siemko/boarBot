var app = angular.module('boarBotApp', ['ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/main', {
                templateUrl: 'app/modules/main/views/main.tpl.htm',
                controller: 'MainCtrl'
            }).
            when('/create-presentation', {
                templateUrl: 'app/modules/create-presentation/views/create-presentation.tpl.htm',
                controller: 'CreatePresentationCtrl'
            }).
            otherwise({
                redirectTo: '/main'
            });
    }]);