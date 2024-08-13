<?php  

$host="localhost";
   $dbName="project";
   $dbType="mysql";
   $userName="root";
   $password="root";

   $connection=new PDO("$dbType:host=$host;dbname=$dbName",$userName,$password);
?>