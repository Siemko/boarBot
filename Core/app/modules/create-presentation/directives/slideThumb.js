app.directive('slideThumb', function () {
    return {
      templateUrl: 'app/modules/create-presentation/directives/slide-thumb.tpl.htm',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope: {
        slide: '='
      },
      controller: function ($scope, $element, $rootScope) {
        $scope.newSlide = function () {
          var id = $scope.slide.Id;
          $rootScope.slides.splice(id, 0, {Id: id}); 
          updateIds();
        }
        
        $scope.deleteSlide = function () {
          var id = $scope.slide.Id - 1;
          $rootScope.slides.splice(id, 1); 
          updateIds();
        }
        
        $scope.upSlide = function () {
          if($scope.slide.Id == 1)
            return;
          var beforeSlide = $rootScope.slides[$scope.slide.Id - 2];
          $rootScope.slides[$scope.slide.Id - 2] = $rootScope.slides[$scope.slide.Id - 1];
          $rootScope.slides[$scope.slide.Id - 1] = beforeSlide; 
          updateIds();
        }
        
        $scope.downSlide = function () {
          if($scope.slide.Id == $rootScope.slides.length)
            return;
          var nextSlide = $rootScope.slides[$scope.slide.Id];
          $rootScope.slides[$scope.slide.Id] = $rootScope.slides[$scope.slide.Id - 1];
          $rootScope.slides[$scope.slide.Id - 1] = nextSlide; 
          updateIds();
        }
        
        function updateIds() {
          var slides = $rootScope.slides;
          for(var i = 0; i < slides.length; i++)
            slides[i].Id = i+1;
        }
      }
    };
  });