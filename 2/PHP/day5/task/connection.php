<?php 

    $host = "localhost";
    $dbName = "project";
    $dbType = "mysql";
    $username = "root";
    $password = "root";

    $connection = new PDO("$dbType:host = $host;dbName=$dbName",$username,$password);



?>