<?php
require "connection.php";
if ($_POST["login"]) {
    # code...
    $user= $_POST["user"];
    $password= $_POST["password"];

    $quary = "select * from user where email = '$user' and userpassword = '$password'";
    $sqlquary = $connection->prepare($quary);
   
    $sqlquary->execute();
    
    $getdata = $sqlquary->fetch(PDO::FETCH_ASSOC);

    

    if (!$getdata) {
        # code...
        header("location:index.php?message=user or password is wrong");
       
    }else{
        session_start();
        $_SESSION["id"]=$getdata["id"];
        header("location:home.php");
       
    }

}

?>