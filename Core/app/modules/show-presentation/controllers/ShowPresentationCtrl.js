app.controller('ShowPresentationCtrl', ['$scope', '$http', '$location', '$sce', '$window', function ($scope, $http, $location, $sce, $window) {
    $scope.testuje = "TEST";
    $scope.showSlides = $location.path() === '/show-presentation';
    $http.get("data/presentations/prez-1.json")
    .then(function(response) {
        $scope.slides = response.data;
    });
    $window.slides = $scope.slides;
    $scope.renderSlideHtml = function(slide) {
          var html = sharedFunctions.toHtmlSlide(slide.Content);
          html = "<div class='slide_prez step' style='background-color: " + slide.Background + ";'>" + html + "</div>"; 
          return $sce.trustAsHtml(html);
      };
}]);