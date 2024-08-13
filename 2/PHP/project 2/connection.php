<?php

    $host = "localhost";
    $dbtype = "mysql";
    $dbname = "project_php";
    $username = "root";
    $password = "root";

    $connection = new PDO("$dbtype:host=$host;dbname=$dbname",$username,$password);


?>