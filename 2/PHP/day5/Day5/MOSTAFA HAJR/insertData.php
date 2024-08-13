<?php 
require('./connection.php');

$query="insert into users (name,email,password) values('nada','nada@gmail.com','12345')";
$sqlQuery=$connection->prepare($query);
$sqlQuery->execute();

?>