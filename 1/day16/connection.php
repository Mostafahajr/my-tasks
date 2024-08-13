<?php 

    $host = "localhost";
    $dbtype = "mysql";
    $dbname = "company1";
    $username = "root";
    $password = "root";
    try {
        //code...
        $connect = new PDO("$dbtype:host=$host;dbname=$dbname",$username,$password);
    } catch (Exception $e) {
        //throw $th;
        
    }
    


?>