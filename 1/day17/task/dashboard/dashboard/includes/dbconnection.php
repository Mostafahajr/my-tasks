<?php

$dbtype  ="mysql";
$dbname = "company1";
$host="localhost";
$username = "root";
$password = "root";

try {
    $connect = new PDO("$dbtype:host=$host;dbname=$dbname",$username,$password);
} catch (Exception $e) {
    //throw $th;
    echo "<h1>Error</h1>";
    exit();
}





?>