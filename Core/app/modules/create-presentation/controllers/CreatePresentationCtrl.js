app.controller('CreatePresentationCtrl', function ($scope, $rootScope, $sce, CreatePresentationService) {
    
    
    CreatePresentationService.query({id: 1}).$promise.then(function (res) {
        res.forEach(function (slide){ slide.Selected = false; });
        $rootScope.slides = res;
        var firstSlide = res[0];
        firstSlide.Selected = true;
        $rootScope.selectedSlide = firstSlide;
    });
    
    $scope.$watch('slides', function (newVal, oldVal) { 
        CreatePresentationService.uploadPresentation({ id: 1, prezId: 1, data: $rootScope.slides});
    }, true);
    
    $scope.viewSlideMode = true;
    $scope.markers = sharedFunctions.markers;
    
    $scope.addMark = function(tag) {
        var marker = '[' + tag + '][/' + tag + ']'
        $rootScope.$broadcast('addMarker', marker);
    }
    
    $scope.renderSlideHtml = function(slide) {
        if(!slide)
            return;
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