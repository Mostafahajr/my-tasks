<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>register</title>
</head>
<body>
<h1 class="text-primary text-center m-5">Register</h1>
<?php 
 if(isset($_GET['message']))
 {
    echo "<p class='alert alert-danger m-5 text-center'>".$_GET["message"]. "</p>";
 }
?>
<div class=" w-50 m-auto">
<form action="server.php" method="post" class="m-auto" >
<input placeholder="userName" type="text" name="name" id="" class="form-control w-50 m-3 ">
<input placeholder="userEmail" type="email" name="email" id="" class="form-control w-50 m-3 ">
<input placeholder="userPassword" type="password" name="password" id="" class="form-control w-50 m-3 ">
<button type="submit" name="registerBtn" class="btn btn-primary">Register</button>
<a href="login.php">Login</a>
</form>
</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>