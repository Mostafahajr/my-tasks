<?php 

    require "connection.php";

    if ($_POST["regestration"]) {
        # code...
        $name = $_POST["username"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $confirm = $_POST["confirm"];


        $quary = "select * from users where  name = '$name'";
        $sqlquary = $connection->prepare($quary);
        $sqlquary->execute();
        $getData=$sqlquary->fetch(PDO::FETCH_ASSOC);
       


        if (!$getData) {
            # code...
            $quary ="insert into users (name,email,password) values ('$name','$email','$password')" ;
            
            $sqlquary = $connection->prepare($quary);
            $sqlquary->execute();

            $quary = "select id from users where  name = '$name'";
            $sqlquary = $connection->prepare($quary);
            $sqlquary->execute();
            $getData=$sqlquary->fetch(PDO::FETCH_ASSOC);

            session_start();
            $_SESSION["id"] = $getData["id"];
            header("location:profile.php");

            print_r($_SESSION["id"]);
        }else{
            header("location:index.php?message=user is exist");
        }
        


    }

?>