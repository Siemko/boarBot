app.controller('CreatePresentationCtrl', function ($scope, $rootScope, $sce, CreatePresentationService) {
    
    $rootScope.slides = CreatePresentationService.query({id: 1});
    
    $scope.$watch('slides', function (newVal, oldVal) { 
        console.log('saf');
        CreatePresentationService.uploadPresentation({ id: 1, prezId: 1, data: $rootScope.slides});
    }, true);
    
    $scope.editSlideMode = true;
    $scope.markers = sharedFunctions.markers;
    
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