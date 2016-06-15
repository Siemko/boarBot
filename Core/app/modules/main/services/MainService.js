app.factory('MainService', function ($resource) {

        var MainService = $resource('bot/botapi.php', {'id': '@id' }, {
            askBot: {
                url: 'bot/botapi.php',
                isArray: false,
                method: "POST"
            },
        });

        return MainService;
    });