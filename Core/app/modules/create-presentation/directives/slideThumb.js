app.directive('slideThumb', function () {
    return {
      templateUrl: 'app/modules/create-presentation/directives/slide-thumb.tpl.htm',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope: {
        slide: '='
      },
      controller: function ($scope, $element, $rootScope, $sce) {
        
        $scope.renderSlideHtml = function(slide) {
          var html = sharedFunctions.toHtmlSlide(slide.Content);
          html = "<div class='slide-thumbnail' style='background-color: " + slide.Background + ";'>" + html + "</div>"; 
          return $sce.trustAsHtml(html);
      };
        
        $scope.newSlide = function () {
          var id = $scope.slide.Id;
          $rootScope.slides.splice(id, 0, {Id: id}); 
          updateIds();
        }
        
        $scope.deleteSlide = function () {
          if($rootScope.slides.length === 1)
            return;
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
        
        $scope.selectSlide = function() {
          $rootScope.slides.forEach(function (slide) {
            slide.Selected = false;
          })
          $scope.slide.Selected = true;
          $rootScope.selectedSlide = $scope.slide;
        }
        
        function updateIds() {
          var slides = $rootScope.slides;
          for(var i = 0; i < slides.length; i++)
            slides[i].Id = i+1;
        }
      }
    };
  });