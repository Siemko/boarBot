app.controller('ShowPresentationCtrl', function ($scope, $http, $sce, CreatePresentationService, $timeout) {

    var renderedSlides = 0;
    var currentSlide = 0;
    $scope.loading = true;
    $scope.pause = false;
                recognition.stop();
    
    CreatePresentationService.query({ id: 1 }).$promise.then(function (res) {
        $scope.slides = [];
        res.forEach(function (slide) {
            $scope.slides.push(createSlide(slide));
        });
    });
    
    $scope.renderSlideHtml = function (slide) {
        if(++renderedSlides == $scope.slides.length) {
            $timeout(function() { $scope.loading = false}, 2000);
            $timeout(function () { impress().init(); }, 500);
            $timeout(function() { $scope.presentation(); }, 4000);
        }
        return $sce.trustAsHtml(slide.html);
    };

    function createSlide(slide) {
        var ids = [ 'its', 'big', 'tiny', 'ing', 'imagination', 'one-more-thing', 'its-in-3d'];
        var result = {};
        result.transkrypt = slide.Transkrypt;
        result.html = '<p>' + sharedFunctions.toHtmlSlide(slide.Content) + '</p>';
        result.scale = Math.floor(Math.random() * 5 + 1);
        result.x = Math.floor(Math.random() * (Math.random() < 0.5 ? 3000 : -3000));
        result.y = Math.floor(Math.random() * (Math.random() < 0.5 ? 3000 : -3000));
        result.z = Math.floor(Math.random() * (Math.random() < 0.5 ? 1000 : -1000));
        result.rotate = Math.random() < 0.6 ? 0 : Math.floor(Math.random() * (Math.random() < 0.5 ? 360 : -360));
        result.id = Math.random() < 0.5 ? '' : ids[Math.floor(Math.random() * (ids.length-1))];
        result.style = slide.Background ? 'background-color: ' + slide.Background : '';
        return result;
    };


speechSynthesisUtterance.onend = function() {
        $timeout(function() { 
            currentSlide++;
            $scope.presentation();
        }, 1000);
}

$scope.presentation = function() {
    impress().next();
    $timeout(function() { sharedFunctions.talk($scope.slides[currentSlide].transkrypt); }, 2000);
}
    
});