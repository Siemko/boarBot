var app = angular.module('boarBotApp', ['ngRoute', 'ngResource', 'colorpicker.module'])

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/main', {
      templateUrl: 'app/modules/main/views/main.tpl.htm',
      controller: 'MainCtrl'
    }).when('/create-presentation', {
      templateUrl: 'app/modules/create-presentation/views/create-presentation.tpl.htm',
      controller: 'CreatePresentationCtrl'
    }).when('/show-presentation', {
      templateUrl: 'app/modules/show-presentation/views/show-presentation.tpl.htm',
      controller: 'ShowPresentationCtrl'
    }).otherwise({
      redirectTo: '/main'
    })
  }])

app.filter('html', function ($sce) {
  return function (val) {
    return $sce.trustAsHtml(val)
  }
})
