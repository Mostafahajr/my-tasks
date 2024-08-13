<?php 
function generalinput($input){
    $input = trim($input);
    $input = strip_tags($input);
    $input = stripslashes($input);
    return $input;
}

function checkEmail($input){
    return filter_var($input,FILTER_VALIDATE_EMAIL);
}
function checkPassword($input){
    $regPass = '/^[a-zA-Z0-9]{5,}$/';
    return preg_match($regPass,$input);
}

?>