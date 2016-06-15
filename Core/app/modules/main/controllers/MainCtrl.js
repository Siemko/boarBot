app.controller('MainCtrl', ['$scope', '$rootScope', 'MainService', function ($scope, $rootScope, MainService) {
    $scope.talkObj = {};
    var latestMessage = null;
    var recognitionStarted = false;

    $scope.animateBoar = function () {
        var availableAnimations = ['bounce',
            'pulse',
            'rubberBand',
            'shake',
            'headShake',
            'swing',
            'tada',
            'wobble',
            'jello',];
         var index = Math.floor((Math.random() * (availableAnimations.length -1)));
         $scope.boarAnimation = availableAnimations[index];
    }

    $scope.enableTalkMode = function () {
        $scope.talkMode = true;
        recognition.start();
    };

    $scope.disableTalkMode = function () {
        $scope.talkMode = false;
        recognition.stop();
    };

    recognition.onresult = function (event) {
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                recognition.stop();
                var msg = event.results[i][0].transcript;
                MainService.askBot({ ask: msg }).$promise.then(function (res) {
                    sharedFunctions.talk(res.message);
                    if(!recognitionStarted)
                        recognition.start();
                });
            }
        }
    }

    recognition.onerror = function (event) {
        if (event.error != 'no-speech') {
            sharedFunctions.talk('Przepraszam, nie zrozumiałem. Powtórz proszę.');
            errorWasBefore = true;
        }
    }

    recognition.onend = function () {
        recognitionStarted = false;
        if ($scope.talkMode)
            recognition.start();
    }
    
    recognition.onstart = function () {
        recognitionStarted = true;
    }


}]);