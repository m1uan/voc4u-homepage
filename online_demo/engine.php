<?php
header('Content-type: text/json');
header('Content-type: application/json');
$default = array('error_text' => 'ok', 'error' => 0);
$FUNC = 'func' ;
$DE_CODE = 'de';
$EN_CODE = 'en' ;
$CZ_CODE = 'cz';
$PL_CODE = 'pl';
$FR_CODE = 'fr';
$IT_CODE = 'it';
$PT_CODE = 'pt';
$ES_CODE = 'es';
 
$LANGS = array(
		array('display' => 'Česky', 'code' => $CZ_CODE, 'flag' => '../images/flags/flag_cs.png'),
		array('display' => 'Portugal', 'code' => $PT_CODE, 'flag' => '../images/flags/flag_pt.png'),
		array('display' => 'France', 'code' => $FR_CODE, 'flag' => '../images/flags/flag_fr.png'),
		array('display' => 'German', 'code' => $DE_CODE, 'flag' => '../images/flags/flag_de.png'),
		array('display' => 'Italien', 'code' => $IT_CODE, 'flag' => '../images/flags/flag_it.png'),
		array('display' => 'Spanish', 'code' => $ES_CODE, 'flag' => '../images/flags/flag_es.png'),
		array('display' => 'English', 'code' => $EN_CODE, 'flag' => '../images/flags/flag_en.png'),
		array('display' => 'Poland', 'code' => $PL_CODE, 'flag' => '../images/flags/flag_pl.png')
		
);
 
 
$VOCABULARY = array (
		$DE_CODE => array(),
		$EN_CODE => array(),
		$CZ_CODE => array(),
		$PL_CODE => array(),
		$FR_CODE => array(),
		$PT_CODE => array(),
		$IT_CODE => array(),
		$ES_CODE => array(),
		$DE_CODE => array()
);
 
 
function showError($code, $message) {
	$default['error_text']  = $message;
	$default['error']  = $code;
	echo json_encode($default);
}

function getVocabulary($code){
	global $CZ_CODE, $DE_CODE, $PL_CODE, $FR_CODE, $EN_CODE, $PT_CODE, $IT_CODE, $ES_CODE;
	if($code == $CZ_CODE){
		require 'engine_lang/cz.php';

		return $CZECH;
	}
	else if($code == $DE_CODE){
		require 'engine_lang/de.php';

		return $GERMANY;
	}
	else if($code == $PT_CODE){
		require 'engine_lang/pt.php';
	
		return $PORTUGAL;
	}
	else if($code == $IT_CODE){
		require 'engine_lang/it.php';
	
		return $ITALY;
	}
	else if($code == $ES_CODE){
		require 'engine_lang/es.php';
	
		return $ESPANOL;
	}
	else if($code == $FR_CODE){
		require 'engine_lang/fr.php';

		return $FRANCE;
	}
	else if($code == $EN_CODE){
		require 'engine_lang/en.php';

		return $ENG;
	}
	else if($code == $PL_CODE){
		require 'engine_lang/pl.php';
		return $POLAND;
	}
	else {return array();
	}
}
 
function vocabulary($ln, $na) {
	global $VOCABULARY;
	if(!array_key_exists ($ln, $VOCABULARY)) {
		showError(-5, 'Learn code "'. $ln . '" is uknown.');
	} else if(!array_key_exists ($na, $VOCABULARY)) {
		showError(-5, 'Native code "'. $na . '" is uknown.');
	} else {



		$default['response'] = array('ln' => getVocabulary($ln), 'na' => getVocabulary($na));
		echo json_encode($default);
	}
}
 
//echo json_encode($default);
if(array_key_exists ($FUNC, $_GET)) {
	$func_type = $_GET[$FUNC];
	if($func_type == 'lang')
	{
		$default['response'] = array(
				'are_you' => 'What are you?',
				'what_you_want' => 'What do you want learn?',
				'langs' => $LANGS);
		echo json_encode($default);
	}
	else if($func_type == 'voc'){
		$LN_PARAM = 'ln';  // learn lang
		$NA_PARAM = 'na';  // native lang
		if(!array_key_exists ($LN_PARAM, $_GET)) {
			showError(-3, "Param learn lang missing \'".$LN_PARAM."\'");
		} else if(!array_key_exists ($NA_PARAM, $_GET)) {
			showError(-4, "Param native lang missing \'".$NA_PARAM."\'");
		} else {
			vocabulary($_GET[$LN_PARAM], $_GET[$NA_PARAM]);
		}
	}
	else {
		$default['error_text']  = 'function "'.$func_type.'" no defined.';
		$default['error']  = -1;
		echo json_encode($default);
	}
} // func no exists
else {
	$default['error_text']  = 'define function by parameter "'.$FUNC.'"';
	$default['error']  = -2;
	echo json_encode($default);
}
?>