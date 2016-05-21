app.controller('CreatePresentationCtrl', function ($scope, $rootScope) {
    
    $rootScope.slides= [{Id: 1, Content: 'daw'},{Id: 2, Content: 'milka'}];
    
    $scope.addMark = function(mark) {
        $rootScope.$broadcast('add', mark);
    }
    
    $scope.$watch('selectedSlide.Content', function(newValue, oldValue) {
        sharedFunctions.toHtmlSlide(newValue);
    });
});