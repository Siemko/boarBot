app.controller('MainCtrl', ['$scope', '$rootScope', 'MainService', function ($scope, $rootScope, MainService) {
    $scope.talkObj = {};
    var latestMessage = null;

    $scope.enableTalkMode = function () {
        $scope.talkMode = true;
        recognition.start();
    };

    $scope.disableTalkMode = function () {
        $scope.talkMode = false;
    };

    recognition.onresult = function (event) {
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                recognition.stop();
                var msg = event.results[i][0].transcript;
                MainService.askBot({ ask: msg }).$promise.then(function(res){
                    sharedFunctions.talk(res.message);
                    recognition.start();
                });
            }
        }
    }
    
    recognition.onerror = function (event) {
        if(event.error != 'no-speech') {
            sharedFunctions.talk('Przepraszam, nie zrozumiałem. Powtórz proszę.');
            errorWasBefore = true;
        }
    }

    recognition.onend = function () {
        if($scope.talkMode)
            recognition.start();
    }
    
}]);