var app = angular.module('app', ['pascalprecht.translate']);

app.config(function ( $translateProvider, $locationProvider) {
    $translateProvider.translations('en', translateEN);
    $translateProvider.translations('de', translateDE);

    $translateProvider.translations('czech', translateCZ);

    $translateProvider.translations('russia', translateRU);

    $translateProvider.translations('poland', translatePL);

    $translateProvider.translations('portugal', translatePT);

    $translateProvider.translations('france', translateFR);
    $translateProvider.translations('china', translateZH);
    $translateProvider.useStaticFilesLoader({
        prefix: 'ajax/locale-',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
});

app.controller('main', function($scope, $location, $translate, $http){



$scope.langs= [
    {display:'Český', flag:'cs', link:'#czech'}
    ,{display:'Deutsch', flag:'de', link:'#de'}
    ,{display:'English', flag:'en', link:'#en'}
    ,{display:'Français', flag:'fr', link:'#french'}
    ,{display:'Polski', flag:'pl', link:'#poland'}
    ,{display:'Português', flag:'pt', link:'#portugal'}
    ,{display:'по-ру́сски', flag:'ru', link:'#russia'}
    ,{display:'中国的', flag:'zh', link:'#chinase'}
]
    $scope.changeLang = function(lang){
        $translate.use(lang.slice(1));
    }

    $scope.$on('$locationChangeSuccess', function(event) {
        //alert('ehmm: ' + $location.path().slice(1));
        $translate.use($location.path().slice(1));
    });


    $scope.platformsAnimate = function(){
        var max = 10;

        animateObject('platform_android', max, getRandom(max) > max/2);
        animateObject('platform_osx', max, getRandom(max) > max/2);
        animateObject('platform_blackberry', max, getRandom(max) > max/2);
        animateObject('platform_windows_phone', max, getRandom(max) > max/2);
        animateObject('platform_firefox_os', max, getRandom(max) > max/2);


    };

    function getRandom(max){
        return (Math.random() * 1000) % (max);
    }

    function animateObject(name, max, positive){
        var random = Math.round(getRandom(max) + 10);

        if(!positive){
            random = random * -1;
        }

        var setting = {top : random+'px'};

        var obj = $('#' + name);
        obj.animate(setting, Math.round(getRandom(1000) + 1500), function(){
            animateObject(name, max, !positive);
        });
        console.log('animateObject', name, max, positive, random, setting, obj);

        //alert(random + ' - ' + positive);
    }


    $scope.messageEmail = '@';

    $scope.onMessageSend = function(){

        var text = $('#message_text').val();
        var xsrf = $.param({from: $scope.messageEmail, message: text});
        $http({method:'POST', url:'mail.php', data: xsrf, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).success(function(data, status, headers, config) {
                var dialog = $('#dialog_sended');
                $('#dialog_email_info').text($scope.messageEmail);
                $('#dialog_text_info').text(text);
                $scope.messageEmail = '@';
                $('#message_text').val('');
                dialog.modal('show');
            }).error(function(data, status, headers, config) {
                console.log('errr: ' , data, status, headers, config);
                alert('Something doesn\'t work properly :-( please try again ;-)');
            });
        //alert('ahoj' + email + ':' + text + ' >> [' + xsrf + ']');
    }

    $scope.onLetMeKnow = function(platform){
        var dialog = $('#dialog_let_me_know');
        $('#let-me-know-title').text(platform);
        $('#message_text').val(platform);
        dialog.modal('show');
    }
});
