<?php


    $host="localhost";
    $dbname="project";
    $dbType="mysql";
    $username="root";
    $password="root";

    $connection = new PDO("$dbType:host=$host;dbname=$dbname",$username,$password);

?>