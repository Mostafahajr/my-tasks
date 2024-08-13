<?php


   

    // echo "<pre>";
    // print_r($_SERVER);
    // echo "</pre>";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        # code...
        $name = $_POST["username"];
        $email = $_POST["email"];
        $password = $_POST["password"];



       $target_dir = "upload/";
       if (!is_dir($target_dir)) {
        # code...
        mkdir($target_dir,0777,true);
       }
       $target_file = $target_dir . basename($_FILES["image"]["name"]);
       move_uploaded_file($_FILES["image"]["tmp_name"],$target_file);
       
       
       $users = [];
       $filename = "data.json";
       if (!file_exists($filename)) {
        # code...
        $handle = fopen($filename,"a+");
        $users = json_decode(file_get_contents($filename));

       }else{
        $users = json_decode(file_get_contents($filename));
       }

       

       $users[]=[
        "name"=>$name,
        "email"=>$email,
        "password"=>$password,
        "image"=>$target_file
       ];


       file_put_contents($filename,json_encode($users));


       header("Location: display.php");
       exit();

       


    }

    
   
    


?>