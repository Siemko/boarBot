app.directive('slideThumb', function () {
    return {
      templateUrl: 'app/modules/create-presentation/directives/slide-thumb.tpl.htm',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
          
      }
    };
  });