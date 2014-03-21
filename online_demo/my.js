// Put your custom code here
RESPONSE = "response";
LANGS = "langs";
DISPLAY = "display"
VOCABULARY_LN = [ '1', '2', '3', '4' ]
VOCABULARY_NA = [ '1', '2', '3', '4' ]
var LAST_WORD_LIST = [];
var WRONG_WORD_LIST = [];
var MAX_LAST_LIST = 3;
LAST_RANDOM = -1;
TRUE_ANSWER = 0;
SCORE = 0;
var MISTAKE = 0;
var MAX_MISTAKE = 5;
var LAST_ANSWER_TRUE_OR_NOT = true;
var COUNT_TRUE_ANSWER = 0;
var TIME_FIRST_TRUE_ANSWER = -1;

var UNDEF = -100;

var SET_LN = 'en';
var SET_NA = 'de';

var SET_FLAG_LN = '../images/flags/flag_en.png';
var SET_FLAG_NA = '../images/flags/flag_cz.png';

var DEBUG = false;
var GAME_TIME = 60;
if(DEBUG){
	GAME_TIME = 60;
}

var PLAY_ROLLES = [
// priority is first is have more priority
{
	ta : UNDEF, // true answer on common without mistake
	points : 1, // add points
	time : 0,
	message : 'True answer!', // message for user
	maxPoints : -1, // how much points the user must have for apply (-1 :
					// disable)
	maxTime : -1, // how much time the user must have for apply (-1 : disable)
	durration : UNDEF
// time in millisecond between the true answer must be done
},{
	ta : 1, // true answer on common without mistake
	points : 0, // add points
	time : 0,
	message : 'True answer!', // message for user
	maxPoints : -1, // how much points the user must have for apply (-1 :
					// disable)
	maxTime : -1, // how much time the user must have for apply (-1 : disable)
	durration : UNDEF
// time in millisecond between the true answer must be done
}, {
	ta : 0, // true answer on common without mistake
	time : 0,
	points : -1, // add points
	message : 'Wrong answer!', // message for user
	maxPoints : -1, // how much points the user must have for apply (-1 :
					// disable)
	maxTime : -1, // how much time the user must have for apply (-1 : disable)
	durration : UNDEF
// time in millisecond between the true answer must be done
},{
	ta : -1, // true answer on common without mistake
	points : -1, // add points
	time : 5,
	message : 'Wrong answer! Extra bonus time! + 5s', // message for user
	maxPoints : 10, // how much points the user must have for apply (-1 :
					// disable)
	maxTime : 20, // how much time the user must have for apply (-1 : disable)
	durration : UNDEF
// time in millisecond between the true answer must be done
}, 
/*{
	ta : UNDEF, // true answer on common without mistake
	points : 3, // add points
	time : 0,
	message : 'Quick true answer extra points!', // message for
																// user
	maxPoints : -1, // how much points the user must have for apply (-1 :
					// disable)
	maxTime : -1, // how much time the user must have for apply (-1 : disable)
	durration : 2200
// time in millisecond between the true answer must be done
},{
	ta : UNDEF, // true answer on common without mistake
	points : 6, // add points
	time : 0,
	message : 'Fast answer extra points!', // message for
																// user
	maxPoints : -1, // how much points the user must have for apply (-1 :
					// disable)
	maxTime : -1, // how much time the user must have for apply (-1 : disable)
	durration : 1800
// time in millisecond between the true answer must be done
},{
	ta : UNDEF, // true answer on common without mistake
	points : 12, // add points
	time : 0,
	message : 'Super fast answer extra points!', // message for
																// user
	maxPoints : -1, // how much points the user must have for apply (-1 :
					// disable)
	maxTime : -1, // how much time the user must have for apply (-1 : disable)
	durration : 1500
// time in millisecond between the true answer must be done
},*/
{
	ta : 4, // true answer on common
	points : 20, // add points
	time : 0,
	message : 'Awesome! 3 true answer without mistake!', // message for user
	maxPoints : -1, // how much points the user must have for apply (-1 :
					// disable)
	maxTime : -1, // how much time the user must have for apply (-1 : disable)
	durration : UNDEF
// time in millisecond between the true answer must be done
}, {
	ta : 6, // true answer on common without mistake
	points : 30, // add points
	time : 0,
	message : 'Go in! 5 true answer without mistake!', // message for user
	maxPoints : -1, // how much points the user must have for apply (-1 :
					// disable)
	maxTime : -1, // how much time the user must have for apply (-1 : disable)
	durration : UNDEF
// time in millisecond between the true answer must be done
}, {
	ta : 11, // true answer on common without mistake
	points : 50, // add points
	time : 0,
	message : 'You are best! 10 true answer without mistake!', // message for
																// user
	maxPoints : -1, // how much points the user must have for apply (-1 :
					// disable)
	maxTime : -1, // how much time the user must have for apply (-1 : disable)
	durration : UNDEF
// time in millisecond between the true answer must be done
}, {
	ta : 21, // true answer on common without mistake
	points : 100, // add points
	time : 0,
	message : 'Slow down man! 20 true answer without mistake!', // message for
																// user
	maxPoints : -1, // how much points the user must have for apply (-1 :
					// disable)
	maxTime : -1, // how much time the user must have for apply (-1 : disable)
	durration : UNDEF
// time in millisecond between the true answer must be done
}, {
	ta : 41, // true answer on common without mistake
	points : 200, // add points
	time : 0,
	message : 'Absolutly imposible ! 30 true answer without mistake!', // message for
																// user
	maxPoints : -1, // how much points the user must have for apply (-1 :
					// disable)
	maxTime : -1, // how much time the user must have for apply (-1 : disable)
	durration : UNDEF
// time in millisecond between the true answer must be done
}];

var COUNT = 0;
var TIMER;

function putAnswer(index, trueAnsIndex, wordList) {
	btn = $('#word' + (index + 1));
	if (index == TRUE_ANSWER) {
		btn.html(wordList[trueAnsIndex]);
	} else {
		var random;
		var rword;
		do {
			random = Math.round(Math.random() * 1000) % wordList.length;
			rword = wordList[random];
		} while (trueAnsIndex == random || rword == '')
		
		if(DEBUG)
			btn.html('[' + rword + ']');
		else
			btn.html(rword);
	}
}


// add just words which isn't in WRONT_WORD_LIST
function addWrongList(wrong) {
	add = true;
	$.each(WRONG_WORD_LIST, function( index, item) {
		if(wrong == item) {
			add = false;
			return;
		}
	});
	
	if(add) {
		WRONG_WORD_LIST.push(wrong);
	}
}

function fillListByWordList(last_, wordlist){
	last_.html('');
	$.each(wordlist, function(index,item){
		text = '<div class="line">'
			 + '<div class="left"><img src="'
			+ SET_FLAG_LN
			+ '"/>'
			+ VOCABULARY_LN[item]
			+ '</div><div class="right">'
			+ VOCABULARY_NA[item]
			+'<img src="'
			+ SET_FLAG_NA
			+ '"/></div></div>';
		last_.append(text);
		// alert(item);
	});
}

function addToLastList(last) {
	nlist = LAST_WORD_LIST;
	LAST_WORD_LIST = [];
	LAST_WORD_LIST.push(last);
	if(nlist.length > 0) {
		for(i = 0; i != MAX_LAST_LIST && i != nlist.length; i++)
			LAST_WORD_LIST.push(nlist[i]);
	}
	// alert(LAST_WORD_LIST);
	
	last_ = $('#lastWords');
	//last_.animate({top:"+=100"},100, function(){
		fillListByWordList(last_, LAST_WORD_LIST);
		//last_.animate({top:'-=100'}, 1);
		
	//});
	//last_.animate({top: '+=100'}, 100, function {
		//fillListByWordList(last_, LAST_WORD_LIST);
		//last_.animate({top:'-=100'},1);
	//});
}


function isInLastList(index) {
	if(LAST_WORD_LIST.length > 0) {
		for(i = 0; i != LAST_WORD_LIST.length; i++)
			if(LAST_WORD_LIST[i] == index)
				return true;
	}
	return false;
}

function fullNextWord() {
	lw = $('#learn_word');
	fl = $('#learn_flag');
	V1 = [];
	V2 = [];
	btn1 = $('#word1');
	btn2 = $('#word2');
	btn3 = $('#word3');

	outgoing_time = 250;
	outgoing_time2 = 400;
	moveNumber = 600;
	moveLeft = {left : '-=' + moveNumber};
	moveRight = {left : '+=' + moveNumber};
	
	TIMER.pause();
	
	btn1.animate(moveLeft, outgoing_time);
	btn2.animate(moveRight, outgoing_time);
	btn3.animate(moveLeft, outgoing_time, function() {});
		// lw.css( "position","relative" );
			
	la = $('#learn_area');
	la.animate({top:"+=400", opacity:0.3},250, function(){
			
		var random;
		last_random = LAST_RANDOM;	
							
		var random2 = Math.round(Math.random() * 10) % 2;
		if (random2 == 1) {
			V1 = VOCABULARY_LN;
			V2 = VOCABULARY_NA;
			$('#learn_flag').attr('src', SET_FLAG_LN);
		} else {
			V1 = VOCABULARY_NA;
			V2 = VOCABULARY_LN;
			$('#learn_flag').attr('src', SET_FLAG_NA);
		}

		do {
			random = Math.round(Math.random() * 1000)
					% VOCABULARY_LN.length;
		} while (isInLastList(random) || V1[random] == ''
				|| V2[random] == '');
		LAST_RANDOM = random;

		var random3 = Math.round(Math.random() * 10) % 3;
		TRUE_ANSWER = random3;
		
		if(last_random != -1) {
			addToLastList(last_random)
		}
		
		
		
		la.animate({top:"-=400", opacity:1},1);
		lw.css("left", moveNumber+ "px");

		flag = $('#learn_flag');
		flag.css("left", "-"+moveNumber+"px");
	
		lw.html(V1[random]);
		putAnswer(0, random, V2);
		putAnswer(1, random, V2);
		putAnswer(2, random, V2);
		
		btn1.css('opacity', '1');
		btn2.css('opacity', '1');
		btn3.css('opacity', '1');
		
		btn1.animate(moveRight, outgoing_time);
		btn2.animate(moveLeft, outgoing_time);
		btn3.animate(moveRight, outgoing_time);
		TIMER.play();
		
		flag.animate( moveRight, outgoing_time2, function() {
			// Animation complete.
		});

		lw.animate(moveLeft, outgoing_time2, function() {
			//$('#score').html(SCORE);
		});
		
		if(!DEBUG) {
			$('#debug').hide();
		}

	});
		
}

function conclusion() {
	$.mobile.changePage("#page3", {
		transition : "slideup"
	});
	$('#conclusion_score').html(SCORE);
	fillListByWordList($('#wrongList'), WRONG_WORD_LIST);

}

function addScore(add, message) {
	SCORE += add;
	if (SCORE < 0) {
		SCORE = 0;
	}

	score_plus = $('#score_plus');
	extra_score = $('#extra_score_area');

	if (add > 0) {
		score_plus.css('color', 'DarkGreen');
		extra_score.css('color', 'DarkGreen');
		add_text = " + " + add;
	} else {
		score_plus.css('color', 'DarkRed');
		extra_score.css('color', 'DarkRed');
		add_text = " - " + Math.abs(add);
	}

	if (add != 0) {
		score_plus.html(add_text);
		score_plus.fadeIn('slow', function() {
			$('#score').html(SCORE);
			score_plus.fadeOut(function() {

			});
		});
	}

	if (message != '') {
		extra_score.html(message);
		extra_score.fadeIn('slow', function() {

			extra_score.fadeOut(1000, function() {

			});
		});
	}

}



function doAnswer(button, answer){
	
	debug = '';
	count_true = 0;
	
	var datetime = new Date();
	timeMilis = datetime.getTime();
	last_answer_true_or_not = TIME_FIRST_TRUE_ANSWER;
	
	if(answer == TRUE_ANSWER) {
		COUNT_TRUE_ANSWER++;
		count_true = COUNT_TRUE_ANSWER;
		LAST_ANSWER_TRUE_OR_NOT = true;
		debug += ' r' + count_true;
		
		fullNextWord();
		TIME_FIRST_TRUE_ANSWER = timeMilis;
		
	} else {
		COUNT_TRUE_ANSWER = 0;
		count_true = LAST_ANSWER_TRUE_OR_NOT ? 0 : -1;
		LAST_ANSWER_TRUE_OR_NOT = false;
		debug += ' a' + count_true;
		
		MISTAKE += 1;
		addWrongList(LAST_RANDOM);
		
		button.animate({
			opacity : 0
		}, 200);
		
		TIME_FIRST_TRUE_ANSWER = -1;
	}
	
	//alert(PLAY_ROLLES.length);
	for(i = PLAY_ROLLES.length -1; i >= 0; i--) {
		
		/*ta : 0, // true answer on common without mistake
		time : 0,
		points : 0, // add points
		message : 'Wrong answer!', // message for user
		maxPoints : -1, // how much points the user must have for apply (-1 :
						// disable)
		maxTime : -1, // how much time the user must have for apply (-1 : disable)
		durration : -1*/
		ruls = PLAY_ROLLES[i];
		
		//alert(i);
		debug += ' [' + ruls.ta + ',';
		
//		debug = 'now:'+timeMilis + ' ; first_true_answer:' 
//		+ TIME_FIRST_TRUE_ANSWER + ' split:' + (lastTime);
//		$('#debug').html(debug);
	
		lastTime = timeMilis - last_answer_true_or_not;
		if((ruls.ta == count_true || ruls.ta == UNDEF) &&
				((last_answer_true_or_not != -1 && ruls.durration > lastTime) || ruls.durration == UNDEF)){
			
			message = ruls.message;
			debug = 'now:'+timeMilis + ' ; first_true_answer:' 
				+ TIME_FIRST_TRUE_ANSWER + ' split:' + (lastTime);
			$('#debug').html(debug);
			addScore(ruls.points,  message);
			//alert(i + '-'+count_true);
			if(ruls.time != 0) {
				COUNT += ruls.time;
			}
			
			break;
		}
		
		
		
		
			
		
	}
}

function doAnswer1(button, answer) {
	
	
	
	
	if (answer != TRUE_ANSWER) {
		// button.fadeOut('slow');

		button.animate({
			opacity : 0
		}, 200);

		if (LAST_ANSWER_TRUE_OR_NOT == false && SCORE > 1) {
			addScore(-2, 'Bat answer two times! -2 points +10 second!');
		} else if (SCORE > 0) {
			LAST_ANSWER_TRUE_OR_NOT = false;
			addScore(-1, 'Bat answer! -1 points!');
		} else {
			LAST_ANSWER_TRUE_OR_NOT = false;
			addScore(-1, 'Bat answer!');
		}

		MISTAKE += 1;
		addWrongList(LAST_RANDOM);
		// if (MISTAKE >= MAX_MISTAKE) {
		// conclusion();
		// }
	} else {

		// if was last answer but, not add points
		if (LAST_ANSWER_TRUE_OR_NOT == true) {
			addScore(1, 'True answer!');
		} else {
			LAST_ANSWER_TRUE_OR_NOT = true;
		}

		fullNextWord();
	}
}

function doInitGame() {
	$.mobile.changePage("#page2", {
		transition : "slideup"
	});
	SCORE = 0;
	MISTAKE = 0;

	LAST_ANSWER_TRUE_OR_NOT = true;
	COUNT_TRUE_ANSWER = 1;
	COUNT_TRUE_ANSWER_IN_3SECOND = 0;
	TIME_FIRST_TRUE_ANSWER = -1;
	
	COUNT = GAME_TIME;
	$('#count').html(COUNT);
	$('#extra_score_area').html('');
	TIMER.reset();
	TIMER.play();
	
	fullNextWord();
}

function doInitVocabulary(data) {
	VOCABULARY_LN = data[RESPONSE]["ln"];
	VOCABULARY_NA = data[RESPONSE]["na"];

	$.mobile.loading('hide');

	btn1 = $('#word1');
	btn1.click(function() {
		doAnswer($(this), 0);
	});
	btn2 = $('#word2');
	btn2.click(function() {
		doAnswer($(this), 1);
	});
	btn3 = $('#word3');
	btn3.click(function() {
		doAnswer($(this), 2);
	});
	$('#btn_try_again').click(function() {
		doInitGame();
	});

	doInitGame();
}

function initVocabulary() {
	$.mobile.loading('show');

	var lang = (function() {
		var json = null;
		$.ajax({
			'async' : false,
			'global' : false,
			'url' : 'engine.php?func=voc&ln=' + SET_LN + '&na=' + SET_NA,
			'dataType' : "json",
			'success' : function(data) {

				doInitVocabulary(data)
			}
		});
		return json;
	})();

}
function setupLanguagesToList(quest, languages, func) {
	$.mobile.changePage("#page1");

	list = $('#langList');
	list.html('');

	list.append('<li data-role="list-divider" role="heading" id="select_i_am">'
			+ quest + '</li>');

	$.each(languages, function(index, value) {
		id_button = index + '_button_page';
		text = '<li data-theme="d" class="button_page"><a href="#" id="'
				+ id_button + '">' + '<img src= "' + value["flag"] + '" />'
				+ '<div class="langName">' + value[DISPLAY] + '</div>';
		+'</a></li>';

		list.append(text)

		$('#' + id_button).click(function() {
			id_local = $(this).attr('id');

			aid = id_local.split("_");

			func(index);

			// initVocabulary(id_local);
		});

		// alert(index + ': ' + value[DISPLAY]);
	});
	list.listview('refresh');

}

function initLangList(json) {
	$.mobile.loading('hide');
	if (json['error'] != 0) {
		$('#popupErrorNetworkMessage').html(
				'server response: ' + lang['error_text'])
		$('#popupErrorNetwork').popup("open");
	} else {
		langList = json[RESPONSE][LANGS];
		setupLanguagesToList('Are you speaking?', langList, function(selected) {

			nlist = [];
			for (i = 0; i < langList.length; i++) {
				lang = langList[i];
				if (i != selected) {
					nlist.push(lang);
				}
			}
			// alert(nlist);
			// initVocabulary(selected);

			SET_NA = langList[selected]['code'];
			SET_FLAG_NA = langList[selected]['flag'];

			// alert(SET_NA + SET_FLAG_NA);

			setupLanguagesToList('What do you want practise?', nlist, function(
					selected2) {
				SET_LN = nlist[selected2]['code'];
				SET_FLAG_LN = nlist[selected2]['flag'];
				// alert(SET_LN + SET_FLAG_LN);

				initVocabulary();

			});

		});

	}
}

function initLang() {

	$.mobile.loading('show');

	var lang = (function() {
		var json = null;
		$.ajax({
			'async' : false,
			'global' : false,
			'url' : 'engine.php?func=lang',
			'dataType' : "json",
			'success' : function(data) {
				initLangList(data)
			}
		});
		return json;
	})();

}




$.mobile.loadingMessageTextVisible = true;
$(document).ready(function() {
	initLang();
});

COUNT = GAME_TIME;
TIMER = $.timer(
		function() {
			COUNT--;
			$('#count').html(COUNT);
			if(COUNT < 1){
				TIMER.pause();
				conclusion();
			}
		},
		1000,
		true
	);	
TIMER.pause();