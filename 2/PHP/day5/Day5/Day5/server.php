<?php 
// print_r($_POST);

require('./connection.php');

if(isset($_POST["registerBtn"]))
{
    $name=$_POST["name"];
    $email=$_POST["email"];
    $password=$_POST["password"];
/** validation inputs */
/*** Pattern password */
$pattern='/^[0-9]{3,8}$/';
 if(!preg_match($pattern,$password)) 
 {
    header("location:register.php?message=your password should be between 3 and 8 characters");
    exit;

 }
 /** pattern name */
$patternName='/^[a-zA-Z ]{3,}$/';
 if(!preg_match($patternName,$name)) 
 {
    header("location:register.php?message=your name must be more than  3  characters");
    exit;

 }
/** Pattern email */
 if(!filter_var($email,FILTER_VALIDATE_EMAIL)) 
 {
    header("location:register.php?message=Write correct Email");
    exit;

 }


    $hashPassword=md5($password);


    /** check email already exist or not */
    $checkEmail="select * from users where email='$email'";
    $sqlCheckEmail=$connection->prepare($checkEmail);
    $sqlCheckEmail->execute();
    $result=$sqlCheckEmail->fetch(PDO::FETCH_ASSOC); // null , data
    if($result)
    {
        header("location:register.php?message=this email alrady exist choose another email");
        exit;
    }else{

        $query="insert into users (name,email,password) values('$name','$email','$hashPassword')";
        // print_r($query);
        $sqlQuery=$connection->prepare($query);
        $sqlQuery->execute();
    }

// }
}


if(isset($_POST['loginBtn']))
{

$email=$_POST['email'];
$password=$_POST['password'];
$hashPassword=md5($password);
$query="select * from users where email='$email' and password='$hashPassword'";


$sqlQuery=$connection->prepare($query);
$sqlQuery->execute();
$exitUser=$sqlQuery->fetch(PDO::FETCH_ASSOC);

if($exitUser)
{
  
    $queryName="select name from users where email='$email' and password='$hashPassword'";
    $sqlName = $connection->prepare($queryName);
    $sqlName->execute();
    $name = $sqlName->fetch(PDO::FETCH_ASSOC);
    session_start();
    $_SESSION["name"] = $name["name"];
    $_SESSION["email"]= $email;
    header("location:profile.php");
    exit;
}else{
   header("location:login.php?message=userName or email doesn't exist check your data");
   exit;
}



}

?>