

<?php 
  require "connection.php";
  session_start();
  $id = $_SESSION["id"];
  $quary ="select username from user where id = $id ";
  $sqlquary = $connection->prepare($quary);
  $sqlquary->execute();

  $username=$sqlquary->fetch(PDO::FETCH_ASSOC);



  // ----------------------------------------


  $quary ="select count(*) as users from user where role = 'user' ";
  $sqlquary = $connection->prepare($quary);
  $sqlquary->execute();

  $usersCount=$sqlquary->fetch(PDO::FETCH_ASSOC);
  
        
?>






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.1/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Document</title>
</head>
<body class="bg-light">
<nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="home.php">Home</a>
        <a class="nav-link" href="manage_users.php">Users</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>


    <div class="container-fluid p-3 bg-light  body_content">
      <div class="alert alert-light text-center fz-30px" role="alert">
       <h2>
         welcome ,<?php echo $username["username"] ?> 
       </h2>
      </div>

      <div class="container">
        
         
            <div class="row">
              <div class="col">user</div>
              <div class="col">product</div>
              <div class="col"></div>
              <div class="col"></div>
            </div>
         
       
        
      </div>
      
    </div>
 






    <script src="./assets/js/bootstrap.bundle.min.js"></script>
    <script src="./assets/js/sidebar.js"></script>
</body>
</html>