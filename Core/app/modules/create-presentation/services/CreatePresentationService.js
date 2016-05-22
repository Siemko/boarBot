app.factory('CreatePresentationService', function ($resource) {

        var CreatePresentationService = $resource('/BoarBot/Core/data/presentations/prez-:id.json', {'id': '@id' }, {
            uploadPresentation: {
                url: '/BoarBot/Core/data/write-data.php',
                isArray: false,
                method: "POST"
            },
        });

        return CreatePresentationService;
    });