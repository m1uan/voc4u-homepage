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
    All you can use online. <br/>\
    Check you score with other players <br/>\
    Listen words by Android Text To Speech<br/>\
    Train spech by Android speech to text <br/>\
    Works without registration <br/>\
    Chat between users\
            </p>",
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
        ,message_sent : "Message send, thank you ;-)"
        ,your_email: "Your Email:"
        ,your_message : "Your Message: "
        ,let_me_know: 'Unfortunately the Voc4u for platform what you looking for is now middle of hard developing :-) But we will be pleased to let you know when is ready for you :-)'

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
        ,message_sent : "Message send, thank you ;-)"
        ,your_email: "Your Email:"
        ,your_message : "Your Message: "
        ,let_me_know: 'Unfortunately the Voc4u for platform what you looking for is now middle of hard developing :-) But we will be pleased to let you know when is ready for you :-)'

    });

    $translateProvider.translations('czech', {
        'HELLO': 'Hello',
        'text1' : 'Procvič si slovíčka s Voc4u, pomocí jednoduché opakovací techniky či pomocí jednoduchých her, například ve vlaku do školy nebo při čekání na pivo:-)',
        'text2' :"<h2 id='lang_shortcat'>Voc4u ve zkratce</h2>\
        Až 10 tisic slovíček <br/>\
            Až 6 tisic naučných obrázků <br/>\
            32 Cizích jazyků <br/>\
            3 herni rezimy pro snadne opakovani <br/>\
        37 Levelu podle optiznosti <br/>\
    Vše dostupné offline.* <br/>\
    Porovnani vaseho vysledku s ostatnimi <br/>\
    Poslech slovicek pomoci Android text to speech <br/>\
    Trénování výslovnosti pomocí Android text to speech <br/>\
    Chat mezi uzivateli <br/>\
    Funguje bez registrace <br/>\
    </p>",
        is_not_translator: "Voc4u neni slovnik, Voc4u neni prekladac;-)",
        thank_for_download: "Dekuju za download a preju krome hodne naucenych slovicek, take at se Ti dari vsecko na co sahnes, mas kolem sebe jen skvele lidi, splni se Ti vsecko co si prejes, mas plno lasky a hlavne mas plno zdravi!",
        want_to_learn_new_language:" Chtěli byste se naučit nový jazyk…",
        text3: "… nebo si snad jen zdokonalit řeč, kterou už umíte? Proč k tomu nevyužít aplikaci Slovíčka Voc4u, díky které si můžete procvičovat slovíčka zábavnou formou a to rovnou ve 33 jazycích! Aplikace obsahuje přes 40 lekcí a v každé z nich je přes 250 slov a sto obrázků.",
        text4: "Při prvním spuštění si zvolíte jazyk ve kterém si chcete procvičovat slovíčka a poté váš rodný jazyk. Přitom je možné libovolně kombinovat všechny dostupné jazyky. Součástí aplikace je například čeština, angličtina, němčina, španělština, portugalština, ale také méně obvyklá arabština, řečtina nebo třeba hebrejština a mnohé další. <span class=”not_mistake_please”>Raději se ujisti, že jsi zadal spravný učený a rodný jazyk, jinak Ti bude slovníček Voc4u a hlasová funkce text-to-speach opakovat slovíčka v Tvém odném jazyku, mimo to většina her stratí smysl.</span>",
        train_title: "Trenink",
        train_text: 'Nejdůležitější částí Voc4u se skrývá pod tlačítkem Trénuj.  Zde se Vám <b>slovíčka opakují</b> a Tvým úkolem je si nahlas <b>říci překlad slovíčka</b> v modrém pruhu (nahoře) nebo alespoň v duchu. Pokud se vám to nepovede nebo si nejste uplně jistí, použijete tlačítko “neznám”. Pokud budete tlačítka “znám” a “neznám” používat správným způsobem aplikace se Vám odvděčí tím že vám bude opakovat více slovička, která vám tolik nejdou.  Velmi důležité je <b>opakovat</b> si slovíčka označena <b>červeně</b>.\
        Je to vlastně obdoba sepisování slovíček na papír a jejich hádání s tím rozdílem, že se pořadí slovíček dynamicky mění podle toho jak vám učení jde.</p>',
        dictionary_title : "Slovnik",
        dictionary_text : "Aplikace toho však umí mnohem více, po nainstalování lekce (ktérá má obvykle více než 250! slovíček) je rozdělena na <b>trenovací list</b> a <b>čekající list</b>, to proto aby jste se nepustili do opakování všech sloviček lekce najednou, ale opakovali si je pěkně pozvolna. Podle toho jak s učením postupujete vám aplikace automaticky přidáva další slovíčka. V sekci slovník toto chování však můžete změnit, samozdřejmostí je také přesouvaní slovíčkek mezi trenovacím a čekajícím listem a naopak, nebo je uplně mazat. Instalovat a odinstalovat lekce. Nejvíce však oceníte možnost přidávat <b>slovíčka svá vlastní.</b>",
        games_title : "Učení hrou",
        games_text : "Už Jan Amos Komenský říkaval škola hrou, tak co si nespřijemnit učení nějakou tou hrou\
        Všechny tři druhy her, které slovniček Voc4u obsahuje jsou omezeny časově. V první <b>přiřazujete</b> slova k obrázkům, v druhé slovíčka vybíráte a v poslední doplňujete chybějící písmenka. Po každé dohrané hře také můžete on-line porovnat <b>skóre</b> s ostatními hráči. Každá hra vám zvyšuje také celkovou <b>reputaci</b>, jež vás pak provází celou aplikací. K tomu všemu si můžete vybrat úroveň vašich znalostí a trénovat tak jen slovíčka odpovídající vaším vědomostem.",
        speaker_listener_title : "Předříkávač a posluchač",
        speaker_listener_text : "V části Posluchač se pak slovíčka přehrávají a vy se je snažíte přeložit, to se hodí hlavně v situacích, kdy nemůžete reagovat na dění na obrazovce, třeba při řízení. Aplikace to ale umí také naopak, kdy do telefonu slovíčko říkáte a on se snaží rozeznat, zda jej vyslovujete správně. </p>",
        chat_title : "Chatovaní",
        chat_text : "Mezi nadstandardní funkce patří možnost chatovat s ostatními uživateli, což také pomáhá zlepšovat daný jazyk. Jednoduše si zadáte jakýsi <b>inzerát</b>, na který se pak mohou ostatní uživatelé přihlásit. Součástí inzerátu je i vaše reputace (odvíjí se podle skóre v hrách), což zajistí, že budete komunikovat jen <b>s uživateli na podobné úrovni</b>, jako jste vy sami a nebudete si tak rozdílnou úrovní věci komplikovat",
        text_to_speech_title: "Speech pronunciation",
        text_to_speech_text: 'For practise speech pronunciation in Voc4u Training and in Play  are the words speak in you learn language. It is by Google Android Text To <b>Speech engine</b>. For better quality of pronunciation try another third-party text to speech engine <a href="https://play.google.com/store/apps/details?id=com.ivona.tts.voicebeta.eng.gbr.amy">IVONA Voices</a> or <a href="https://play.google.com/store/apps/details?id=com.svox.classic">SVOX Engine</a> . You can install from your popular marketplace. They are contains several languages, mainly with different voices.',
        text5 : "S aplikací Voc4u může být i náročná výuka cizího jazyka zábavou!"
        ,message_sent : "Message send, thank you ;-)"
        ,your_email: "Your Email:"
        ,your_message : "Your Message: "
        ,let_me_know: 'Unfortunately the Voc4u for platform what you looking for is now middle of hard developing :-) But we will be pleased to let you know when is ready for you :-)'

    });

    $translateProvider.translations('russia', {
        'HELLO': 'Hello',
        'text1' : 'Расширяй свой словарный запас вместе с Voc4u, с помощью этих простых методик и игр на запоминание, например, пока ты едешь на учебу или ждешь пиво в баре.',
        'text2' :"<h2 id='lang_shortcat'>Voc4u в кратце</h2>\
        более чем 10 тысяч слов <br/>\
        более 6 тысяч картинок  <br/>\
    32 языка <br/>\
    3 вида обучающих игр <br/>\
    37 уровней сложности <br/>\
    После скачивания ты можешь пользоваться приложением в онлайн <br/>\
    Можно сравнивать свой чет с другими пользователями <br/>\
    Можно слушать слова с помощью Android преобразователя текста в речь <br/>\
    Можно практиковаться в произношении с Android преобразователем речи в текст <br/>\
    Работает и без регистрации <br/>\
        <br/><br/>\
    + Можно общаться с пользователями, которые изучают тот же язык, что и ты. И расширять свой словарный запас вместе. </p>",
        is_not_translator: "Voc4u - не словарь, и Voc4u - не переводчик ;-)",
        thank_for_download: "Спасибо за скачивание и я надеюсь, у тебя все получается, чтобы ты ни делал, тебя окражают только хорошие люди, твои желания исполняются, жизнь твоя полна любви и, что особенно важно, ты здоров.",
        want_to_learn_new_language:"Хочешь изучать новый язык…",
        text3: "… или ты хочешь улучшить уже изучаемый язык? Почему бы не попробовать Android приложение Voc4u Vocabulary Trainer, в котором ты выучишь в интересной форме до 33 языков. Каждый язык содержит 40 уроков, в каждом из которых более чем 250 слов и 100 картинок.",
        text4: "В начале, ты должен выбрать изучаемый и родной языки. Со всеми существующими языками ты можешь создавать любые комбинации. У нас есть французкий, немецкий, испанский, португальский, другие менее распространенные языки такие как индонезийский, китайский или, например, вьетнамский и многие другие.  <span class=”not_mistake_please”> Будь уверен в правильности выбора изучаемого и родного языка иначе Android перобразователь текста в речь будет говорить на твоем родном языке и большинство игр будут работать не правильно.</span>",
        train_title: "Trenink",
        train_text: 'Самая важная часть Voc4u спрятана под кнопкой УЧИ. Здесь ты будешьl <b>запоминать</b> перевод <b> слова </b> в синей рамке (наверху). Если ты не можешь перевести слово или ты не уверен, нажми кнопку “не знаю”. Если ты будешь использовать приложение правильно (правильно использовать кнопки  “знаю” и “не знаю”) приложение будет повторять проблемные слова чаще. Очень важно еще всегда <b>повторять</b> слова отмеченные красным <b>цветом</b>. На самом деле это похоже на то как, ты, записав незнакомые слова на бумагу, закрываешь рукой их перевод. Но разница приложения по сравнению с бумагой в том, что список слов в приложении изменяется автоматически в результате твоего прогресса.',
        dictionary_title : "Словарь",
        dictionary_text : "Приложение может сделать для тебя и еще многое другое… после установки новых уроков (каждые из которых содерржат более чем 250 слов) разделены на <b>список слов для изучения</b> и <b>список ожидания</b> для того чтобы не повторять все слова сразу, а изучать их поэтапно. В процессе твоего прогресса приложение будет автоматически добавлять слова из твоего списка ожидания в список для изучения. В секции Словарь ты может изменить настройки, редактировать слова (устанавливать, деинсталировать) или перемещать слова из одного списка в другой. Ты можешь удалять слова, или, что тебе понравится еще больше,  <b>добавлять </b> свои <b>пользовательские слова</b>.",
        games_title : "Учись играя",
        games_text : "Учитель народов Ян Амус Каменский наказал: учись, играя. Поэтому, почему бы не сделать учебу легче с помощью игр. Vocabulary Voc4u сожержит 3 вида игр, в которых ты в условиях ограниченого времени должен выбрать првильную <b>картинку</b>или правильный <b>перевод</b> слова. Немного сложнее, но полезнее для запоминания игра на <b>правиписание</b>.\
        Может быть ты не согласен с переводом, подожди 7 секунд и сообщи об этом! Благодарю за твою помощь, потому что она поддрерживает базу данных Voc4u в наилучшей форме.\
            ...В зависимости от скорости, с которой отвечаешь, ты будешь получать очки. Которые, ты можешь потом сравнить с очками других пользователей со всего мира. И твои очки помогут тебе перейти на следующие более сложные уровни.\
        Ты также можешь посмотреть на свои ошибки и добавить эти слова в свой список для изучения.",
        speaker_listener_title : "Говорящий и слушатель",
        speaker_listener_text : "Функция Говорение несколько раз проговорит для тебя изучаемые слова, это особенно важно, в те моменты, когда ты не можешь смотреть на экран, например во время вождения автомобиля. Voc4u Trainer также может работать и наоборот. Ты будешь говорить, а Android преобразователь речи в текст послушает и определит правильность твоего произношения.",
        chat_title : "Общение",
        chat_text : "Также в Voc4u Network ты можешь общаться с другими пользователями и изучать языкс ними вместе. Ты создашь свое объявление, и пользователи смогу написать тебе или ты сам сможешь написать кому-то. Это объявление содержит и информацию о репутации в приложении (основанной на результатах игр), что позволяет определить уровень языка пользователя.",
        text_to_speech_title: "Speech pronunciation",
        text_to_speech_text: 'For practise speech pronunciation in Voc4u Training and in Play  are the words speak in you learn language. It is by Google Android Text To <b>Speech engine</b>. For better quality of pronunciation try another third-party text to speech engine <a href="https://play.google.com/store/apps/details?id=com.ivona.tts.voicebeta.eng.gbr.amy">IVONA Voices</a> or <a href="https://play.google.com/store/apps/details?id=com.svox.classic">SVOX Engine</a> . You can install from your popular marketplace. They are contains several languages, mainly with different voices.',
        text5 : "С приложением Voc4u такое сложное дело как изучение инстранного языка может стать веселым! :)"
        ,message_sent : "Message send, thank you ;-)"
        ,your_email: "Your Email:"
        ,your_message : "Your Message: "
        ,let_me_know: 'Unfortunately the Voc4u for platform what you looking for is now middle of hard developing :-) But we will be pleased to let you know when is ready for you :-)'

    });

    $translateProvider.translations('poland', {
        'HELLO': 'Hello',
        'text1' : 'Poszerzaj swoje słownictwo z Voc4! Dzięki prostym technikom nauczania i grom pamięciowym możesz doskonalić swoje umiejętności nawet w drodze do szkoły albo czekając na piwo w lokalnym barze</p><p>',
        'text2' :"<h2 id=”lang_shortcat”>Voc4u in shortcut</h2>\
        więcej niż 10 tysięcy słów <br/>\
        więcej niż 6 tysięcy obrazków <br/>\
    32 języki <br/>\
    3 rodzaje gier edukacyjnych <br/>\
    37 poziomów trudności <br/>\
    Po pobraniu możesz używać online <br/>\
    Porównaj swoje wyniki z wynikami innych graczy <br/>\
    Posłuchaj wymowy w Android Text To Speech<br/>\
    Poćwicz wymowę w Android speech to text <br/>\
    aktywny bez rejestracji <br/>\
        <br/><br/>\
    + Korespondencja z użytkownikami uczącymi się tego samego języka pozwoli ci osiągnąć jeszcze lepsze wyniki w nauce. </p>",
        is_not_translator: "Voc4u nie jest słownikiem, Voc4u nie jest tłumaczem;-)",
        thank_for_download: "Dziękujemy za pobranie i życzymy ci powodzenia we wszystkim co robisz, spotkania wielu dobrych ludzi, spełnienia marzeń, życia pełnego miłości i przede wszystkim zdrowia.",
        want_to_learn_new_language:"Chcesz rozpocząć naukę…",
        text3: "...lub pracować z językiem obcym, który już znasz? Dlaczego nie skorzystasz z aplikacji Voc4u Vocabulary Trainer na Androida, która oferuje ci interesującą formę nauki aż 33 języków obcych? Dla dowolnego języka otrzymujesz ponad 40 lekcji, z których każda zawiera więcej niż 250 słów i 100 pomocnych ilustracji. </p><p>",
        text4: "Po pierwszym uruchomieniu musisz wybrać język, którego chcesz się uczyć, jak również swój język rodzimy. Liczba możliwych kombinacji jest ogromna. Dostępne są języki takie jak francuski, niemiecki, hiszpański, portugalski ale i mniej popularne jak indonezyjski, chiński, czy wietnamski. <span class=”bez_błędu_proszę”>Upewnij się, że poprawnie ustawiłeś języki, w innym wypadku Android Text-to-speech będzie używał twojego języka rodzimego i nie poradzisz sobie z większością gier.</span>",
        train_title: "Train",
        train_text: "Najistotniejsze elementy Voc4u odkryjesz klikając klawisz Trenuj. Tutaj będziesz<b>powtarzać na głos</b> tłumaczyć<b>słowo</b> na górze w niebieskim pasku (na górze) albo przynajmniej w myślach. Jeśli nie znasz słowa, lub nie jesteś go pewny, naciśnij klawisz “nie znam”. Jeśli będziesz używać aplikacji w sposób poprawny (zgodnie z rzeczywistością wybierać opcje “znam” i “nie znam”) aplikacja będzie częściej powtarzać słowa, które sprawiają ci problem. Ważną funkcją jest też<b>powtarzanie</b> słów zapisanych na czerwono <b>kolor</b>. To trochę jak zapisywanie słów na kartce, zakrywanie jednej strony dłonią i zgadywanie, co znajduje się pod nią. W odróżnieniu do kartki, słownictwo w aplikacji zmienia się dynamicznie w zależności od poczynionych postępów.",
        dictionary_title : "Słownik",
        dictionary_text : "Aplikacja może pomóc ci w nauce na wiele różnych sposobów… po zainstalowaniu nowa lekcja (zawierająca zazwyczaj ponad 250 słów) zostaje rozdzielona na <b>część treningową</b> i <b>poczekalnię</b> tak, aby umożliwić ci stopniowe przyswajanie wiedzy. Proporcjonalnie do twoich postępów aplikacja będzie przenosiła słowa z poczekalni do części treningowej. W sekcji Słownik możesz modyfikować tę procedurę, zarządzać lekcjami (instalować je lub usuwać) oraz przenosić słowa pomiędzy częścią treningową a poczekalnią. Elementy można usuwać, ale przede wszystkim <b>dodawać</b>własne <b>słownictwo</b>.",
        games_title : "Nauka poprzez zabawę",
        games_text : "Nazywany nauczycielem narodów Jan Amos Komensky powiedział, że nauka jest jak gra. Dlaczego więc nie uczyć się efektywniej poprzez gry? Vocabulary Voc4u oferuje 3 rodzaje gier, w których mierzony jest czas wyboru odpowiedniej <b>ilustracji</b> lub <b>tłumaczenia</b>słowa. Odrobinę trudniejsze może być zapamiętywanie poprzez r<b>zapisywanie</b>.\
        jeśli nie jesteś pewien tłumaczenia poczekaj siedem sekund i powiadom nas o tym! Dzięki Twojej pomocy Voc4u może stać się najlepszą bazą wiedzy, jaka istnieje.\
            ...Szybkość twoich reakcji oraz prawidłowe odpowiedzi są punktowane. Na tej podstawie możesz porównywać swoje wyniki z rezultatami innych użytkowników na całym świecie. Punktacja, którą uzyskasz pozwoli ci zbudować reputację i przejść na kolejne poziomy trudności.\
        Możesz również zgromadzić wszystkie słowa, w których popełniłeś błąd i dodać je do swojej części treningowej.",
        speaker_listener_title : "Speaker and Listener",
        speaker_listener_text : "Speaker powtarza nowe słowa, które ty starasz się przetłumaczyć. Ten tryb nauki jest idealny w sytuacjach, kiedy nie możesz używać ekranu, na przykład podczas prowadzenia samochodu. Voc4u Trainer może działać również odwrotnie: kiedy ty mówisz do mikrofonu Android speech-to-text listening ocenia poprawność twojej wymowy.",
        chat_title : "Rozmowa",
        chat_text : "Do najważniejszych funkcji Voc4u należy również Sieć, gdzie uczysz się języka rozmawiając z pozostałymi uczestnikami. Możesz tu stworzyć własny profil, dzięki któremu inni znajdą ciebie, lub sam skontaktujesz się z wybranymi osobami. Profil będzie informował o twojej reputacji (uzyskanej w grach), dzięki czemu kontaktować się będą z tobą użytkownicy o podobnych zdolnościach językowych.",
        text_to_speech_title: "Wymowa",
        text_to_speech_text: 'Możesz posłuchać jak brzmi poprawna wymowa nowych słów w Voc4uTraining oraz w Play. It is by Google Android Text To <b>Speech engine</b>. Aby uzyskać lepszą jakość dźwięku możesz wypróbować syntezator od innego producenta <a href="https://play.google.com/store/apps/details?id=com.ivona.tts.voicebeta.eng.gbr.amy">IVONA Voices</a> or <a href="https://play.google.com/store/apps/details?id=com.svox.classic">SVOX Engine</a> . Powyższe syntezatory zawierają duży wybór języków, zazwyczaj także różne głosy.',
        text5 : "Z aplikacją Voc4u nawet nauka trudnego języka może być dobra zabawą! :-)"
        ,message_sent : "Message send, thank you ;-)"
        ,your_email: "Your Email:"
        ,your_message : "Your Message: "
        ,let_me_know: 'Unfortunately the Voc4u for platform what you looking for is now middle of hard developing :-) But we will be pleased to let you know when is ready for you :-)'


    });

    $translateProvider.translations('portugal', {
        'HELLO': 'Hello',
        'text1' : 'Exercita o seu vocabulário com Voc4u, usando uma técnica simplex de repetição iterativa ou usando jogos simples,por exemplo, no trem indo para a escola ou enquanto espera por uma cerveja :-)',
        'text2' :"<h2 >Voc4u em poucas palavras</h2>\
        more 1Até 10 mil palavras <br/>\
        Até 6mil imagens educativas <br/>\
        32 Línguas estrangeiras <br/>\
    3 modos de jogo para uma fácil repetição <br/>\
    37 Nívels de dificuldade <br/>\
    Tudo disponível offline.* <br/>\
    Comparando os seu resultados com outros <br/>\
    Ouvir vocabulário com ajuda Android text to speech <br/>\
    Treinamento com ajuda da pronúncia Android text to speech <br/>\
    Ele funciona sem registro <br/>\
    </p><p>\
    + Envie suas mensagens entre os usuários na lingua que você está aprendendo e aprofundam o seu vocabulário mutuamente.</p>",
        is_not_translator: "Voc4u não é dicionário, Voc4u não e tradutor;-)",
        thank_for_download: "Obrigado pelo download e desejos exceto  muitas palavras aprendidas, e também que vai  konseguir tudo o que você toca.Ao seu lado tem so excelentes pessoas.Que vai realizar  tudo o que você deseja, tem cheio de amor e principalmente boa saúde.",
        want_to_learn_new_language:"Gostaria de aprender uma nova língua …",
        text3: "...Ou talvez apenas melhorar a linguagem que já sabe? Por que não aproveitar a aplicação Vocabulário Voc4u através do qual você pode praticar o vocabulário de uma forma divertida e direto em 33 linguas! O aplicativo contém mais de 40 lições e cada um deles são mais de 250  palavras e 100 imagens.",
        text4: "No primeiro arranque vai escolher a lingua em que você quiser praticar vocabulário e em seguida, sua língua nativa. É possível combinar livremente todos os idiomas disponíveis. A parte da aplicação e, por exemplo, Checo, Inglês, Alemão, Espanhol, Português, mas também menos comum árabe, grego ou mesmo hebraico e muitos mais. <span class='not_mistake_please'> mas verifique de que, você digitou ensino direito e lingua  nativa, ou vai vocabulário Voc4u e funcionalidade de voz text-to-speach repetir palavras  em sua lingua nativa, além disso a maioria dos jogos perdem o sentido.</span>",
        train_title: "Treinamento",
        train_text: "A parte mais importante Voc4u fica abaixo do botão Treina. Aqui para  você <b>palavras  são repetidas </b> e sua missão é dizer em voz alta <b>  tradução da palavra </b> na faixa azul (em cima) ou pelo menos em espírito. Se você falhar ou  não vai tiver certeza , use botão 'desconhecido'. Se você vai usar os botões  'conhecido' e 'desconhecido' correto, aplicação que a recompensa vai repetir mais palavras que você não sabe muito. É muito importante <b>repetir </b>as palavras marcadas em <b>vermelho </b>.\
        Isto é análogo a escrever palavras no papel e combiná-los com a diferença de que a ordem das palavras mudam dinamicamente dependendo como você sabe disso..</p>",
        dictionary_title : "Dicionário",
        dictionary_text : "Aplicação sabe muito mais depois de instalar a lição (que normalmente tem  de mais de 250palavras) É dividido <b> folha de treinamento </b> e <b> lista de espera </b>, isso é porque para não comesar treinar todas as palavras de  lição de vocabulário imediatamente, mas  muito lentamente. Dependendo de como  você age com o aprendizado do aplicativo automaticamente adiciona mais palavras. Em secção  dicionário, mas você pode mudar o comportamento,  também movimento das  palavras entre a formação ea lista de espera e vice-versa, ou eliminá-los completamente. Instalar e lição de desinstalação. Você mais aprecia a oportunidade de adicionar <b>suas próprias palavras. </b>",
        games_title : "Ensino de jogo",
        games_text : "Jan Amos Comenius disse,“ Peça da escola“, vamos  adoçar portanto a aprendizagem através da brincadeira.\
        Todos os três tipos de jogos que o vocabulário 'Voc4u' contém,são limitados no tempo.\
            No primeiro jogo <b> atribui </b> palavras para fotos, no segundo jogo você escolhe as palavras e no último jogo você vai completar as palavras que faltam. Depois de cada jogo que é jogado também on-line você pode comparar <b> escores </b> com outros jogadores. Cada jogo vai aumentar a global <b> reputação </b> global, que acompanha  você, em todo o aplicativo. E você pode escolher o nível de seus conhecimentos e praticar vocabulário,que corresponde os conhecimentos de você..",
        speaker_listener_title : "konferencista e ouvinte",
        speaker_listener_text : "Em parte 'ouvinte' as palavras são reproduzidas e você está tentando palavras traduzir, é particularmente útil em situações onde você não pode reagir ao que está acontecendo na tela, por exemplo  durante de condução. Aplicações pode faser a vice-versa, quando você diz uma palavra sobre o telefone e ele tenta discernir se pronuncia corretamente. </p>",
        chat_title : "Conversa",
        chat_text : "Entre extraordinária função  inclui a capacidade de conversar com outros usuários, o que também ajuda a melhorar o idioma.Simplismente você vai dar uma espécie de <b> anúncio </b>, em que outros usuários podem fazer login. Parte do anúncio é também a sua reputação (derivado de acordo com a pontuação em jogos),assegurando, que  você vai comunicar só com <b>  usuários em um nível semelhante </b>, assim como você. E você não vai se complicar as coisas com nível diferente.",
        text_to_speech_title: "Speech pronunciation",
        text_to_speech_text: 'For practise speech pronunciation in Voc4u Training and in Play  are the words speak in you learn language. It is by Google Android Text To <b>Speech engine</b>. For better quality of pronunciation try another third-party text to speech engine <a href="https://play.google.com/store/apps/details?id=com.ivona.tts.voicebeta.eng.gbr.amy">IVONA Voices</a> or <a href="https://play.google.com/store/apps/details?id=com.svox.classic">SVOX Engine</a> . You can install from your popular marketplace. They are contains several languages, mainly with different voices.',
        text5 : "Com aplicaçaõ Voc4u pode ser instrução intensiva da língua estrangeira divertido! :-)"
        ,message_sent : "Message send, thank you ;-)"
        ,your_email: "Your Email:"
        ,your_message : "Your Message: "
        ,let_me_know: 'Unfortunately the Voc4u for platform what you looking for is now middle of hard developing :-) But we will be pleased to let you know when is ready for you :-)'


    });

    $translateProvider.translations('france', {
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
        ,message_sent : "Message send, thank you ;-)"
        ,your_email: "Your Email:"
        ,your_message : "Your Message: "
        ,let_me_know: 'Unfortunately the Voc4u for platform what you looking for is now middle of hard developing :-) But we will be pleased to let you know when is ready for you :-)'


    });

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
