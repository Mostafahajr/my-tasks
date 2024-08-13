<?php
function general_validate($input){
    $input=trim($input);
    $input=strtolower($input);
    $input=strip_tags($input);
    $input=stripslashes($input);
    return $input;
}

function checkFullName($input){
    $regName='/^[a-z]{2,} [a-z]{2,}$/';
    return preg_match($regName,$input);
}

function validateEmail($email){
    return filter_var($email,FILTER_VALIDATE_EMAIL);
}

?>