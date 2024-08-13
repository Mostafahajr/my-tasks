<?php
if($_SERVER['REQUEST_METHOD']=="POST"){
    // echo "<pre>";
    // var_dump($_POST);
    // echo "</pre>";
    $username=$_POST['username'];
    $city=$_POST['city'];
    $x="";
    if(isset($_POST['gender'])){
        if($_POST['gender']=='m'){
            $x='Mr.';
        }else{
            $x='Ms.';
        }
    } 
}else{
    echo "<h1>wrong page !!</h1>";
    exit();
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <h1>welcome <?php echo $x." ".$username ?></h1>
        <h2>review your info : </h2>
        <p>city : <?php echo $city ?></p>
        <p>skills : </p>
        <ol>
            <?php 
            if(isset($_POST['skills'])){
            foreach($_POST['skills'] as $skill){ ?>
            <li><?php echo $skill ?></li>
            <?php }} ?>
        </ol>
    </div>
</body>
</html>