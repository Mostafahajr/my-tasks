<?php 
require "./connection.php";

if ($_POST["regester"]) {
    # code...
    $name= $_POST["username"];
    $email=$_POST["userEmail"];
    $password=$_POST["userPassword"];

    // $quary = "select * from users where email = $email";
    // $sqlQuary = $connection->prepare($quary);
    // $sqlQuary->execute();

    // $getData = $sqlQuary->fetch(PDO::FETCH_ASSOC);

    // $insertData = "insert into users(name,email,password) values ($name,$email,$password)";
    // $sqlQuary = $connection->prepare($insertData);
    // var_dump($sqlQuary);
    // $sqlQuary->execute();


    
    
    
    
}


?>