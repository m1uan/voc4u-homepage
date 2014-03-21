var app = angular.module('app', ['pascalprecht.translate']);

app.config(function ( $translateProvider, $locationProvider) {
    $translateProvider.translations('en', {
        'voc4u': 'Hello',
        FOO: 'This is a paragraph.',
        BUTTON_LANG_EN: 'english',
        BUTTON_LANG_DE: 'german'
    });
    $translateProvider.translations('de', {
        'voc4u': 'Hallo',
        FOO: 'Dies ist ein Paragraph.',
        BUTTON_LANG_EN: 'englisch',
        BUTTON_LANG_DE: 'deutsch'
    });

    $translateProvider.useStaticFilesLoader({
        prefix: 'ajax/locale-',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('en_US');

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
});

app.controller('main', function($scope, $location, $translate){



$scope.langs= [
    {display:'Český', flag:'cz.svg', link:'#czech'}
    ,{display:'Deutsch', flag:'de.svg', link:'#de'}
    ,{display:'English', flag:'en.svg', link:'#en'}
    ,{display:'Français', flag:'fr.svg', link:'#french'}
    ,{display:'Polski', flag:'pl.png', link:'#poland'}
    ,{display:'Português', flag:'br.svg', link:'#portugal'}
    ,{display:'по-ру́сски', flag:'ru.svg', link:'#russia'}
]
    $scope.changeLang = function(lang){
        $translate.use(lang.slice(1));
    }

    $scope.$on('$locationChangeSuccess', function(event) {
        //alert('ehmm: ' + $location.path().slice(1));
        $translate.use($location.path().slice(1));
    });

});
