app.factory('CreatePresentationService', function ($resource) {

        var CreatePresentationService = $resource('data/presentations/prez-:id.json', {'id': '@id' }, {
            uploadPresentation: {
                url: 'data/write-data.php',
                isArray: false,
                method: "POST"
            },
        });

        return CreatePresentationService;
    });