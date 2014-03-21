var app = angular.module('app', ['pascalprecht.translate']);

app.config(function ( $translateProvider, $locationProvider) {
    $translateProvider.translations('en', {
        'HELLO': 'Hello',
        'text1' : 'Practise vocabulary with Voc4u with its simple learning techniques or with simple memorization games, for example in train to school or waiting to beer.',
        'text2' :"<h2 >Voc4u in shortcut</h2>\
\
        more 10 thousand words <br/>\
            more 6 thousand learning pictures <br/>\
            32 Language <br/>\
        3 type of learning game <br/>\
    37 levels by difficulty <br/>\
    All you can use online.* <br/>\
    Check you score with other players <br/>\
    Listen words by Android Text To Speech<br/>\
    Train spech by Android speech to text <br/>\
    works without registration <br/>\
        <br/><br/>\
    + Messaging with users they are learning the same language like you and you can improve vocabulary together. </p>",
        is_not_translator: "Voc4u is not dictionary, Voc4u is not translator;-)",
        thank_for_download: "Thank you for download and I hope you do well in whatever you do, you are surrounded by only nice people, your wishes will come true, you have a life full of love and mainly you are healthy",
        want_to_learn_new_language:"Want to learn new language…",
        text3: " … or just improve second language? Why don’t try app Voc4u Vocabulary Trainer, where you will practicing wors with interest form and in 33 languages. All languages contain more that 40 lesson, in each lesson is more thant 250 words and 100 learingn images.",
        text4: "In first run you have to choice language to practice and then your native language. With all contained languages you can do all possible combination. Between languages belongs French, German, Spain, Portugal or not so common languages like Indonesian, Chinese or for example Vietnamese and much more. <span class=”not_mistake_please”>Be sure you are choiced the right lang you want to learn and your native otherwise the Android Text-to-speech will be speaking in your native language and most of games will misbehave.</span>",
        train_title: "Train",
        train_text: "Most important part of Voc4u is hidden under button Train. Here you will <b>loudly memorize</b> translation of <b>word</b> on top in blue bar (on top) or at-least in your memory. If you can’t or you are not sure about translation, press the “don’t know” button. If you will use the app in right way (right use buttons “know” and “don’t know”) the app will repeat the words you’ve had trouble with more ofen. Important is also allways <b>repeat</b> the words marked by red <b>color</b>. Actualy is similar like write down vocabulary into paper and hide one side by hand and try guess what is under hand, but with difference the paper is dinamicaly change how progress you do.",
        dictionary_title : "Dictionary",
        dictionary_text : "Application can do for you training much more… after install new lection (which have usually more than 250 words) is splitted into <b>train list</b> and <b>waiting list</b> for not repeat all words altogether,but practice it step by step. How big progress you are doing the app will automatically add bunch of new words from waiting list. In section Dictionary you can manage lessons (installing, uninstalling), set up automatically behavior or moving words between train and waiting list. You can also words permanently delete , but what you appreciate more is <b>add</b> your <b>custom words</b>.",
        games_title : "Learn by games",
        games_text : "Teacher of nations Jan Amos Comenius did say school by game, so why not make learning easier with games. Vocabulary Voc4u contain 3kind games where you have limited time to choose the right <b>picture</b> or correct <b>translation</b> of a word. A bit more difficult but much better-memorizing game is the <b>spelling</b> game.\
\
        maybe your are not sure about a translation, wait seven second and report it! Thank you for your help because thats keeps the words database best ever.\
\
       ...How quickly you answer and the number of correct words you get, gives a score which you can be compared with other learners across the world. Score you are reach help to increase your reputation to open next levels.\
\
        You can also look at mistakes you have made and add them to your train list.",
        speaker_listener_title : "Speaker and Listener",
        speaker_listener_text : "In Speaker are repeatedly spoken words and you are trying translate it like in train-mode, that have advantage in moment when you can reacting with behave on display, for example during drive a car. The Voc4u Trainer can do also opposite you speak into device and Android speech-to-text listening try recognize your right pronunciation.",
        chat_title : "Chat",
        chat_text : "Between top function also belongs Voc4u Network where you will chat with other users, and you will improve language altogether. You will create a your-self-advertise and other user can find you and contact you or you can contact others. Advertise contain your reputation (based on games) as well, that will provide you will chat just with the user or similar language-level like you and will not disturbing you during conversation.",
        text_to_speech_title: "Speech pronunciation",
        text_to_speech_text: 'For practise speech pronunciation in Voc4u Training and in Play  are the words speak in you learn language. It is by Google Android Text To <b>Speech engine</b>. For better quality of pronunciation try another third-party text to speech engine <a href="https://play.google.com/store/apps/details?id=com.ivona.tts.voicebeta.eng.gbr.amy">IVONA Voices</a> or <a href="https://play.google.com/store/apps/details?id=com.svox.classic">SVOX Engine</a> . You can install from your popular marketplace. They are contains several languages, mainly with different voices.',
        text5 : "With application Voc4u can be the difficult language learing fun! :)"

});
    $translateProvider.translations('de', {
        'HELLO': 'Hello',
        'text1' : 'Übe Vokabeln mit Voc4u und seinen einfachen Lerntechniken oder mit einfachen Auswendiglernspielen, zum Beispiel auf dem Weg zur Schule oder beim Warten auf ein Bier.',
        'text2' :"<h2 id='lang_shortcat'>Voc4u in kurz</h2>\
\
        Mehr als zehntausend Wörter <br/>\
            Mehr als sechstausend Lernbilder <br/>\
        32 Sprachen <br/>\
    3 Arten von Lernspielen <br/>\
    37 Schwierigkeitsstufen <br/>\
    Nach dem Download kannst du es online nutzen. <br/>\
    Vergleiche deine Punkte mit anderen Spielern <br/>\
    Höre die Wörter mit Android Text To Speech an<br/>\
    Übe die Sprache mit Android speech to text <br/>\
    Funktioniert ohne Anmeldung <br/>\
        <br/><br/>\
    + Teile dich mit anderen Nutzern aus, die dieselbe Sprache lernen wie du und ihr könnt gemeinsam eure Vokabeln verbessern. </p>",
        is_not_translator: "Voc4u ist kein Wörterbuch, Voc4u ist kein Übersetzer ;-)",
        thank_for_download: "Danke für den Download und ich hoffe dir geht es gut was immer du auch machst, dass du nur von netten Leuten umgeben wirst, deine Wünsche wahr werden, ein Leben voller Liebe hast und vor allem gesund bleibst.",
        want_to_learn_new_language:"Möchtest du eine neue Sprache lernen…",
        text3: "… oder nur die zweite Sprache verbessern? Warum versuchst du nicht Android App Voc4u Vokabeltrainer, bei dem du Wörter nach Themen und in 33 Sprachen lernen kannst. Alle Sprachen beinhalten mehr als 40 Lektionen, in jeder Lektion sind mehr als 250 Wörter und 100 Lernbilder.",
        text4: "Beim ersten Mal musst du die Sprache, welche du üben möchtest, wählen und deine Muttersprache. Unter allen enthaltenen Sprachen, sind alle Kombinationen möglich. Zwischen den Sprachen wie Französisch, Deutsch, Spanisch, Portugiesisch oder nicht so häufigen Sprachen wie Indonesisch, Chinesisch oder zum Beispiel Vietnamesisch und vielen mehr. <span class='not_mistake_please'>Achte darauf die richtige Sprache zu wählen die du lernen möchtest und deine Muttersprache, ansonsten wird Android Text-to-speech in deiner Muttersprache sprechen und die meisten Spiele werden falsch funktionieren.</span>",
        train_title: "Train",
        train_text: 'Den wichtigsten Teil von Voc4u findest du unter der Taste Trainieren. Hier findest du <b>laut wiederholen</b> übersetzen von <b>Wort</b> oben im blauen Balken (oben) oder als letztes in dein Gedächtnis. Wenn du es nicht weißt oder dir nicht sicher bist bei der Übersetzung, drücke auf die “nicht verstanden" Taste. Wenn du die App auf richtige Weise verwendest (richtiges Nutzen von den Tasten “können" und “nicht verstanden") wird die App die Wörter wiederholen, bei denen du öfters Probleme hattest. Wichtig ist also immer <b>wiederholen</b> die Wörter werden rot markiert <b>Farbe</b>. Eigentlich ist es ähnlich wie wenn du die Vokabeln auf Papier schreibst und mit einer Hand abdeckst und versuchst dich zu erinnern was drunter steht, aber mit dem Unterschied, dass Papier nicht anzeigt, welchen Fortschritt du machst.',
        dictionary_title : "Wörterbuch",
        dictionary_text : "Die App kann für dein Training noch viel mehr tun… nach dem installieren von neuen Einheiten (welche für gewöhnlich mehr als 250 Wörter enthalten) wird aufgeteilt in <b>Übungsliste</b> und <b>Warteliste</b> um nicht alle Wörter auf einmal zu wiederholen, sondern Schritt für Schritt zu üben. Je nachdem welchen Fortschritt du machst, wird die App automatisch Wörter aus der Warteliste in die Übungsliste hinzufügen. Im Abschnitt Wörterbuch kannst du diese Einstellung ändern, verwalte Einheiten (Installieren, Deinstallieren) oder verschiebe Wörter zwischen Übungs – und Warteliste. Wörter können auch gelöscht werden, aber was besser für dich ist <b>hinzufügen</b> deine <b>benutzerdefinierte Wörter</b>.",
        games_title : "Lerne durch Spielen",
        games_text : "Lehrer der Nationen Johann Amos Comenius erzählte der Schule vom Spiel, also warum das Lernen nicht einfacher machen durch Spielen. Wortschatz Voc4u beinhaltet 3 Arten von Spielen, bei denen du begrenzt Zeit hast um das richtige <b>Bild</b> oder die korrekte <b>Übersetzung</b> von einem Wort zu wählen. Etwas schwieriger, aber das bessere Auswendiglernspiel ist das <b>Buchstabier</b> spiel.\
\
        Wenn du dir nicht sicher bist bei einer Übersetzung, dann warte 7 Sekunden und melde es! Danke für deine Hilfe, damit bleibt die Voc4u Wortschatzdatenbank die beste für immer.\
\
        ...Wie schnell du antwortest und die Anzahl an richtigen Worte gibst, gibt Punkte die du mit anderen Lernenden auf der ganzen Welt vergleichen kannst. Die Punktzahl die du erreichst, hilft dir dein Ansehen zu erhöhen und nächste Level zu öffnen.\
\
        Du kannst deine Fehler die du gemacht hast auch anschauen und diese zu deiner Übungsliste hinzufügen.",
        speaker_listener_title : "Sprecher und Hörer",
        speaker_listener_text : "Beim Sprecher werden die gesprochenen Wörter wiederholt und du versuchst es zu übersetzen wie bei dem Trainingsmodus, das hat Vorteile in Situationen bei denen du nicht auf das Display reagieren kannst, zum Beispiel während dem Auto fahren. Der Voc4u Trainer kann auch das gegenteilige, du sprichst in das Gerät und Android speech-to-text hört zu und versucht deine richtige Aussprache zu erkennen.",
        chat_title : "Chatten",
        chat_text : "Zu den Top Funktionen gehört ebenfalls das Voc4u Netzwerk, bei dem du mit anderen Nutzern chatten kannst, und gemeinsam die Sprache verbessern könnt. Du kannst dein eigenes Profil erstellen, andere Nutzer können dich dann finden und dich kontaktieren oder du kannst sie kontaktieren. Dein Profil enthält dein Ansehen (basierend auf den Spielen) und sieht es auch vor, dass du nur mit Nutzern, die das ähnliche Sprachniveau haben wie du, chatten kannst und andere können dich während den Gesprächen nicht stören.",
        text_to_speech_title: "Speech pronunciation",
        text_to_speech_text: 'For practise speech pronunciation in Voc4u Training and in Play  are the words speak in you learn language. It is by Google Android Text To <b>Speech engine</b>. For better quality of pronunciation try another third-party text to speech engine <a href="https://play.google.com/store/apps/details?id=com.ivona.tts.voicebeta.eng.gbr.amy">IVONA Voices</a> or <a href="https://play.google.com/store/apps/details?id=com.svox.classic">SVOX Engine</a> . You can install from your popular marketplace. They are contains several languages, mainly with different voices.',
        text5 : "Mit der App Voc4u kann es Spaß machen eine schwierige Sprache zu lernen! :)"
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
