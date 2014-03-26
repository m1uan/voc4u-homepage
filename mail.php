<?php

$from = $_POST["from"]; // sender
$subject = 'voc4u question';
$message = $_POST["message"];
// message lines should not exceed 70 characters (PHP rule), so wrap it
$message = wordwrap($message, 70);
// send mail
mail("milan.medlik@gmail.com",$subject,$message,"From: $from\n");

echo "Thank you, your message was send to milan.medlik@gmail.com, have a nice day :-)";