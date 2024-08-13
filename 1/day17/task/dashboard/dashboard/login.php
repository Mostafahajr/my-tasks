
<?php 
  session_start();
  include "./includes/dbconnection.php";
  include "./includes/validate.php";
  
  
if ($_POST) {
  # code...
  
  $email = generalinput($_POST["email"]);
  $password = generalinput($_POST["password"]);
  
 

  if (checkEmail($email) && checkPassword($password)) {
    # code...
    
    $quary = $connect->prepare("select * from users where email = '$email' and password='$password'");
    $quary->execute();
    $data = $quary->fetchAll(PDO::FETCH_ASSOC);

    if (isset($_POST["remember"])) {
      # code...
      setcookie("user_id",$data[0]["id"]);
    }
    
    if (!empty($data) && isset($data)) {
      # code...
      if ($data[0]["role"] == "admin") {
        # code...
        $_SESSION["id"] = $data[0]["id"];
        header("location: index.php");
      }
     
    }
  }
}
?>







<!DOCTYPE html>
<html dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="keywords"
      content="wrappixel, admin dashboard, html css dashboard, web dashboard, bootstrap 5 admin, bootstrap 5, css3 dashboard, bootstrap 5 dashboard, Matrix lite admin bootstrap 5 dashboard, frontend, responsive bootstrap 5 admin template, Matrix admin lite design, Matrix admin lite dashboard bootstrap 5 dashboard template"
    />
    <meta
      name="description"
      content="Matrix Admin Lite Free Version is powerful and clean admin dashboard template, inpired from Bootstrap Framework"
    />
    <meta name="robots" content="noindex,nofollow" />
    <title>Login</title>
    <!-- Favicon icon -->
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="assets/images/favicon.png"
    />
    <!-- Custom CSS -->
    <link href="assets/css/style.min.css" rel="stylesheet" />
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
      <style>
        body{
          background-color: lightgray;
        }
      </style>
  </head>

  <body>
            <form action="login.php" method="post" class="w-50 m-auto">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp">
                
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" name="remember" id="exampleCheck1">
                <label class="form-check-label"  for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
  </body>
</html>