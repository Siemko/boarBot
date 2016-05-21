app.controller('CreatePresentationCtrl', function ($scope, $rootScope) {
    $scope.markers = sharedFunctions.markers;
    $rootScope.slides= [{Id: 1, Content: 'daw'},{Id: 2, Content: 'milka'}];
    
    $scope.addMark = function(tag) {
        var marker = '[' + tag + '][/' + tag + ']'
        $rootScope.$broadcast('addMarker', marker);
    }
    
    $scope.$watch('selectedSlide.Content', function(newValue, oldValue) {
        sharedFunctions.toHtmlSlide(newValue);
    });
});