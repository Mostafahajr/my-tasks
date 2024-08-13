<?php
function generalinput($input){
    $input = trim($input);
    $input = strip_tags($input);
    $input = stripslashes($input);
    return $input;
}

function checkInt($input){
    return is_int($input);
}

function checkFullName($input){
    $regName='/^[a-z]{2,} [a-z]{2,}$/';
    return preg_match($regName,$input);
}
function checkEmail($input){
    return filter_var($input,FILTER_VALIDATE_EMAIL);
}
function checkPassword($input){
    $regPass = '/^[a-zA-Z0-9]{8,}$/';
    return preg_match($regPass,$input);
}
?>