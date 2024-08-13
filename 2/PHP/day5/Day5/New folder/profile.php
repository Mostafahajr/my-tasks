<?php 
require "connection.php"


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h2>
        profile
        <?php

        session_start();
        if ($_SESSION["id"]) {
            # code...
           
            $id = $_SESSION["id"];
            $quary ="select * from users where id = $id ";
            
            $sqlquary = $connection->prepare($quary);
            $sqlquary->execute();
            $getData = $sqlquary->fetch(PDO::FETCH_ASSOC);

            $name = $getData["name"];
            $email = $getData["email"];


            echo "welcome ,$name";
            echo "your email is $email";
        }
       

        ?>
    </h2>
</body>
</html>