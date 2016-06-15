app.controller('MainCtrl', ['$scope', '$rootScope', 'MainService', '$window', '$timeout', function ($scope, $rootScope, MainService, $window, $timeout) {

    $scope.talkObj = {};
    var latestMessage = null;
    var recognitionStarted = false;
    $scope.mod = {};

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
        var index = Math.floor((Math.random() * (availableAnimations.length - 1)));
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
        console.log(event);
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                event.srcElement.stop();
                var msg = event.results[i][0].transcript;
                if (!openModule(msg)) {
                    MainService.askBot({ ask: msg }).$promise.then(function (res) {
                        sharedFunctions.talk(res.message);
                        if (!recognitionStarted)
                            recognition.start();
                    });
                }
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

    function openModule(msg) {
        var boarBotNames = [
            'borbud',
            'burbot',
            'Dorbud',
            'Bourbon',
            'Burnout',
            'forbot',
        ];
        for (var i = 0; i < boarBotNames.length; i++) {
            switch (msg.toUpperCase().replace(boarBotNames[i].toUpperCase(), "BOARBOT")) {
                case 'BOARBOT OJCOWIE':
                    $scope.showAuthors = true;
                    $timeout(function() { $scope.showAuthors = false; }, 5000);
                    return true;
            }
        }
    };

}]);