$(document).init(function(){
//    $(window).on('hashchange',function(){
//        langChange(function(lang){
//           // $('.' + lang).scrollTop(100);
//        });
//
//        //alert( lang );
//    });
//    langChange();
    //$('.eng1').fadeIn();
    //$('.english' ).fadeIn();

});

// Bind the event.
$(window).hashchange( function(){
    // Alerts every time the hash changes!
    alert( location.hash );

});


function langChange(cb){
    if(location.hash){
        var lang = location.hash.slice(1);
        if(_gaq){
            _gaq.push(['_trackEvent', 'lang', lang]);
        }

        $('.promo').hide(function(){

        });
        var langDiv = $('.' + lang);
        langDiv.fadeIn('slow', function(){
            //cb(lang);
            //$('#start').scrollTop(100);
            scrollTo(0, 700);
        });
    }

}


