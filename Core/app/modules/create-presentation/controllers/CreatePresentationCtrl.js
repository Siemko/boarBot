app.controller('CreatePresentationCtrl', function ($scope, $rootScope, $sce) {
    
    $scope.editSlideMode = true;
    $scope.markers = sharedFunctions.markers;
    $rootScope.slides= [{Id: 1, Content: 'daw'},{Id: 2, Content: 'milka'}];
    
    $scope.addMark = function(tag) {
        var marker = '[' + tag + '][/' + tag + ']'
        $rootScope.$broadcast('addMarker', marker);
    }
    
    $scope.renderSlideHtml = function(slide) {
        var html = sharedFunctions.toHtmlSlide(slide.Content);
        html = "<div style='background-color: " + slide.Background + ";'>" + html + "</div>"; 
        return $sce.trustAsHtml(html);
    };
    
    $scope.viewMode = function() {
        $scope.editSlideMode = false;
        $scope.viewSlideMode = true;
    };
    
    $scope.editMode = function() {
        $scope.editSlideMode = true;
        $scope.viewSlideMode = false;
    };
});