<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Login</title>
</head>
<body>
<?php 
if(isset($_GET['message']))
{
    echo "<p class='alert alert-warning'>". $_GET['message']."</p>";
}
?>
<h1 class="text-primary text-center m-5">Login</h1>
<div class=" w-50 m-auto">
<form action="server.php" method="post" class="m-auto" >
<input placeholder="userEmail" type="email" name="email" id="" class="form-control w-50 m-3 ">
<input placeholder="userPassword" type="password" name="password" id="" class="form-control w-50 m-3 ">
<button type="submit" name="loginBtn" class="btn btn-primary">Login</button>
<a href="register.php">Create account ..</a>
</form>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>